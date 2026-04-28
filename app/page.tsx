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
import { StickyCTA } from "@/components/StickyCTA";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ReservationBand text="空席確認は30秒。今すぐオンライン予約できます。" />
        <Concept />
        <WhyChoose />
        <FeaturedFood />
        <Scenes />
        <Gallery />
        <ReservationBand text="気になる料理があれば、そのまま予約へ。" />
        <Courses />
        <Drinks />
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
