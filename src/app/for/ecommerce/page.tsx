import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { VerticalContent } from "../vertical-content";

export const metadata: Metadata = {
    title: "AI A/B Testing for E-commerce: Optimize Product Pages Without Code",
    description:
        "Turn more visitors into buyers with AI-powered product page optimization. No developer needed. Free to start. Works with Shopify, WooCommerce, and more.",
};

export default function EcommercePage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <VerticalContent vertical="ecommerce" />
            <FooterSection />
        </div>
    );
}
