type Stat = { value: string; label: string };

export default function StatBand({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="stat-band" data-reveal>
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
