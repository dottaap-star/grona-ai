"use client";

import Link from "next/link";
import { Badge } from "@/components/base/badges/badges";
import { SectionDivider } from "@/components/shared-assets/section-divider";

interface ChangelogEntry {
    date: string;
    title: string;
    category: "New Feature" | "Improvement" | "Fix";
    description: string;
}

const entries: ChangelogEntry[] = [
    {
        date: "2026-02-15",
        title: "Screenshot-to-chat: paste a screenshot, get suggestions",
        category: "New Feature",
        description:
            "Upload or paste a screenshot of any webpage into the chat. Grona analyzes the layout and content, then suggests specific changes to improve conversions. Works with your site or a competitor's.",
    },
    {
        date: "2026-02-01",
        title: "Element selector: point-and-click editing",
        category: "New Feature",
        description:
            "Select any element on your rendered site and ask the AI to modify it. Change headlines, swap images, adjust layouts, all without writing code or describing CSS selectors.",
    },
    {
        date: "2026-01-20",
        title: "Competitor intelligence dashboard",
        category: "New Feature",
        description:
            "Research competitors directly in Grona. Scrape their landing pages, view their Facebook and Google ads, and compare traffic data. All insights feed into your optimization strategy.",
    },
    {
        date: "2026-01-10",
        title: "Faster site rendering",
        category: "Improvement",
        description:
            "Reduced average site render time by 40%. Pages now load in under 3 seconds in the editor, making the optimization workflow significantly smoother.",
    },
    {
        date: "2025-12-15",
        title: "A/B test deployment and tracking",
        category: "New Feature",
        description:
            "Deploy A/B tests directly from Grona. One script snippet on your site splits traffic automatically. Track conversions, session depth, and engagement in real time.",
    },
];

function formatDate(dateString: string): string {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function getMonthYear(dateString: string): string {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    });
}

function getCategoryBadge(category: ChangelogEntry["category"]) {
    const colorMap = {
        "New Feature": "brand",
        Improvement: "blue",
        Fix: "gray",
    } as const;

    return (
        <Badge type="pill-color" color={colorMap[category]} size="sm">
            {category}
        </Badge>
    );
}

function groupByMonth(items: ChangelogEntry[]): Map<string, ChangelogEntry[]> {
    const groups = new Map<string, ChangelogEntry[]>();
    for (const entry of items) {
        const key = getMonthYear(entry.date);
        const existing = groups.get(key);
        if (existing) {
            existing.push(entry);
        } else {
            groups.set(key, [entry]);
        }
    }
    return groups;
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function HeroSection() {
    return (
        <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h1 className="text-display-md font-semibold text-primary md:text-display-lg">
                        What's new in Grona
                    </h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Product updates, new features, and improvements.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Changelog Feed                                                     */
/* ------------------------------------------------------------------ */
function ChangelogFeed() {
    const grouped = groupByMonth(entries);

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl">
                    {Array.from(grouped.entries()).map(([monthYear, items], groupIndex) => (
                        <div key={monthYear} className={groupIndex > 0 ? "mt-12 md:mt-16" : ""}>
                            <h2 className="text-lg font-semibold text-primary md:text-xl">{monthYear}</h2>
                            <div className="mt-6 flex flex-col gap-10 md:mt-8">
                                {items.map((entry) => (
                                    <div key={entry.date + entry.title} className="grid grid-cols-1 gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                                        <span className="text-sm font-medium text-quaternary md:pt-0.5">
                                            {formatDate(entry.date)}
                                        </span>
                                        <div>
                                            <div className="mb-2">{getCategoryBadge(entry.category)}</div>
                                            <h3 className="text-lg font-semibold text-primary">{entry.title}</h3>
                                            <p className="mt-2 text-md text-tertiary">{entry.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Subtle CTA                                                         */
/* ------------------------------------------------------------------ */
function SubtleCta() {
    return (
        <section className="bg-secondary py-8 md:py-12">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <p className="text-center text-md text-tertiary">
                    New to Grona?{" "}
                    <Link href="/features" className="font-semibold text-brand-secondary underline underline-offset-4 hover:text-brand-primary">
                        See what it can do.
                    </Link>
                    {" · "}
                    <Link href="/pricing" className="font-semibold text-brand-secondary underline underline-offset-4 hover:text-brand-primary">
                        See pricing.
                    </Link>
                </p>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */
export function ChangelogContent() {
    return (
        <>
            <HeroSection />
            <SectionDivider />
            <ChangelogFeed />
            <SectionDivider />
            <SubtleCta />
        </>
    );
}
