"use client";

import { ArrowRight, PlayCircle } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";

export const HeroCardMockup04 = () => {
    return (
        <div className="relative overflow-hidden bg-secondary">
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
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="What's new?" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Instantly issue virtual cards
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="What's new?" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Instantly issue virtual cards
                            </BadgeGroup>
                        </a>
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            No more business banking headaches
                        </h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Untitled is a next-gen financial technology company in the process of reinventing banking.{" "}
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                    </div>

                    <div className="relative -mx-4 flex h-80 items-center justify-center bg-brand-section md:mx-0 md:h-120 lg:h-full lg:min-h-140">
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
