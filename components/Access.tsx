const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
const INSTAGRAM_URL = "https://www.instagram.com/gion_iroakari/?hl=ja";
const TABELOG_URL = "https://tabelog.com/kyoto/A2601/A260301/26041771/";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E6%9D%B1%E5%B1%B1%E5%8C%BA%E6%A9%8B%E6%9C%AC%E7%94%BA413-6";
const PHONE_URL = "tel:075-606-4500";

export function Access() {
  return (
    <section id="access" className="section animate-fade">
      <div className="container access-box">
        <p className="section-label">Access</p>
        <h2>アクセス・営業時間</h2>
        <dl className="access-list">
          <div>
            <dt>住所</dt>
            <dd>京都府京都市東山区橋本町413-6 西いがやビル 4F</dd>
          </div>
          <div>
            <dt>営業時間</dt>
            <dd>月-土 11:30-15:00 / 17:00-21:30（L.O.あり） 日曜定休</dd>
          </div>
          <div>
            <dt>アクセス</dt>
            <dd>京阪 祇園四条駅 9番出口 徒歩5分 / 三条京阪駅 2番出口 徒歩7分</dd>
          </div>
          <div>
            <dt>電話</dt>
            <dd>075-606-4500</dd>
          </div>
        </dl>
        <div className="access-links">
          <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="cta cta-primary">
            TableCheckで予約
          </a>
          <a href={PHONE_URL} className="cta cta-outline">
            電話する
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="cta cta-outline">
            Instagramを見る
          </a>
          <a href={MAP_URL} target="_blank" rel="noreferrer" className="cta cta-outline">
            地図を見る
          </a>
          <a href={TABELOG_URL} target="_blank" rel="noreferrer" className="cta cta-outline">
            食べログ参考情報
          </a>
        </div>
      </div>
    </section>
  );
}
