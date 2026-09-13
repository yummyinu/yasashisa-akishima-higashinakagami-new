"use client";

import { useId, useState } from "react";
import { Ja } from "@/components/Ja";

export function FAQAccordion({ items }: { items: ReadonlyArray<{ q: string; a: string }> }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list faq-page">
      {items.map((item, index) => {
        const open = openIndex === index;
        const answerId = `${baseId}-answer-${index}`;
        return (
          <article className={`faq-item ${open ? "is-open" : ""}`} key={item.q}>
            <h2>
              <button type="button" aria-expanded={open} aria-controls={answerId} onClick={() => setOpenIndex(open ? null : index)}>
                <span><Ja>{item.q}</Ja></span><span className="faq-toggle" aria-hidden="true">＋</span>
              </button>
            </h2>
            <div id={answerId} className="faq-answer" hidden={!open}><p><Ja>{item.a}</Ja></p></div>
          </article>
        );
      })}
    </div>
  );
}
