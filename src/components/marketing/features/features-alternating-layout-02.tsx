"use client";

import { ChartBreakoutSquare, MessageChatCircle, PlayCircle, ZapFast } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { FlowPattern } from "@/components/marketing/features/flow-pattern";

export const FeaturesAlternatingLayout02 = () => {
    return (
        <section className="flex flex-col gap-12 bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Beautiful analytics to grow smarter</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={MessageChatCircle} color="brand" theme="light" size="lg" />
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Share team inboxes</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.{" "}
                            <span className="hidden md:inline">
                                Leverage automation to move fast, while always giving customers a human, helpful experience.
                            </span>
                        </p>
                        <div className="mt-8 flex gap-3.5">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                                Demo
                            </Button>
                            <Button size="xl">Learn more</Button>
                        </div>
                    </div>

                    <div className="relative -ml-4 w-screen bg-tertiary px-4 py-6 md:ml-0 md:h-140 md:w-auto md:rounded-3xl md:p-10 lg:h-100">
                        <div className="relative flex h-full w-full">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </div>
                        <div className="absolute right-0 bottom-0 hidden translate-x-1/3 translate-y-1/4 md:block">
                            <FlowPattern />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={ZapFast} color="brand" theme="light" size="lg" />
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Deliver instant answers</h2>
                        <p className="mt-2 hidden text-md text-tertiary md:mt-4 md:inline-block md:text-lg">
                            Keep your customers in the flow by embedding help articles right on your website. With Beacon, they never have to leave the page to
                            find an answer.
                        </p>
                        <p className="mt-2 inline-block text-md text-tertiary md:mt-4 md:hidden md:text-lg">
                            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                        </p>
                        <div className="mt-8 flex gap-3.5">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                                Demo
                            </Button>
                            <Button size="xl">Learn more</Button>
                        </div>
                    </div>

                    <div className="relative -ml-4 w-screen bg-tertiary px-4 py-6 md:ml-0 md:h-140 md:w-auto md:rounded-3xl md:p-10 lg:h-100">
                        <div className="relative flex h-full w-full">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 hidden -translate-x-1/3 md:block md:translate-y-12 lg:translate-y-1/4">
                            <FlowPattern />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} color="brand" theme="light" size="lg" />
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Manage your team with reports</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                        </p>
                        <div className="mt-8 flex gap-3.5">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                                Demo
                            </Button>
                            <Button size="xl">Learn more</Button>
                        </div>
                    </div>

                    <div className="relative -ml-4 w-screen bg-tertiary px-4 py-6 md:ml-0 md:h-140 md:w-auto md:rounded-3xl md:p-10 lg:h-100">
                        <div className="relative flex h-full w-full">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="dark:hidden0 z-1 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                            />
                        </div>
                        <div className="absolute top-0 right-0 hidden translate-x-1/3 -translate-y-1/4 md:block">
                            <FlowPattern />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
