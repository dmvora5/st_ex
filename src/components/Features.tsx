import { features, featuresSection } from "@/content/site";
import { FeatureIcon } from "@/components/FeatureIcons";

function FeaturesHead() {
  return (
    <div className="features-head">
      <h2 className="section-title features-main-title">{featuresSection.title}</h2>
      <p className="features-tagline">{featuresSection.tagline}</p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="content-section">
      <div className="site-wrap">
        <FeaturesHead />

        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <FeatureIcon name={feature.icon} className="feature-logo" />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
