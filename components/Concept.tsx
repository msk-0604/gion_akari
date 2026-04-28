const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";

export function Concept() {
  return (
    <section id="concept" className="section animate-fade">
      <div className="container">
        <p className="section-label">Concept</p>
        <h2>祇園の街並みに寄り添う、上品なハコスシ体験</h2>
        <p className="section-description">
          「ハコスシ 彩あかり」は祇園エリア徒歩5分。彩り豊かな和食と海鮮を、落ち着いた和空間で楽しめます。
          ランチ利用にも、観光の合間にも、少し特別なひとときにも。
        </p>
        <div className="section-cta-row">
          <a className="cta cta-primary" href={RESERVE_URL} target="_blank" rel="noreferrer">
            空席を確認する
          </a>
        </div>
      </div>
    </section>
  );
}
