type FaqItem = { q: string; a: string };

/**
 * Native <details> accordion — keyboard accessible and works without JS,
 * so the page can stay a server component.
 */
export default function Faq({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={item.q} className="faq-item" data-reveal>
          <summary>
            <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="faq-q">{item.q}</span>
            <span className="faq-sign" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="faq-answer">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
