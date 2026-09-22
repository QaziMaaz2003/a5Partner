type Step = { name: string; body: string };

export default function ProcessList({ steps }: { steps: readonly Step[] }) {
  // Column count lives in a data attribute rather than an inline style, so the
  // responsive media queries in globals.css can still override it.
  return (
    <ol className="process-list" data-cols={steps.length}>
      {steps.map((step, i) => (
        <li key={step.name} data-reveal>
          <span className="eyebrow" style={{ color: "var(--cobalt)" }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3>{step.name}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
