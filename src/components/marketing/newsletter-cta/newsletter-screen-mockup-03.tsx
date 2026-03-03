"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";

export const NewsletterScreenMockup03 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:pt-24 md:pb-0">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center text-center">
                    <h2 className="max-w-3xl text-display-sm font-semibold text-primary md:text-display-md">We'll send you a nice letter once per week</h2>
                    <p className="mt-4 max-w-3xl text-lg text-tertiary md:mt-5 md:text-xl">
                        No spam. Just the latest releases and tips, interesting articles, and exclusive interviews with great people.
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
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </div>
            <div className="mx-auto mt-16 w-full max-w-container px-4 md:max-h-100 md:overflow-hidden md:px-8">
                <div className="size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[32px] md:p-1 md:ring-[2px]">
                    <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                        <div className="relative size-full overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[24px] md:ring-[2px]">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="size-full object-cover dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="size-full object-cover not-dark:hidden"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
