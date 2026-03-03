"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const NewsletterIPhoneMockup04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="relative grid grid-cols-1 overflow-hidden rounded-2xl bg-brand-section md:rounded-3xl md:shadow-xl lg:min-h-120 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-1 flex-col px-6 pt-10 pb-12 md:p-12 lg:p-16">
                        <h2 className="text-display-sm font-semibold text-primary_on-brand xl:text-display-md">
                            Be the first to know when we launch our new platform
                        </h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 lg:text-xl">
                            We're still building. Subscribe for updates and 20% off <span className="max-md:hidden">when we launch. No spam, we promise!</span>
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
                                inputClassName="border-none"
                                wrapperClassName="py-0.5 md:max-w-[345px]"
                                hint={
                                    <span className="text-tertiary_on-brand">
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

                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="top-10 right-16 max-h-70 w-full max-w-67 justify-self-center drop-shadow-iphone-mockup lg:absolute lg:max-h-none lg:max-w-78.5"
                    />

                    <div className="absolute bottom-10 left-1/2 hidden -translate-x-2 flex-col gap-3 lg:flex" aria-hidden="true">
                        <div className="flex w-full max-w-xs gap-3 rounded-lg bg-primary/90 p-4 backdrop-blur-lg">
                            <img
                                alt="Olivia Rhye"
                                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                className="size-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm text-tertiary">
                                    <span className="font-medium text-brand-secondary">Olivia Rhye</span> followed you!
                                </p>
                                <p className="text-sm text-tertiary">@oliviarhye</p>
                            </div>
                        </div>
                        <div className="flex w-full max-w-xs gap-3 rounded-lg bg-primary/90 p-4 backdrop-blur-lg">
                            <img
                                alt="Candice Wu"
                                src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                                className="size-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm text-tertiary">
                                    <span className="font-medium text-brand-secondary">Candice Wu</span> and 2 other gave you kudos on{" "}
                                    <span className="font-medium text-brand-secondary">Clubhouse 101</span> post
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full max-w-xs gap-3 rounded-lg bg-primary/90 p-4 opacity-75 backdrop-blur-lg">
                            <img
                                alt="Phoenix Baker"
                                src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                                className="size-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm text-tertiary">
                                    <span className="font-medium text-brand-secondary">Phoenix Baker</span> joined your team{" "}
                                    <span className="font-medium text-brand-secondary">Melbourne Startups Growth</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full max-w-xs gap-3 rounded-lg bg-primary/90 p-4 opacity-50 backdrop-blur-lg">
                            <img
                                alt="Lana Steiner"
                                src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                                className="size-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm text-tertiary">
                                    <span className="font-medium text-brand-secondary">Lana Steiner</span> just launched{" "}
                                    <span className="font-medium text-brand-secondary">The 10k users challenge workbook</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
