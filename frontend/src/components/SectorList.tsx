type Sector = { name: string; body: string };

export default function SectorList({ items }: { items: readonly Sector[] }) {
  return (
    <div className="sector-list">
      {items.map((item, i) => (
        <article key={item.name} data-reveal>
          <span className="sector-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{item.name}</h3>
          <p>{item.body}</p>
          <span className="sector-arrow" aria-hidden="true">
            ↗
          </span>
        </article>
      ))}
    </div>
  );
}
