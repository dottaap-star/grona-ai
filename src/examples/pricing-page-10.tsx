"use client";

import type { FC } from "react";
import { CheckCircle, LayersThree01, LayersTwo01, Zap } from "@untitledui/icons";
import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const faqs = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
        icon: Heart,
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
        icon: SwitchHorizontal01,
    },
    {
        question: "What is your cancellation policy?",
        answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
        icon: SlashCircle01,
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
        icon: File05,
    },
    {
        question: "How does billing work?",
        answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
        icon: CreditCardRefresh,
    },
    {
        question: "How do I change my account email?",
        answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
        icon: Mail01,
    },
];

const footerNavListBrand = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge type="modern" size="sm" className="ml-1">
                        New
                    </Badge>
                ),
            },
            { label: "Tutorials", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Releases", href: "#" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "About us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "News", href: "#" },
            { label: "Media kit", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
    {
        label: "Social",
        items: [
            { label: "Twitter", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "AngelList", href: "#" },
            { label: "Dribbble", href: "#" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Cookies", href: "#" },
            { label: "Licenses", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
];

const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
}) => {
    const { text, color, size, iconStyle = "contained" } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "contained" && (
                <div
                    className={cx(
                        "flex shrink-0 items-center justify-center rounded-full",
                        color === "success" ? "bg-success-secondary text-featured-icon-light-fg-success" : "bg-brand-primary text-featured-icon-light-fg-brand",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                >
                    <svg
                        width={size === "lg" ? 16 : size === "md" ? 15 : 13}
                        height={size === "lg" ? 14 : size === "md" ? 13 : 11}
                        viewBox="0 0 13 11"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            )}

            {iconStyle === "filled" && (
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-solid text-white">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1.5 4L4.5 7L10.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-fg-success-primary" : "text-fg-brand-primary",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                />
            )}

            <span
                className={cx(
                    "text-tertiary",
                    size === "lg" ? "pt-0.5 text-lg md:pt-0" : size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md",
                    iconStyle === "filled" && "text-brand-secondary",
                    props.textClassName,
                )}
            >
                {text}
            </span>
        </li>
    );
};

interface PricingTierCardProps {
    icon: FC<{ className?: string }>;
    iconTheme?: "light" | "gradient" | "dark" | "outline" | "modern";
    iconColor?: "brand" | "gray" | "success" | "warning" | "error";
    title: string;
    subtitle: string;
    description?: string;
    features: string[];
    className?: string;
}

const PricingTierCardIconOffset = (props: PricingTierCardProps) => {
    return (
        <div className={cx("relative flex flex-col rounded-2xl bg-secondary", props.className)}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <FeaturedIcon icon={props.icon} color="gray" theme="modern" size="lg" />
            </div>

            <div className="flex flex-col items-center px-6 pt-12 text-center md:px-8">
                <h2 className="text-xl font-semibold text-primary">{props.title}</h2>
                <p className="mt-2 text-display-md font-semibold text-primary md:text-display-lg">{props.subtitle}</p>
                <p className="mt-2 text-md text-tertiary">{props.description}</p>
            </div>

            <ul className="flex flex-col gap-4 px-6 py-8 md:px-8 md:pt-8 md:pb-10">
                {props.features.map((feat) => (
                    <CheckItemText key={feat} text={feat} iconStyle="outlined" />
                ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8">
                <Button size="xl">Get started</Button>
            </div>
        </div>
    );
};

const plans = [
    {
        title: "Basic plan",
        subtitle: "$10/mth",
        description: "Our most popular plan.",
        features: [
            "Access to basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat and email support",
        ],
        icon: Zap,
    },
    {
        title: "Business plan",
        subtitle: "$20/mth",
        description: "Billed annually.",
        features: [
            "200+ integrations",
            "Advanced reporting and analytics",
            "Up to 20 individual users",
            "40 GB individual data",
            "Priority chat and email support",
        ],
        icon: LayersTwo01,
    },
    {
        title: "Enterprise plan",
        subtitle: "$40/mth",
        description: "Billed annually.",
        features: [
            "Advanced custom fields",
            "Audit log and data history",
            "Unlimited individual users",
            "Unlimited individual data",
            "Personalized + priority service",
        ],
        icon: LayersThree01,
    },
];

const PricingSimpleIconOffset = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</p>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Plans that fit your scale</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-center md:mt-12">
                        <Button color="secondary" size="xl">
                            Chat to sales
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="mt-16 grid w-full grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardIconOffset key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQSimple02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">FAQs</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Everything you need to know about the product and billing. Can't find the answer you're looking for? Please{" "}
                        <a
                            href="#"
                            className="rounded-xs underline underline-offset-4 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            chat to our friendly team
                        </a>
                        .
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <dl className="grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {faqs.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col">
                                    <FeaturedIcon color="gray" theme="modern" className="md:hidden" size="md" icon={item.icon} />
                                    <FeaturedIcon color="gray" theme="modern" className="hidden md:flex" size="lg" icon={item.icon} />

                                    <dt className="mt-4 text-lg font-semibold text-primary md:mt-5 md:text-xl">{item.question}</dt>
                                    <dd className="mt-1 text-md text-tertiary md:mt-2">{item.answer}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-secondary px-5 py-8 md:mt-16 md:flex-row md:gap-8 md:p-8">
                    <div className="w-full max-w-3xl">
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="xl">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

const ScreenMockup04 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-secondary lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-1 flex-col px-6 pt-10 pb-12 sm:p-12 lg:p-16">
                        <h2 className="text-display-sm font-semibold text-primary xl:text-display-md">Join 4,000+ startups growing with Untitled</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">Start your 30-day free trial today.</p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                            <Button color="secondary" size="xl">
                                Learn more
                            </Button>
                            <Button size="xl">Get started</Button>
                        </div>
                    </div>
                    <div className="h-52 w-full translate-x-6 translate-y-0 sm:h-90 sm:translate-x-12 sm:translate-y-12 md:h-120 lg:w-auto">
                        <div className="w-max max-w-full rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.91px] md:p-0.5 md:ring-[1.26px] lg:max-w-3xl">
                            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.68px] md:p-1 md:shadow-modern-mockup-inner-lg">
                                <div className="relative size-full overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[15.16px] md:ring-[1.26px]">
                                    {/* Light mode image (hidden in dark mode) */}
                                    <img
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                        alt="Business dashboard interface showing comprehensive analytics and performance metrics"
                                        className="size-full object-cover object-left-top dark:hidden"
                                    />
                                    {/* Dark mode image (hidden in light mode) */}
                                    <img
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                        alt="Business dashboard interface showing comprehensive analytics and performance metrics"
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

const FooterLarge03 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
                    <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {footerNavListBrand.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-primary">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button color="link-color" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full md:max-w-[135px]">
                        <h4 className="text-sm font-semibold text-primary">Get the app</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 md:flex-col">
                            <AppStoreButton href="#" className="w-[135px]" />
                            <GooglePlayButton href="#" className="w-[135px]" />
                        </div>
                    </div>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-8 w-min" />
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const PricingPage10 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <PricingSimpleIconOffset />

            <SectionDivider />

            <FAQSimple02 />

            <ScreenMockup04 />

            <SectionDivider />

            <FooterLarge03 />
        </div>
    );
};

export default PricingPage10;
