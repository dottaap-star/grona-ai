import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
    title: "Grona Blog: CRO, A/B Testing, and Conversion Optimization",
    description: "Learn how to optimize your website with AI-powered CRO insights, A/B testing guides, and conversion optimization strategies.",
};

export default function BlogPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <BlogContent />
            <FooterSection />
        </div>
    );
}
