import SectionLabel from "./SectionLabel";
import type { LegalBlock } from "@/content/legal";

export default function LegalPage({
  kicker,
  title,
  blocks,
}: {
  kicker: string;
  title: string;
  blocks: LegalBlock[];
}) {
  return (
    <>
      <section
        className="section-pad"
        style={{
          background: "var(--ink)",
          color: "var(--paper-bright)",
          paddingTop: "clamp(150px, 20vh, 200px)",
          paddingBottom: "clamp(60px, 7vw, 90px)",
        }}
      >
        <SectionLabel num="—">{kicker}</SectionLabel>
        <h1 style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.95 }}>{title}</h1>
      </section>

      <section className="section-pad" style={{ background: "var(--paper-bright)" }}>
        <div className="prose-legal">
          {blocks.map((block, i) => {
            switch (block.type) {
              case "h2":
                return <h2 key={i}>{block.text}</h2>;
              case "h3":
                return <h3 key={i}>{block.text}</h3>;
              case "ul":
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              case "addr":
                return (
                  <address
                    key={i}
                    style={{
                      fontStyle: "normal",
                      lineHeight: 1.85,
                      color: "var(--muted-foreground)",
                      fontSize: 16,
                    }}
                  >
                    {block.lines.map((line, j) => (
                      <span key={j} style={{ display: "block" }}>
                        {line}
                      </span>
                    ))}
                  </address>
                );
              default:
                return <p key={i}>{block.text}</p>;
            }
          })}
        </div>
      </section>
    </>
  );
}
