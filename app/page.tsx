import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import HowItWorks from "@/components/HowItWorks";
import FeatureBento from "@/components/FeatureBento";
import ProgramsSection from "@/components/ProgramsSection";
import Testimonials from "@/components/Testimonials";
import StatsCounter from "@/components/StatsCounter";
import AICoachSection from "@/components/AICoachSection";
import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <HowItWorks />
      <FeatureBento />
      <ProgramsSection />
      <Testimonials />
      <StatsCounter />
      <AICoachSection />
      <WaitlistSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
