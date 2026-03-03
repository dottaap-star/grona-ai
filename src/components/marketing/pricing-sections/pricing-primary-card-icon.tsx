"use client";

import { useState } from "react";
import { LayersThree01, LayersTwo01, Zap } from "@untitledui/icons";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const PricingPrimaryCardIcon = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");

    const plans = [
        {
            title: "Basic plan",
            subtitle: selectedPlan === "monthly" ? "$10/mth" : "$9/mth",
            description: "Billed annually.",
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
            subtitle: selectedPlan === "monthly" ? "$20/mth" : "$15/mth",
            description: "Billed annually.",
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
            subtitle: selectedPlan === "monthly" ? "$40/mth" : "$39/mth",
            description: "Billed annually.",
            icon: LayersThree01,
            features: [
                "Advanced custom fields",
                "Audit log and data history",
                "Unlimited individual users",
                "Unlimited individual data",
                "Personalized + priority service",
            ],
        },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-md font-semibold text-primary md:text-display-lg">Pricing plans</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <Tabs selectedKey={selectedPlan} onSelectionChange={(item) => setSelectedPlan(item as string)} className="w-full md:w-auto">
                        <TabList
                            type="button-border"
                            size="md"
                            items={[
                                { id: "monthly", label: "Monthly billing" },
                                { id: "annually", label: "Annual billing" },
                            ]}
                            className="mt-8 w-full md:mt-12 md:w-auto [&_[role=tab]]:flex-1"
                        />
                    </Tabs>
                </div>

                <div className="mt-16 grid w-full grid-cols-1 items-end gap-4 md:mt-24 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <div key={plan.title} className="inline-block bg-brand-primary_alt">
                            <div className="flex flex-col items-center px-6 pt-6 text-center md:px-8 md:pt-8">
                                <FeaturedIcon icon={plan.icon} color="brand" theme="light" size="lg" />

                                <h2 className="mt-4 text-xl font-semibold text-brand-secondary">{plan.title}</h2>
                                <p className="mt-2 text-display-md font-semibold text-brand-primary md:text-display-lg">{plan.subtitle}</p>
                                <p className="mt-2 text-md text-brand-secondary">{plan.description}</p>
                            </div>

                            <ul className="flex flex-col gap-4 px-6 py-8 md:px-8">
                                {plan.features.map((feat) => (
                                    <CheckItemText key={feat} text={feat} iconStyle="outlined" textClassName="text-brand-secondary" />
                                ))}
                            </ul>

                            <div className="flex flex-col gap-3 px-6 pb-8 md:mt-2 md:px-8">
                                <Button size="xl">Get started</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
