const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
const PHONE_URL = "tel:075-606-4500";

export function StickyCTA() {
  return (
    <div className="sticky-cta" role="navigation" aria-label="固定アクション">
      <a href={PHONE_URL}>電話予約</a>
      <a href={RESERVE_URL} target="_blank" rel="noreferrer">
        WEB予約
      </a>
    </div>
  );
}
