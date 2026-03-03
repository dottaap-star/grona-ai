import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
    title: "About Grona: Making CRO Accessible to Every Team",
    description: "Grona is building the AI-powered CRO platform that makes conversion optimization accessible to marketing teams of any size. Meet the team.",
};

export default function AboutUsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        mainEntity: {
            "@type": "Organization",
            name: "Grona",
            url: "https://grona.ai",
            description:
                "AI-powered CRO platform that makes conversion optimization accessible to every team.",
            founder: [
                {
                    "@type": "Person",
                    name: "Ali Sohail",
                    jobTitle: "Co-founder, Operations",
                },
                {
                    "@type": "Person",
                    name: "Saad Sohail",
                    jobTitle: "Co-founder, Marketing & Growth",
                },
                {
                    "@type": "Person",
                    name: "Fahd Arif Sheikh",
                    jobTitle: "Co-founder, Engineering & Product",
                },
            ],
        },
    };

    return (
        <div className="bg-primary">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header isFloating />
            <AboutContent />
            <FooterSection />
        </div>
    );
}
