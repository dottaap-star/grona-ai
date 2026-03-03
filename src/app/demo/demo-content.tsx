"use client";

import Link from "next/link";
import Cal from "@calcom/embed-react";
import { Button } from "@/components/base/buttons/button";
import { SectionDivider } from "@/components/shared-assets/section-divider";

// ---------------------------------------------------------------------------
// S3: What to Expect - step data
// ---------------------------------------------------------------------------

const steps = [
    {
        number: 1,
        text: "Walk through your website live using Grona",
    },
    {
        number: 2,
        text: "See competitor insights and optimization opportunities specific to your business",
    },
    {
        number: 3,
        text: "Discuss which plan fits your team and goals",
    },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function DemoContent() {
    return (
        <>
            {/* S1: Hero */}
            <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">
                            See Grona in action
                        </h1>
                        <p className="mt-5 text-lg text-tertiary md:text-xl">
                            30-minute walkthrough tailored to your business. We&apos;ll analyze your site live and show
                            you exactly how Grona can increase your conversions.
                        </p>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* S2: Cal.com Embed */}
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto w-full max-w-4xl" style={{ minHeight: 600 }}>
                        <Cal
                            calLink="grona/30min"
                            config={{
                                layout: "month_view",
                                hideEventTypeDetails: "false",
                            }}
                            style={{
                                width: "100%",
                                height: "100%",
                                overflow: "scroll",
                            }}
                        />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* S3: What to Expect */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            What to expect
                        </h2>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
                        {steps.map((step) => (
                            <div key={step.number} className="flex flex-col items-center text-center">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-sm font-semibold text-brand-secondary">
                                    {step.number}
                                </div>
                                <p className="mt-4 text-lg font-medium text-secondary">{step.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mx-auto mt-10 max-w-3xl text-center text-md italic text-tertiary md:mt-12">
                        No sales pressure. Come with questions.
                    </p>
                </div>
            </section>

            <SectionDivider />

            {/* S4: Self-Serve Alternative */}
            <section className="bg-primary py-8 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-center md:gap-4">
                        <p className="text-md text-tertiary">Prefer self-serve? Start free, no demo needed.</p>
                        <div className="flex items-center gap-4">
                            <Link href="/pricing">
                                <Button color="link-color" size="md">
                                    See pricing plans
                                </Button>
                            </Link>
                            <Button color="link-color" size="md" href="https://app.grona.ai/signup">
                                Try it now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
