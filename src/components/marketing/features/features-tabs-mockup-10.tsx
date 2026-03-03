"use client";

import { useState } from "react";
import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeatureTabHorizontal } from "@/components/marketing/features/base-components/feature-tab";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";

export const FeaturesTabsMockup10 = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <section className="overflow-hidden bg-primary py-16 lg:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Overflowing with useful features</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="flex flex-col">
                        {[
                            {
                                title: "Share team inboxes",
                                subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                            },
                            {
                                title: "Deliver instant answers",
                                subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                            },
                            {
                                title: "Manage your team with reports",
                                subtitle:
                                    "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                            },
                        ].map((item, index) => (
                            <li key={item.title} onClick={() => setCurrentTab(index)}>
                                <FeatureTabHorizontal
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    isCurrent={index === currentTab}
                                    footer={
                                        <Button color="link-color" size="lg" href="#" iconTrailing={ArrowRight}>
                                            Learn more
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="relative -mx-4 flex h-80 items-center justify-center bg-tertiary md:mr-0 md:h-120 lg:h-160">
                        <div className="-space-y-[106px] md:-space-y-16 lg:-space-y-8">
                            <div
                                className="relative z-1 [--scale:0.84] md:[--scale:1.3] lg:[--scale:1.57]"
                                style={{
                                    transform: "scale(var(--scale)) rotate(60deg) translate(38px, -53px)",
                                }}
                            >
                                <CreditCard type="transparent" cardHolder="OLIVIA RHYE" />
                            </div>
                            <div
                                className="relative z-0 [--scale:0.84] md:[--scale:1.3] lg:[--scale:1.57]"
                                style={{
                                    transform: "scale(var(--scale)) rotate(30deg) translate(-23px, 24px)",
                                }}
                            >
                                <CreditCard type="brand-dark" cardHolder="Phoenix Baker" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
