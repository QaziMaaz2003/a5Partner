export default function SignalStrip({ items }: { items: readonly string[] }) {
  // The track is duplicated so the -50% marquee translation loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="signal-strip" aria-hidden="true">
      <div className="signal-track">
        {loop.map((item, i) => (
          <span key={i}>
            {item}
            <span style={{ paddingLeft: 28, opacity: 0.5 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
