"use client";

import type { ComponentProps } from "react";
import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";
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

export const HeroCardMockup07 = () => {
    return (
        <div className="relative overflow-hidden bg-brand-section">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 opacity-20 md:block dark:opacity-100 dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 opacity-20 md:hidden dark:opacity-100 dark:brightness-[0.2]"
            />

            <HeaderPrimaryDark className="bg-transparent" />

            <section className="relative py-16 md:pb-24">
                <img
                    alt="Light Accent"
                    aria-hidden="true"
                    src="https://www.untitledui.com/marketing/light-accent.webp"
                    className="absolute -right-4 -bottom-14 max-w-160 opacity-90 mix-blend-screen md:right-4 md:-bottom-1/3 md:max-w-7xl"
                />

                <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex max-w-3xl flex-col items-start">
                        <span className="text-sm font-semibold text-secondary_on-brand md:text-md">Super. Simple. Banking.</span>

                        <h1 className="mt-3 text-display-md font-semibold text-primary_on-brand md:text-display-lg lg:text-display-xl">
                            Banking technology that has your back.
                        </h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary_on-brand md:mt-6 md:text-xl">
                            Simple, transparent banking. No hidden fees.{" "}
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle} className="shadow-xs! ring-0">
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                    </div>

                    <div className="relative -mx-4 flex h-80 items-center justify-center md:mx-0 md:h-120 lg:h-full lg:min-h-140">
                        <div className="translate-x-[34px] translate-y-[3px] -space-y-[116.5px] md:translate-x-[53px] md:translate-y-[37px] md:-space-y-[83px]">
                            <div className="relative z-3 translate-y-[22px] rotate-[29.9deg]">
                                <div
                                    className="[--scale:1.365] md:[--scale:2.1]"
                                    style={{
                                        transform: "scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)",
                                    }}
                                >
                                    <CreditCard type="transparent-gradient" cardHolder="lana steiner" />
                                </div>
                            </div>
                            <div className="relative z-2 translate-y-[10px] rotate-[14.8deg]">
                                <div
                                    className="[--scale:1.365] md:[--scale:2.099]"
                                    style={{
                                        transform: "scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)",
                                    }}
                                >
                                    <CreditCard type="transparent-gradient" cardHolder="OLIVIA RHYE" />
                                </div>
                            </div>
                            <div
                                className="relative z-1 [--scale:1.365] md:[--scale:2.1]"
                                style={{
                                    transform: "scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)",
                                }}
                            >
                                <CreditCard type="transparent-gradient" cardHolder="Phoenix Baker" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
