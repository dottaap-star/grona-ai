import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { FooterSection } from "@/app/homepage/footer-section";
import PricingContent from "./pricing-content";

export default function PricingPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <PricingContent />
            <FooterSection />
        </div>
    );
}
