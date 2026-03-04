import {
    CurrencyDollar,
    Code02,
    Clock,
    Users01,
    SearchRefraction,
    MessageChatCircle,
    Building07,
    BarChartSquare02,
} from "@untitledui/icons";
import type { VerticalPageData } from "../vertical-content";

export const agenciesData: VerticalPageData = {
    hero: {
        h1: "Deliver CRO results for every client",
        subtitle:
            "AI-powered optimization across your client portfolio. No developers. No per-client tool licenses.",
        placeholder: "Paste your client's website URL",
    },
    painPoints: [
        {
            icon: CurrencyDollar,
            title: "Per-client tool costs",
            description:
                "VWO and Optimizely licenses per client eat into margins. CRO tooling costs more than most retainers justify.",
        },
        {
            icon: Code02,
            title: "Developer dependency",
            description:
                "Every test variation requires a developer. Clients don't have dev resources and neither does your team.",
        },
        {
            icon: Clock,
            title: "Manual research is slow",
            description:
                "Competitor audits, traffic analysis, and heatmap reviews take hours per client. That's time you're not billing.",
        },
        {
            icon: Users01,
            title: "Scaling is hard",
            description:
                "Adding a new client means adding headcount. You can't 10x your client list with the same team.",
        },
    ],
    solutions: [
        {
            icon: SearchRefraction,
            title: "Research any client's market in minutes",
            description:
                "AI analyzes competitors, traffic, ads, and site performance. Replace hours of manual audits with a single prompt.",
        },
        {
            icon: MessageChatCircle,
            title: "Create test variations through chat",
            description:
                "Describe what you want to change in plain English. No code, no developers, no tickets.",
        },
        {
            icon: Building07,
            title: "Manage multiple sites from one account",
            description:
                "Run campaigns across your entire client portfolio. One dashboard, one workflow.",
        },
        {
            icon: BarChartSquare02,
            title: "White-label results for clients",
            description:
                "Share reports and results with clients. Position Grona's output as your agency's deliverable.",
        },
    ],
    metric: {
        value: "Up to 40%",
        label: "conversion lift. MouthShield's agency partner delivered results in 10 days.",
        caseStudy: {
            label: "Read the MouthShield case study",
            href: "/case-studies/mouthshield",
        },
    },
    useCases: [
        {
            title: "Client onboarding audits",
            description:
                "Run a full site and competitor analysis for new clients in your first meeting. Impress before the contract is signed.",
        },
        {
            title: "Landing page optimization",
            description:
                "Test headlines, CTAs, and layouts across client sites without touching their codebase.",
        },
        {
            title: "Monthly CRO reporting",
            description:
                "Track test results and conversion lifts. Build data-backed QBR decks.",
        },
        {
            title: "Quick-win identification",
            description:
                "AI surfaces the highest-impact changes per client. Prioritize tests that move the needle fast.",
        },
    ],
    cta: {
        headline: "Start delivering CRO results for your clients",
        subtitle: "Free to start. No code required. Live test in minutes.",
    },
    crossLinks: [
        { label: "See pricing", href: "/pricing" },
        { label: "How it works", href: "/how-it-works" },
        { label: "MouthShield case study", href: "/case-studies/mouthshield" },
        { label: "Integrations", href: "/integrations" },
    ],
};
