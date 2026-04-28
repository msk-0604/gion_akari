"use client";

import { useEffect, useMemo, useState } from "react";

const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";
const navItems = [
  { id: "concept", label: "コンセプト" },
  { id: "menu", label: "料理" },
  { id: "gallery", label: "店内" },
  { id: "info", label: "店舗情報" },
  { id: "access", label: "アクセス" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("concept");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const headerClass = useMemo(() => `header ${scrolled ? "header-scrolled" : "header-transparent"}`, [scrolled]);

  const handleAnchorClick = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="祇園 彩あかり トップへ">
          祇園 彩あかり
        </a>

        <nav className="desktop-nav" aria-label="グローバルナビゲーション">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleAnchorClick(item.id)}
              className={`nav-link ${activeId === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <a className="cta cta-primary desktop-reserve" href={RESERVE_URL} target="_blank" rel="noreferrer">
            予約する
          </a>
          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            aria-label="メニューを開く"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu-inner">
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => handleAnchorClick(item.id)} className="mobile-nav-link">
              {item.label}
            </button>
          ))}
          <a className="cta cta-primary mobile-reserve" href={RESERVE_URL} target="_blank" rel="noreferrer">
            予約する
          </a>
        </nav>
      </div>
    </header>
  );
}
