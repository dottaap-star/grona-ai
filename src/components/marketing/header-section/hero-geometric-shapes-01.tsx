"use client";

import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroGeometricShapes01 = () => {
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

            <section className="relative py-16 md:pb-24">
                <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-8">
                    <div className="flex max-w-3xl flex-col items-start lg:pr-8">
                        <h1 className="text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
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

                    <div className="relative lg:h-full lg:min-h-160">
                        <img
                            alt="Geo Shapes Desktop 01"
                            src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-desktop-01.svg"
                            className="hidden size-full object-cover lg:block"
                        />
                        <img
                            alt="Geo Shapes Tablet 01"
                            src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-tablet-01.svg"
                            className="hidden size-full object-cover sm:block lg:hidden"
                        />
                        <img
                            alt="Geo Shapes Mobile 01"
                            src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-mobile-01.svg"
                            className="size-full object-cover sm:hidden"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
