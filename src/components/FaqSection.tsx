import { faq } from "@/content/site";

export function FaqSection() {
  return (
    <section id="faq" className="content-section">
      <div className="site-wrap faq-split">
        <div className="faq-card">
          <h3>{faq.contactCard.title}</h3>
          <p>{faq.contactCard.description}</p>
          <a
            href={faq.contactCard.cta.href}
            target={faq.contactCard.cta.openInNewTab ? "_blank" : undefined}
            rel={
              faq.contactCard.cta.openInNewTab ? "noopener noreferrer" : undefined
            }
            className="btn-primary"
          >
            {faq.contactCard.cta.label}
          </a>
        </div>

        <div>
          <div className="kicker">{faq.kicker}</div>
          <h2 className="section-title" style={{ marginBottom: "24px" }}>
            {faq.title}
          </h2>

          {faq.items.map((item, index) => (
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
