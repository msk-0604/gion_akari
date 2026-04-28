const reasons = [
  {
    icon: "空",
    title: "祇園らしい上質な空間",
    description: "落ち着いた和モダンのしつらえ。観光後でも、接待でも、品よく過ごせる空間設計。"
  },
  {
    icon: "旬",
    title: "季節を感じる料理",
    description: "彩り重箱を中心に、旬の海鮮と和食を丁寧に盛り込み、目でも楽しめる一皿を提供。"
  },
  {
    icon: "導",
    title: "観光・接待・記念日に使いやすい",
    description: "予約導線が明確で迷わない。電話・地図・ネット予約にすぐアクセスできる導線を用意。"
  }
];

export function WhyChoose() {
  return (
    <section id="reasons" className="section section-paper animate-fade">
      <div className="container">
        <p className="section-label">Reason</p>
        <h2>選ばれる理由</h2>
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card animate-card" key={reason.title}>
              <span className="reason-icon" aria-hidden>
                {reason.icon}
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
