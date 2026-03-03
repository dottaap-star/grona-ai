import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { CaseStudiesContent } from "./case-studies-content";

export const metadata: Metadata = {
    title: "Grona Case Studies: Real Conversion Optimization Results",
    description:
        "See how real businesses use Grona to increase conversions. Up to 40% lift on product pages, live in 10 days.",
};

export default function CaseStudiesPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <CaseStudiesContent />
            <FooterSection />
        </div>
    );
}
