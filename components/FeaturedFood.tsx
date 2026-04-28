import Image from "next/image";
const FEATURED_IMAGE = "/featured-bento.webp";

export function FeaturedFood() {
  return (
    <section id="menu" className="section section-featured animate-fade">
      <div className="container featured-grid">
        <div className="featured-text">
          <p className="section-label">Signature</p>
          <h2>一つひとつ丁寧に詰めた彩りの重箱</h2>
          <p className="section-description">
            目に入った瞬間に心がほどけるような美しい盛り付け。見て楽しい、食べて美味しい、
            彩あかりならではの一箱をご堪能ください。
          </p>
        </div>
        <div className="featured-image-wrap parallax-target">
          <Image
            src={FEATURED_IMAGE}
            alt="名物の彩り重箱"
            className="featured-image"
            width={1200}
            height={900}
            sizes="(max-width: 860px) 100vw, 55vw"
            quality={80}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
