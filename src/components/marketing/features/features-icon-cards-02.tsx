"use client";

import { ArrowRight, ChartBreakoutSquare, MessageChatCircle, MessageSmileCircle, Zap, ZapFast } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { FeatureTextFeaturedIconCard } from "./base-components/feature-text";

export const FeaturesIconCards02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-3">
                    <div className="max-w-3xl lg:col-span-1">
                        <FeaturedIcon icon={ZapFast} size="xl" theme="light" color="brand" className="hidden md:flex" />
                        <FeaturedIcon icon={ZapFast} size="lg" theme="light" color="brand" className="flex md:hidden" />
                        <h2 className="mt-5 text-display-sm font-semibold text-primary md:text-display-md">Beautiful analytics to grow smarter</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 md:gap-y-8 lg:grid-cols-2">
                            {[
                                {
                                    title: "Share team inboxes",
                                    subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                                    icon: MessageChatCircle,
                                    cta: "Learn more",
                                    href: "#",
                                },
                                {
                                    title: "Connect with customers",
                                    subtitle:
                                        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.",
                                    icon: MessageSmileCircle,
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
                                    title: "Manage your team",
                                    subtitle: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data.",
                                    icon: ChartBreakoutSquare,
                                    cta: "Learn more",
                                    href: "#",
                                },
                            ].map((item) => (
                                <li key={item.title}>
                                    <FeatureTextFeaturedIconCard
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
            </div>
        </section>
    );
};
