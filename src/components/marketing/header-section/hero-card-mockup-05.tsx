"use client";

import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";

export const HeroCardMockup05 = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-sm-desktop.svg"
                className="pointer-events-none absolute -top-2 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header />

            <section className="relative overflow-hidden py-16 md:pt-24 md:pb-0">
                <img
                    alt="Light Accent"
                    aria-hidden="true"
                    src="https://www.untitledui.com/marketing/light-accent.webp"
                    className="absolute -right-1/4 -bottom-14 z-10 max-w-160 mix-blend-screen sm:-right-1/3 md:-right-1/4 md:hidden md:max-w-7xl md:dark:block"
                />
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Super. Simple. Banking.</span>

                        <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-2xl">
                            Simple banking that works like magic.
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Simple, transparent banking. No hidden fees and free overdrafts.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container md:px-8">
                    <div className="flex h-53 items-center justify-center md:h-100 md:items-end">
                        <div className="flex">
                            <div
                                className="[transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                                style={
                                    {
                                        "--transform-mobile": "scale(0.79) translate(131px, 11px) rotate(30deg)",
                                        "--transform-desktop": "scale(1.77) translate(12px, 2px) rotate(30deg)",
                                    } as React.CSSProperties
                                }
                            >
                                <CreditCard type="brand-dark" cardHolder="Phoenix Baker" />
                            </div>
                            <div
                                className="[transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                                style={
                                    {
                                        "--transform-mobile": "scale(0.79) translate(-98px, -1px) rotate(30deg)",
                                        "--transform-desktop": "scale(1.77) translate(5px, -11px)  rotate(30deg)",
                                    } as React.CSSProperties
                                }
                            >
                                <CreditCard type="brand-dark" cardHolder="OLIVIA RHYE" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
