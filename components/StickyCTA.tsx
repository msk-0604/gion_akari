const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
const PHONE_URL = "tel:075-000-0000";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=%E7%A5%87%E5%9C%92+%E5%BD%A9%E3%81%82%E3%81%8B%E3%82%8A";

export function StickyCTA() {
  return (
    <div className="sticky-cta" role="navigation" aria-label="固定アクション">
      <a href={RESERVE_URL} target="_blank" rel="noreferrer">
        予約
      </a>
      <a href={PHONE_URL}>電話</a>
      <a href={MAP_URL} target="_blank" rel="noreferrer">
        アクセス
      </a>
    </div>
  );
}
