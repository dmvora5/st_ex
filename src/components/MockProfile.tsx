import type { ShowcaseMockCard } from "@/content/site";

export function MockProfile({
  tag,
  cards,
  variant = "showcase",
}: {
  tag: string;
  cards: ShowcaseMockCard[];
  variant?: "phone" | "showcase";
}) {
  const wrapperClass =
    variant === "phone" ? "phone-mock" : "showcase-panel";

  return (
    <div className={wrapperClass}>
      <div className="mock-tag mock-tag-gradient">{tag}</div>
      {cards.map((card) => (
        <div
          key={card.title}
          className={`mock-card${card.cardStyle ? ` mock-card--${card.cardStyle}` : ""}`}
        >
          <div className="mock-avatar" />
          <div className="mock-copy">
            <div className="mock-title">{card.title}</div>
            <div className="mock-desc">{card.description}</div>
          </div>
          {card.price ? <div className="mock-price">{card.price}</div> : null}
        </div>
      ))}
    </div>
  );
}
