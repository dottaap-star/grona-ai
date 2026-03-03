import {
    ShoppingCart01,
    CursorClick02,
    CurrencyDollar,
    Code02,
    MessageChatCircle,
    Stars02,
    SearchRefraction,
    Monitor02,
} from "@untitledui/icons";
import type { VerticalPageData } from "../vertical-content";

export const ecommerceData: VerticalPageData = {
    hero: {
        h1: "Turn more visitors into buyers",
        subtitle: "AI-powered product page optimization for e-commerce teams. No developer needed.",
        placeholder: "Paste your Shopify store URL",
    },
    painPoints: [
        {
            icon: CursorClick02,
            title: "Low add-to-cart rates",
            description:
                "Your product page converts at 2%. Your competitor's converts at 5%. You don't know why.",
        },
        {
            icon: ShoppingCart01,
            title: "Cart abandonment",
            description:
                "Shoppers add items but leave before checkout. Friction in the flow is costing you revenue every day.",
        },
        {
            icon: CurrencyDollar,
            title: "No CRO budget",
            description:
                "Traditional CRO tools cost $200+/mo. E-commerce CRO agencies charge $3K-$10K/mo. You need results without the enterprise price tag.",
        },
        {
            icon: Code02,
            title: "No developer available",
            description:
                "You have test ideas but can't implement them without engineering help. Every change requires a ticket and a wait.",
        },
    ],
    solutions: [
        {
            icon: SearchRefraction,
            title: "Research your competitors' stores",
            description:
                "Ask the AI to analyze competitor product pages, pricing strategies, and CTA patterns. Use real data to inform your tests, not guesswork.",
        },
        {
            icon: MessageChatCircle,
            title: "Chat your way to better pages",
            description:
                "Describe what you want to test in plain English. No code required. The AI writes the copy, designs the variant, and deploys when you're ready.",
        },
        {
            icon: Stars02,
            title: "AI-powered A/B testing",
            description:
                "Set up traffic splitting with a click. Grona measures add-to-cart rates for each variant. No scripts to manage, no statisticians to hire.",
        },
        {
            icon: Monitor02,
            title: "Works with Shopify and more",
            description:
                "Shopify, WooCommerce, BigCommerce, or custom builds. Add a single script tag and start testing in minutes.",
        },
    ],
    metric: {
        value: "Up to 18%",
        label: "conversion lift for e-commerce. MouthShield saw 40% on their product pages.",
        caseStudy: {
            label: "Read the MouthShield case study",
            href: "/case-studies/mouthshield",
        },
    },
    useCases: [
        {
            title: "Product page headlines",
            description: "Test benefit-driven vs feature-driven headlines. Find the framing that drives add-to-cart.",
        },
        {
            title: "CTA buttons",
            description: "Test button text, color, size, and placement. Small changes often drive the biggest lifts.",
        },
        {
            title: "Checkout flow copy",
            description: "Reduce abandonment with optimized trust signals, urgency cues, and shipping messaging.",
        },
        {
            title: "Hero images and layout",
            description: "Test lifestyle vs product-only photography. Find the visual approach that converts your audience.",
        },
    ],
    cta: {
        headline: "Start optimizing your store",
        subtitle: "Free to start. No code required. Live test in minutes.",
    },
    crossLinks: [
        { label: "See pricing", href: "/pricing" },
        { label: "How it works", href: "/how-it-works" },
        { label: "Integrations", href: "/integrations" },
        { label: "MouthShield case study", href: "/case-studies/mouthshield" },
    ],
};
