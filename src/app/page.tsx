import { Hero } from "@/components/Hero";
import { Principle } from "@/components/Principle";
import { Features } from "@/components/Features";
import { GetStarted } from "@/components/GetStarted";
import { Showcase } from "@/components/Showcase";
import { FaqSection } from "@/components/FaqSection";
import { SectionDivider } from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Principle />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <GetStarted />
      <SectionDivider />
      <Showcase />
      <SectionDivider />
      <FaqSection />
    </>
  );
}
