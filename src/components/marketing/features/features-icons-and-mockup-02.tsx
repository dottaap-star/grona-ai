"use client";

import type { SVGProps } from "react";
import { ArrowRight, ChartBreakoutSquare, MessageChatCircle, Zap } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
import { FeatureTextFeaturedIconLeft } from "./base-components/feature-text";

const BlobPattern = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="532" height="480" viewBox="0 0 532 480" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M182.034 461.691C74.9901 428.768 1.32278 329.846 0.0121784 217.408C-1.15817 117.003 82.1936 43.2414 176.777 10.7273C260.07 -17.9056 346.327 12.9156 406.143 77.7959C484.913 163.236 571.343 274.645 512.702 375.097C449.003 484.212 302.448 498.727 182.034 461.691Z"
                className="fill-bg-secondary"
            />
        </svg>
    );
};

export const FeaturesIconsAndMockup02 = () => {
    return (
        <section className="overflow-hidden bg-primary pt-16 lg:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Overflowing with useful features</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-10 md:gap-y-12">
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
                                <FeatureTextFeaturedIconLeft
                                    icon={item.icon}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    footer={
                                        <Button color="link-color" size="lg" href="#" iconTrailing={ArrowRight}>
                                            Learn more
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="relative flex h-104 w-full justify-center md:-ml-4 md:items-center lg:flex lg:h-160 lg:w-128">
                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="absolute top-0 z-10 w-71 drop-shadow-iphone-mockup md:w-78.5 md:drop-shadow-none"
                        />
                        <span className="flex w-105 sm:relative md:w-120 lg:w-133">
                            <BlobPattern />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
