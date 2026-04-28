import Image from "next/image";

const interiorImages = ["/featured-bento.webp", "/menu-special.webp", "/menu-limited.webp", "/menu-seasonal.webp"];

export function Gallery() {
  return (
    <section id="gallery" className="section section-gallery animate-fade">
      <div className="container">
        <p className="section-label">Gallery</p>
        <h2>静けさを愉しむ、祇園の和空間</h2>
        <p className="section-description">
          白木と陰影がつくる落ち着いた空気感。会話を邪魔しない設えで、接待・記念日・観光の食事時間を上質に整えます。
        </p>
        <div className="interior-grid">
          {interiorImages.map((image, index) => (
            <div className="interior-item" key={`${image}-${index}`}>
              <Image
                src={image}
                alt="祇園彩あかりの空間と料理"
                width={900}
                height={700}
                className="interior-image"
                sizes="(max-width: 860px) 50vw, 25vw"
                quality={78}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
