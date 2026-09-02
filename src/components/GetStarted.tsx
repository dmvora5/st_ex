import { getTranslations } from "next-intl/server";
import { getStartedCta } from "@/content/site";

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

export async function GetStarted() {
  const t = await getTranslations("getStarted");
  const steps = t.raw("steps") as Array<{
    titleBefore: string;
    titleAccent: string;
    description: string;
  }>;

  return (
    <section id="steps" className="content-section get-started-section">
      <div className="site-wrap">
        <div className="kicker kicker-gradient">{t("kicker")}</div>
        <h2 className="section-title">{t("title")}</h2>

        <div className="steps-row">
          {steps.map((step, index) => (
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
          {steps.map((step, index) => (
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
            href={getStartedCta.href}
            target={getStartedCta.openInNewTab ? "_blank" : undefined}
            rel={
              getStartedCta.openInNewTab ? "noopener noreferrer" : undefined
            }
            className="btn-primary"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
