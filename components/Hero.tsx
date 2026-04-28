import Image from "next/image";

const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
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
        <p className="eyebrow">ハコスシ 彩あかり</p>
        <h1>一箱に、四季を詰めて。</h1>
        <p className="hero-copy">祇園で味わう、彩りのごちそう。</p>
        <a className="cta cta-primary hero-cta" href={RESERVE_URL} target="_blank" rel="noreferrer">
          ご予約はこちら
        </a>
      </div>
    </section>
  );
}
