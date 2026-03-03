"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";

export const NewsletterScreenMockup04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-secondary md:rounded-3xl lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-1 flex-col px-6 pt-10 pb-12 sm:p-12 lg:p-16">
                        <h2 className="text-display-sm font-semibold text-primary xl:text-display-md">We'll send you a nice letter once per week</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">
                            No spam. Just the latest releases and tips, interesting articles, and exclusive interviews.
                        </p>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="mt-8 flex w-full flex-col gap-4 md:mt-12 md:max-w-120 md:flex-row"
                        >
                            <Input
                                isRequired
                                size="md"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                wrapperClassName="py-0.5 md:max-w-[345px]"
                                hint={
                                    <span>
                                        <span className="md:hidden">Read about our</span>
                                        <span className="max-md:hidden">We care about your data in our</span>{" "}
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
                                Subscribe
                            </Button>
                        </Form>
                    </div>

                    <div className="h-52 w-full translate-x-6 translate-y-0 sm:h-90 sm:translate-x-12 sm:translate-y-12 md:h-120 lg:w-auto">
                        <div className="w-max max-w-full rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.91px] md:p-0.5 md:ring-[1.26px] lg:max-w-3xl">
                            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.68px] md:p-1 md:shadow-modern-mockup-inner-lg">
                                <div className="relative size-full overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[15.16px] md:ring-[1.26px]">
                                    {/* Light mode image (hidden in dark mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                        className="size-full object-cover object-left-top dark:hidden"
                                    />
                                    {/* Dark mode image (hidden in light mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                        className="size-full object-cover object-left-top not-dark:hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
