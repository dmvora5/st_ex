"use client";

import { useState } from "react";
import { showcase } from "@/content/site";
import { MockProfile } from "@/components/MockProfile";

export function Showcase() {
  const [activeTabId, setActiveTabId] = useState(showcase.tabs[0].id);
  const activeTab =
    showcase.tabs.find((tab) => tab.id === activeTabId) ?? showcase.tabs[0];

  return (
    <section className="content-section">
      <div className="site-wrap">
        <nav
          className="principle-tabs showcase-tabs"
          aria-label="Showcase topics"
        >
          {showcase.tabs.map((tab) => {
            const isActive = tab.id === activeTabId;

            return (
              <button
                key={tab.id}
                type="button"
                className={`principle-tab${isActive ? " is-active" : ""}`}
                aria-selected={isActive}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.tabTitle}
              </button>
            );
          })}
        </nav>

        <div className="showcase-split">
          <div>
            <div className="kicker kicker-gradient">{activeTab.kicker}</div>
            {activeTab.titleAccent ? (
              <h2 className="section-title">
                <span className="gradient-text">{activeTab.titleAccent}</span>
                {activeTab.titleAfter}
              </h2>
            ) : (
              <h2 className="section-title">{activeTab.title}</h2>
            )}
            <p className="lede">{activeTab.description}</p>
          </div>
          <MockProfile
            tag={activeTab.profileTag}
            cards={activeTab.mockCards}
            variant="showcase"
          />
        </div>
      </div>
    </section>
  );
}
