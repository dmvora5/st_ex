import { features, featuresSection } from "@/content/site";
import { FeatureIcon } from "@/components/FeatureIcons";

export function Features() {
  return (
    <section id="features" className="content-section">
      <div className="site-wrap">
        <div className="section-head-row desktop-only">
          <h2 className="section-title">{featuresSection.title}</h2>
          <p className="features-subtitle">{featuresSection.subtitle}</p>
        </div>

        <div className="section-head mobile-only">
          <h2 className="section-title">{featuresSection.title}</h2>
          <p className="features-subtitle">{featuresSection.subtitle}</p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <FeatureIcon name={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
