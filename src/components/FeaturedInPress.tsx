import { Fragment } from "react";
import { getTranslations } from "next-intl/server";

const PRESS_LOGOS = [
  { name: "Forbes", label: "Forbes", style: "forbes" },
  { name: "AP News", label: "AP news", style: "ap-news", apMark: true },
  { name: "Yahoo Finance", label: "yahoo!", style: "yahoo" },
  { name: "Business Insider", label: "Business Insider", style: "business-insider" },
  { name: "Benzinga", label: "Benzinga", style: "benzinga" },
  { name: "The Globe and Mail", label: "The Globe and Mail", style: "globe-and-mail" },
  { name: "Barchart", label: "Barchart", style: "barchart" },
  {
    name: "Street Insider",
    label: "Street Insider",
    style: "street-insider",
    stacked: true,
  },
] as const;

const LOGOS_PER_MOBILE_PAGE = 4;

const PRESS_LOGO_PAGES = Array.from(
  { length: Math.ceil(PRESS_LOGOS.length / LOGOS_PER_MOBILE_PAGE) },
  (_, pageIndex) =>
    PRESS_LOGOS.slice(
      pageIndex * LOGOS_PER_MOBILE_PAGE,
      pageIndex * LOGOS_PER_MOBILE_PAGE + LOGOS_PER_MOBILE_PAGE,
    ),
);

export async function FeaturedInPress() {
  const t = await getTranslations("featuredInPress");

  return (
    <section className="hero-press" aria-label="Press coverage">
      <p className="hero-press-label kicker-gradient">{t("label")}</p>

      <div className="hero-press-logos-scroll">
        <div className="hero-press-logos">
          {PRESS_LOGO_PAGES.map((pageLogos, pageIndex) => (
            <div className="hero-press-logo-page" key={pageLogos[0]?.name ?? pageIndex}>
              {pageLogos.map((outlet, index) => (
                <Fragment key={outlet.name}>
                  {(pageIndex > 0 && index === 0) || index > 0 ? (
                    <span className="hero-press-logo-divider" aria-hidden="true" />
                  ) : null}
                  <span className="hero-press-logo-item" title={outlet.name}>
                    {"apMark" in outlet && outlet.apMark ? (
                      <span className={`hero-press-logo-text hero-press-logo--${outlet.style}`}>
                        <strong>AP</strong> news
                      </span>
                    ) : "stacked" in outlet && outlet.stacked ? (
                      <span className={`hero-press-logo-text hero-press-logo--${outlet.style}`}>
                        <span>Street</span>
                        <span>Insider</span>
                      </span>
                    ) : (
                      <span className={`hero-press-logo-text hero-press-logo--${outlet.style}`}>
                        {outlet.label}
                      </span>
                    )}
                  </span>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
