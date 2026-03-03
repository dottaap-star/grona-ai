import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { MouthShieldContent } from "./mouthshield-content";

export const metadata: Metadata = {
    title: "MouthShield Case Study: 40% Conversion Lift with Grona",
    description:
        "How MouthShield increased product page conversions from 4.69% to 6.6% in 10 days using AI-powered A/B testing. Read the full case study.",
};

export default function MouthShieldCaseStudyPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <MouthShieldContent />
            <FooterSection />
        </div>
    );
}
