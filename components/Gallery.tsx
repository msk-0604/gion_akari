import Image from "next/image";

const menuItems = [
  {
    name: "彩あかり箱 特上",
    price: "4,950円",
    note: "トロ・ウニ・和牛・生海老入り",
    image: "/menu-special.png"
  },
  {
    name: "特製肉箱（数量限定）",
    price: "5,400円",
    note: "A5ランク黒毛和牛と北海道産いくら",
    image: "/menu-limited.png"
  },
  {
    name: "彩あかり箱 上",
    price: "3,850円",
    note: "いくら・まぐろ・うなぎ等の彩り海鮮",
    image: "/menu-seasonal.png"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="section section-gallery animate-fade">
      <div className="container">
        <p className="section-label">Menu</p>
        <h2>人気メニュー</h2>
        <p className="section-description">
          見た目の華やかさと満足感を両立した、彩あかりの定番。観光・デート・ランチ利用で人気の高い料理です。
        </p>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <article className="menu-card animate-card" key={item.name}>
              <div className="menu-image-wrap">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="menu-image"
                  width={900}
                  height={600}
                  sizes="(max-width: 860px) 100vw, 33vw"
                />
              </div>
              <div className="menu-body">
                <p className="menu-name">{item.name}</p>
                <p className="menu-note">{item.note}</p>
                <p className="menu-price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
