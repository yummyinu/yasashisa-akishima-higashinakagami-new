param(
  [string]$BaseUrl = "http://127.0.0.1:3010",
  [int[]]$Widths = @(320, 360, 375, 390, 430, 768, 820, 1024, 1280, 1440, 1920)
)

$ErrorActionPreference = "Stop"
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$profilePath = Join-Path $env:TEMP ("yasashisa-responsive-audit-" + [Guid]::NewGuid().ToString("N"))
$resolvedTemp = [IO.Path]::GetFullPath($env:TEMP).TrimEnd('\') + '\'
$resolvedProfile = [IO.Path]::GetFullPath($profilePath)
$debugPort = 9227
$routes = @("/", "/first", "/treatment", "/gallery", "/faq", "/access", "/recruit", "/news", "/privacy")

if (-not (Test-Path -LiteralPath $chromePath)) { throw "Google Chrome was not found." }
if (-not $resolvedProfile.StartsWith($resolvedTemp, [StringComparison]::OrdinalIgnoreCase)) { throw "Unsafe Chrome profile path." }

$chrome = Start-Process -FilePath $chromePath -ArgumentList @(
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--remote-debugging-port=$debugPort",
  "--user-data-dir=$profilePath",
  "about:blank"
) -WindowStyle Hidden -PassThru

try {
  $endpoint = $null
  for ($attempt = 0; $attempt -lt 20 -and -not $endpoint; $attempt++) {
    Start-Sleep -Milliseconds 250
    try {
      $targets = Invoke-RestMethod "http://127.0.0.1:$debugPort/json"
      $pageTarget = $targets | Where-Object { $_.type -eq "page" } | Select-Object -First 1
      $endpoint = $pageTarget.webSocketDebuggerUrl
    } catch { }
  }
  if (-not $endpoint) { throw "Chrome debugging endpoint was unavailable." }

  $socket = [System.Net.WebSockets.ClientWebSocket]::new()
  $token = [System.Threading.CancellationToken]::None
  $null = $socket.ConnectAsync([Uri]$endpoint, $token).GetAwaiter().GetResult()
  $messageId = 0

  function Send-CdpCommand([string]$Method, [hashtable]$Params = @{}) {
    $script:messageId++
    $payload = @{ id = $script:messageId; method = $Method; params = $Params } | ConvertTo-Json -Depth 20 -Compress
    $bytes = [Text.Encoding]::UTF8.GetBytes($payload)
    $null = $socket.SendAsync([ArraySegment[byte]]::new($bytes), [System.Net.WebSockets.WebSocketMessageType]::Text, $true, $token).GetAwaiter().GetResult()
    while ($true) {
      $stream = [IO.MemoryStream]::new()
      do {
        $buffer = [byte[]]::new(65536)
        $result = $socket.ReceiveAsync([ArraySegment[byte]]::new($buffer), $token).GetAwaiter().GetResult()
        $stream.Write($buffer, 0, $result.Count)
      } until ($result.EndOfMessage)
      $response = [Text.Encoding]::UTF8.GetString($stream.ToArray()) | ConvertFrom-Json
      if ($response.id -eq $script:messageId) { return $response }
    }
  }

  Send-CdpCommand "Page.enable" | Out-Null
  Send-CdpCommand "Runtime.enable" | Out-Null
  $failures = [Collections.Generic.List[object]]::new()
  $checks = 0

  foreach ($width in $Widths) {
    Send-CdpCommand "Emulation.setDeviceMetricsOverride" @{ width = $width; height = 900; deviceScaleFactor = 1; mobile = $false } | Out-Null
    foreach ($route in $routes) {
      $navigationResponse = Send-CdpCommand "Page.navigate" @{ url = "${BaseUrl}${route}" }
      if ($navigationResponse.error) { throw "Navigation failed: $($navigationResponse.error.message)" }
      if ($navigationResponse.result.errorText) { throw "Navigation failed: $($navigationResponse.result.errorText)" }
      $ready = $false
      $readyResponse = $null
      for ($attempt = 0; $attempt -lt 30 -and -not $ready; $attempt++) {
        Start-Sleep -Milliseconds 100
        $readyResponse = Send-CdpCommand "Runtime.evaluate" @{ expression = "document.readyState === 'complete'"; returnByValue = $true }
        $ready = [bool]$readyResponse.result.result.value
      }
      if (-not $ready) { throw "Page did not become ready: $route at ${width}px ($($readyResponse | ConvertTo-Json -Depth 8 -Compress))" }
      $expression = @'
JSON.stringify((() => {
  const root = document.documentElement;
  const viewportWidth = root.clientWidth;
  const overflow = Array.from(document.querySelectorAll('body *')).filter((element) => {
    const style = getComputedStyle(element);
    if (style.position === 'fixed' || style.display === 'none') return false;
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && (rect.right > viewportWidth + 1 || rect.left < -1);
  }).slice(0, 8).map((element) => ({ tag: element.tagName, className: String(element.className).slice(0, 80), text: (element.textContent || '').trim().slice(0, 60), right: Math.round(element.getBoundingClientRect().right) }));
  const smallTargets = Array.from(document.querySelectorAll('main p, main li, main dd')).filter((element) => parseFloat(getComputedStyle(element).fontSize) < 14);
  const smallControls = Array.from(document.querySelectorAll('a, button')).filter((element) => {
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44);
  }).slice(0, 8).map((element) => ({ tag: element.tagName, text: (element.textContent || '').trim().slice(0, 40), width: Math.round(element.getBoundingClientRect().width), height: Math.round(element.getBoundingClientRect().height) }));
  return {
    url: location.href,
    title: document.title,
    h1Count: document.querySelectorAll('h1').length,
    documentOverflow: root.scrollWidth > viewportWidth + 1,
    overflow,
    smallTextCount: smallTargets.length,
    smallControls,
    brokenImages: Array.from(document.images).filter((image) => image.complete && image.naturalWidth === 0).length,
  };
})())
'@
      $response = Send-CdpCommand "Runtime.evaluate" @{ expression = $expression; returnByValue = $true }
      $audit = $response.result.result.value | ConvertFrom-Json
      $checks++
      if ($audit.h1Count -ne 1 -or $audit.documentOverflow -or $audit.overflow.Count -gt 0 -or $audit.brokenImages -gt 0 -or $audit.smallControls.Count -gt 0) {
        $failures.Add([pscustomobject]@{ width = $width; route = $route; audit = $audit })
      }
    }
  }

  [pscustomobject]@{ checks = $checks; failures = $failures } | ConvertTo-Json -Depth 20
  $socket.Dispose()
} finally {
  if ($chrome -and -not $chrome.HasExited) {
    Stop-Process -Id $chrome.Id -Force
    $chrome.WaitForExit(5000) | Out-Null
  }
  Start-Sleep -Milliseconds 300
  if (Test-Path -LiteralPath $resolvedProfile) {
    try { Remove-Item -LiteralPath $resolvedProfile -Recurse -Force -ErrorAction Stop } catch { Write-Warning "Temporary Chrome profile could not be fully removed." }
  }
}
