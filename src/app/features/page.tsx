import FeaturesContent from "./features-content";
import { FooterSection as FooterLarge01 } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";

export default function FeaturesPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <FeaturesContent />
            <FooterLarge01 />
        </div>
    );
}
