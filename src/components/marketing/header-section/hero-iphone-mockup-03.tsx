"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroIPhoneMockup03 = () => {
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

            <section className="relative overflow-hidden pt-16 md:pb-24">
                <div className="mx-auto flex max-w-container flex-col gap-16 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-8">
                    <div className="flex w-full max-w-3xl flex-1 flex-col">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Banking, but for digital creators</h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Designed by creators, for creators. Untitled gives you the guidance, data and innovation you need to sell more and growth your
                            digital business.{" "}
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
                                name="phone"
                                placeholder="+1 (555) 000-0000"
                                wrapperClassName="md:py-0.5"
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
                                Text me a link
                            </Button>
                        </Form>
                    </div>

                    <div className="relative flex h-90 w-full items-start justify-center lg:h-128 lg:flex-1 lg:items-center">
                        {/* Desktop mockup */}
                        <div className="absolute top-0 left-16 max-lg:hidden">
                            <div className="rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[26.91px] md:p-[3px] md:ring-[1.68px]">
                                <div className="rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                                    <div className="relative overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[20.21px] md:ring-[1.68px]">
                                        {/* Light mode image (hidden in dark mode) */}
                                        <img
                                            alt="Dashboard mockup showing application interface"
                                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                            className="max-w-5xl object-cover dark:hidden"
                                        />
                                        {/* Dark mode image (hidden in light mode) */}
                                        <img
                                            alt="Dashboard mockup showing application interface"
                                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                            className="max-w-5xl object-cover not-dark:hidden"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Mockup */}
                        <div className="top-26 left-0 lg:absolute">
                            <div className="max-w-70 rounded-[23.89px] bg-primary p-[3px] shadow-lg ring-[1.5px] ring-utility-gray-300 ring-inset">
                                <div className="size-full rounded-[20.91px] bg-primary p-1 shadow-modern-mockup-inner-md md:shadow-modern-mockup-inner-lg">
                                    <div className="relative size-full overflow-hidden rounded-[17.92px] bg-utility-gray-50 ring-[1.5px] ring-utility-gray-200">
                                        {/* Light mode image (hidden in dark mode) */}
                                        <img
                                            alt="Mobile app interface mockup"
                                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                            className="size-full object-cover dark:hidden"
                                        />
                                        {/* Dark mode image (hidden in light mode) */}
                                        <img
                                            alt="Mobile app interface mockup"
                                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                            className="size-full object-cover not-dark:hidden"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
