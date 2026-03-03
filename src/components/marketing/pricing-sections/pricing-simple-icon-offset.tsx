"use client";

import { LayersThree01, LayersTwo01, Zap } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { PricingTierCardIconOffset } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

const plans = [
    {
        title: "Basic plan",
        subtitle: "$10/mth",
        description: "Our most popular plan.",
        features: [
            "Access to basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat and email support",
        ],
        icon: Zap,
    },
    {
        title: "Business plan",
        subtitle: "$20/mth",
        description: "Billed annually.",
        features: [
            "200+ integrations",
            "Advanced reporting and analytics",
            "Up to 20 individual users",
            "40 GB individual data",
            "Priority chat and email support",
        ],
        icon: LayersTwo01,
    },
    {
        title: "Enterprise plan",
        subtitle: "$40/mth",
        description: "Billed annually.",
        features: [
            "Advanced custom fields",
            "Audit log and data history",
            "Unlimited individual users",
            "Unlimited individual data",
            "Personalized + priority service",
        ],
        icon: LayersThree01,
    },
];

export const PricingSimpleIconOffset = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</p>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Plans that fit your scale</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-center md:mt-12">
                        <Button color="secondary" size="xl">
                            Chat to sales
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="mt-16 grid w-full grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardIconOffset key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};
