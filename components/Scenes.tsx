import Image from "next/image";

const scenes = [
  { title: "記念日", text: "特別な一日に、華やかな彩りを。", image: "/menu-special.webp" },
  { title: "接待", text: "落ち着いた設えで、大切な会食にも。", image: "/featured-bento.webp" },
  { title: "観光", text: "祇園散策の途中に、上質なランチを。", image: "/menu-seasonal.webp" },
  { title: "デート", text: "静かな空間でゆったり語らう時間。", image: "/menu-limited.webp" }
];

export function Scenes() {
  return (
    <section id="scenes" className="section">
      <div className="container">
        <p className="section-label">Scenes</p>
        <h2>ご利用シーン</h2>
        <div className="scene-visual-grid">
          {scenes.map((scene) => (
            <article className="scene-card animate-card" key={scene.title}>
              <div className="scene-photo-wrap">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  width={900}
                  height={600}
                  className="scene-photo"
                  sizes="(max-width: 860px) 100vw, 25vw"
                  quality={78}
                  loading="lazy"
                />
              </div>
              <h3>{scene.title}</h3>
              <p>{scene.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
