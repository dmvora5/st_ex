import { hero } from "@/content/site";
import { HeroMark } from "@/components/HeroMark";
import { MockProfile } from "@/components/MockProfile";

export function Hero() {
  return (
    <header className="hero-section">
      <HeroMark className="hero-mark" />
      <div className="site-wrap">
        <div className="hero-copy">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1 className="hero-title">
            {hero.titleLine1}
            <br />
            <em>{hero.titleEmphasis}</em>
            <br />
            {hero.titleLine2}
          </h1>
          <p>{hero.description}</p>
          <div className="hero-ctas">
            <a
              href={hero.primaryCta.href}
              target={hero.primaryCta.openInNewTab ? "_blank" : undefined}
              rel={
                hero.primaryCta.openInNewTab ? "noopener noreferrer" : undefined
              }
              className="btn-primary"
            >
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="stat-row">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="stat">
                <div className="num">{stat.value}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <MockProfile tag={hero.profileTag} variant="phone" />
        </div>
      </div>
    </header>
  );
}
