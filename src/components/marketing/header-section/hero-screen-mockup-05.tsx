"use client";

import { ArrowRight, PlayCircle } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroScreenMockup05 = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-check-md-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-check-md-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header isFloating />

            <section className="relative pt-16 md:pt-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="New feature" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Check out the team dashboard
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="New feature" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Check out the team dashboard
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Beautiful analytics to grow smarter{" "}
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000
                            startups.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 h-90 w-full max-w-container overflow-hidden px-4 md:h-124 md:px-8">
                    <div className="mx-auto flex h-auto w-full max-w-70 items-center justify-center md:w-full md:max-w-none md:items-start">
                        <div className="size-full rounded-[23.89px] bg-primary p-[3px] shadow-lg ring-[1.5px] ring-utility-gray-300 ring-inset md:rounded-[32px] md:p-1 md:ring-[2px]">
                            <div className="size-full rounded-[20.91px] bg-primary p-1 shadow-modern-mockup-inner-sm md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                                <div className="relative size-full overflow-hidden rounded-[17.92px] bg-utility-gray-50 ring-[1.5px] ring-utility-gray-200 md:rounded-[24px] md:ring-[2px]">
                                    {/* Light mode image (hidden in dark mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                        className="hidden size-full object-cover md:block dark:hidden"
                                    />
                                    {/* Dark mode image (hidden in light mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                        className="hidden size-full object-cover not-dark:hidden md:block"
                                    />

                                    {/* Light mode image (hidden in dark mode) */}
                                    <img
                                        alt="Iphone Screen Mockup"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                        className="size-full object-cover md:hidden dark:hidden"
                                    />
                                    {/* Dark mode image (hidden in light mode) */}
                                    <img
                                        alt="Iphone Screen Mockup"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                        className="size-full object-cover not-dark:hidden md:hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
