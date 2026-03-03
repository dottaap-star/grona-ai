"use client";

import { useState } from "react";
import { LayersTwo01, Zap } from "@untitledui/icons";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { PricingTierCardBadge } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

const billings = [
    {
        id: "monthly",
        label: "Monthly billing",
    },
    {
        id: "annually",
        label: "Annual billing",
        badge: "Save 20%",
    },
];

const plans = [
    {
        title: "Basic plan",
        subtitle: "$10/mth",
        description: "Our most popular plan.",
        icon: Zap,
        features: [
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat and email support",
        ],
    },
    {
        title: "Business plan",
        subtitle: "$20/mth",
        description: "Growing teams up to 20 users.",
        icon: LayersTwo01,
        features: [
            "200+ integrations",
            "Advanced reporting and analytics",
            "Up to 20 individual users",
            "40 GB individual data",
            "Priority chat and email support",
        ],
    },
    {
        title: "Enterprise plan",
        subtitle: "$40/mth",
        description: "Advanced features + unlimited users.",
        icon: LayersTwo01,
        features: [
            "Advanced custom fields",
            "Audit log and data history",
            "Unlimited individual users",
            "Unlimited individual data",
            "Personalized + priority service",
        ],
    },
];

export const PricingSimpleAccentLine = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-md font-semibold text-primary md:text-display-lg">Pricing plans</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <Tabs selectedKey={selectedPlan} onSelectionChange={(item) => setSelectedPlan(item as string)} className="w-full md:w-auto">
                        <TabList type="button-border" size="md" items={billings} className="mt-8 w-full md:mt-12 md:w-auto [&_[role=tab]]:flex-1" />
                    </Tabs>
                </div>

                <div className="mt-16 w-full md:mt-24">
                    <div className="relative lg:shadow-lg">
                        <div className="absolute -inset-x-px -top-px hidden h-2 bg-border-brand lg:block" />
                        <div className="grid w-full grid-cols-1 gap-4 ring-secondary_alt md:grid-cols-2 md:pt-2 lg:grid-cols-3 lg:gap-0 lg:ring-1">
                            {plans.map((plan, index) => (
                                <div key={plan.title} className="relative grid">
                                    <PricingTierCardBadge {...plan} className="lg:rounded-none lg:bg-transparent lg:ring-0 lg:shadow-transparent" />
                                    {index !== 0 && <div className="absolute top-0 bottom-0 my-10 w-px bg-border-secondary max-lg:hidden"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
