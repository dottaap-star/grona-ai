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

export const HeroCardMockup06 = () => {
    return (
        <div className="relative overflow-hidden bg-brand-section">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-sm-desktop.svg"
                className="pointer-events-none absolute -top-2 left-1/2 z-0 hidden max-w-none -translate-x-1/2 opacity-20 md:block dark:opacity-100 dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 opacity-20 md:hidden dark:opacity-100 dark:brightness-[0.2]"
            />

            <HeaderPrimaryDark className="bg-transparent" />

            <section className="relative overflow-hidden pt-16 md:pt-24 md:pb-0">
                <img
                    alt="Light Accent"
                    aria-hidden="true"
                    src="https://www.untitledui.com/marketing/light-accent.webp"
                    className="absolute -right-2/3 -bottom-12 max-w-160 opacity-90 mix-blend-screen sm:-right-1/3 md:max-w-7xl"
                />

                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
                        <span className="text-sm font-semibold text-secondary_on-brand md:text-md">Super. Simple. Banking.</span>

                        <h1 className="mt-3 text-display-md font-semibold text-primary_on-brand md:text-display-lg lg:text-display-2xl">
                            Banking technology that has your back.
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-balance text-tertiary_on-brand md:mt-6 md:text-xl">
                            Simple, transparent banking. No hidden fees and free overdrafts.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl" className="shadow-xs! ring-0">
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container md:px-8">
                    <div className="flex h-46 items-end justify-center md:h-114">
                        <div className="flex -translate-y-[53px] items-start justify-end md:translate-y-2">
                            <div
                                className="absolute origin-right [transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                                style={
                                    {
                                        "--transform-mobile": "scale(0.7) translate(-59px, 39px) rotate(30deg)",
                                        "--transform-desktop": "scale(1.77) translate(-59px, 39px) rotate(30deg)",
                                    } as React.CSSProperties
                                }
                            >
                                <CreditCard type="transparent-gradient" cardHolder="Phoenix Baker" />
                            </div>
                            <div
                                className="absolute origin-right [transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                                style={
                                    {
                                        "--transform-mobile": "scale(0.7) translate(-38px, 10px) rotate(60deg)",
                                        "--transform-desktop": "scale(1.77) translate(-38px, 10px) rotate(60deg)",
                                    } as React.CSSProperties
                                }
                            >
                                <CreditCard type="transparent-gradient" cardHolder="OLIVIA RHYE" />
                            </div>
                            <div
                                className="absolute origin-right [transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                                style={
                                    {
                                        "--transform-mobile": "scale(0.7) translate(0px, 0px) rotate(90deg)",
                                        "--transform-desktop": "scale(1.77) translate(0px, 0px) rotate(90deg)",
                                    } as React.CSSProperties
                                }
                            >
                                <CreditCard type="transparent-gradient" cardHolder="Lana Steiner" />
                            </div>
                            <div
                                className="absolute origin-right [transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                                style={
                                    {
                                        "--transform-mobile": "scale(0.7) translate(36px, 10px) rotate(120deg)",
                                        "--transform-desktop": "scale(1.77) translate(36px, 10px) rotate(120deg)",
                                    } as React.CSSProperties
                                }
                            >
                                <CreditCard type="transparent-gradient" cardHolder="Demi Wilkinson" />
                            </div>
                            <div
                                className="absolute origin-right [transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                                style={
                                    {
                                        "--transform-mobile": "scale(0.7) translate(59px, 39px) rotate(150deg)",
                                        "--transform-desktop": "scale(1.77) translate(59px, 39px)  rotate(150deg)",
                                    } as React.CSSProperties
                                }
                            >
                                <CreditCard type="transparent-gradient" cardHolder="Candice wu" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
