"use client";

import Image from "next/image";
import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { SandboxUrlForm } from "@/components/marketing/sandbox-url-form";
import { SectionDivider } from "@/components/shared-assets/section-divider";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Integration {
    name: string;
    logo: string;
    note: string;
}

const cmsIntegrations: Integration[] = [
    { name: "Shopify", logo: "/assets/images/integrations/mono/shopify.svg", note: "Paste in theme.liquid" },
    { name: "WordPress", logo: "/assets/images/integrations/mono/wordpress.svg", note: "Plugin or header injection" },
    { name: "Webflow", logo: "/assets/images/integrations/mono/webflow.svg", note: "Custom code in site settings" },
    { name: "Wix", logo: "/assets/images/integrations/mono/wix.svg", note: "Tracking tools or custom code" },
    { name: "WooCommerce", logo: "/assets/images/integrations/mono/woocommerce.svg", note: "Same as WordPress" },
    { name: "Elementor", logo: "/assets/images/integrations/mono/elementor.svg", note: "Custom code widget or header" },
    { name: "Squarespace", logo: "/assets/images/integrations/mono/squarespace.svg", note: "Code injection in settings" },
    { name: "GTM", logo: "/assets/images/integrations/mono/gtm.svg", note: "Custom HTML tag" },
];

const analyticsIntegrations: Integration[] = [
    { name: "GA4", logo: "/assets/images/integrations/mono/ga4.svg", note: "Track experiment impact on goals" },
    { name: "Microsoft Clarity", logo: "/assets/images/integrations/mono/clarity.svg", note: "See session replays of tests" },
    { name: "HubSpot", logo: "/assets/images/integrations/mono/hubspot.svg", note: "Sync with CRM and marketing" },
    { name: "Google Ads", logo: "/assets/images/integrations/mono/google-ads.svg", note: "Optimize landing pages for ads" },
    { name: "Facebook Ads", logo: "/assets/images/integrations/mono/facebook-ads.svg", note: "Test ad landing pages" },
];

const crossLinks = [
    { label: "Learn about features", href: "/features" },
    { label: "See how it works", href: "/how-it-works" },
    { label: "Read our case study", href: "/case-studies/mouthshield" },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const IntegrationLogo = ({ name, logo, note }: { name: string; logo: string; note: string }) => (
    <div className="flex flex-col items-center gap-3 text-center">
        <span className="flex size-16 items-center justify-center rounded-xl bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-20">
            <Image alt={name} src={logo} width={48} height={48} className="size-10 md:size-12" />
        </span>
        <span className="text-sm font-medium text-primary">{name}</span>
        <span className="text-xs text-tertiary">{note}</span>
    </div>
);

// ---------------------------------------------------------------------------
// S1: Hero
// ---------------------------------------------------------------------------

const Hero = () => (
    <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">
                    Works with your stack
                </h1>
                <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                    One snippet. Any platform. Set up in under 2 minutes.
                </p>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S2: CMS Platforms
// ---------------------------------------------------------------------------

const CmsPlatforms = () => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                <span className="text-sm font-semibold text-brand-secondary md:text-md">Integrations</span>
                <h2 className="mt-3 text-display-xs font-semibold text-primary md:text-display-sm">
                    CMS &amp; Website Platforms
                </h2>
                <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                    Drop in one script tag. Grona works wherever your site is hosted.
                </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:mt-16 md:grid-cols-4 md:gap-x-8 md:gap-y-12">
                {cmsIntegrations.map((integration) => (
                    <IntegrationLogo key={integration.name} {...integration} />
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S3: Analytics & Marketing
// ---------------------------------------------------------------------------

const AnalyticsMarketing = () => (
    <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                <span className="text-sm font-semibold text-brand-secondary md:text-md">Analytics</span>
                <h2 className="mt-3 text-display-xs font-semibold text-primary md:text-display-sm">
                    Analytics &amp; Marketing
                </h2>
                <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                    Grona connects with the tools you already use to measure results.
                </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:mt-16 md:grid-cols-5 md:gap-x-8 md:gap-y-12">
                {analyticsIntegrations.map((integration) => (
                    <IntegrationLogo key={integration.name} {...integration} />
                ))}
            </div>
        </div>
    </section>
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
                        How installation works
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Three steps. No npm packages. No build steps. No developer needed.
                    </p>
                </div>

                {/* 3-step flow */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex size-10 items-center justify-center rounded-full bg-brand-solid text-sm font-semibold text-white">
                            1
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-primary">Copy the snippet</h3>
                        <p className="mt-2 text-sm text-tertiary">
                            Grab your one-line script from the Grona dashboard.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="flex size-10 items-center justify-center rounded-full bg-brand-solid text-sm font-semibold text-white">
                            2
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-primary">Paste into your site</h3>
                        <p className="mt-2 text-sm text-tertiary">
                            Add it to your HTML head tag or paste it as a custom HTML tag in GTM.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="flex size-10 items-center justify-center rounded-full bg-brand-solid text-sm font-semibold text-white">
                            3
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-primary">Done</h3>
                        <p className="mt-2 text-sm text-tertiary">
                            Grona starts tracking immediately. Create your first test.
                        </p>
                    </div>
                </div>

                {/* Code block */}
                <div className="mt-12 overflow-hidden rounded-xl border border-secondary bg-secondary md:mt-16">
                    <div className="border-b border-secondary px-4 py-2">
                        <span className="text-xs font-medium text-quaternary">HTML</span>
                    </div>
                    <pre className="overflow-x-auto p-4 text-sm text-secondary">
                        <code>{'<script src="https://cdn.grona.ai/g.js" data-id="YOUR_ID" async></script>'}</code>
                    </pre>
                </div>

                <p className="mt-8 text-center text-md font-medium text-tertiary">
                    One line of code. Or use Google Tag Manager.
                </p>
                <p className="mt-2 text-center text-md font-semibold text-brand-secondary">
                    No npm packages. No build steps. No developer needed.
                </p>
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
                    Your platform is supported. Try it now.
                </h2>
                <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">
                    Free to start. Live test in minutes.
                </p>
                <SandboxUrlForm variant="on-brand" className="mt-8 max-w-lg md:mt-12" />
                <div className="mt-6">
                    <Button href="/pricing" size="lg" color="link-color">
                        See pricing
                    </Button>
                </div>
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

export function IntegrationsContent() {
    return (
        <div className="bg-primary">
            <Hero />
            <SectionDivider />
            <CmsPlatforms />
            <SectionDivider />
            <AnalyticsMarketing />
            <SectionDivider />
            <Installation />
            <SectionDivider />
            <BottomCTA />
        </div>
    );
}
