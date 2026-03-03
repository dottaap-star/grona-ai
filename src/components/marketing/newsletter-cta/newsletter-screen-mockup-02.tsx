"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const NewsletterScreenMockup02 = () => {
    return (
        <section className="overflow-hidden bg-primary pt-16 md:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
                <div className="flex w-full max-w-3xl flex-col">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">We'll send you a nice letter once per week</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
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

                <div className="relative mx-auto min-h-90 md:min-h-100 lg:mx-0 lg:min-h-142">
                    {/* Light mode image (hidden in dark mode) */}
                    <img
                        alt="Dashboard mockup showing application interface"
                        className="aspect-3/2 h-auto w-full max-w-5xl rounded object-cover shadow-3xl ring-4 ring-screen-mockup-border max-md:hidden md:ml-24 md:h-90 md:w-auto md:rounded-xl lg:absolute lg:inset-0 lg:left-24 lg:ml-0 lg:h-128 dark:hidden"
                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                    />
                    {/* Dark mode image (hidden in light mode) */}
                    <img
                        alt="Dashboard mockup showing application interface"
                        className="aspect-3/2 h-auto w-full max-w-5xl rounded object-cover shadow-3xl ring-4 ring-screen-mockup-border not-dark:hidden max-md:hidden md:ml-24 md:h-90 md:w-auto md:rounded-xl lg:absolute lg:inset-0 lg:left-24 lg:ml-0 lg:h-128"
                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                    />

                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute left-1/2 max-w-71 -translate-x-1/2 md:top-12 md:left-0 md:max-w-45 md:translate-x-0 lg:top-18 lg:max-w-61"
                    />
                </div>
            </div>
        </section>
    );
};
