"use client";

import type { ComponentProps } from "react";
import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";

const HeaderPrimaryDark = (props: ComponentProps<typeof Header>) => {
    return (
        <Header
            {...props}
            className={cx(
                "bg-brand-section [&_nav>ul>li>a]:text-secondary_on-brand [&_nav>ul>li>a]:hover:text-secondary_on-brand [&_nav>ul>li>button]:text-secondary_on-brand [&_nav>ul>li>button]:hover:text-secondary_on-brand [&_nav>ul>li>button>svg]:text-fg-brand-secondary_alt [&_svg_path.fill-fg-primary]:fill-fg-white",
                props.className,
            )}
        />
    );
};

export const HeroSimpleText02 = () => {
    return (
        <div className="relative overflow-hidden bg-brand-section">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 opacity-20 md:block"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 opacity-20 md:hidden"
            />

            <HeaderPrimaryDark className="bg-transparent" />

            <section className="relative py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="flex max-w-5xl flex-col">
                        <h1 className="text-display-md font-medium text-primary_on-brand md:text-display-lg lg:text-display-xl">
                            We design digital{" "}
                            <span className="relative inline-flex">
                                <svg
                                    className="absolute inset-x-0 -bottom-1.5 h-6 w-full scale-105 text-fg-brand-secondary md:bottom-0"
                                    viewBox="0 0 350 24"
                                    fill="none"
                                >
                                    <path
                                        className="stroke-[16px]"
                                        d="M8 8H260.845L80.591 16H342"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="relative">experiences</span>
                            </span>{" "}
                            that create more happy in the world
                        </h1>
                        <p className="mt-4 max-w-(--breakpoint-sm) text-lg text-balance text-tertiary_on-brand md:mt-6 md:text-xl">
                            — We're a full-service design and development agency who specialize in simple, useful and beautiful solutions.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl" className="shadow-xs! ring-0">
                                Showreel
                            </Button>
                            <Button size="xl">Get in touch</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
                    <img
                        alt="Two Working People"
                        src="https://www.untitledui.com/marketing/two-working-people.webp"
                        className="md:[360px] h-60 w-full object-cover lg:h-129"
                    />
                </div>
            </section>
        </div>
    );
};
