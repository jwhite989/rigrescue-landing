import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExperienceMockups from "@/components/DriverTechExamples";
import WhoSection from "@/components/WhoSection";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ExperienceMockups />
        <WhoSection />
        <WhySection />
        <PricingSection />
        <WaitlistSection />
        <FAQSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
