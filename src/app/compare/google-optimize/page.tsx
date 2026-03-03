import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { ComparisonContent } from "../comparison-content";

export const metadata: Metadata = {
    title: "Google Optimize Alternative 2026: Grona, Free with AI-Powered Testing",
    description:
        "Google Optimize was sunset in 2023. Grona is a free, AI-powered replacement with no experiment limits, competitor research, and a chat-first interface.",
};

export default function GoogleOptimizeComparisonPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <ComparisonContent competitor="google-optimize" />
            <FooterSection />
        </div>
    );
}
