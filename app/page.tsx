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
import { Scenes } from "@/components/Scenes";
import { SocialProof } from "@/components/SocialProof";
import { StoreInfo } from "@/components/StoreInfo";
import { Story } from "@/components/Story";
import { StickyCTA } from "@/components/StickyCTA";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Story />
        <WhyChoose />
        <FeaturedFood />
        <Courses />
        <Drinks />
        <Gallery />
        <Scenes />
        <StoreInfo />
        <SocialProof />
        <Access />
      </main>
      <Footer />
      <StickyCTA />
      <GsapEffects />
    </>
  );
}
