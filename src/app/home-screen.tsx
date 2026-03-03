import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { HeroSection } from "./homepage/hero-section";
import { SocialProofSection } from "./homepage/social-proof-section";
import { TwoPillarsSection } from "./homepage/two-pillars-section";
import { HowItWorksSection } from "./homepage/how-it-works-section";
import { MetricsSection } from "./homepage/metrics-section";
import { UseCasesSection } from "./homepage/use-cases-section";
import { CaseStudySection } from "./homepage/case-study-section";
import { ROICalculatorSection } from "./homepage/roi-calculator-section";
import { FAQSection } from "./homepage/faq-section";
import { CTASection } from "./homepage/cta-section";
import { FooterSection } from "./homepage/footer-section";

export const HomeScreen = () => (
    <div className="bg-primary">
        <Header isFloating />
        <HeroSection />
        <SocialProofSection />
        <TwoPillarsSection />
        <HowItWorksSection />
        <MetricsSection />
        <UseCasesSection />
        <CaseStudySection />
        <ROICalculatorSection />
        <FAQSection />
        <CTASection />
        <FooterSection />
    </div>
);
