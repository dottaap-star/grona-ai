import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { ComparisonContent } from "../comparison-content";

export const metadata: Metadata = {
    title: "Grona vs VWO: Compare Features, Pricing, and AI Capabilities (2026)",
    description:
        "Compare Grona and VWO side by side. AI-powered CRO with a free tier vs traditional A/B testing starting at $198/mo. See the full feature comparison.",
};

export default function VwoComparisonPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <ComparisonContent competitor="vwo" />
            <FooterSection />
        </div>
    );
}
