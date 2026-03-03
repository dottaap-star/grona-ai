"use client";

import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";

export const HeroCardMockup10 = () => {
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

            <section className="relative py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="flex max-w-3xl flex-col items-start">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Simple, transparent business credit cards
                        </h1>
                        <p className="mt-4 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free
                            trial.
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                    </div>
                </div>

                <div className="relative mt-16 w-full max-w-container md:mx-auto md:mt-24 md:px-8">
                    <div className="h-80 w-full bg-secondary md:h-120 md:rounded-2xl"></div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden sm:pl-[30vw] md:inset-x-8 md:rounded-2xl md:pl-0">
                        <div
                            className="flex w-max [transform:var(--transform-mobile)] flex-col gap-4 md:[transform:var(--transform-desktop)]"
                            style={
                                {
                                    "--transform-mobile": "scale(0.585) rotate(30deg) translate(-87px, 799px)",
                                    "--transform-desktop": "rotate(30deg) translate(416px, 177px)",
                                } as React.CSSProperties
                            }
                        >
                            <div className="flex gap-4 pl-40">
                                <CreditCard type="brand-dark" cardHolder="Phoenix baker" />
                                <CreditCard type="gray-dark" cardHolder="Phoenix baker" />
                                <CreditCard type="brand-dark" cardHolder="Phoenix baker" />
                            </div>
                            <div className="flex gap-4">
                                <CreditCard type="gray-strip" cardHolder="Phoenix baker" />
                                <CreditCard type="gradient-strip" cardHolder="Phoenix baker" />
                                <CreditCard type="salmon-strip" cardHolder="Phoenix baker" />
                            </div>
                            <div className="flex gap-4 pl-40">
                                <CreditCard type="gray-strip-vertical" cardHolder="Phoenix baker" />
                                <CreditCard type="brand-dark" cardHolder="Phoenix baker" />
                            </div>
                            <div className="flex gap-4">
                                <CreditCard type="brand-dark" cardHolder="Phoenix baker" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
