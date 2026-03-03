"use client";

import { useState } from "react";
import { Badge } from "@/components/base/badges/badges";
import { FeatureTabVertical } from "@/components/marketing/features/base-components/feature-tab";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const FeaturesTabsMockup04 = () => {
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

            <div className="mx-auto w-full max-w-container overflow-hidden px-4 md:px-8">
                <div className="relative mt-12 flex flex-col items-center md:mt-16 md:h-160 md:pt-20">
                    {/* Background Blob */}
                    <div className="absolute top-20 left-1/2 h-94 w-120 -translate-x-1/2 rounded-t-full rounded-b-[24px] bg-tertiary md:top-0 md:h-160 md:w-140"></div>

                    <div className="relative flex h-104 w-max items-start justify-center md:h-140">
                        {/*  Notifications List */}
                        <ul className="absolute -bottom-3 left-[-218px] z-10 hidden flex-col gap-3 lg:flex" aria-hidden="true">
                            <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                                <img
                                    alt="Olivia Rhye"
                                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                    className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                                />
                                <div>
                                    <p className="text-sm text-tertiary">
                                        <span className="font-medium text-brand-secondary">Olivia Rhye</span> followed you!
                                    </p>
                                    <p className="text-sm text-tertiary">@oliviarhye</p>
                                </div>
                            </li>
                            <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                                <img
                                    alt="Candice Wu"
                                    src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                                    className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                                />
                                <div>
                                    <p className="text-sm text-tertiary">
                                        <span className="font-medium text-brand-secondary">Candice Wu</span> and 2 other gave you kudos on{" "}
                                        <span className="font-medium text-brand-secondary">Clubhouse 101</span> post
                                    </p>
                                </div>
                            </li>
                            <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-75 backdrop-blur-lg">
                                <img
                                    alt="Phoenix Baker"
                                    src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                                    className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                                />
                                <div>
                                    <p className="text-sm text-tertiary">
                                        <span className="font-medium text-brand-secondary">Phoenix Baker</span> joined your team{" "}
                                        <span className="font-medium text-brand-secondary">Melbourne Startups Growth</span>
                                    </p>
                                </div>
                            </li>
                            <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-50 backdrop-blur-lg">
                                <img
                                    alt="Lana Steiner"
                                    src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                                    className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                                />
                                <div>
                                    <p className="text-sm text-tertiary">
                                        <span className="font-medium text-brand-secondary">Lana Steiner</span> just launched{" "}
                                        <span className="font-medium text-brand-secondary">The 10k users challenge</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="h-[579px] w-71 drop-shadow-iphone-mockup md:h-auto md:w-[313px]"
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
