import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import VisualRoutine from "@/components/VisualRoutine";
import Achievements from "@/components/Achievements";
// import AISuggestions from "@/components/AISuggestions";
import UserStories from "@/components/UserStories";
import FeatureBento from "@/components/FeatureBento";
// import Testimonials from "@/components/Testimonials";
// import StatsCounter from "@/components/StatsCounter";
// import AICoachSection from "@/components/AICoachSection";
// import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <VisualRoutine />
      <FeatureBento />
      <Achievements />
      {/* <AISuggestions /> */}
      <UserStories />
      <FinalCTA />
      <FAQSection />

      {/* Hidden / Backup Sections */}
      {/* <Testimonials /> */}
      {/* <StatsCounter /> */}
      {/* <AICoachSection /> */}
      {/* <WaitlistSection /> */}
      <Footer />
    </main>
  );
}
