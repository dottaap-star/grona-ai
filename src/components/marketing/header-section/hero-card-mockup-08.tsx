"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Header } from "@/components/marketing/header-navigation/header";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const HeroCardMockup08 = () => {
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
                <div className="mx-auto flex w-full max-w-container flex-col justify-between gap-8 px-4 md:px-8 lg:flex-row lg:items-end">
                    <div className="flex max-w-3xl flex-1 flex-col items-start">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Simple, transparent business credit cards
                        </h1>
                        <p className="mt-4 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free
                            trial.
                        </p>

                        <ul className="mt-8 flex shrink-0 flex-col gap-4 pl-2 lg:hidden">
                            <CheckItemText text="Instantly issue virtual corporate cards" size="lg" color="success" />
                            <CheckItemText text="Control spending before it happens" size="lg" color="success" />
                            <CheckItemText text="Automate your expense management" size="lg" color="success" />
                        </ul>

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

                    <ul className="hidden shrink-0 flex-col gap-5 pb-6 pl-4 lg:flex">
                        <CheckItemText text="Instantly issue virtual corporate cards" size="lg" color="success" />
                        <CheckItemText text="Control spending before it happens" size="lg" color="success" />
                        <CheckItemText text="Automate your expense management" size="lg" color="success" />
                    </ul>
                </div>

                <div className="relative mt-16 w-full max-w-container px-4 md:mx-auto md:px-8">
                    <img
                        src="https://www.untitledui.com/marketing/glass-cards.webp"
                        alt="Hero card mockup"
                        className="h-68 w-full overflow-hidden rounded-2xl object-cover md:h-120 md:rounded-2xl"
                    />
                </div>
            </section>
        </div>
    );
};
