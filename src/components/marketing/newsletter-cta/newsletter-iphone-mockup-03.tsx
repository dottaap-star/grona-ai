"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const NewsletterIPhoneMockup03 = () => {
    return (
        <section className="bg-primary pt-16 md:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="z-20 flex flex-col items-start md:max-w-xl md:pr-18">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">Be the first to know when we launch</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        We're still building. Subscribe for updates and 20% off when we launch. <span className="max-md:hidden">No spam, we promise!</span>
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

                <div className="relative -mx-4 min-h-90 w-screen overflow-hidden bg-tertiary md:mx-0 md:min-h-128 md:w-full">
                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute top-14 left-[47%] w-full max-w-67 -translate-x-[60%] drop-shadow-iphone-mockup sm:top-28 md:max-w-78.5 lg:left-12 lg:translate-x-0"
                    />
                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute top-6 right-[47%] w-full max-w-67 translate-x-[60%] drop-shadow-iphone-mockup sm:top-12 md:max-w-78.5 lg:right-12 lg:translate-x-0"
                    />
                </div>
            </div>
        </section>
    );
};
