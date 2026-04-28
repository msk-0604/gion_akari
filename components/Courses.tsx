const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";

const courses = [
  {
    name: "当店名物 彩あかり箱 特上",
    price: "4,950円（税込）",
    note: "看板メニュー。彩りと満足感を両立した人気コース。"
  },
  {
    name: "【数量限定】特製肉箱",
    price: "5,400円（税込）",
    note: "A5ランク黒毛和牛サーロインステーキ使用。"
  }
];

export function Courses() {
  return (
    <section id="courses" className="section animate-fade">
      <div className="container">
        <p className="section-label">Courses</p>
        <h2>コース</h2>
        <p className="section-description">
          予約の多い定番コースを厳選。どちらも写真映えと食べ応えを兼ね備えた、彩あかりらしい内容です。
        </p>

        <div className="list-grid">
          {courses.map((course) => (
            <article className="list-card animate-card" key={course.name}>
              <p className="list-name">{course.name}</p>
              <p className="list-note">{course.note}</p>
              <p className="list-price">{course.price}</p>
              <a className="cta cta-outline list-cta" href={RESERVE_URL} target="_blank" rel="noreferrer">
                1分で予約完了
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
