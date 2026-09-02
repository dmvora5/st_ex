"use client";

import { useState } from "react";
import {
  InlineExclusioAdsLogo,
  InlineExclusioLogo,
} from "@/components/InlineBrandLogos";
import { principle } from "@/content/site";

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
  const [activeTabId, setActiveTabId] = useState(principle.tabs[0].id);
  const activeTab =
    principle.tabs.find((tab) => tab.id === activeTabId) ?? principle.tabs[0];

  return (
    <section className="content-section">
      <div className="site-wrap principle-grid">
        <div className="principle-intro">
          <div className="kicker kicker-gradient">{principle.eyebrow}</div>
          <h2 className="section-title">
            {principle.titleBeforeMore}
            <span className="gradient-text">{principle.titleMore}</span>
            <br />
            <span className="gradient-text">{principle.titleFans}</span>
            {" "}
            <span className="amp-normal">&</span>
            {" "}
            <span className="gradient-text">{principle.titleEarnMore}</span>?
          </h2>
          <nav className="principle-tabs" aria-label="Principle topics">
            {principle.tabs.map((tab) => {
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`principle-tab${isActive ? " is-active" : ""}`}
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {tab.title}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="principle-copy">
          <PrincipleTabHeading
            before={activeTab.headingBefore}
            logo={activeTab.headingLogo}
            after={activeTab.headingAfter}
          />
          {activeTab.paragraphs.map((paragraph) => (
            <p key={paragraph} className="lede">{paragraph}</p>
          ))}
          {activeTab.cta ? (
            <div className="principle-cta">
              <a
                href={activeTab.cta.href}
                target={activeTab.cta.openInNewTab ? "_blank" : undefined}
                rel={
                  activeTab.cta.openInNewTab ? "noopener noreferrer" : undefined
                }
                className="btn-primary"
              >
                {activeTab.cta.label}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
