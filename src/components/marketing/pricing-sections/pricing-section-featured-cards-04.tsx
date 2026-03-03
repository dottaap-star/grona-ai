"use client";

import { ChartBreakoutSquare, MessageChatCircle, Zap } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { PricingTierCardDualCheckItems } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const PricingSectionFeaturedCards04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-2xl flex-col xl:mx-0 xl:max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Upgrade</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Unlock more features</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                </div>

                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-12 md:mt-16 md:gap-16 xl:mx-0 xl:max-w-none xl:grid-cols-2 xl:items-center">
                    <ul className="grid max-w-xl grid-cols-1 gap-10 md:gap-12">
                        {[
                            {
                                title: "Share team inboxes",
                                subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                                icon: MessageChatCircle,
                            },
                            {
                                title: "Deliver instant answers",
                                subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                                icon: Zap,
                            },
                            {
                                title: "Manage your team with reports",
                                subtitle:
                                    "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                                icon: ChartBreakoutSquare,
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <div className="flex gap-4">
                                    <FeaturedIcon icon={item.icon} size="lg" color="gray" theme="modern" className="hidden md:inline-flex" />
                                    <FeaturedIcon icon={item.icon} size="md" color="gray" theme="modern" className="inline-flex md:hidden" />

                                    <div className="pt-1.5 md:pt-2.5">
                                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                        <p className="mt-1 text-md text-tertiary">{item.subtitle}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <PricingTierCardDualCheckItems
                        title="Basic plan"
                        description="Our most popular plan for small teams."
                        contentTitle="FEATURES"
                        contentDescription={
                            <>
                                Everything in our <span className="text-md font-semibold">free plan</span> plus....
                            </>
                        }
                        badge="Popular"
                        features={[
                            "Access to basic features",
                            "Basic reporting + analytics",
                            "Up to 10 individual users",
                            "20 GB individual data",
                            "Basic chat support",
                            "Attend events",
                            "Automatic updates",
                            "Backup your account",
                            "Audit log and notes",
                            "Feature requests",
                        ]}
                        className="md:-ml-4"
                    />
                </div>
            </div>
        </section>
    );
};
