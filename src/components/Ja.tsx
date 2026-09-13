import { Fragment } from "react";
import { loadDefaultJapaneseParser } from "budoux";

const parser = loadDefaultJapaneseParser();

/**
 * Wraps Japanese text so it only wraps at phrase boundaries (budoux),
 * not mid-word — needed because `word-break: auto-phrase` is Chromium-only
 * and Safari has no equivalent.
 */
// Inline styles beat any selector in globals.css (short of !important), so this
// span can never be hijacked by an ancestor's generic `X span { ... }` rule
// (e.g. `.concern-list span`, `.steps span`) meant for an unrelated icon/counter span.
const resetStyle = {
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  display: "inline",
  color: "inherit",
  font: "inherit",
  background: "none",
  border: 0,
  margin: 0,
  padding: 0,
  width: "auto",
  height: "auto",
} as const;

export function Ja({ children }: { children: string }) {
  const chunks = parser.parse(children);
  return (
    <span style={resetStyle}>
      {chunks.map((chunk, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {chunk}
        </Fragment>
      ))}
    </span>
  );
}
