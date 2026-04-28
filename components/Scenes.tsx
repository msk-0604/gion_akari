const scenes = [
  "祇園観光のご褒美ランチに",
  "大切な人との和デートに",
  "写真映えする女子会に",
  "自分を満たすひとりランチに"
];

export function Scenes() {
  return (
    <section id="scenes" className="section">
      <div className="container">
        <p className="section-label">Scenes</p>
        <h2>こんなシーンで選ばれています</h2>
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
