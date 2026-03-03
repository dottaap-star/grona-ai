import {
    MessageChatCircle,
    SearchRefraction,
    CurrencyDollar,
    Stars02,
} from "@untitledui/icons";
import type { ComparisonPageData } from "../comparison-content";

export const vwoData: ComparisonPageData = {
    competitor: "VWO",
    hero: {
        h1: "Grona vs VWO: AI-powered CRO for a fraction of the cost",
        subtitle: "Same capabilities. AI-powered. Free to start.",
    },
    tableRows: [
        { feature: "Pricing", competitor: "~$198+/mo (no public pricing)", grona: "Free, $40/mo Pro" },
        { feature: "Free tier", competitor: "30-day trial only", grona: "Yes, forever" },
        { feature: "AI copy generation", competitor: "Copilot (early access)", grona: true },
        { feature: "AI competitor research", competitor: false, grona: true },
        { feature: "Chat-first interface", competitor: false, grona: true },
        { feature: "Visual editor", competitor: true, grona: true },
        { feature: "A/B testing", competitor: true, grona: true },
        { feature: "No-code (client-side)", competitor: true, grona: true },
        { feature: "Developer required", competitor: "Server-side: yes", grona: "No" },
        { feature: "Server-side testing", competitor: true, grona: false },
        { feature: "Heatmaps", competitor: "Separate product", grona: false },
        { feature: "Integrations", competitor: "50+", grona: "Shopify, WordPress, any website" },
    ],
    gronaAdvantages: [
        {
            icon: MessageChatCircle,
            title: "Chat-first workflow",
            description:
                "Describe what you want in plain English. You chat with AI to handle research, copywriting, and implementation. VWO's Copilot is a sidebar assistant, not the primary interface.",
        },
        {
            icon: SearchRefraction,
            title: "Built-in competitor research",
            description:
                "Analyze any competitor's site structure, messaging, traffic sources, and ad strategy. VWO focuses on testing your own site, not understanding your market.",
        },
        {
            icon: CurrencyDollar,
            title: "Free forever tier",
            description:
                "Start optimizing without a credit card. VWO discontinued its free plan in late 2025 and now only offers a 30-day trial.",
        },
        {
            icon: Stars02,
            title: "AI-powered from the ground up",
            description:
                "Every step, from research to test creation, happens through conversation with AI. VWO added AI as an assistant layer on top of a traditional testing tool.",
        },
    ],
    competitorAdvantages: [
        "If you need server-side testing or feature flags, VWO offers both with mature infrastructure",
        "If you need heatmaps, session recordings, or form analytics, VWO Insights covers these (sold separately)",
        "If you need a granular visual editor with deep DOM manipulation, VWO's editor has years of refinement",
    ],
    idealFor: [
        "Want to chat with AI for research, copy, and implementation",
        "Need competitor intelligence alongside A/B testing",
        "Don't have a developer to set up and run tests",
        "Want to start testing for free, not just a trial",
        "Are a small-to-mid team without enterprise CRO budgets",
    ],
    notIdealFor: [
        "Need server-side experimentation or feature flags",
        "Require heatmaps, session recordings, or form analytics",
        "Have a dedicated CRO team managing hundreds of experiments",
        "Need deep integrations with enterprise martech stacks",
    ],
    crossLinks: [
        { label: "See all features", href: "/features" },
        { label: "View pricing", href: "/pricing" },
        { label: "How it works", href: "/how-it-works" },
        { label: "Read MouthShield case study", href: "/case-studies/mouthshield" },
    ],
};
