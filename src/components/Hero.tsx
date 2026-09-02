import { getTranslations } from "next-intl/server";
import { FeaturedInPress } from "@/components/FeaturedInPress";
import { HeroMark } from "@/components/HeroMark";
import { MockProfile } from "@/components/MockProfile";
import { heroCta, type ShowcaseMockCard } from "@/content/site";

export async function Hero() {
  const t = await getTranslations("hero");
  const tShowcase = await getTranslations("showcase");
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;
  const mockCards = tShowcase.raw("tabs.sell.mockCards") as ShowcaseMockCard[];

  return (
    <header className="hero-section">
      <div className="hero-bg-mark" aria-hidden="true">
        <HeroMark className="hero-bg-mark-svg" />
      </div>
      <div className="site-wrap">
        <div className="hero-top">
          <div className="hero-copy">
            <h1 className="hero-title">
              {t("titleLine1")}
              <br />
              <em>{t("titleEmphasis")}</em>
              <br />
              {t("titleLine2")}
            </h1>
            <p>{t("description")}</p>
            <div className="hero-ctas">
              <a
                href={heroCta.href}
                target={heroCta.openInNewTab ? "_blank" : undefined}
                rel={heroCta.openInNewTab ? "noopener noreferrer" : undefined}
                className="btn-primary hero-creator-btn"
              >
                {t("secondaryCta")}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <MockProfile
              tag={t("profileTag")}
              cards={mockCards}
              variant="phone"
            />
          </div>
        </div>

        <FeaturedInPress />

        <h2 className="hero-stats-title">{t("statsTitle")}</h2>

        <div className="stat-row">
          {stats.map((stat) => (
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
