type Feature = { name: string; body: string };

export default function FeatureGrid({ items }: { items: readonly Feature[] }) {
  return (
    <div className="feature-grid">
      {items.map((item, i) => (
        <article key={item.name} data-reveal>
          <span className="eyebrow" style={{ color: "var(--cobalt)" }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3>{item.name}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
