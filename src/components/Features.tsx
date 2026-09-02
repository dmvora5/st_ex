import { getTranslations } from "next-intl/server";
import { FeatureIcon } from "@/components/FeatureIcons";
import { featureIcons } from "@/content/site";

export async function Features() {
  const tSection = await getTranslations("featuresSection");
  const t = await getTranslations("features");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section id="features" className="content-section">
      <div className="site-wrap">
        <div className="features-head">
          <h2 className="section-title features-main-title">
            {tSection("title")}
          </h2>
          <p className="features-tagline">{tSection("tagline")}</p>
        </div>

        <div className="feature-grid">
          {items.map((feature, index) => {
            const meta = featureIcons[index];
            return (
              <div key={feature.title} className="feature-card">
                <div
                  className={`feature-icon${meta?.iconPlain ? " feature-icon--plain" : ""}`}
                  aria-hidden="true"
                >
                  {meta ? (
                    <FeatureIcon name={meta.icon} className="feature-logo" />
                  ) : null}
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
