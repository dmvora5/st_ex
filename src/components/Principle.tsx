"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  InlineExclusioAdsLogo,
  InlineExclusioLogo,
} from "@/components/InlineBrandLogos";
import { principleTabsMeta } from "@/content/site";

function PrincipleTabHeading({
  before,
  logo,
  after,
}: {
  before: string;
  logo: "exclusio" | "exclusio-ads";
  after: string;
}) {
  return (
    <h3 className="principle-tab-heading principle-tab-heading--with-logo">
      <span>{before}</span>
      {logo === "exclusio-ads" ? (
        <InlineExclusioAdsLogo />
      ) : (
        <InlineExclusioLogo />
      )}
      <span>{after}</span>
    </h3>
  );
}

export function Principle() {
  const t = useTranslations("principle");
  const [activeTabId, setActiveTabId] = useState(principleTabsMeta[0].id);
  const activeMeta =
    principleTabsMeta.find((tab) => tab.id === activeTabId) ??
    principleTabsMeta[0];
  const paragraphs = t.raw(`tabs.${activeMeta.id}.paragraphs`) as string[];

  return (
    <section className="content-section">
      <div className="site-wrap principle-grid">
        <div className="principle-intro">
          <h2 className="section-title">
            {t("titleBeforeMore")}
            {t("titleMore")}
            <br />
            {t("titleFans")}{" "}
            <span className="amp-normal">&</span> {t("titleEarnMore")}?
          </h2>
          <nav className="principle-tabs" aria-label={t("tabsAriaLabel")}>
            {principleTabsMeta.map((tab) => {
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`principle-tab${isActive ? " is-active" : ""}`}
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {t(`tabs.${tab.id}.title`)}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="principle-copy">
          <PrincipleTabHeading
            before={t(`tabs.${activeMeta.id}.headingBefore`)}
            logo={activeMeta.headingLogo}
            after={t(`tabs.${activeMeta.id}.headingAfter`)}
          />
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="lede">
              {paragraph}
            </p>
          ))}
          {activeMeta.cta ? (
            <div className="principle-cta">
              <a
                href={activeMeta.cta.href}
                target={activeMeta.cta.openInNewTab ? "_blank" : undefined}
                rel={
                  activeMeta.cta.openInNewTab
                    ? "noopener noreferrer"
                    : undefined
                }
                className="btn-primary"
              >
                {t(`tabs.${activeMeta.id}.cta`)}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
