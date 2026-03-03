"use client";

import { ArrowRight, PlayCircle } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";

export const HeroCardMockup09 = () => {
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

            <section className="relative py-16 md:pb-24">
                <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex max-w-3xl flex-col items-start">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="New!" iconTrailing={ArrowRight} theme="modern" color="success">
                                Download the new iOS app
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="New!" iconTrailing={ArrowRight} theme="modern" color="success">
                                Download the new iOS app
                            </BadgeGroup>
                        </a>
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Smart business credit cards</h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            <span className="max-md:hidden">Untitled is a next-gen financial technology company in the process of reinventing banking.</span>
                            <span className="md:hidden">
                                Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day
                                free trial.
                            </span>
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                    </div>

                    <div className="relative -mx-4 flex h-80 items-center justify-center bg-tertiary md:mr-0 md:h-120 md:rounded-2xl lg:h-full lg:min-h-140">
                        <div className="-space-y-[146px] md:translate-y-3.5 md:-space-y-[126px]">
                            <div
                                className="relative z-4 [--scale:1.13] md:[--scale:1.641]"
                                style={{
                                    transform: "scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)",
                                }}
                            >
                                <CreditCard type="transparent-gradient" cardHolder="Demi Wilkinson" />
                            </div>
                            <div
                                className="relative z-3 [--scale:1.13] md:[--scale:1.641]"
                                style={{
                                    transform: "scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)",
                                }}
                            >
                                <CreditCard type="brand-dark" cardHolder="Lana Steiner" />
                            </div>
                            <div
                                className="relative z-2 [--scale:1.13] md:[--scale:1.641]"
                                style={{
                                    transform: "scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)",
                                }}
                            >
                                <CreditCard type="transparent" cardHolder="OLIVIA RHYE" />
                            </div>
                            <div
                                className="relative z-1 [--scale:1.13] md:[--scale:1.641]"
                                style={{
                                    transform: "scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)",
                                }}
                            >
                                <CreditCard type="gray-dark" cardHolder="Phoenix Baker" />
                            </div>
                            <div
                                className="relative z-0 [--scale:1.13] md:[--scale:1.641]"
                                style={{
                                    transform: "scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)",
                                }}
                            >
                                <div className="h-47.5 w-79 rounded-2xl bg-gray-900 opacity-15 blur-md"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
