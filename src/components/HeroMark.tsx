/**
 * Exclusio X mark — each wing uses its own blue→pink gradient (matches auth landing).
 */
export function HeroMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="125 0 140 137"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="hero-x-left"
          x1="125"
          y1="6"
          x2="206"
          y2="137"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#97c7e2" />
          <stop offset="100%" stopColor="#f4bdd3" />
        </linearGradient>
        <linearGradient
          id="hero-x-top"
          x1="200"
          y1="0"
          x2="263"
          y2="62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#97c7e2" />
          <stop offset="100%" stopColor="#f4bdd3" />
        </linearGradient>
        <linearGradient
          id="hero-x-bottom"
          x1="201"
          y1="77"
          x2="263"
          y2="136"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#97c7e2" />
          <stop offset="100%" stopColor="#f4bdd3" />
        </linearGradient>
      </defs>
      <path
        d="M205.78 70.1774L125.352 6.87988V27.0388L180.599 70.1774L125.352 114.21V136.846L205.78 70.1774Z"
        fill="url(#hero-x-left)"
      />
      <path
        d="M262.954 22.7045V0L200.482 51.4636L213.555 61.9215L262.954 22.7045Z"
        fill="url(#hero-x-top)"
      />
      <path
        d="M262.815 115.862L262.952 136.228L201.307 88.2039L213.828 77.7461L262.815 115.862Z"
        fill="url(#hero-x-bottom)"
      />
    </svg>
  );
}
