import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { VerticalContent } from "../vertical-content";

export const metadata: Metadata = {
    title: "AI A/B Testing for SaaS: Optimize Landing Pages Without Developers",
    description:
        "Convert more trials without engineering tickets. AI-powered landing page optimization for SaaS marketing teams. Free to start.",
};

export default function SaasPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <VerticalContent vertical="saas" />
            <FooterSection />
        </div>
    );
}
