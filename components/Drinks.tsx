const drinks = [
  { category: "アルコール", items: ["ビール 550円", "ハイボール 550円", "レモンサワー 550円", "梅酒 550円"] },
  { category: "日本酒", items: ["楽器政宗 770円", "久保田 770円", "醸し人九平次 880円", "獺祭 二割三分 1,870円"] },
  { category: "ウイスキー", items: ["山崎 1,320円", "響 1,650円", "知多 990円", "白州 1,320円"] },
  {
    category: "ノンアルコール",
    items: ["ノンアルコールビール 440円", "青森りんご 440円", "白桃果汁 440円", "烏龍茶 330円"]
  }
];

export function Drinks() {
  return (
    <section id="drinks" className="section section-paper animate-fade">
      <div className="container">
        <p className="section-label">Drinks</p>
        <h2>ドリンク</h2>
        <p className="section-description">
          日本酒を中心に、和食に合わせやすいドリンクをラインナップ。アルコールが苦手な方にも選びやすい構成です。
        </p>

        <div className="drink-grid">
          {drinks.map((group) => (
            <article className="drink-card animate-card" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
