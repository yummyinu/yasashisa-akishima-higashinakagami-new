import { Fragment } from "react";
import { loadDefaultJapaneseParser } from "budoux";

const parser = loadDefaultJapaneseParser();

/**
 * Wraps Japanese text so it only wraps at phrase boundaries (budoux),
 * not mid-word — needed because `word-break: auto-phrase` is Chromium-only
 * and Safari has no equivalent.
 */
export function Ja({ children }: { children: string }) {
  const chunks = parser.parse(children);
  return (
    <span style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
      {chunks.map((chunk, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {chunk}
        </Fragment>
      ))}
    </span>
  );
}
