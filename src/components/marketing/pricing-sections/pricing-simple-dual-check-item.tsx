"use client";

import { Fragment, useState } from "react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { PricingTierCardDualCheckItems } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

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

export const PricingSimpleDualCheckItem = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");

    const plans = [
        {
            id: "monthly",
            title: "Basic plan",
            price: selectedPlan === "monthly" ? 10 : 9,
            description: "Our most popular plan for small teams.",
            contentTitle: "FEATURES",
            contentDescription: (
                <>
                    Everything in our <span className="text-md font-semibold">free plan</span> plus....
                </>
            ),
            features: [
                "Access to basic features",
                "Attend events",
                "Basic reporting + analytics",
                "Automatic updates",
                "Up to 10 individual users",
                "Backup your account",
                "20 GB individual data",
                "Audit log and notes",
                "Basic chat support",
                "Feature requests",
            ],
        },
        {
            id: "annually",
            title: "Business plan",
            price: selectedPlan === "monthly" ? 20 : 15,
            description: "Advanced features and reporting.",
            contentTitle: "FEATURES",
            contentDescription: (
                <>
                    Everything in our <span className="text-md font-semibold">basic plan</span> plus....
                </>
            ),
            badge: "Popular",
            features: [
                "200+ integrations",
                "Advanced custom fields",
                "Advanced reporting",
                "Audit log and data history",
                "Up to 20 individual users",
                "Backup your account",
                "40 GB individual data",
                "Personalized service",
                "Priority chat support",
                "+ many more...",
            ],
        },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</p>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Plans that fit your scale</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <Tabs selectedKey={selectedPlan} onSelectionChange={(item) => setSelectedPlan(item as string)} className="w-full md:w-auto">
                        <TabList type="button-border" size="md" items={billings} className="mt-8 w-full md:mt-12 md:w-auto [&_[role=tab]]:flex-1" />
                    </Tabs>
                </div>

                <div className="mt-16 grid w-full grid-cols-1 gap-4 md:mt-24 md:justify-items-center md:gap-8 xl:grid-cols-2 xl:justify-items-stretch">
                    {plans.map((plan) => (
                        <PricingTierCardDualCheckItems key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};
