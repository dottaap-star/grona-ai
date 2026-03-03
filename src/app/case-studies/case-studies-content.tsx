"use client";

import { ArrowRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

const caseStudies = [
    {
        slug: "mouthshield",
        industry: "E-commerce / DTC",
        metric: "Up to +40% conversion lift",
        title: "MouthShield",
        summary: "How MouthShield increased product page conversions by up to 40% in 10 days.",
        href: "/case-studies/mouthshield",
    },
];

export const CaseStudiesContent = () => {
    return (
        <div className="bg-primary">
            {/* Hero */}
            <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">
                            Real results from real businesses
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                            See how teams use Grona to increase conversions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Case Study Cards */}
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
                        {caseStudies.map((study) => (
                            <a
                                key={study.slug}
                                href={study.href}
                                className="group flex flex-col rounded-2xl border border-secondary bg-primary p-6 transition-shadow hover:shadow-lg md:p-8"
                            >
                                <Badge size="sm" color="brand">
                                    {study.industry}
                                </Badge>
                                <p className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm">
                                    {study.metric}
                                </p>
                                <h2 className="mt-2 text-lg font-semibold text-primary">{study.title}</h2>
                                <p className="mt-2 flex-1 text-md text-tertiary">{study.summary}</p>
                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition-colors group-hover:text-brand-secondary_hover">
                                    Read case study
                                    <ArrowRight className="size-4" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                        <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                            Ready to see results like these?
                        </h2>
                        <p className="mt-4 text-md text-tertiary">No credit card required.</p>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                            <Button
                                href="https://app.grona.ai/signup"
                                size="lg"
                                color="primary"
                                iconTrailing={ArrowRight}
                            >
                                Start Free
                            </Button>
                            <Button href="/pricing" size="lg" color="link-color" iconTrailing={ArrowRight}>
                                See pricing
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
