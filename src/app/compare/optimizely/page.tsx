import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { ComparisonContent } from "../comparison-content";

export const metadata: Metadata = {
    title: "Grona vs Optimizely: The Marketer-Friendly Alternative (2026)",
    description:
        "Compare Grona and Optimizely side by side. AI-powered CRO starting free vs enterprise platform starting at $36K/yr. See why marketers are switching.",
};

export default function OptimizelyComparisonPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <ComparisonContent competitor="optimizely" />
            <FooterSection />
        </div>
    );
}
