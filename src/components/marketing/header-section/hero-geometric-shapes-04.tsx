"use client";

import { ArrowRight, PlayCircle } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroGeometricShapes04 = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header />

            <section className="relative py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col md:items-center md:text-center">
                        <a href="#" className="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="We're hiring!" iconTrailing={ArrowRight} theme="light" color="brand">
                                Join our design team
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="We're hiring!" iconTrailing={ArrowRight} theme="light" color="brand">
                                Join our design team
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
                            Creating stylish, functional and memorable spaces
                        </h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            — We're a full-service interior design studio who specialize in simple and timeless spaces.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                Showreel
                            </Button>
                            <Button size="xl">Chat to us</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
                    <img
                        alt="Geo Shapes Desktop 04"
                        src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-desktop-04.svg"
                        className="hidden w-full object-cover sm:block"
                    />
                    <img
                        alt="Geo Shapes Mobile 04"
                        src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-mobile-04.svg"
                        className="w-full object-cover sm:hidden"
                    />
                </div>
            </section>
        </div>
    );
};
