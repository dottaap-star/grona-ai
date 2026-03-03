"use client";

import { ArrowRight, ChartBreakoutSquare, MessageChatCircle, Zap } from "@untitledui/icons";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { FeatureTextFeaturedIconTopCentered } from "./base-components/feature-text";

export const FeaturesCenterMockup01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="hidden md:flex">
                        <BadgeWithDot color="brand" type="modern" size="lg">
                            Features
                        </BadgeWithDot>
                    </span>
                    <span className="flex md:hidden">
                        <BadgeWithDot color="brand" type="modern" size="md">
                            Features
                        </BadgeWithDot>
                    </span>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Cutting-edge features for advanced analytics</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-24 lg:items-center">
                    <div className="flex h-full w-full items-center justify-center md:max-h-204 md:w-full">
                        <div
                            className={cx(
                                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[32px] md:p-1 md:shadow-modern-mockup-outer-lg md:ring-[2px]",
                            )}
                        >
                            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[24px] md:ring-[2px]">
                                    {/* Light mode image (hidden in dark mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                        className="size-full object-cover dark:hidden"
                                    />
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                        className="size-full object-cover not-dark:hidden"
                                    />
                                </div>
                            </div>
                        </div>
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
