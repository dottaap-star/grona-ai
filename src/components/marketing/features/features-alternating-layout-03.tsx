"use client";

import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const FeaturesAlternatingLayout03 = () => {
    return (
        <section className="flex flex-col gap-12 overflow-hidden bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
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
                        <FeaturedIcon icon={MessageChatCircle} color="brand" size="lg" theme="light" />

                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Share team inboxes</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Leverage automation to move fast",
                                "Always give customers a human to chat to",
                                "Automate customer support and close leads faster",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative -ml-4 w-screen flex-1 bg-tertiary px-4 py-6 md:ml-0 md:min-h-128 md:w-full md:overflow-hidden md:p-0 lg:overflow-visible">
                        <div className="top-0 left-0 bg-tertiary md:absolute md:h-full md:w-screen lg:overflow-hidden">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="top-12 left-12 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="top-12 left-12 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={ZapFast} color="brand" size="lg" theme="light" />

                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Deliver instant answers</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Keep your customers in the loop with live chat",
                                "Embed help articles right on your website",
                                "Customers never have to leave the page to find an answer",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative -ml-4 h-90 w-screen overflow-hidden bg-tertiary px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
                        <div className="top-0 right-0 h-full bg-tertiary md:absolute md:w-screen lg:overflow-hidden">
                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="absolute top-28 right-1/2 hidden w-full translate-x-[30%] md:block md:w-78.5 md:max-w-none lg:right-62 lg:translate-x-0"
                            />
                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="top-12 right-1/2 mx-auto w-71 drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none md:translate-x-[70%] lg:right-12 lg:translate-x-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} color="brand" size="lg" theme="light" />

                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Manage your team with reports</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Filter, export, and drilldown on the data quickly",
                                "Save, schedule, and automate reports to your inbox",
                                "Connect the tools you already use with 100+ integrations",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative -ml-4 h-90 w-screen overflow-hidden bg-tertiary px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
                        <div className="top-0 left-0 bg-tertiary md:absolute md:h-full md:w-screen lg:overflow-hidden">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="absolute top-12 left-50 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border max-md:hidden md:h-[120%] md:w-auto md:max-w-3xl md:rounded-[10px] dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="absolute top-12 left-50 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border not-dark:hidden max-md:hidden md:h-[120%] md:w-auto md:max-w-3xl md:rounded-[10px]"
                            />

                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="top-28 left-12 mx-auto w-71 object-contain shadow-2xl drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
