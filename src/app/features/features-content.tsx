"use client";

import Image from "next/image";
import { useState } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle,
    Stars02,
    FlipBackward,
    Link01,
    SearchRefraction,
    MessageChatCircle,
    BarChartSquare02,
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { FeatureTabHorizontal } from "@/components/marketing/features/base-components/feature-tab";
import { BrowserMockup } from "@/components/shared-assets/browser-mockup";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

// ---------------------------------------------------------------------------
// Shared Components (reused across sections)
// ---------------------------------------------------------------------------


const ChatBubble = ({ text }: { text: string }) => (
    <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary">
        <span className="text-tertiary">&quot;</span>
        <span>{text}</span>
        <span className="text-tertiary">&quot;</span>
    </div>
);

const ChatExamples = ({ examples, className }: { examples: string[]; className?: string }) => (
    <div className={cx("flex flex-wrap gap-2", className)}>
        {examples.map((example) => (
            <ChatBubble key={example} text={example} />
        ))}
    </div>
);

const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
}) => {
    const { text, color, size, iconStyle = "contained" } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "contained" && (
                <div
                    className={cx(
                        "flex shrink-0 items-center justify-center rounded-full",
                        color === "success" ? "bg-success-secondary text-featured-icon-light-fg-success" : "bg-brand-primary text-featured-icon-light-fg-brand",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                >
                    <svg
                        width={size === "lg" ? 16 : size === "md" ? 15 : 13}
                        height={size === "lg" ? 14 : size === "md" ? 13 : 11}
                        viewBox="0 0 13 11"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            )}

            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-fg-success-primary" : "text-fg-brand-primary",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                />
            )}

            <span
                className={cx(
                    "text-tertiary",
                    size === "lg" ? "pt-0.5 text-lg md:pt-0" : size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md",
                    props.textClassName,
                )}
            >
                {text}
            </span>
        </li>
    );
};

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                        Everything you need to optimize
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-tertiary md:mt-6 md:text-xl">
                        Grona Research helps you find what to change. Grona Optimize lets you make the change, test it, and measure it, without code, without developers.
                    </p>
                </div>
            </div>

            {/* Product demo video */}
            <div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
                <div className="mx-auto w-full md:max-w-5xl rounded-2xl border border-secondary bg-secondary shadow-lg p-3 md:p-4">
                    <div className="overflow-hidden rounded-xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="block h-auto"
                            style={{ margin: "-6px", width: "calc(100% + 12px)", maxWidth: "none" }}
                            src="/assets/images/homepage/Demo.mp4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------------------------------
// Section 1: Grona Research — Tabbed Layout
// ---------------------------------------------------------------------------

const researchTabs = [
    {
        title: "Website Analysis",
        subtitle: "Ask the AI to audit structure, copy, CTAs, and conversion bottlenecks. A $2K-$5K CRO audit in minutes.",
        prompts: ["Analyze my homepage", "What's causing drop-offs on my product page?"],
        screenshotLabel: "Website analysis output in chat interface",
    },
    {
        title: "Competitor Intelligence",
        subtitle: "Ask the AI to analyze any competitor's site structure, messaging, CTAs, and brand identity. Then compare against yours.",
        prompts: ["How does my homepage compare to [competitor]?", "Who is [competitor] targeting?"],
        screenshotLabel: "Competitor comparison output",
    },
    {
        title: "Traffic Intelligence",
        subtitle: "SimilarWeb-powered traffic data. Monthly visits, sources, channels, and geographic breakdown for any site.",
        prompts: ["Where is most of my traffic coming from?", "What sources is [competitor] using?"],
        screenshotLabel: "Traffic data output in chat interface",
    },
    {
        title: "Ads Intelligence",
        subtitle: "Google Ads and Facebook Ads analysis. Ad copy themes, keyword alignment, CTA patterns, and creative trends.",
        prompts: ["What themes are working in my Google Ads?", "Show me [competitor's] Facebook ad strategy"],
        screenshotLabel: "Ads analysis output in chat interface",
    },
];

