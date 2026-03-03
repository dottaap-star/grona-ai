"use client";

import Image from "next/image";
import { ArrowRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { BrowserMockup } from "@/components/shared-assets/browser-mockup";
import { SandboxUrlForm } from "@/components/marketing/sandbox-url-form";
import { SectionDivider } from "@/components/shared-assets/section-divider";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Step {
    number: number;
    title: string;
    description: string;
    keyLine: string;
    mockupVariant: "split" | "dashboard";
}

const steps: Step[] = [
    {
        number: 1,
        title: "Paste your URL",
        description:
            "Enter your website URL into Grona. Your site renders live on the right panel. Behind the scenes, Grona starts processing your page to prepare it for optimization.",
        keyLine: "Your site. Rendered live. Ready to optimize.",
        mockupVariant: "split",
    },
    {
        number: 2,
        title: "Research your market",
        description:
            "Explore your own site and spy on competitors. Scrape competitor websites to understand their messaging, look up their Facebook and Google ads, capture website traffic data, and ask the AI for comparisons and suggestions. You decide what to research and how deep to go.",
        keyLine: "Spy on competitors. Understand their messaging, ads, and traffic.",
        mockupVariant: "split",
    },
    {
        number: 3,
        title: "Create your variation",
        description:
            "Once you have an idea, describe what you want to change in the chat, or select elements directly in the browser and ask for suggestions. No code, no tickets. Just tell the AI what you want, or point and click.",
        keyLine: "No code. No tickets. Chat or point and click.",
        mockupVariant: "split",
    },
    {
        number: 4,
        title: "Preview your changes",
        description:
            "Your variation opens in a new tab within the live preview. See exactly what visitors will see. Refine until you're happy.",
        keyLine: "See exactly what your visitors will see.",
        mockupVariant: "split",
    },
    {
        number: 5,
        title: "Go live",
        description:
            "Switch on your campaign. Grona's script splits traffic between your original and variation, and tracks conversions automatically. Real-time results, statistical significance, winner detection.",
        keyLine: "One click. Your test is live.",
        mockupVariant: "dashboard",
    },
];

const overviewNodes = [
    "Paste URL",
    "Research",
    "Create Variation",
    "Preview",
    "Go Live",
];

const platforms = [
    { name: "Shopify", src: "/assets/images/integrations/shopify.svg" },
    { name: "WordPress", src: "/assets/images/integrations/wordpress.svg" },
    { name: "Webflow", src: "/assets/images/integrations/webflow.svg" },
    { name: "GTM", src: "/assets/images/integrations/gtm.svg" },
];

const crossLinks = [
    { label: "See all features", href: "/features" },
    { label: "See pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "MouthShield case study", href: "/case-studies/mouthshield" },
];

// ---------------------------------------------------------------------------
// S1: Hero
// ---------------------------------------------------------------------------

const Hero = () => (
    <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">
                    From URL to live A/B test in minutes
                </h1>
                <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                    Here's exactly what happens when you start with Grona. No code, no complexity.
                </p>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S2: Overview Visual
// ---------------------------------------------------------------------------

const OverviewVisual = () => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
                {/* Desktop: horizontal flow */}
                <div className="hidden items-center justify-center gap-3 md:flex">
                    {overviewNodes.map((node, i) => (
                        <div key={node} className="flex items-center gap-3">
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex size-10 items-center justify-center rounded-full bg-brand-solid text-sm font-semibold text-white">
                                    {i + 1}
                                </div>
                                <span className="text-sm font-medium text-secondary">{node}</span>
                            </div>
                            {i < overviewNodes.length - 1 && (
                                <ArrowRight className="mb-6 size-4 shrink-0 text-fg-quaternary" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile: vertical flow */}
                <div className="flex flex-col items-center gap-4 md:hidden">
                    {overviewNodes.map((node, i) => (
                        <div key={node} className="flex flex-col items-center gap-2">
                            <div className="flex size-10 items-center justify-center rounded-full bg-brand-solid text-sm font-semibold text-white">
                                {i + 1}
                            </div>
                            <span className="text-sm font-medium text-secondary">{node}</span>
                            {i < overviewNodes.length - 1 && (
                                <ArrowRight className="size-4 rotate-90 text-fg-quaternary" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S3: Step-by-Step Walkthrough
// ---------------------------------------------------------------------------

const StepSection = ({ step, reversed }: { step: Step; reversed: boolean }) => (
    <section className={step.number % 2 === 1 ? "bg-secondary py-16 md:py-24" : "bg-primary py-16 md:py-24"}>
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div
                className={`mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16 ${
                    reversed ? "md:flex-row-reverse" : ""
                }`}
            >
                {/* Text */}
                <div className="flex-1">
                    <Badge size="md" color="brand">
                        Step {step.number}
                    </Badge>
                    <h2 className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm">
                        {step.title}
                    </h2>
                    <p className="mt-4 text-md text-tertiary">{step.description}</p>
                    <p className="mt-4 text-md font-semibold text-brand-secondary">{step.keyLine}</p>
                </div>

                {/* Mockup */}
                <div className="w-full flex-1">
                    <BrowserMockup variant={step.mockupVariant} />
                </div>
            </div>
        </div>
    </section>
);

const Walkthrough = () => (
    <>
        {steps.map((step, i) => (
            <StepSection key={step.number} step={step} reversed={i % 2 === 1} />
        ))}
    </>
);

// ---------------------------------------------------------------------------
// S4: Installation
// ---------------------------------------------------------------------------

const Installation = () => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="text-center">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        One snippet. Any platform.
                    </h2>
                    <p className="mt-4 text-md text-tertiary">
                        Add one line of JavaScript to your site. Or paste it into GTM. That's it.
                    </p>
                </div>

                <div className="mt-10 overflow-hidden rounded-xl border border-secondary bg-secondary">
                    <div className="border-b border-secondary px-4 py-2">
                        <span className="text-xs font-medium text-quaternary">HTML</span>
                    </div>
                    <pre className="overflow-x-auto p-4 text-sm text-secondary">
                        <code>{'<script src="https://cdn.grona.ai/script.js" async></script>'}</code>
                    </pre>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
                    {platforms.map((platform) => (
                        <div key={platform.name} className="flex flex-col items-center gap-2">
                            <Image
                                src={platform.src}
                                alt={platform.name}
                                width={40}
                                height={40}
                                className="size-10"
                            />
                            <span className="text-xs font-medium text-tertiary">{platform.name}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Button href="/integrations" size="md" color="link-color" iconTrailing={ArrowRight}>
                        See all integrations
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S5: CTA
// ---------------------------------------------------------------------------

const BottomCTA = () => (
    <section className="bg-brand-section py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">
                    You just saw the process. Start step 1.
                </h2>
                <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">
                    Free to start. Live test in minutes.
                </p>
                <SandboxUrlForm variant="on-brand" className="mt-8 max-w-lg md:mt-12" />
                <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {crossLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-tertiary_on-brand transition-colors hover:text-primary_on-brand"
                        >
                            {link.label}
                            <ArrowRight className="size-3.5" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Page Composition
// ---------------------------------------------------------------------------

export const HowItWorksContent = () => (
    <div className="bg-primary">
        <Hero />
        <SectionDivider />
        <OverviewVisual />
        <Walkthrough />
        <Installation />
        <BottomCTA />
    </div>
);
