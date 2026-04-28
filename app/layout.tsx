import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gionakari.vercel.app"),
  title: "祇園いろあかり｜京都・祇園の和モダンな飲食店",
  description:
    "京都・祇園で季節の料理と上質な時間を楽しめる「祇園いろあかり」の公式デモサイトです。記念日、接待、観光でのお食事にもご利用いただけます。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "祇園いろあかり｜京都・祇園の和モダンな飲食店",
    description:
      "京都・祇園で季節の料理と上質な時間を楽しめる「祇園いろあかり」。記念日、接待、観光でのお食事に。",
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
    title: "祇園いろあかり｜京都・祇園の和モダンな飲食店",
    description:
      "京都・祇園で季節の料理と上質な時間を楽しめる「祇園いろあかり」の公式デモサイトです。",
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
