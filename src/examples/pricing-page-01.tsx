"use client";

import type { FC, ReactNode } from "react";
import {
    ArrowRight,
    ChartBreakoutSquare,
    CheckCircle,
    Command,
    CreditCardRefresh,
    File05,
    Heart,
    Mail01,
    MessageChatCircle,
    MessageHeartCircle,
    MessageSmileCircle,
    SlashCircle01,
    SwitchHorizontal01,
    Zap,
} from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";

const faqsExtended = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
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
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
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

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
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
        label: "Use cases",
        items: [
            { label: "Startups", href: "#" },
            { label: "Enterprise", href: "#" },
            { label: "Government", href: "#" },
            { label: "SaaS centre", href: "#" },
            { label: "Marketplaces", href: "#" },
            { label: "Ecommerce", href: "#" },
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

const PricingTierCardCallout = (props: {
    title: string;
    subtitle: string;
    description?: string;
    features: string[];
    secondAction?: string;
    checkItemTextColor?: "primary" | "success";
    hasCallout?: boolean;
    className?: string;
}) => {
    return (
        <div className={cx("relative flex flex-col rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt", props.className)}>
            {props.hasCallout && (
                <div className="absolute -top-6 right-2 md:-right-16">
                    <div className="flex text-brand-secondary">
                        <svg width="60" height="46" viewBox="0 0 60 46" fill="none">
                            <path
                                d="M9.22056 42.4485C9.06321 43.2619 9.595 44.0488 10.4084 44.2061C11.2217 44.3635 12.0086 43.8317 12.166 43.0184L9.22056 42.4485ZM50.5841 3.7912C51.405 3.68023 51.9806 2.92474 51.8696 2.10378C51.7586 1.28282 51.0032 0.707267 50.1822 0.818242L50.5841 3.7912ZM4.78725 32.3308C4.36038 31.6208 3.43878 31.3913 2.7288 31.8182C2.01882 32.2451 1.78931 33.1667 2.21618 33.8766L4.78725 32.3308ZM8.9767 42.2098L7.69117 42.9828L7.69189 42.984L8.9767 42.2098ZM12.5932 43.2606L11.9803 41.8916L11.979 41.8921L12.5932 43.2606ZM23.5123 40.0155C24.2684 39.677 24.6069 38.7897 24.2684 38.0336C23.9299 37.2774 23.0425 36.9389 22.2864 37.2774L23.5123 40.0155ZM10.6933 42.7334C12.166 43.0184 12.1659 43.0187 12.1658 43.019C12.1658 43.0189 12.1658 43.0192 12.1658 43.0192C12.1658 43.0192 12.1658 43.0189 12.166 43.0184C12.1662 43.0173 12.1666 43.0152 12.1672 43.012C12.1684 43.0058 12.1705 42.9953 12.1735 42.9808C12.1794 42.9517 12.1887 42.9064 12.2016 42.8456C12.2274 42.7239 12.2676 42.5403 12.3233 42.3008C12.4349 41.8216 12.6088 41.1193 12.8551 40.2421C13.3481 38.4863 14.1291 36.0371 15.2773 33.2782C17.5833 27.7375 21.3236 21.0615 27.0838 16.2002L25.1489 13.9076C18.8763 19.2013 14.905 26.3651 12.5076 32.1255C11.3042 35.0171 10.4856 37.5837 9.96684 39.4311C9.7073 40.3554 9.52235 41.1015 9.40152 41.6204C9.34109 41.8799 9.29667 42.0827 9.26695 42.2227C9.25209 42.2927 9.24091 42.3471 9.23323 42.385C9.22939 42.4039 9.22643 42.4187 9.22432 42.4294C9.22327 42.4347 9.22243 42.4389 9.22181 42.4421C9.22149 42.4437 9.22123 42.4451 9.22103 42.4461C9.22092 42.4467 9.22081 42.4473 9.22075 42.4475C9.22065 42.4481 9.22056 42.4485 10.6933 42.7334ZM27.0838 16.2002C38.8964 6.23107 48.2848 4.10201 50.5841 3.7912L50.1822 0.818242C47.3237 1.20465 37.402 3.56662 25.1489 13.9076L27.0838 16.2002ZM2.21618 33.8766L7.69117 42.9828L10.2622 41.4369L4.78725 32.3308L2.21618 33.8766ZM7.69189 42.984C8.83415 44.8798 11.2204 45.5209 13.2074 44.6291L11.979 41.8921C11.2779 42.2068 10.5661 41.9412 10.2615 41.4357L7.69189 42.984ZM13.2061 44.6297L23.5123 40.0155L22.2864 37.2774L11.9803 41.8916L13.2061 44.6297Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="-mt-2 text-sm font-semibold">Most popular!</span>
                    </div>
                </div>
            )}

            <div className="flex flex-col items-center px-6 pt-10 text-center md:px-8">
                <h2 className="text-display-md font-semibold text-primary md:text-display-lg">{props.subtitle}</h2>
                <p className="mt-4 text-xl font-semibold text-primary md:text-xl">{props.title}</p>
                <p className="mt-1 text-md text-tertiary">{props.description}</p>
            </div>

            <ul className="flex flex-col gap-4 px-6 pt-8 pb-8 md:p-8 md:pb-10">
                {props.features.map((feat) => (
                    <CheckItemText key={feat} text={feat} color={props.checkItemTextColor} />
                ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8">
                <Button size="xl">Get started</Button>
                {props.secondAction && (
                    <Button color="secondary" size="xl">
                        {props.secondAction}
                    </Button>
                )}
            </div>
        </div>
    );
};

const plans = [
    {
        title: "Basic plan",
        subtitle: "$10/mth",
        description: "Billed annually.",
        secondAction: "Chat to sales",
        callOut: "Most popular",
        features: [
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat and email support",
        ],
        hasCallout: true,
    },
    {
        title: "Business plan",
        subtitle: "$20/mth",
        description: "Billed annually.",
        secondAction: "Chat to sales",
        features: [
            "200+ integrations",
            "Advanced reporting and analytics",
            "Up to 20 individual users",
            "40 GB individual data",
            "Priority chat and email support",
        ],
    },
    {
        title: "Enterprise plan",
        subtitle: "$40/mth",
        description: "Billed annually.",
        secondAction: "Chat to sales",
        features: [
            "Advanced custom fields",
            "Audit log and data history",
            "Unlimited individual users",
            "Unlimited individual data",
            "Personalized + priority service",
        ],
    },
];

const PricingSimpleCallOut = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</p>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Simple, transparent pricing</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        We believe Untitled should be accessible to all companies, no matter the size.
                    </p>
                </div>

                <div className="mt-16 grid w-full grid-cols-1 gap-4 md:mt-24 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardCallout key={plan.title} {...plan} checkItemTextColor="success" />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

interface FeatureTextIcon extends TextCentered {
    icon: FC<{ className?: string }>;
}

const FeatureTextFeaturedIconTopLeft = ({ icon, title, subtitle, footer }: FeatureTextIcon) => (
    <div className="flex max-w-sm flex-col gap-4">
        <FeaturedIcon icon={icon} size="lg" color="gray" theme="modern" className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color="gray" theme="modern" className="inline-flex md:hidden" />

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const features = [
    {
        title: "Share team inboxes",
        subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        icon: MessageChatCircle,
        cta: "Learn more",
        href: "#",
    },
    {
        title: "Deliver instant answers",
        subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        icon: Zap,
        cta: "Learn more",
        href: "#",
    },
    {
        title: "Manage your team with reports",
        subtitle: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
        icon: ChartBreakoutSquare,
        cta: "Learn more",
        href: "#",
    },
    {
        title: "Connect with customers",
        subtitle: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
        icon: MessageSmileCircle,
        cta: "Learn more",
        href: "#",
    },
    {
        title: "Connect the tools you already use",
        subtitle: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
        icon: Command,
        cta: "Learn more",
        href: "#",
    },
    {
        title: "Our people make the difference",
        subtitle: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
        icon: MessageHeartCircle,
        cta: "Learn more",
        href: "#",
    },
];

const FeaturesSimpleIcons03 = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Beautiful analytics to grow smarter</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {features.map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopLeft
                                    icon={item.icon}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    footer={
                                        <Button color="link-color" size="lg" href={item.href} iconTrailing={ArrowRight}>
                                            {item.cta}
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FAQSimple04 = () => {
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
                        {faqsExtended.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col">
                                    <dt className="text-lg font-medium text-primary">{item.question}</dt>
                                    <dd className="mt-2 text-md text-tertiary">{item.answer}</dd>
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

const SimpleLogos01Brand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-start lg:grid-cols-[1fr_max-content] lg:gap-x-8">
                    <div className="max-w-3xl">
                        <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">Start your 30-day free trial</h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    </div>

                    <div className="mt-8 flex flex-col-reverse justify-start gap-3 sm:flex-row lg:mt-0">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>

                    <div className="mt-12 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-4 md:justify-start">
                        <img alt="Odeaolabs" src="https://www.untitledui.com/logos/logotype/white/odeaolabs.svg" className="h-9 opacity-85 md:h-10" />
                        <img alt="Kintsugi" src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg" className="h-9 opacity-85 md:h-10" />
                        <img alt="Stackedlab" src="https://www.untitledui.com/logos/logotype/white/stackedlab.svg" className="h-9 opacity-85 md:h-10" />
                        <img alt="Magnolia" src="https://www.untitledui.com/logos/logotype/white/magnolia.svg" className="h-9 opacity-85 md:h-10" />
                        <img alt="Warpspeed" src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg" className="h-9 opacity-85 md:h-10" />
                        <img alt="Sisyphus" src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg" className="h-9 opacity-85 md:h-10" />
                        <img
                            alt="Catalog"
                            src="https://www.untitledui.com/logos/logotype/white/catalog.svg"
                            className="hidden h-9 opacity-85 md:block md:h-10"
                        />
                        <img
                            alt="Pictelai"
                            src="https://www.untitledui.com/logos/logotype/white/pictelai.svg"
                            className="hidden h-9 opacity-85 md:block md:h-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge01 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button color="link-gray" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-8 w-min" />
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const PricingPage01 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <PricingSimpleCallOut />

            <FeaturesSimpleIcons03 />

            <FAQSimple04 />

            <SimpleLogos01Brand />

            <FooterLarge01 />
        </div>
    );
};

export default PricingPage01;
