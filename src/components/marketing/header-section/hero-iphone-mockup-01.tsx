"use client";

import type { SVGProps } from "react";
import { ArrowRight } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Header } from "@/components/marketing/header-navigation/header";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

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

export const HeroIPhoneMockup01 = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-md-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header />

            <section className="relative overflow-hidden pt-16 md:py-24">
                <div className="mx-auto flex max-w-container flex-col gap-16 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-16">
                    <div className="flex w-full max-w-3xl flex-1 flex-col items-start">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="New feature" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Personalized coaching in-app
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="New feature" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Personalized coaching in-app
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Portfolio performance tracking made easy
                        </h1>
                        <p className="mt-4 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Designed by marketers. Untitled gives you the guidance, data and innovation you need to become a better marketer.
                        </p>
                        <div className="mt-8 flex gap-3 md:mt-12">
                            <AppStoreButton size="lg" />
                            <GooglePlayButton size="lg" />
                        </div>
                    </div>

                    <div className="relative flex h-90 w-full items-start justify-center lg:h-160 lg:max-w-lg lg:items-center">
                        <div className="absolute top-24 w-133 lg:top-auto">
                            <BlobPattern />
                        </div>
                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="h-[579px] w-71 drop-shadow-iphone-mockup md:h-auto md:w-[313px]"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
