import { hero, showcaseSellTab } from "@/content/site";
import { FeaturedInPress } from "@/components/FeaturedInPress";
import { HeroMark } from "@/components/HeroMark";
import { MockProfile } from "@/components/MockProfile";

export function Hero() {
  return (
    <header className="hero-section">
      <div className="hero-bg-mark" aria-hidden="true">
        <HeroMark className="hero-bg-mark-svg" />
      </div>
      <div className="site-wrap">
        <div className="hero-top">
          <div className="hero-copy">
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
                href={hero.secondaryCta.href}
                target={hero.secondaryCta.openInNewTab ? "_blank" : undefined}
                rel={
                  hero.secondaryCta.openInNewTab ? "noopener noreferrer" : undefined
                }
                className="btn-primary hero-creator-btn"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <MockProfile
              tag={hero.profileTag}
              cards={showcaseSellTab.mockCards}
              variant="phone"
            />
          </div>
        </div>

        <FeaturedInPress />

        <div className="stat-row">
          {hero.stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="stat">
              <div className="num">{stat.value}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
