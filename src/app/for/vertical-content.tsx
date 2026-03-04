"use client";

import type { FC } from "react";
import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { SandboxUrlForm } from "@/components/marketing/sandbox-url-form";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { YouTubeHeroVideo } from "@/app/homepage/youtube-hero-video";
import { agenciesData } from "./agencies/data";
import { ecommerceData } from "./ecommerce/data";
import { saasData } from "./saas/data";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PainPoint {
    icon: FC<{ className?: string }>;
    title: string;
    description: string;
}

interface Solution {
    icon: FC<{ className?: string }>;
    title: string;
    description: string;
}

interface UseCase {
    title: string;
    description: string;
}

export interface VerticalPageData {
    hero: {
        h1: string;
        subtitle: string;
        placeholder: string;
    };
    painPoints: PainPoint[];
    solutions: Solution[];
    metric: {
        value: string;
        label: string;
        caseStudy?: { label: string; href: string };
    };
    useCases: UseCase[];
    cta: {
        headline: string;
        subtitle: string;
    };
    crossLinks: { label: string; href: string }[];
}

const dataMap = {
    agencies: agenciesData,
    ecommerce: ecommerceData,
    saas: saasData,
} as const;

export type VerticalKey = keyof typeof dataMap;

// ---------------------------------------------------------------------------
// Section 1: Hero
// ---------------------------------------------------------------------------

const Hero = ({ h1, subtitle, placeholder }: { h1: string; subtitle: string; placeholder: string }) => (
    <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">{h1}</h1>
                <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">{subtitle}</p>
                <SandboxUrlForm placeholder={placeholder} className="mt-8 max-w-lg md:mt-12" />
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Section 2: Pain Points
// ---------------------------------------------------------------------------

const PainPointsSection = ({ painPoints }: { painPoints: PainPoint[] }) => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                    Sound familiar?
                </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16">
                {painPoints.map((point) => (
                    <div
                        key={point.title}
                        className="flex flex-col rounded-2xl border border-secondary bg-primary p-6 md:p-8"
                    >
                        <FeaturedIcon icon={point.icon} size="lg" color="error" theme="light" />
                        <h3 className="mt-5 text-lg font-semibold text-primary">{point.title}</h3>
                        <p className="mt-2 text-md text-tertiary">{point.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Section 3: How Grona Solves
// ---------------------------------------------------------------------------

const SolutionsSection = ({ solutions }: { solutions: Solution[] }) => (
    <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                    How Grona helps
                </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16">
                {solutions.map((item) => (
                    <div
                        key={item.title}
                        className="flex flex-col rounded-2xl border border-secondary bg-primary p-6 md:p-8"
                    >
                        <FeaturedIcon icon={item.icon} size="lg" color="brand" theme="light" />
                        <h3 className="mt-5 text-lg font-semibold text-primary">{item.title}</h3>
                        <p className="mt-2 text-md text-tertiary">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Section 4: Metrics
// ---------------------------------------------------------------------------

const MetricsSection = ({
    metric,
}: {
    metric: { value: string; label: string; caseStudy?: { label: string; href: string } };
}) => (
    <section className="bg-brand-section py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <p className="text-display-md font-semibold text-primary_on-brand md:text-display-xl">
                    {metric.value}
                </p>
                <p className="mt-4 text-lg text-tertiary_on-brand md:text-xl">{metric.label}</p>
                {metric.caseStudy && (
                    <a
                        href={metric.caseStudy.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tertiary_on-brand transition-colors hover:text-primary_on-brand"
                    >
                        {metric.caseStudy.label}
                        <ArrowRight className="size-4" />
                    </a>
                )}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Section 5: Use Cases
// ---------------------------------------------------------------------------

const UseCasesSection = ({ useCases }: { useCases: UseCase[] }) => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                    What you can test
                </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16">
                {useCases.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-secondary bg-primary p-6 md:p-8"
                    >
                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                        <p className="mt-2 text-md text-tertiary">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Section 6: CTA
// ---------------------------------------------------------------------------

const BottomCTA = ({ crossLinks, placeholder, headline, subtitle }: { crossLinks: { label: string; href: string }[]; placeholder: string; headline: string; subtitle: string }) => (
    <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                    {headline}
                </h2>
                <p className="mt-4 text-md text-tertiary">
                    {subtitle}
                </p>
                <SandboxUrlForm placeholder={placeholder} className="mt-8" />
                <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {crossLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary transition-colors hover:text-brand-secondary_hover"
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

export const VerticalContent = ({ vertical }: { vertical: VerticalKey }) => {
    const data = dataMap[vertical];
    return (
        <div className="bg-primary">
            <Hero h1={data.hero.h1} subtitle={data.hero.subtitle} placeholder={data.hero.placeholder} />
            <div className="mx-auto w-full max-w-container px-4 md:px-8 pb-16 md:pb-24 bg-secondary">
                <YouTubeHeroVideo />
            </div>
            <SectionDivider />
            <PainPointsSection painPoints={data.painPoints} />
            <SolutionsSection solutions={data.solutions} />
            <MetricsSection metric={data.metric} />
            <UseCasesSection useCases={data.useCases} />
            <BottomCTA crossLinks={data.crossLinks} placeholder={data.hero.placeholder} headline={data.cta.headline} subtitle={data.cta.subtitle} />
        </div>
    );
};
