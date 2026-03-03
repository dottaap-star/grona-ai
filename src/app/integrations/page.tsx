import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { IntegrationsContent } from "./integrations-content";

export const metadata: Metadata = {
    title: "Grona Integrations: Shopify, WordPress, Webflow, and More",
    description: "Grona works with any website platform. One snippet, set up in 2 minutes. See integrations with Shopify, WordPress, Webflow, GA4, and more.",
};

export default function IntegrationsPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <IntegrationsContent />
            <FooterSection />
        </div>
    );
}
