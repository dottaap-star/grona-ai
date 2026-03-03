"use client";

import { useState } from "react";
import { Badge } from "@/components/base/badges/badges";
import { FeatureTabVertical } from "@/components/marketing/features/base-components/feature-tab";

export const FeaturesTabsMockup01 = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge color="brand" type="pill-color" size="lg" className="hidden md:inline-flex">
                        Features
                    </Badge>
                    <Badge color="brand" type="pill-color" size="md" className="inline-flex md:hidden">
                        Features
                    </Badge>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Cutting-edge features for advanced analytics</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-20 lg:items-center">
                    <div className="flex w-full items-center justify-center md:h-128 md:w-auto">
                        {/* Light mode image (hidden in dark mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                            className="h-full rounded object-contain shadow-2xl ring-4 ring-screen-mockup-border md:rounded-[10px] dark:hidden"
                        />
                        {/* Dark mode image (hidden in light mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                            className="h-full rounded object-contain shadow-2xl ring-4 ring-screen-mockup-border not-dark:hidden md:rounded-[10px]"
                        />
                    </div>

                    <ul className="flex flex-1 flex-wrap justify-center gap-y-11 lg:flex-nowrap">
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
                                <FeatureTabVertical title={item.title} subtitle={item.subtitle} isCurrent={index === currentTab} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
