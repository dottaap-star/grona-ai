"use client";

import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
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

export const HeroIPhoneMockup04 = () => {
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

            <section className="relative overflow-hidden pt-16 md:pb-24">
                <div className="mx-auto flex max-w-container flex-col gap-16 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-8">
                    <div className="w-full flex-1">
                        <h1 className="max-w-3xl text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Growth performance tracking made easy
                        </h1>
                        <p className="mt-4 max-w-lg text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Designed by creators, for creators. Untitled gives you the guidance, data and innovation you need to sell more and growth your
                            digital business.{" "}
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                        <AvatarsWithReview className="mt-8 md:mt-12" />
                    </div>

                    <div className="relative flex flex-1 flex-col items-center overflow-y-clip md:h-160 md:pt-20 lg:max-w-140">
                        {/* Background Blob */}
                        <div className="absolute top-20 left-1/2 h-94 w-120 -translate-x-1/2 rounded-t-[320px] rounded-b-[24px] bg-tertiary md:top-0 md:h-160 md:w-140"></div>

                        <div className="relative flex h-104 w-max items-start justify-center md:h-140">
                            {/*  Notifications List */}
                            <ul className="absolute -bottom-3 left-[-218px] z-10 hidden flex-col gap-3 md:flex" aria-hidden="true">
                                <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                                    <img
                                        alt="Olivia Rhye"
                                        src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                        className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                                    />
                                    <div>
                                        <p className="text-sm text-secondary">
                                            <span className="font-medium text-brand-secondary">Olivia Rhye</span> followed you!
                                        </p>
                                        <p className="text-sm text-tertiary">@oliviarhye</p>
                                    </div>
                                </li>
                                <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                                    <img
                                        alt="Candice Wu"
                                        src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                                        className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                                    />
                                    <div>
                                        <p className="text-sm text-secondary">
                                            <span className="font-medium text-brand-secondary">Candice Wu</span> and 2 other gave you kudos on{" "}
                                            <span className="font-medium text-brand-secondary">Clubhouse 101</span> post
                                        </p>
                                    </div>
                                </li>
                                <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-75 backdrop-blur-lg">
                                    <img
                                        alt="Phoenix Baker"
                                        src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                                        className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                                    />
                                    <div>
                                        <p className="text-sm text-secondary">
                                            <span className="font-medium text-brand-secondary">Phoenix Baker</span> joined your team{" "}
                                            <span className="font-medium text-brand-secondary">Melbourne Startups Growth</span>
                                        </p>
                                    </div>
                                </li>
                                <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-50 backdrop-blur-lg">
                                    <img
                                        alt="Lana Steiner"
                                        src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                                        className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                                    />
                                    <div>
                                        <p className="text-sm text-secondary">
                                            <span className="font-medium text-brand-secondary">Lana Steiner</span> just launched{" "}
                                            <span className="font-medium text-brand-secondary">The 10k users challenge</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="h-[579px] w-71 drop-shadow-iphone-mockup md:h-auto md:w-[313px] md:drop-shadow-none"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
