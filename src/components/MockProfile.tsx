import { showcase } from "@/content/site";

export function MockProfile({
  tag,
  variant = "showcase",
}: {
  tag: string;
  variant?: "phone" | "showcase";
}) {
  const wrapperClass =
    variant === "phone" ? "phone-mock" : "showcase-panel";

  return (
    <div className={wrapperClass}>
      <div className="mock-tag">{tag}</div>
      {showcase.mockCards.map((card) => (
        <div key={card.title} className="mock-card">
          <div className="mock-avatar" />
          <div className="mock-copy">
            <div className="mock-title">{card.title}</div>
            <div className="mock-desc">{card.description}</div>
          </div>
          <div className="mock-price">{card.price}</div>
        </div>
      ))}
    </div>
  );
}
