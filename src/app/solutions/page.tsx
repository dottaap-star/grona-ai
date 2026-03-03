import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { SolutionsContent } from "./solutions-content";

export const metadata: Metadata = {
    title: "Grona Solutions: AI CRO by Industry",
    description:
        "See how Grona's AI-powered CRO works for your business type. Industry-specific optimization for e-commerce, SaaS, and more.",
};

export default function SolutionsPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <SolutionsContent />
            <FooterSection />
        </div>
    );
}
