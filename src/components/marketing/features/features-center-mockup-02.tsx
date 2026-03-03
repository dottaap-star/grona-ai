"use client";

import type { SVGProps } from "react";
import { ArrowRight, ChartBreakoutSquare, MessageChatCircle, Zap } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
import { FeatureTextFeaturedIconTopCentered } from "./base-components/feature-text";

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

export const FeaturesCenterMockup02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="hidden md:flex">
                        <Badge color="brand" type="pill-color" size="lg">
                            Features
                        </Badge>
                    </span>
                    <span className="flex md:hidden">
                        <Badge color="brand" type="pill-color" size="md">
                            Features
                        </Badge>
                    </span>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Cutting-edge features for advanced analytics</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </div>

            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:mt-16 md:gap-24 lg:items-center">
                    <div className="relative hidden w-full items-center justify-center md:flex md:h-139.5">
                        {/* Light mode image (hidden in dark mode) */}
                        <img
                            alt="Iphone and Screen Mockup"
                            src="https://www.untitledui.com/marketing/screen-mockups/iphone-and-screen-mockup-light-01.webp"
                            className="absolute mt-4 h-154 object-contain dark:hidden"
                        />
                        {/* Dark mode image (hidden in light mode) */}
                        <img
                            alt="Iphone and Screen Mockup"
                            src="https://www.untitledui.com/marketing/screen-mockups/iphone-and-screen-mockup-dark-01.webp"
                            className="absolute mt-4 h-154 object-contain not-dark:hidden"
                        />
                    </div>
                    <div className="relative flex h-102 w-full items-center justify-center overflow-hidden pt-12 md:hidden lg:pt-0">
                        <span className="absolute top-20 inline-flex w-105">
                            <BlobPattern />
                        </span>

                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="absolute top-12 w-71 drop-shadow-iphone-mockup"
                        />
                    </div>
                    <ul className="flex flex-1 flex-wrap justify-center gap-x-8 gap-y-10 lg:flex-nowrap">
                        {[
                            {
                                title: "Share team inboxes",
                                subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                                icon: MessageChatCircle,
                                cta: "Learn more",
                                href: "#",
                            },
                            {
                                title: "Deliver instant answers",
                                subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                                icon: Zap,
                                cta: "Learn more",
                                href: "#",
                            },
                            {
                                title: "Manage your team with reports",
                                subtitle:
                                    "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                                icon: ChartBreakoutSquare,
                                cta: "Learn more",
                                href: "#",
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopCentered
                                    icon={item.icon}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    footer={
                                        <Button color="link-color" size="lg" href={item.href} iconTrailing={ArrowRight}>
                                            Learn more
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
