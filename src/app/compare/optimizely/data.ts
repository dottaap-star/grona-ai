import {
    MessageChatCircle,
    Clock,
    CurrencyDollar,
    UserCheck01,
} from "@untitledui/icons";
import type { ComparisonPageData } from "../comparison-content";

export const optimizelyData: ComparisonPageData = {
    competitor: "Optimizely",
    hero: {
        h1: "You don't need Optimizely",
        subtitle: "Enterprise-grade results without enterprise-grade complexity or cost.",
    },
    tableRows: [
        { feature: "Pricing", competitor: "~$36K+/yr (annual contracts)", grona: "Free, $40/mo Pro" },
        { feature: "Free tier", competitor: "Feature flags only", grona: "Yes, full product" },
        { feature: "AI capabilities", competitor: "Opal (credit-based)", grona: "Built-in, included" },
        { feature: "Setup complexity", competitor: "Weeks, requires engineering", grona: "Minutes, no developer" },
        { feature: "Chat-first interface", competitor: false, grona: true },
        { feature: "No-code testing", competitor: "Web Experimentation only", grona: "Yes, all features" },
        { feature: "Developer required", competitor: "Most products: yes", grona: "No" },
        { feature: "Server-side testing", competitor: true, grona: false },
        { feature: "Feature flags", competitor: true, grona: false },
        { feature: "CMS", competitor: "Separate product", grona: false },
        { feature: "Competitor research", competitor: false, grona: true },
        { feature: "Contract type", competitor: "Annual only", grona: "Month-to-month" },
    ],
    gronaAdvantages: [
        {
            icon: Clock,
            title: "Minutes to set up, not weeks",
            description:
                "Paste your URL and start testing. Optimizely requires engineering resources, SDK integration, and weeks of implementation before your first test.",
        },
        {
            icon: CurrencyDollar,
            title: "A fraction of the cost",
            description:
                "Grona starts free and scales to $40/mo. Optimizely starts at roughly $36K/yr with annual contracts. That's 75x more for testing alone.",
        },
        {
            icon: MessageChatCircle,
            title: "No developer required",
            description:
                "Grona's chat interface lets marketers run research, create tests, and deploy changes without engineering tickets. Optimizely's full platform requires dedicated developers.",
        },
        {
            icon: UserCheck01,
            title: "Built for marketers, not engineers",
            description:
                "Every workflow is designed for marketing teams. Optimizely's 9-product DXP is built for enterprise engineering organizations.",
        },
    ],
    competitorAdvantages: [
        "If you need server-side experimentation and feature flagging at scale, Optimizely is built for that",
        "If you need a full digital experience platform (CMS, commerce, personalization), Optimizely covers more ground",
        "If you have dedicated engineers and need enterprise-grade governance, SSO, and compliance, Optimizely may be the better fit",
    ],
    idealFor: [
        "Are a marketing team that wants to run tests without engineering support",
        "Need results quickly without months of onboarding",
        "Want AI-powered research and implementation in one tool",
        "Have a budget measured in hundreds, not tens of thousands",
        "Value flexibility with month-to-month billing",
    ],
    notIdealFor: [
        "Need server-side experimentation or feature flagging at scale",
        "Require a full digital experience platform (CMS, commerce, personalization)",
        "Have 500+ employees and need enterprise governance controls",
        "Already have a dedicated CRO engineering team",
    ],
    crossLinks: [
        { label: "See all features", href: "/features" },
        { label: "View pricing", href: "/pricing" },
        { label: "How it works", href: "/how-it-works" },
        { label: "Read MouthShield case study", href: "/case-studies/mouthshield" },
    ],
};
