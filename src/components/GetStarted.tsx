import { getStarted } from "@/content/site";

export function GetStarted() {
  return (
    <section id="steps" className="content-section get-started-section">
      <div className="site-wrap">
        <div className="kicker">{getStarted.kicker}</div>
        <h2 className="section-title">{getStarted.title}</h2>

        <div className="steps-row">
          {getStarted.steps.map((step, index) => (
            <div key={step.title} className="step-item">
              <div className="step-num">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="step-list">
          {getStarted.steps.map((step, index) => (
            <div key={step.title} className="step-item">
              <div className="step-num">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:mt-16">
          <a
            href={getStarted.cta.href}
            target={getStarted.cta.openInNewTab ? "_blank" : undefined}
            rel={
              getStarted.cta.openInNewTab ? "noopener noreferrer" : undefined
            }
            className="btn-primary"
          >
            {getStarted.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
