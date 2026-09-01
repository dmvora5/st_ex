import { principle } from "@/content/site";

export function Principle() {
  return (
    <section className="content-section">
      <div className="site-wrap principle-grid">
        <div>
          <div className="kicker">{principle.kicker}</div>
          <h2 className="section-title">{principle.title}</h2>
        </div>
        <p className="lede">{principle.description}</p>
      </div>
    </section>
  );
}
