const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
const PHONE_URL = "tel:075-606-4500";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E6%9D%B1%E5%B1%B1%E5%8C%BA%E6%A9%8B%E6%9C%AC%E7%94%BA413-6";

export function StickyCTA() {
  return (
    <div className="sticky-cta" role="navigation" aria-label="固定アクション">
      <a href={PHONE_URL}>電話</a>
      <a href={MAP_URL} target="_blank" rel="noreferrer">
        地図
      </a>
      <a href={RESERVE_URL} target="_blank" rel="noreferrer">
        本日予約はこちら
      </a>
    </div>
  );
}
