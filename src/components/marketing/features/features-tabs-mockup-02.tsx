"use client";

import { useState } from "react";
import { Badge } from "@/components/base/badges/badges";
import { FeatureTabVertical } from "@/components/marketing/features/base-components/feature-tab";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const FeaturesTabsMockup02 = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge size="lg" className="hidden md:inline-flex" color="brand" type="pill-color">
                        Features
                    </Badge>
                    <Badge size="md" className="inline-flex md:hidden" color="brand" type="pill-color">
                        Features
                    </Badge>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Cutting-edge features for advanced analytics</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </div>

            <div className="mx-auto w-full max-w-container overflow-hidden px-4 pt-12 md:px-8 md:pt-16">
                <div className="flex h-104 w-full items-start justify-center md:h-128">
                    <div className="relative flex w-144 justify-center">
                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="absolute top-16 left-0 hidden h-[579px] w-71 drop-shadow-iphone-mockup md:block md:h-auto md:w-[313px]"
                        />
                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="h-[579px] w-71 drop-shadow-iphone-mockup md:absolute md:right-0 md:h-auto md:w-[313px]"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 w-full max-w-container px-4 md:mt-20 md:px-8">
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
        </section>
    );
};
