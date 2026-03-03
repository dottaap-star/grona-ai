import type { Metadata } from "next";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { ChangelogContent } from "./changelog-content";

export const metadata: Metadata = {
    title: "Grona Changelog: Product Updates and New Features",
    description: "See what's new in Grona. Latest product updates, feature releases, and improvements to the AI-powered CRO platform.",
};

export default function ChangelogPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <ChangelogContent />
            <FooterSection />
        </div>
    );
}
