import { getTranslations } from "next-intl/server";
import { faqContactCta } from "@/content/site";

export async function FaqSection() {
  const t = await getTranslations("faq");
  const items = t.raw("items") as Array<{
    heading: string;
    description: string;
  }>;

  return (
    <section id="faq" className="content-section">
      <div className="site-wrap faq-split">
        <div className="faq-card">
          <h3>{t("contactCard.title")}</h3>
          <p>{t("contactCard.description")}</p>
          <a
            href={faqContactCta.href}
            target={faqContactCta.openInNewTab ? "_blank" : undefined}
            rel={
              faqContactCta.openInNewTab ? "noopener noreferrer" : undefined
            }
            className="btn-primary"
          >
            {t("contactCard.cta")}
          </a>
        </div>

        <div>
          <p className="kicker kicker-gradient">{t("kicker")}</p>
          <h2 className="section-title" style={{ marginBottom: "24px" }}>
            {t("title")}
          </h2>

          {items.map((item, index) => (
            <details
              key={item.heading}
              className="faq-details"
              open={index === 0}
            >
              <summary className="faq-summary">
                {item.heading}
                <span className="faq-plus">+</span>
              </summary>
              <p className="faq-answer">{item.description}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
