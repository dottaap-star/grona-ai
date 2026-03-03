import {
    UserX01,
    TrendDown01,
    Clock,
    Code02,
    MessageChatCircle,
    Stars02,
    SearchRefraction,
    BarChartSquare02,
} from "@untitledui/icons";
import type { VerticalPageData } from "../vertical-content";

export const saasData: VerticalPageData = {
    hero: {
        h1: "Convert more trials without engineering tickets",
        subtitle: "AI-powered landing page optimization for SaaS marketing teams.",
        placeholder: "Paste your landing page URL",
    },
    painPoints: [
        {
            icon: UserX01,
            title: "Low trial signup rates",
            description:
                "Your landing page gets traffic but visitors don't convert. You're spending on acquisition with diminishing returns.",
        },
        {
            icon: TrendDown01,
            title: "Pricing page bounce",
            description:
                "Visitors check pricing and leave. Something about the layout, framing, or tier structure isn't clicking.",
        },
        {
            icon: Clock,
            title: "Slow iteration cycles",
            description:
                "Your landing page hasn't changed in 3 months because engineering is shipping product.",
        },
        {
            icon: Code02,
            title: "Developer bottleneck",
            description:
                "Marketing has the ideas but engineering has the backlog. CRO tests compete with product features for dev time.",
        },
    ],
    solutions: [
        {
            icon: SearchRefraction,
            title: "Research competitor landing pages",
            description:
                "Ask the AI to analyze competitor landing pages, messaging, and positioning before you test. Make decisions based on market data, not hunches.",
        },
        {
            icon: MessageChatCircle,
            title: "Test without engineering tickets",
            description:
                "Describe the test you want to run. No code required. The AI writes the copy, builds the variant, and deploys when you approve.",
        },
        {
            icon: Stars02,
            title: "AI-generated test variants",
            description:
                "Ask the AI what to test. It analyzes your page and competitors to suggest data-driven ideas in minutes.",
        },
        {
            icon: BarChartSquare02,
            title: "Measure what matters",
            description:
                "Track signups, trial starts, and engagement. Grona's statistical engine shows you when a winner is clear.",
        },
    ],
    metric: {
        value: "Up to 25%",
        label: "avg conversion lift for SaaS landing pages optimized with Grona's AI-powered testing",
    },
    useCases: [
        {
            title: "Homepage hero section",
            description: "Test headlines, subheadings, and CTAs. Find the value proposition that resonates with your ICP.",
        },
        {
            title: "Pricing page layout",
            description: "Test tier names, feature ordering, and plan highlighting. Optimize the page that closes deals.",
        },
        {
            title: "Trial signup form",
            description: "Test form fields, button copy, and social proof placement. Remove friction from your conversion point.",
        },
        {
            title: "Feature comparison tables",
            description: "Test which features to highlight, how to frame them, and where to place upgrade CTAs.",
        },
    ],
    cta: {
        headline: "Start optimizing your landing pages",
        subtitle: "Free to start. No code required. Live test in minutes.",
    },
    crossLinks: [
        { label: "See pricing", href: "/pricing" },
        { label: "How it works", href: "/how-it-works" },
        { label: "Integrations", href: "/integrations" },
    ],
};