const GronaResearch = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Research</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Understand your market</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Before you change anything, know exactly what's broken and why.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="flex flex-col">
                        {researchTabs.map((tab, index) => (
                            <li key={tab.title} onClick={() => setCurrentTab(index)}>
                                <FeatureTabHorizontal
                                    title={tab.title}
                                    subtitle={tab.subtitle}
                                    isCurrent={index === currentTab}
                                    footer={
                                        index === currentTab ? (
                                            <ChatExamples examples={tab.prompts} />
                                        ) : undefined
                                    }
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="w-full self-center">
                        <BrowserMockup variant="dashboard" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------------------------------
// Mid-page CTA
// ---------------------------------------------------------------------------

const MidPageCTA = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">See what Grona can do for your site</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Get AI-powered analysis in under 2 minutes. No credit card required.
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-center">
                        <Button size="xl" href="https://app.grona.ai">Analyze my website free</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------------------------------
// Section 2: Grona Optimize — Hero Feature + Compact Grid
// ---------------------------------------------------------------------------

const GronaOptimize = () => {
    return (
        <>
            {/* Editor hero — full-width large mockup */}
            <section className="bg-primary py-16 md:pt-24 md:pb-0">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Optimize</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Act on what you learn</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Your actual website, editable through conversation. Describe changes in plain English. See them applied instantly.
                        </p>
                        <ChatExamples
                            className="mt-6 justify-center"
                            examples={[
                                "Change the headline to 'Start your free trial'",
                                "Make the CTA button larger and green",
                                "Rewrite the hero to focus on benefits",
                            ]}
                        />
                    </div>
                </div>
                <div className="mx-auto mt-12 w-full max-w-container px-4 md:mt-16 md:max-h-105 md:overflow-hidden md:px-8 lg:max-h-140">
                    <BrowserMockup variant="split" />
                </div>
            </section>

            {/* Supporting features — compact 2-column grid */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 md:gap-16">
                        <div className="flex flex-col items-center text-center">
                            <FeaturedIcon icon={Stars02} size="lg" color="brand" theme="modern" className="hidden md:inline-flex" />
                            <FeaturedIcon icon={Stars02} size="md" color="brand" theme="modern" className="inline-flex md:hidden" />
                            <h3 className="mt-4 text-lg font-semibold text-primary">AI writes the solution, not just the diagnosis</h3>
                            <p className="mt-1 text-md text-tertiary">
                                Generates deployable copy variations informed by your research. Multiple variants ready to test.
                            </p>
                            <ul className="mt-6 flex flex-col gap-3 self-start pl-2">
                                <CheckItemText size="sm" text="Research-informed copy variations" />
                                <CheckItemText size="sm" text="Multiple variants, not just one suggestion" />
                                <CheckItemText size="sm" text="Competitor analysis built in" />
                            </ul>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <FeaturedIcon icon={FlipBackward} size="lg" color="brand" theme="modern" className="hidden md:inline-flex" />
                            <FeaturedIcon icon={FlipBackward} size="md" color="brand" theme="modern" className="inline-flex md:hidden" />
                            <h3 className="mt-4 text-lg font-semibold text-primary">One script snippet. Any CMS. Live in minutes.</h3>
                            <p className="mt-1 text-md text-tertiary">
                                A/B or multivariate testing with traffic splitting. Real-time results with statistical significance.
                            </p>
                            <ul className="mt-6 flex flex-col gap-3 self-start pl-2">
                                <CheckItemText size="sm" text="Copy-paste JavaScript snippet" />
                                <CheckItemText size="sm" text="Shopify, WordPress, Webflow, Wix, and more" />
                                <CheckItemText size="sm" text="Statistical significance tracking" />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// ---------------------------------------------------------------------------
// Section 3: The Full Loop — Stepper/Timeline
// ---------------------------------------------------------------------------

const loopSteps = [
    { number: 1, title: "Paste your URL", description: "Grona loads your actual website", icon: Link01 },
    { number: 2, title: "Research", description: "Ask the AI to analyze your site, competitors, and traffic", icon: SearchRefraction },
    { number: 3, title: "Edit", description: "Chat to make changes and create variants", icon: MessageChatCircle },
    { number: 4, title: "Test", description: "Deploy an A/B test with one click", icon: FlipBackward },
    { number: 5, title: "Learn", description: "Track results and find your next optimization", icon: BarChartSquare02 },
];

const TheFullLoop = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">The full optimization loop</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        One connected workflow. No switching between tools.
                    </p>
                </div>

                {/* Desktop: horizontal flow with arrows */}
                <div className="mx-auto mt-12 hidden max-w-5xl md:mt-16 md:block">
                    <div className="flex items-start justify-center gap-3">
                        {loopSteps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.number} className="flex items-start gap-3">
                                    <div className="flex w-36 flex-col items-center text-center lg:w-44">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-brand-solid text-sm font-semibold text-white">
                                            {step.number}
                                        </div>
                                        <Icon className="mt-3 size-5 text-tertiary" />
                                        <h3 className="mt-2 text-md font-semibold text-primary">{step.title}</h3>
                                        <p className="mt-1 text-sm text-tertiary">{step.description}</p>
                                    </div>
                                    {i < loopSteps.length - 1 && (
                                        <ArrowRight className="mt-3 size-4 shrink-0 text-fg-quaternary" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <p className="mt-6 text-center text-sm text-brand-secondary">
                        Then repeat from Research. Every cycle compounds.
                    </p>
                </div>

                {/* Mobile: vertical flow */}
                <div className="mx-auto mt-12 flex flex-col items-center gap-2 md:hidden">
                    {loopSteps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.number} className="flex flex-col items-center gap-2">
                                <div className="flex size-10 items-center justify-center rounded-full bg-brand-solid text-sm font-semibold text-white">
                                    {step.number}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon className="size-4 text-tertiary" />
                                    <h3 className="text-md font-semibold text-primary">{step.title}</h3>
                                </div>
                                <p className="max-w-xs text-center text-sm text-tertiary">{step.description}</p>
                                {i < loopSteps.length - 1 && (
                                    <ArrowRight className="size-4 rotate-90 text-fg-quaternary" />
                                )}
                            </div>
                        );
                    })}
                    <p className="mt-4 text-sm text-brand-secondary">
                        Then repeat from Research. Every cycle compounds.
                    </p>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------------------------------
// Section 4: Integrations (unchanged)
// ---------------------------------------------------------------------------

const cmsIntegrations = [
    { name: "Shopify", logo: "/assets/images/integrations/shopify.svg" },
    { name: "WordPress", logo: "/assets/images/integrations/wordpress.svg" },
    { name: "Webflow", logo: "/assets/images/integrations/webflow.svg" },
    { name: "Wix", logo: "/assets/images/integrations/wix.svg" },
    { name: "WooCommerce", logo: "/assets/images/integrations/woocommerce.svg" },
    { name: "Elementor", logo: "/assets/images/integrations/elementor.svg" },
    { name: "Google Tag Manager", logo: "/assets/images/integrations/gtm.svg" },
];

const analyticsIntegrations = [
    { name: "Google Analytics 4", logo: "/assets/images/integrations/ga4.svg" },
    { name: "Microsoft Clarity", logo: "/assets/images/integrations/clarity.svg" },
    { name: "HubSpot", logo: "/assets/images/integrations/hubspot.svg" },
    { name: "Google Ads", logo: "/assets/images/integrations/google-ads.svg" },
    { name: "Facebook Ads", logo: "/assets/images/integrations/facebook-ads.svg" },
];

const IntegrationLogo = ({ name, logo }: { name: string; logo: string }) => (
    <div className="flex flex-col items-center gap-3">
        <span className="flex size-16 items-center justify-center rounded-xl bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-20">
            <Image alt={name} src={logo} width={48} height={48} className="size-10 md:size-12" />
        </span>
        <span className="text-xs font-medium text-tertiary md:text-sm">{name}</span>
    </div>
);

const Integrations = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center gap-12 md:gap-16">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Integrations</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Works with your stack</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            One script. Any website. No lock-in.
                        </p>
                    </div>

                    <div className="flex w-full max-w-3xl flex-col gap-10">
                        {/* CMS & Website Platforms */}
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-sm font-medium text-quaternary uppercase tracking-wide">CMS &amp; Website Platforms</p>
                            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                {cmsIntegrations.map((integration) => (
                                    <IntegrationLogo key={integration.name} {...integration} />
                                ))}
                            </div>
                        </div>

                        {/* Analytics & Marketing */}
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-sm font-medium text-quaternary uppercase tracking-wide">Analytics &amp; Marketing</p>
                            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                {analyticsIntegrations.map((integration) => (
                                    <IntegrationLogo key={integration.name} {...integration} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <a
                            href="/integrations"
                            className="inline-flex items-center gap-2 text-md font-semibold text-brand-secondary transition-colors hover:text-brand-secondary_hover"
                        >
                            See all integrations
                            <ArrowUpRight className="size-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------------------------------
// Section 5: Proof — Brand-dark metric card
// ---------------------------------------------------------------------------

const benchmarks = [
    { vertical: "SaaS", uplift: "+25%" },
    { vertical: "B2B Lead Gen", uplift: "+25%" },
    { vertical: "Travel", uplift: "+24%" },
    { vertical: "Health & Wellness", uplift: "+20%" },
    { vertical: "E-commerce", uplift: "+18%" },
    { vertical: "Financial Services", uplift: "+16%" },
];

const Proof = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center gap-12 md:gap-16">
                    {/* Hero metric — brand-dark card */}
                    <div className="flex w-full flex-col items-center gap-8 md:gap-16">
                        <div className="flex w-full flex-col self-center text-center md:max-w-3xl">
                            <span className="text-sm font-semibold text-brand-secondary md:text-md">Results</span>
                            <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                                Real results, not projections
                            </h2>
                        </div>

                        <div className="flex w-full flex-col items-center gap-3 rounded-2xl bg-brand-section px-6 py-10 text-center md:flex-row md:justify-center md:gap-16 md:px-16 md:py-14">
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-lg font-semibold text-tertiary_on-brand">lift on product page conversions</dt>
                                <dd className="text-display-lg font-semibold text-primary_on-brand md:text-display-xl">Up to 40%</dd>
                            </div>
                            <div className="hidden h-16 w-px bg-white/20 md:block" />
                            <div className="mt-2 md:mt-0 md:max-w-48 md:text-left">
                                <p className="text-sm text-tertiary_on-brand">
                                    E-commerce client, Middle East market, PDP optimization project
                                </p>
                                <a
                                    href="/case-studies/mouthshield"
                                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-tertiary_on-brand transition-colors hover:text-primary_on-brand"
                                >
                                    Read case study
                                    <ArrowRight className="size-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Benchmark table */}
                    <div className="w-full max-w-xl">
                        <h3 className="mb-6 text-center text-lg font-semibold text-primary">Industry Benchmarks for AI-Assisted CRO</h3>
                        <div className="overflow-hidden rounded-xl border border-secondary">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-secondary bg-secondary">
                                        <th className="px-6 py-3 text-left text-sm font-medium text-tertiary">Vertical</th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-tertiary">Average Uplift</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {benchmarks.map((row, index) => (
                                        <tr key={row.vertical} className={cx("border-b border-secondary last:border-b-0", index % 2 === 0 ? "bg-primary" : "bg-primary_alt")}>
                                            <td className="px-6 py-4 text-sm font-medium text-primary">{row.vertical}</td>
                                            <td className="px-6 py-4 text-right text-sm font-semibold text-brand-secondary">{row.uplift}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-center text-xs text-quaternary">
                            Industry benchmarks for AI-assisted CRO. Actual results vary based on traffic quality and site performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------------------------------
// Transition CTA
// ---------------------------------------------------------------------------

const TransitionCTA = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Up to 40% lift is just the start</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Every test teaches your site something new. Start your first optimization today.
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-center">
                        <Button size="xl" href="https://app.grona.ai">Get started free</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------------------------------
// Bottom CTA
// ---------------------------------------------------------------------------

const normalizeUrl = (url: string): string => {
    const trimmed = url.trim();
    if (!trimmed) return "";
    const clean = trimmed.replace(/\/+$/, "");
    if (!clean.match(/^https?:\/\//i)) return `https://${clean}`;
    return clean;
};

const BottomCTA = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">
                        All of this. Free to start.
                    </h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">
                        Paste your URL and start optimizing. No credit card required.
                    </p>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const url = formData.get("website-url") as string;
                            if (!url) return;
                            window.location.href = `https://app.grona.ai/try/edit/newCampaign?url=${encodeURIComponent(normalizeUrl(url))}`;
                        }}
                        className="mt-8 w-full max-w-lg md:mt-12"
                    >
                        <div className="flex items-center gap-2 rounded-xl bg-white/10 p-2">
                            <Input
                                isRequired
                                size="md"
                                name="website-url"
                                type="text"
                                placeholder="Enter your website URL"
                                wrapperClassName="border-0 ring-0 bg-white/10 flex-1 shadow-none rounded-lg"
                                inputClassName="text-primary_on-brand placeholder:text-tertiary_on-brand"
                            />
                            <Button
                                type="submit"
                                size="lg"
                                iconTrailing={ArrowUpRight}
                                className="[&>*[data-icon]]:text-white"
                            />
                        </div>
                    </Form>

                    <a
                        href="/pricing"
                        className="mt-4 text-sm font-semibold text-tertiary_on-brand transition-colors hover:text-primary_on-brand"
                    >
                        See pricing plans
                    </a>

                    {/* Price anchoring */}
                    <div className="mt-10 flex flex-col gap-2 text-sm text-tertiary_on-brand md:mt-12">
                        <p><a href="/compare/vwo" className="underline underline-offset-2 transition-colors hover:text-primary_on-brand">VWO</a> starts at <span className="font-medium text-primary_on-brand">$199/mo</span></p>
                        <p>Optimizely starts at <span className="font-medium text-primary_on-brand">$36K/yr</span></p>
                        <p>CRO agencies charge <span className="font-medium text-primary_on-brand">$3K-$10K/mo</span></p>
                        <p className="mt-2 text-md font-semibold text-primary_on-brand">Grona starts free.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------------------------------
// Page Composition
// ---------------------------------------------------------------------------

const FeaturesContent = () => {
    return (
        <div className="bg-primary">
            <Hero />

            <SectionDivider />

            <GronaResearch />

            <MidPageCTA />

            <GronaOptimize />

            <SectionDivider />

            <TheFullLoop />

            <SectionDivider />

            <Integrations />

            <Proof />

            <TransitionCTA />

            <BottomCTA />
        </div>
    );
};

export default FeaturesContent;
