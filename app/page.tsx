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
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <FeaturedFood />
        <Scenes />
        <Gallery />
        <Courses />
        <Drinks />
        <Access />
      </main>
      <Footer />
      <StickyCTA />
      <GsapEffects />
    </>
  );
}
