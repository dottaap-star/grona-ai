"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Header } from "@/components/marketing/header-navigation/header";
import { FlowPattern } from "./base-components/flow-pattern";

export const HeroColorCard03 = () => {
    return (
        <div className="relative overflow-hidden bg-secondary">
            <Header />

            <section className="relative overflow-hidden pb-16 md:pt-8 md:pb-24">
                <div className="absolute top-1/2 left-[-98px] hidden -translate-y-1/2 md:block">
                    <FlowPattern className="text-fg-brand-secondary" />
                </div>
                <div className="absolute right-12 bottom-14 max-md:hidden">
                    <FlowPattern className="text-fg-brand-secondary" />
                </div>

                <div className="mx-auto max-w-container md:px-8">
                    <div className="flex w-full flex-col items-center bg-brand-section px-4 pt-16 pb-24 text-center md:rounded-3xl md:px-8 md:pt-24 md:pb-48">
                        <h1 className="max-w-3xl text-display-md font-semibold text-primary_on-brand md:text-display-lg lg:text-display-2xl">
                            Grow your users. <br />
                            <span className="text-secondary_on-brand">Smarter.</span>
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-balance text-tertiary_on-brand md:mt-6 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.{" "}
                            <span className="max-md:hidden">Trusted by over 4,000 startups.</span>
                        </p>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="mt-10 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start"
                        >
                            <Input
                                isRequired
                                size="md"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                wrapperClassName="py-0.5 not-focus:ring-transparent"
                                hint={
                                    <span className="text-tertiary_on-brand">
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

                    <div className="relative mx-auto -mt-8 w-max max-w-full px-4 md:-mt-24 md:px-8">
                        <div className="relative rounded ring-6 ring-white/50 md:rounded-[10px] md:ring-8">
                            {/* Shadow */}

                            <div className="absolute inset-x-4 inset-y-0 h-full shadow-xl md:inset-x-7 md:shadow-3xl"></div>
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="relative rounded object-cover md:rounded-[10px] lg:max-w-3xl dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="relative rounded object-cover not-dark:hidden md:rounded-[10px] lg:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
