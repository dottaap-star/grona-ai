import type { FC } from "react";
import {
    BarChart07,
    BookClosed,
    Building07,
    ClockRefresh,
    Code02,
    Dataflow01,
    FileSearch02,
    LayersThree01,
    LifeBuoy01,
    Mail01,
    MessageChatSquare,
    Monitor04,
    ShoppingBag01,
    Stars02,
    Target04,
    Users01,
} from "@untitledui/icons";

export interface NavItem {
    label: string;
    href: string;
    description?: string;
    icon?: FC<{ className?: string }>;
}

export interface NavGroup {
    label: string;
    items: NavItem[];
}

export interface HeaderDropdown {
    label: string;
    groups: NavGroup[];
}

export type HeaderNavItem = { label: string; href: string } | HeaderDropdown;

function isDropdown(item: HeaderNavItem): item is HeaderDropdown {
    return "groups" in item;
}

export { isDropdown };

// ─── Header Navigation ────────────────────────────────────────────

export const headerNav: HeaderNavItem[] = [
    {
        label: "Product",
        groups: [
            {
                label: "Product",
                items: [
                    { label: "Features", href: "/features", description: "Everything Grona can do for your site", icon: LayersThree01 },
                    { label: "How It Works", href: "/how-it-works", description: "Four steps from URL to live A/B test", icon: Dataflow01 },
                    { label: "Integrations", href: "/integrations", description: "One snippet, any platform", icon: Code02 },
                ],
            },
            {
                label: "Compare",
                items: [
                    { label: "Grona vs VWO", href: "/compare/vwo", description: "Full-stack CRO without the price tag", icon: Target04 },
                    { label: "Grona vs Optimizely", href: "/compare/optimizely", description: "Enterprise features, startup pricing", icon: BarChart07 },
                    { label: "Google Optimize Alternative", href: "/compare/google-optimize", description: "The replacement that does more", icon: Monitor04 },
                ],
            },
        ],
    },
    {
        label: "Solutions",
        groups: [
            {
                label: "By industry",
                items: [
                    { label: "E-commerce", href: "/for/ecommerce", description: "Increase AOV and reduce cart abandonment", icon: ShoppingBag01 },
                    { label: "SaaS", href: "/for/saas", description: "Optimize trial-to-paid and feature adoption", icon: MessageChatSquare },
                    { label: "Agencies", href: "/for/agencies", description: "CRO results across your client portfolio", icon: Building07 },
                ],
            },
            {
                label: "Overview",
                items: [
                    { label: "All Solutions", href: "/solutions", description: "See how Grona fits your business", icon: Users01 },
                    { label: "Case Studies", href: "/case-studies", description: "Real results from real teams", icon: Stars02 },
                ],
            },
        ],
    },
    {
        label: "Resources",
        groups: [
            {
                label: "Learn",
                items: [
                    { label: "Blog", href: "/blog", description: "CRO guides, experiments, and insights", icon: BookClosed },
                    { label: "FAQ", href: "/faq", description: "Common questions answered", icon: LifeBuoy01 },
                    { label: "Changelog", href: "/changelog", description: "Product updates and new features", icon: ClockRefresh },
                ],
            },
            {
                label: "Company",
                items: [
                    { label: "About Us", href: "/about-us", description: "The team behind Grona", icon: Users01 },
                    { label: "Book a Demo", href: "/demo", description: "30-minute walkthrough for your business", icon: FileSearch02 },
                    { label: "Contact", href: "/contact", description: "Get in touch with the team", icon: Mail01 },
                ],
            },
        ],
    },
    { label: "Pricing", href: "/pricing" },
];

// ─── Footer Navigation ───────────────────────────────────────────

export const footerNav: NavGroup[] = [
    {
        label: "Product",
        items: [
            { label: "Features", href: "/features" },
            { label: "How It Works", href: "/how-it-works" },
            { label: "Integrations", href: "/integrations" },
            { label: "Pricing", href: "/pricing" },
            { label: "Changelog", href: "/changelog" },
        ],
    },
    {
        label: "Solutions",
        items: [
            { label: "E-commerce", href: "/for/ecommerce" },
            { label: "SaaS", href: "/for/saas" },
            { label: "Agencies", href: "/for/agencies" },
            { label: "All Solutions", href: "/solutions" },
            { label: "Case Studies", href: "/case-studies" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Blog", href: "/blog" },
            { label: "FAQ", href: "/faq" },
            { label: "Book a Demo", href: "/demo" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "About Us", href: "/about-us" },
            { label: "Contact", href: "/contact" },
            { label: "Grona vs VWO", href: "/compare/vwo" },
            { label: "Grona vs Optimizely", href: "/compare/optimizely" },
            { label: "Google Optimize Alt", href: "/compare/google-optimize" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms & Conditions", href: "/terms" },
        ],
    },
];
