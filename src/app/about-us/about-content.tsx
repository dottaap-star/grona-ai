"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { LinkedIn } from "@/components/foundations/social-icons";
import { SectionDivider } from "@/components/shared-assets/section-divider";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const founders = [
    {
        name: "Ali Sohail",
        role: "Co-founder, Operations",
        bio: "Third-time founder with 10+ years in the startup ecosystem. Led delivery teams at bp and Toyota.",
        linkedin: "https://www.linkedin.com/in/alisohail/",
        image: "/assets/images/team/Ali Sohail.JPG",
    },
    {
        name: "Saad Sohail",
        role: "Co-founder, Marketing & Growth",
        bio: "10+ years turning website traffic into revenue across MENA and Europe. Led personalization strategies for DHL, Mazda, and enterprise clients.",
        linkedin: "https://www.linkedin.com/in/saadsohail5/",
        image: "/assets/images/team/Saad Sohail.jpg",
    },
    {
        name: "Fahd Arif Sheikh",
        role: "Co-founder, Engineering & Product",
        bio: "Early product leader at Unlayer (YC S22), scaling customers 5x and revenue 6x. Self-taught developer and product architect.",
        linkedin: "https://www.linkedin.com/in/fahd-sheikh/",
        image: "/assets/images/team/Fahd Arif Sheikh.JPG",
    },
];

const metrics = [
    { value: "100+", label: "Websites optimized through our platform and consulting" },
    { value: "Up to 40%", label: "Conversion lift for clients" },
    { value: "Under 2 min", label: "Average setup time" },
];

// ---------------------------------------------------------------------------
// Helper: Initial Avatar (fallback for missing photos)
// ---------------------------------------------------------------------------

const avatarColors = ["bg-brand-solid", "bg-fg-success-primary", "bg-fg-warning-primary"];

function InitialAvatar({ name, index }: { name: string; index: number }) {
    const initial = name.charAt(0).toUpperCase();
    return (
        <div
            className={`flex h-full w-full items-center justify-center rounded-xl text-display-md font-semibold text-white ${avatarColors[index % avatarColors.length]}`}
        >
            {initial}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Helper: Founder Card
// ---------------------------------------------------------------------------

function FounderCard({ founder, index }: { founder: (typeof founders)[number]; index: number }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-secondary bg-secondary shadow-xs">
            <div className="relative aspect-[4/5] w-full bg-tertiary">
                {!imgError ? (
                    <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <InitialAvatar name={founder.name} index={index} />
                )}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-primary">{founder.name}</h3>
                        <p className="text-sm font-medium text-brand-secondary">{founder.role}</p>
                    </div>
                    <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on LinkedIn`}
                        className="rounded-lg p-2 text-quaternary transition-colors hover:text-primary"
                    >
                        <LinkedIn size={20} />
                    </a>
                </div>
                <p className="text-md text-tertiary">{founder.bio}</p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function HeroSection() {
    return (
        <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h1 className="text-display-md font-semibold text-primary md:text-display-lg">
                        Making CRO accessible to every team
                    </h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        We believe every business should be able to optimize their website without hiring an agency or
                        waiting on developers.
                    </p>
                </div>
            </div>
        </section>
    );
}

function ProblemSection() {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        The problem we&apos;re solving
                    </h2>
                </div>

                <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-6 md:mt-12">
                    <p className="text-md text-tertiary md:text-lg">
                        Conversion rate optimization has always been expensive and technical. The tools cost hundreds per
                        month, require developers to implement changes, and take weeks to show results.
                    </p>
                    <p className="text-md text-tertiary md:text-lg">
                        Agencies charge $3,000 to $10,000 per month for what often amounts to a few landing page tweaks
                        and a monthly report. Enterprise tools like VWO and Optimizely start at $199 per month and still
                        need a developer to build variations.
                    </p>
                    <p className="text-md text-tertiary md:text-lg">
                        We built Grona to change that. By combining AI with a chat-first interface, we made CRO
                        accessible to any team that can describe what they want to improve. No code. No agency retainer.
                        No six-week timelines.
                    </p>
                </div>
            </div>
        </section>
    );
}

function TeamSection() {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">The team</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        The consultants who delivered conversion optimization for global brands, now making it available
                        to everyone.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
                    {founders.map((founder, index) => (
                        <FounderCard key={founder.name} founder={founder} index={index} />
                    ))}
                </div>

                {/* Team event photo */}
                <div className="mx-auto mt-12 max-w-5xl md:mt-16">
                    <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-tertiary">
                        <Image
                            src="/assets/images/team/Team Picture.JPG"
                            alt="The Grona team at WebSummit Qatar 2026"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-3 text-center text-sm text-tertiary">
                        The Grona team at WebSummit Qatar 2026
                    </p>
                    <p className="mt-2 text-center">
                        <a
                            href="https://youtu.be/6fEFH1iW-T4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary transition-colors hover:text-brand-primary"
                        >
                            Watch Ali pitch Grona at WebSummit Qatar
                            <ArrowUpRight className="size-4" />
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

function TractionSection() {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        Where we are today
                    </h2>
                </div>

                <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 md:mt-16">
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="flex flex-col items-center gap-2 rounded-2xl border border-secondary bg-secondary p-8 text-center shadow-xs"
                        >
                            <span className="text-display-md font-semibold text-brand-secondary md:text-display-lg">
                                {metric.value}
                            </span>
                            <span className="text-md text-tertiary">{metric.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        See what Grona can do
                    </h2>

                    <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
                        <Link href="/features">
                            <Button size="xl">Explore features</Button>
                        </Link>
                        <Link
                            href="/changelog"
                            className="text-md font-semibold text-brand-secondary transition-colors hover:text-brand-primary"
                        >
                            Read our latest updates
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export function AboutContent() {
    return (
        <>
            <HeroSection />
            <SectionDivider />
            <ProblemSection />
            <SectionDivider />
            <TeamSection />
            <SectionDivider />
            <TractionSection />
            <SectionDivider />
            <CTASection />
        </>
    );
}
