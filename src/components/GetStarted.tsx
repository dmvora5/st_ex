import { getStarted } from "@/content/site";

function StepTitle({
  before,
  accent,
}: {
  before: string;
  accent: string;
}) {
  return (
    <h3>
      {before}
      <span className="step-title-accent">{accent}</span>
    </h3>
  );
}

export function GetStarted() {
  return (
    <section id="steps" className="content-section get-started-section">
      <div className="site-wrap">
        <div className="kicker kicker-gradient">{getStarted.kicker}</div>
        <h2 className="section-title">{getStarted.title}</h2>

        <div className="steps-row">
          {getStarted.steps.map((step, index) => (
            <div key={step.titleAccent} className="step-item">
              <div className="step-num">
                {String(index + 1).padStart(2, "0")}
              </div>
              <StepTitle before={step.titleBefore} accent={step.titleAccent} />
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="step-list">
          {getStarted.steps.map((step, index) => (
            <div key={step.titleAccent} className="step-item">
              <div className="step-num">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <StepTitle before={step.titleBefore} accent={step.titleAccent} />
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="get-started-cta">
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
