const scenes = [
  "記念日",
  "接待",
  "観光",
  "夫婦・カップル",
  "友人との食事"
];

export function Scenes() {
  return (
    <section id="scenes" className="section">
      <div className="container">
        <p className="section-label">Scenes</p>
        <h2>ご利用シーン</h2>
        <div className="cards">
          {scenes.map((scene) => (
            <article className="scene-card animate-card" key={scene}>
              <p>{scene}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
