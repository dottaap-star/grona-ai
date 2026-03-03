import {
    Stars02,
    RefreshCcw05,
    SearchRefraction,
    Infinity as InfinityIcon,
} from "@untitledui/icons";
import type { ComparisonPageData } from "../comparison-content";

export const googleOptimizeData: ComparisonPageData = {
    competitor: "Google Optimize",
    hero: {
        h1: "The Google Optimize replacement that does more",
        subtitle: "Free, AI-powered, and actively improving.",
    },
    tableRows: [
        { feature: "Status", competitor: "Sunset (Sept 2023)", grona: "Active, improving" },
        { feature: "Pricing", competitor: "Was free / 360 ~$150K/yr", grona: "Free, $40/mo Pro" },
        { feature: "AI capabilities", competitor: false, grona: true },
        { feature: "Experiment limits", competitor: "5 simultaneous (free)", grona: "Unlimited" },
        { feature: "Chat interface", competitor: false, grona: true },
        { feature: "Competitor research", competitor: false, grona: true },
        { feature: "Native GA integration", competitor: "Yes (bidirectional)", grona: "GA4 compatible" },
        { feature: "Visual editor", competitor: "Basic", grona: "AI-powered" },
        { feature: "No-code", competitor: true, grona: true },
        { feature: "MVT combinations", competitor: "16 max (free)", grona: "No artificial limit" },
        { feature: "Active development", competitor: false, grona: true },
    ],
    gronaAdvantages: [
        {
            icon: Stars02,
            title: "Chat your way through optimization",
            description:
                "Google Optimize required you to design, write copy, and configure every test manually. With Grona, you chat with AI to research, write copy, and implement tests.",
        },
        {
            icon: InfinityIcon,
            title: "No experiment limits",
            description:
                "Google Optimize capped free users at 5 simultaneous experiments and 16 MVT combinations. Grona has no artificial limits on tests.",
        },
        {
            icon: SearchRefraction,
            title: "Built-in competitor research",
            description:
                "Google Optimize only tested your own site. Grona analyzes competitor sites, traffic sources, and ad strategies to inform your optimization decisions.",
        },
        {
            icon: RefreshCcw05,
            title: "Actively developed and improving",
            description:
                "Google Optimize was sunset in September 2023 with no replacement. Grona ships updates weekly and continues to expand AI capabilities.",
        },
    ],
    competitorAdvantages: [
        "If you need tight, bidirectional native GA integration with experiment data directly in GA reports, Google Optimize had a one-click connection Grona doesn't replicate. Grona is GA4 compatible but works as a standalone platform.",
    ],
    idealFor: [
        "Were using Google Optimize and need a free replacement",
        "Want to chat with AI instead of doing manual research, copy, and test setup",
        "Need more than 5 simultaneous experiments",
        "Want competitor intelligence alongside A/B testing",
        "Don't have a developer to build and deploy tests",
    ],
    notIdealFor: [
        "Need tight, bidirectional native GA integration as your primary analytics workflow",
        "Are looking for a pure GA4 extension rather than a standalone CRO platform",
    ],
    crossLinks: [
        { label: "See all features", href: "/features" },
        { label: "View pricing", href: "/pricing" },
        { label: "How it works", href: "/how-it-works" },
        { label: "Read MouthShield case study", href: "/case-studies/mouthshield" },
    ],
};
