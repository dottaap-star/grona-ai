"use client";

import type { FC } from "react";
import { ArrowRight, CheckCircle, XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { SandboxUrlForm } from "@/components/marketing/sandbox-url-form";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { vwoData } from "./vwo/data";
import { optimizelyData } from "./optimizely/data";
import { googleOptimizeData } from "./google-optimize/data";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ComparisonRow {
    feature: string;
    competitor: string | boolean;
    grona: string | boolean;
}

interface GronaAdvantage {
    icon: FC<{ className?: string }>;
    title: string;
    description: string;
}

export interface ComparisonPageData {
    competitor: string;
    hero: {
        h1: string;
        subtitle: string;
    };
    tableRows: ComparisonRow[];
    gronaAdvantages: GronaAdvantage[];
    competitorAdvantages: string[];
    idealFor: string[];
    notIdealFor: string[];
    crossLinks: { label: string; href: string }[];
}

const dataMap = {
    vwo: vwoData,
    optimizely: optimizelyData,
    "google-optimize": googleOptimizeData,
} as const;

export type CompetitorKey = keyof typeof dataMap;

// ---------------------------------------------------------------------------
// Section 1: Hero
// ---------------------------------------------------------------------------

const Hero = ({ h1, subtitle }: { h1: string; subtitle: string }) => (
    <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">{h1}</h1>
                <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">{subtitle}</p>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Section 2: Comparison Table
// ---------------------------------------------------------------------------

const TableSection = ({ competitor, rows }: { competitor: string; rows: ComparisonRow[] }) => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-8 text-display-xs font-semibold text-primary md:mb-12 md:text-display-sm">
                    Feature comparison
                </h2>
                <ComparisonTable competitor={competitor} rows={rows} />
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Section 3: What Grona Does That [X] Doesn't
// ---------------------------------------------------------------------------

const GronaAdvantagesSection = ({ competitor, advantages }: { competitor: string; advantages: GronaAdvantage[] }) => (
    <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                    What Grona does that {competitor} doesn't
                </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16">
                {advantages.map((item) => (
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
// Section 4: What [X] Does That Grona Doesn't (Honesty)
// ---------------------------------------------------------------------------

const CompetitorAdvantagesSection = ({ competitor, advantages }: { competitor: string; advantages: string[] }) => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                    What {competitor} does that Grona doesn't
                </h2>
                <p className="mt-4 text-md text-tertiary">
                    We believe in transparency. Here's where {competitor} has capabilities Grona doesn't offer.
                </p>
                <ul className="mt-8 flex flex-col gap-4">
                    {advantages.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-fg-quaternary" />
                            <span className="text-md text-secondary">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Section 5: Who Should Choose Grona
// ---------------------------------------------------------------------------

const WhoShouldChoose = ({ idealFor, notIdealFor }: { idealFor: string[]; notIdealFor: string[] }) => (
    <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                    Who should choose Grona
                </h2>
                <p className="mt-4 text-md text-tertiary">
                    Real results: MouthShield saw up to 40% conversion lift on their product pages using Grona.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="text-lg font-semibold text-primary">Grona is ideal if you</h3>
                        <ul className="mt-4 flex flex-col gap-3">
                            {idealFor.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-fg-success-secondary" />
                                    <span className="text-md text-secondary">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-primary">Grona may not be right if you</h3>
                        <ul className="mt-4 flex flex-col gap-3">
                            {notIdealFor.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <XClose className="mt-0.5 size-5 shrink-0 text-fg-quaternary" />
                                    <span className="text-md text-secondary">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Section 6: CTA
// ---------------------------------------------------------------------------

const BottomCTA = ({ crossLinks }: { crossLinks: { label: string; href: string }[] }) => (
    <section className="bg-brand-section py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">
                    See the difference yourself
                </h2>
                <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">
                    Paste your URL. Chat with AI for research, suggestions, and a live test in minutes.
                </p>
                <SandboxUrlForm variant="on-brand" className="mt-8 max-w-lg md:mt-12" />
                <div className="mt-6">
                    <Button
                        href="https://app.grona.ai/signup"
                        size="lg"
                        color="secondary"
                    >
                        Start Free
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

export const ComparisonContent = ({ competitor }: { competitor: CompetitorKey }) => {
    const data = dataMap[competitor];
    return (
        <div className="bg-primary">
            <Hero h1={data.hero.h1} subtitle={data.hero.subtitle} />
            <SectionDivider />
            <TableSection competitor={data.competitor} rows={data.tableRows} />
            <GronaAdvantagesSection competitor={data.competitor} advantages={data.gronaAdvantages} />
            <CompetitorAdvantagesSection competitor={data.competitor} advantages={data.competitorAdvantages} />
            <WhoShouldChoose idealFor={data.idealFor} notIdealFor={data.notIdealFor} />
            <BottomCTA crossLinks={data.crossLinks} />
        </div>
    );
};
