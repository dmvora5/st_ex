import type { LegalSection } from "@/content/site";

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: LegalSection[];
}) {
  return (
    <section className="page-content-wrapper">
      <div className="page-title-wrapper">
        <h1>{title}</h1>
      </div>
      <div className="content-container">
        {sections.map((section, index) => (
          <div key={section.heading}>
            {index === 0 ? (
              <h2>{section.heading}</h2>
            ) : (
              <h3>{section.heading}</h3>
            )}
            {section.paragraphs?.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
            {section.bullets?.length ? (
              <ul className="ml-6 list-disc space-y-2">
                {section.bullets.map((b) => (
                  <li key={b.slice(0, 48)}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
