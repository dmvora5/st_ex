export function HeroMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <line
        x1="30"
        y1="30"
        x2="170"
        y2="170"
        stroke="var(--exclusio-blue)"
        strokeWidth="0.6"
        opacity="0.6"
      />
      <line
        x1="170"
        y1="30"
        x2="30"
        y2="170"
        stroke="var(--exclusio-pink)"
        strokeWidth="0.6"
        opacity="0.6"
      />
    </svg>
  );
}
