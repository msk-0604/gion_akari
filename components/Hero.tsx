import Image from "next/image";

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
    </section>
  );
}
