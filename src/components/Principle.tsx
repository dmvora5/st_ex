"use client";

import { Fragment, useState } from "react";
import { principle } from "@/content/site";

function renderWithNormalAmp(text: string) {
  return text.split("&").map((part, index, parts) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && <span className="amp-normal">&</span>}
    </Fragment>
  ));
}

export function Principle() {
  const [activeTabId, setActiveTabId] = useState(principle.tabs[0].id);
  const activeTab =
    principle.tabs.find((tab) => tab.id === activeTabId) ?? principle.tabs[0];

  return (
    <section className="content-section">
      <div className="site-wrap principle-grid">
        <div className="principle-intro">
          <h2 className="section-title">
            {principle.title.split("\n").map((line, lineIndex, lines) => (
              <Fragment key={lineIndex}>
                {renderWithNormalAmp(line)}
                {lineIndex < lines.length - 1 && <br />}
              </Fragment>
            ))}
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
          <h3 className="principle-tab-heading">{activeTab.heading}</h3>
          {activeTab.paragraphs.map((paragraph) => (
            <p key={paragraph} className="lede">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
