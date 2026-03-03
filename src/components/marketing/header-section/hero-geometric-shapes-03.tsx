"use client";

import { ArrowRight, PlayCircle } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroGeometricShapes03 = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header />

            <section className="relative py-16 lg:flex lg:min-h-180 lg:items-center lg:py-24">
                <div className="mx-auto flex w-full max-w-container items-center px-4 md:px-8">
                    <div className="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pr-8">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="We're hiring!" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Join our design team
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="We're hiring!" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Join our design team
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
                            Creating stylish, functional and memorable spaces
                        </h1>
                        <p className="mt-4 max-w-lg text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            — We're a full-service interior design studio who specialize in simple and timeless spaces.
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                Showreel
                            </Button>
                            <Button size="xl">Chat to us</Button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-16 w-full px-4 md:h-95 md:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
                    <img
                        alt="Geo Shapes Desktop 03"
                        src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-desktop-03.svg"
                        className="hidden size-full object-cover lg:block"
                    />
                    <img
                        alt="Geo Shapes Tablet 03"
                        src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-tablet-03.svg"
                        className="hidden size-full object-cover sm:block lg:hidden"
                    />
                    <img
                        alt="Geo Shapes Mobile 03"
                        src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-mobile-03.svg"
                        className="size-full object-cover sm:hidden"
                    />
                </div>
            </section>
        </div>
    );
};
