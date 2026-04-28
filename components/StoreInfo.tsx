const INSTAGRAM_URL = "https://www.instagram.com/gion_iroakari/?hl=ja";
const TABELOG_URL = "https://tabelog.com/kyoto/A2601/A260301/26041771/";

export function StoreInfo() {
  return (
    <section id="info" className="section section-paper animate-fade">
      <div className="container info-layout">
        <div>
          <p className="section-label">Info</p>
          <h2>店舗情報</h2>
          <p className="section-description">
            観光中でも迷わないよう、営業時間とアクセス情報を分かりやすく整理。予約導線は常に1タップで辿れる構成です。
          </p>
        </div>
        <dl className="info-list">
          <div>
            <dt>店名</dt>
            <dd>祇園 彩あかり（ハコノスシ）</dd>
          </div>
          <div>
            <dt>営業時間</dt>
            <dd>月-土 11:30-15:00 / 17:00-21:30（L.O.あり）</dd>
          </div>
          <div>
            <dt>定休日</dt>
            <dd>日曜日</dd>
          </div>
          <div>
            <dt>住所</dt>
            <dd>京都府京都市東山区橋本町413-6 西いがやビル 4F</dd>
          </div>
          <div>
            <dt>電話</dt>
            <dd>075-606-4500</dd>
          </div>
        </dl>
        <div className="access-links">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="cta cta-outline">
            Instagram
          </a>
          <a href={TABELOG_URL} target="_blank" rel="noreferrer" className="cta cta-outline">
            食べログ
          </a>
        </div>
      </div>
    </section>
  );
}
