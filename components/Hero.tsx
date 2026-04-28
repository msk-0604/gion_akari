import Image from "next/image";

const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
const PHONE_URL = "tel:075-606-4500";
const FEATURED_IMAGE = "/featured-bento.png";

export function Hero() {
  return (
    <section id="top" className="hero animate-fade">
      <div className="hero-image-wrap">
        <Image
          src={FEATURED_IMAGE}
          alt="彩り豊かなお重"
          className="hero-image"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay">
        <p className="eyebrow">京都 祇園 / ハコノスシ 彩あかり</p>
        <h1>祇園で味わう、静かな大人の一席</h1>
        <p className="hero-copy">
          京都・祇園の情緒に包まれながら、季節の料理と心地よい時間を。
        </p>
        <div className="hero-ctas">
          <a className="cta cta-primary hero-cta" href={RESERVE_URL} target="_blank" rel="noreferrer">
            空席を確認する
          </a>
          <a className="cta cta-outline hero-cta-secondary" href={PHONE_URL}>
            電話で予約する
          </a>
        </div>
      </div>
    </section>
  );
}
