"use client";

import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroSimpleText01 = () => {
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
                src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header />

            <section className="relative py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="flex max-w-5xl flex-col">
                        <h1 className="text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
                            We design{" "}
                            <span className="relative underline decoration-[3px] underline-offset-[0.218em] md:decoration-4 lg:decoration-4">
                                digital experiences
                            </span>{" "}
                            that create more happy in the world
                        </h1>
                        <p className="mt-4 max-w-(--breakpoint-sm) text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            — We're a full-service design and development agency who specialize in simple, useful and beautiful solutions.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                Showreel
                            </Button>
                            <Button size="xl">Get in touch</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
                    <img
                        alt="Smiling Girl"
                        src="https://www.untitledui.com/marketing/smiling-girl-3.webp"
                        className="md:[360px] h-60 w-full object-cover lg:h-129"
                    />
                </div>
            </section>
        </div>
    );
};
