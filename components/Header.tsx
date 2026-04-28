"use client";

const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="祇園 彩あかり トップへ">
          祇園 彩あかり
        </a>

        <div className="header-actions">
          <button className="hamburger" aria-label="メニューを開く" type="button">
            <span />
            <span />
            <span />
          </button>
          <a className="cta cta-primary" href={RESERVE_URL} target="_blank" rel="noreferrer">
            予約
          </a>
        </div>
      </div>
    </header>
  );
}
