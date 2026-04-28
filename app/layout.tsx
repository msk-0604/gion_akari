import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "祇園 彩あかり｜ハコスシと彩り豊かな和食",
  description: "祇園で味わう彩り豊かなハコスシ。ランチ・観光・デートにおすすめ。",
  openGraph: {
    title: "祇園 彩あかり｜ハコスシと彩り豊かな和食",
    description: "祇園で味わう彩り豊かなハコスシ。ランチ・観光・デートにおすすめ。",
    url: "https://www.tablecheck.com/ja/iroakari-gion",
    siteName: "祇園 彩あかり",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "祇園 彩あかりの彩り重箱"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "祇園 彩あかり｜ハコスシと彩り豊かな和食",
    description: "祇園で味わう彩り豊かなハコスシ。ランチ・観光・デートにおすすめ。",
    images: ["/ogp.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
