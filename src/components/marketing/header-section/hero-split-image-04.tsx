"use client";

import { Fragment } from "react";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";

const AvatarsWithReview = (props: { className?: string }) => {
    return (
        <div className={cx("flex items-center gap-4", props.className)}>
            <div className="inline-flex -space-x-3 overflow-hidden">
                <img
                    className="inline-block size-10 rounded-full ring-[1.5px] ring-bg-primary outline-1 -outline-offset-1 outline-avatar-contrast-border"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                />
                <img
                    className="inline-block size-10 rounded-full ring-[1.5px] ring-bg-primary outline-1 -outline-offset-1 outline-avatar-contrast-border"
                    src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                    alt="Phoenix Baker"
                />
                <img
                    className="inline-block size-10 rounded-full ring-[1.5px] ring-bg-primary outline-1 -outline-offset-1 outline-avatar-contrast-border"
                    src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                    alt="Lana Steiner"
                />
                <img
                    className="inline-block size-10 rounded-full ring-[1.5px] ring-bg-primary outline-1 -outline-offset-1 outline-avatar-contrast-border"
                    src="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80"
                    alt="Demi Wilkinson"
                />
                <img
                    className="inline-block size-10 rounded-full ring-[1.5px] ring-bg-primary outline-1 -outline-offset-1 outline-avatar-contrast-border"
                    src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                    alt="Candice Wu"
                />
            </div>
            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        {Array(5)
                            .fill(null)
                            .map((_, index) => (
                                <svg
                                    key={index}
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="relative size-5 shrink-0 grow-0"
                                    preserveAspectRatio="none"
                                >
                                    <g clipPath="url(#clip0_1307_2721)">
                                        <path
                                            d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                            className="fill-bg-tertiary"
                                        />
                                        <g clipPath="url(#clip1_1307_2721)">
                                            <path
                                                d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                className="fill-warning-300"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1307_2721">
                                            <rect width={20} height={20} fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_1307_2721">
                                            <rect width={20} height={20} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            ))}
                    </div>
                    <span className="text-md font-semibold text-secondary">5.0</span>
                </div>
                <p className="text-md font-medium text-tertiary">from 200+ reviews</p>
            </div>
        </div>
    );
};

export const HeroSplitImage04 = () => {
    return (
        <Fragment>
            <Header className="bg-primary" />
            <section className="bg-primary py-16 md:pb-24">
                <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-8">
                    <div className="flex max-w-3xl flex-col items-start lg:pr-8">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">People who care about your growth</h1>
                        <p className="mt-4 max-w-lg text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
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
                            <Button type="submit" color="primary" size="xl">
                                Get started
                            </Button>
                        </Form>
                        <AvatarsWithReview className="mt-8 md:mt-12" />
                    </div>

                    <div className="relative lg:h-full lg:min-h-160">
                        <img
                            className="inset-0 h-70 w-full object-cover md:h-110 lg:absolute lg:h-full"
                            src="https://www.untitledui.com/images/portraits/person-02"
                            alt="Portrait"
                        />
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
