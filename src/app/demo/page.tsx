import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { DemoContent } from "./demo-content";

export const metadata: Metadata = {
    title: "Book a Demo: See Grona AI CRO Platform Live",
    description: "Schedule a 30-minute demo of Grona. We'll analyze your website live and show you how to increase conversions with AI-powered A/B testing.",
};

export default function DemoPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <DemoContent />
            <FooterSection />
        </div>
    );
}
