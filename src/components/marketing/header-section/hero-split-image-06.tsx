"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroSplitImage06 = () => {
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

            <section className="py-16 md:pb-24">
                <div className="relative mx-auto grid max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:min-h-160 lg:items-center">
                    <div className="z-10 flex max-w-200 flex-col items-start">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Customer service software for customer-first teams
                        </h1>
                        <p className="mt-4 max-w-xl text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            The best customer service software for customer-first teams. Industry-leading email and live chat support.{" "}
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
                                placeholder="Enter your email"
                                wrapperClassName="py-0.5"
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

                    <div className="relative lg:absolute lg:top-0 lg:right-8 lg:h-full lg:w-140">
                        <svg
                            className="absolute -bottom-2 left-4 hidden -translate-x-1/2 text-fg-brand-secondary lg:block"
                            width="305"
                            height="297"
                            viewBox="0 0 305 297"
                            fill="none"
                        >
                            <path
                                d="M15.0243 137.273C15.0243 137.273 117.788 224.619 301.934 145.676M31.6228 176.648C31.6228 176.648 10.7487 138.769 12.6572 136.157C14.5721 133.538 44.762 125.838 48.6753 125.389"
                                stroke="currentColor"
                                strokeWidth="6"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <img
                            className="inset-0 h-60 w-full object-cover md:h-110 lg:h-full"
                            src="https://www.untitledui.com/images/portraits/lana-steiner"
                            alt="Portrait"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
