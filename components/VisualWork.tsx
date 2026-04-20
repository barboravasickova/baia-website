import type { VisualWorkSet } from "@/data/projects";

type VisualWorkProps = {
  title: string;
  intro: string;
  sets: VisualWorkSet[];
};

export default function VisualWork({ title, intro, sets }: VisualWorkProps) {
  return (
    <section className="visual-section">
      <h2 className="visual-section-title">{title}</h2>
      <p className="visual-section-intro">{intro}</p>

      <div className="visual-sets">
        {sets.map((set) => (
          <div key={set.title} className="visual-set">
            <h3 className="visual-set-title">{set.title}</h3>
            <p className="visual-set-description">{set.description}</p>
            <div className="visual-set-grid" aria-hidden="true">
              {Array.from({ length: set.previewSlots }).map((_, index) => (
                <div key={index} className="visual-slot" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
