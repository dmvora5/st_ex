export type FeatureIconName =
  | "earn"
  | "ads"
  | "monetize"
  | "protect"
  | "manager";

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
    case "ads":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.3" aria-hidden>
          <path d="M4 18v-4l6-6 4 4 6-6v8" />
          <path d="M4 18h16" />
        </svg>
      );
    case "monetize":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.3" aria-hidden>
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "protect":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.3" aria-hidden>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "manager":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.3" aria-hidden>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c0-3.3 2.7-6 7-6s7 2.7 7 6" />
        </svg>
      );
    default:
      return null;
  }
}
