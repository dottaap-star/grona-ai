"use client";

import { ArrowRight } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Header } from "@/components/marketing/header-navigation/header";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";

export const HeroCardMockup11 = () => {
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

            <section className="relative overflow-hidden py-16 lg:flex lg:min-h-180 lg:py-0">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pt-32 lg:pr-8 lg:pb-24">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="We're hiring!" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Join our remote team
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="We're hiring!" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Join our remote team
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Smart business credit cards</h1>
                        <p className="mt-4 text-lg text-balance text-tertiary md:mt-6 md:max-w-lg md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.{" "}
                        </p>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start"
                        >
                            <Input
                                isRequired
                                size="md"
                                name="email"
                                type="email"
                                wrapperClassName="py-0.5"
                                placeholder="Enter your email"
                                hint={
                                    <span>
                                        We care about your data in our{" "}
                                        <a
                                            href="#"
                                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            privacy policy
                                        </a>
                                        .
                                    </span>
                                }
                            />
                            <Button type="submit" size="xl">
                                Get started
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="relative mt-16 h-80 w-full bg-secondary px-4 md:h-95 md:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden sm:pl-[30vw] lg:overflow-visible lg:pl-0">
                        <div
                            className="flex w-max [transform:var(--transform-mobile)] flex-col gap-4 lg:[transform:var(--transform-desktop)]"
                            style={
                                {
                                    "--transform-mobile": "scale(0.585) rotate(30deg) translate(-87px, 799px)",
                                    "--transform-desktop": "rotate(30deg) translate(186px, 291px)",
                                } as React.CSSProperties
                            }
                        >
                            <div className="flex gap-4 pl-40">
                                <CreditCard type="brand-dark" cardHolder="Phoenix baker" />
                                <CreditCard type="gray-dark" cardHolder="Phoenix baker" />
                                <CreditCard type="brand-dark" cardHolder="Phoenix baker" />
                            </div>
                            <div className="flex gap-4">
                                <CreditCard type="gradient-strip-vertical" cardHolder="Phoenix baker" />
                                <CreditCard type="gradient-strip" cardHolder="Phoenix baker" />
                                <CreditCard type="salmon-strip" cardHolder="Phoenix baker" />
                            </div>
                            <div className="flex gap-4 pl-40">
                                <CreditCard type="gray-dark" cardHolder="Phoenix baker" />
                                <CreditCard type="brand-dark" cardHolder="Phoenix baker" />
                            </div>
                            <div className="flex gap-4">
                                <CreditCard type="salmon-strip" cardHolder="Phoenix baker" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
