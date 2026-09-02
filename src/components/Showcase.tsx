"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MockProfile } from "@/components/MockProfile";
import { showcaseTabIds, type ShowcaseMockCard } from "@/content/site";

type ShowcaseTabId = (typeof showcaseTabIds)[number];

export function Showcase() {
  const t = useTranslations("showcase");
  const [activeTabId, setActiveTabId] = useState<ShowcaseTabId>(
    showcaseTabIds[0],
  );

  const mockCards = t.raw(`tabs.${activeTabId}.mockCards`) as ShowcaseMockCard[];
  const titleMiddle = t.has(`tabs.${activeTabId}.titleMiddle`)
    ? t(`tabs.${activeTabId}.titleMiddle`)
    : null;
  const titleAccent2 = t.has(`tabs.${activeTabId}.titleAccent2`)
    ? t(`tabs.${activeTabId}.titleAccent2`)
    : null;

  return (
    <section className="content-section">
      <div className="site-wrap">
        <nav
          className="principle-tabs showcase-tabs"
          aria-label={t("tabsAriaLabel")}
        >
          {showcaseTabIds.map((tabId) => {
            const isActive = tabId === activeTabId;

            return (
              <button
                key={tabId}
                type="button"
                className={`principle-tab${isActive ? " is-active" : ""}`}
                aria-selected={isActive}
                onClick={() => setActiveTabId(tabId)}
              >
                {t(`tabs.${tabId}.tabTitle`)}
              </button>
            );
          })}
        </nav>

        <div className="showcase-split">
          <div>
            <div className="kicker kicker-gradient">
              {t(`tabs.${activeTabId}.kicker`)}
            </div>
            <h2 className="section-title">
              <span className="gradient-text">
                {t(`tabs.${activeTabId}.titleAccent`)}
              </span>
              {titleMiddle}
              {titleAccent2 ? (
                <span className="gradient-text">{titleAccent2}</span>
              ) : null}
              {t(`tabs.${activeTabId}.titleAfter`)}
            </h2>
            <p className="lede">{t(`tabs.${activeTabId}.description`)}</p>
          </div>
          <MockProfile
            tag={t(`tabs.${activeTabId}.profileTag`)}
            cards={mockCards}
            variant="showcase"
          />
        </div>
      </div>
    </section>
  );
}
