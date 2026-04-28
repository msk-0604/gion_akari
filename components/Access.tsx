const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
const INSTAGRAM_URL = "https://www.instagram.com/gion_iroakari/?hl=ja";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=%E7%A5%87%E5%9C%92+%E5%BD%A9%E3%81%82%E3%81%8B%E3%82%8A";

export function Access() {
  return (
    <section id="access" className="section animate-fade">
      <div className="container access-box">
        <p className="section-label">Access</p>
        <h2>アクセス・営業時間</h2>
        <dl className="access-list">
          <div>
            <dt>住所</dt>
            <dd>京都府京都市東山区祇園周辺（詳細は予約ページをご確認ください）</dd>
          </div>
          <div>
            <dt>営業時間</dt>
            <dd>ランチ / ディナー（最新情報は予約ページにて）</dd>
          </div>
        </dl>
        <div className="access-links">
          <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="cta cta-primary">
            TableCheckで予約
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="cta cta-outline">
            Instagramを見る
          </a>
          <a href={MAP_URL} target="_blank" rel="noreferrer" className="cta cta-outline">
            アクセスを見る
          </a>
        </div>
      </div>
    </section>
  );
}
