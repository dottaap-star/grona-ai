import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { HowItWorksContent } from "./how-it-works-content";

export const metadata: Metadata = {
    title: "How Grona Works: From URL to Live A/B Test in Minutes",
    description:
        "Paste your URL, research competitors, create variations with chat or point-and-click, and deploy an A/B test. See the step-by-step process. No code required.",
};

export default function HowItWorksPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <HowItWorksContent />
            <FooterSection />
        </div>
    );
}
