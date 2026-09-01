export type FeatureIconName = "earn" | "safety" | "support" | "protect";

export function FeatureIcon({ name }: { name: FeatureIconName }) {
  const stroke = "var(--exclusio-blue)";

  switch (name) {
    case "earn":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.3" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.2c0 3 6 1.5 6 4.3 0 1.3-1.3 2.5-3 2.5s-3-1.1-3-2.5" />
        </svg>
      );
    case "safety":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.3" aria-hidden>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.3" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "protect":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.3" aria-hidden>
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 018 0v3" />
        </svg>
      );
    default:
      return null;
  }
}
