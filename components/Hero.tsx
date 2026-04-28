import Image from "next/image";

const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
const FEATURED_IMAGE = "/featured-bento.webp";

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
        <div className="hero-content">
          <div className="hero-main">
            <p className="eyebrow hero-kicker">
              <span>京都 祇園</span>
              <span>ハコノスシ 彩あかり</span>
            </p>
            <h1 className="hero-title">
              祇園で味わう、<br className="desktop-only" />
              <br className="mobile-only" />
              静かな大人の一席
            </h1>
          </div>
          <div className="hero-side">
            <p className="hero-copy">
              京都・祇園の情緒に包まれながら、季節の料理と心地よい時間を。
            </p>
            <div className="hero-ctas">
              <a className="cta cta-primary hero-cta" href={RESERVE_URL} target="_blank" rel="noreferrer">
                ご予約はこちら
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
