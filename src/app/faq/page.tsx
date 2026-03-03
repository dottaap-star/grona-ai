import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { FAQContent } from "./faq-content";
import { faqItems } from "./faq-data";

export const metadata: Metadata = {
    title: "Grona FAQ: Pricing, Features, Integrations, and More",
    description:
        "Answers to common questions about Grona's AI-powered CRO platform. Pricing, platform compatibility, security, and how it compares to VWO, ChatGPT, and more.",
};

export default function FAQPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <div className="bg-primary">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header isFloating />
            <FAQContent />
            <FooterSection />
        </div>
    );
}
