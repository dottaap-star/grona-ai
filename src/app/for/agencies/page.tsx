import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { VerticalContent } from "../vertical-content";

export const metadata: Metadata = {
    title: "AI A/B Testing for Agencies: Deliver CRO Results Across Your Client Portfolio",
    description:
        "Optimize client websites with AI-powered research, chat-based editing, and A/B testing. No developers. No per-client tool licenses. Free to start.",
};

export default function AgenciesPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <VerticalContent vertical="agencies" />
            <FooterSection />
        </div>
    );
}
