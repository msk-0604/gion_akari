import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gionakari.vercel.app"),
  title: "祇園 彩あかり｜祇園で味わう静かな大人の一席",
  description:
    "祇園四条駅徒歩5分。彩り豊かなハコノスシと季節の和食を、落ち着いた和モダン空間で。予約・電話・地図案内にすぐアクセスできます。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "祇園 彩あかり｜祇園で味わう静かな大人の一席",
    description:
      "京都・祇園の情緒に包まれながら、季節の料理と心地よい時間を。公式サイトから予約・電話・地図へ。",
    url: "https://gionakari.vercel.app/",
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
    title: "祇園 彩あかり｜祇園で味わう静かな大人の一席",
    description:
      "祇園四条駅徒歩5分。彩り豊かなハコノスシと季節の和食。予約・電話・地図導線つきの公式サイト。",
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
