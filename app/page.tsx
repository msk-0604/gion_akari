import { Access } from "@/components/Access";
import { Concept } from "@/components/Concept";
import { Courses } from "@/components/Courses";
import { Drinks } from "@/components/Drinks";
import { FeaturedFood } from "@/components/FeaturedFood";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { GsapEffects } from "@/components/GsapEffects";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ReservationBand } from "@/components/ReservationBand";
import { Scenes } from "@/components/Scenes";
import { SocialProof } from "@/components/SocialProof";
import { StoreInfo } from "@/components/StoreInfo";
import { StickyCTA } from "@/components/StickyCTA";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <ReservationBand text="祇園でのお食事は、事前予約でスムーズにご案内します。" />
        <WhyChoose />
        <FeaturedFood />
        <ReservationBand text="気になる料理があれば、そのまま予約へ。" />
        <Courses />
        <Drinks />
        <Gallery />
        <ReservationBand text="店内の雰囲気をご覧いただいた後、そのまま空席確認できます。" />
        <Scenes />
        <StoreInfo />
        <ReservationBand text="記念日・接待・観光利用のご予約を承ります。" />
        <SocialProof />
        <Access />
        <ReservationBand text="ご来店前のご予約で、当日のご案内がよりスムーズです。" />
      </main>
      <Footer />
      <StickyCTA />
      <GsapEffects />
    </>
  );
}
