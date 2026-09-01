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
        <div key={card.price} className="mock-card">
          <div className="mock-avatar" />
          <div className="mock-lines">
            <div className="l1" />
            <div className="l2" />
          </div>
          <div className="mock-price">{card.price}</div>
        </div>
      ))}
    </div>
  );
}
