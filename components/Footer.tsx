const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
const PHONE_URL = "tel:075-606-4500";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-cta">
        <p className="section-label">Reservation</p>
        <h2>ご予約・お問い合わせ</h2>
        <p className="section-description">営業時間 11:30-15:00 / 17:00-21:30（定休日: 日曜日）</p>
        <div className="footer-cta-actions">
          <a className="cta cta-outline" href={PHONE_URL}>
            電話予約 075-606-4500
          </a>
          <a className="cta cta-primary" href={RESERVE_URL} target="_blank" rel="noreferrer">
            ご予約はこちら
          </a>
        </div>
      </div>
      <div className="container footer-inner">
        <p>祇園 彩あかり</p>
        <small>© {new Date().getFullYear()} Gion Iroakari. All rights reserved.</small>
      </div>
    </footer>
  );
}
