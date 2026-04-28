import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/gion_iroakari/?hl=ja";
const TABELOG_URL = "https://tabelog.com/kyoto/A2601/A260301/26041771/";

const photos = ["/featured-bento.webp", "/menu-special.webp", "/menu-seasonal.webp"];

export function SocialProof() {
  return (
    <section id="social" className="section animate-fade">
      <div className="container">
        <p className="section-label">Trust</p>
        <h2>安心して選べる情報を、ひと目で</h2>
        <p className="section-description">
          写真の雰囲気はInstagramで、メニューの詳細は食べログで確認可能。公式サイトからそのまま予約まで完了できます。
        </p>
        <div className="social-links">
          <a className="cta cta-outline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagramを見る
          </a>
          <a className="cta cta-outline" href={TABELOG_URL} target="_blank" rel="noreferrer">
            食べログ参考情報
          </a>
        </div>
        <div className="instagram-grid">
          {photos.map((photo, index) => (
            <div className="instagram-item" key={`${photo}-${index}`}>
              <Image
                src={photo}
                alt="彩あかりの料理写真"
                width={800}
                height={600}
                className="instagram-photo"
                sizes="(max-width: 860px) 50vw, 25vw"
                quality={76}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
