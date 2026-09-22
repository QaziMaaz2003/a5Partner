export default function SectionLabel({
  num,
  children,
}: {
  num: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{num}</span>
      <span>{children}</span>
    </div>
  );
}
