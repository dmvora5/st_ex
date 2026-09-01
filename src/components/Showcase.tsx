import { showcase } from "@/content/site";
import { MockProfile } from "@/components/MockProfile";

export function Showcase() {
  return (
    <section className="content-section">
      <div className="site-wrap showcase-split">
        <div>
          <div className="kicker">{showcase.kicker}</div>
          <h2 className="section-title">{showcase.title}</h2>
          <p className="lede">{showcase.description}</p>
        </div>
        <MockProfile tag={showcase.profileTag} variant="showcase" />
      </div>
    </section>
  );
}
