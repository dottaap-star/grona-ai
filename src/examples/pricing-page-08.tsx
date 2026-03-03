"use client";

import { type FC, type ReactNode, useState } from "react";
import {
    ArrowRight,
    ChartBreakoutSquare,
    CheckCircle,
    CreditCardRefresh,
    File05,
    Heart,
    Mail01,
    MessageChatCircle,
    SlashCircle01,
    SwitchHorizontal01,
    Zap,
} from "@untitledui/icons";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { VideoPlayer } from "@/components/base/video-player/video-player";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
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

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
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

const PricingTierCardBanner = (props: {
    banner?: string;
    title: string;
    subtitle: string;
    description?: string;
    features: string[];
    className?: string;
    secondAction?: string;
}) => {
    return (
        <div className={cx("flex flex-col overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt", props.className)}>
            {props.banner && (
                <div className="w-full bg-brand-solid px-2 py-3 text-center">
                    <p className="text-sm font-semibold text-white">{props.banner}</p>
                </div>
            )}

            <div>
                <div className="flex flex-col items-center px-6 pt-8 text-center md:px-8">
                    <p className="text-display-md font-semibold text-primary md:text-display-lg">{props.subtitle}</p>
                    <h2 className="mt-4 text-xl font-semibold text-primary">{props.title}</h2>
                    <p className="mt-1 text-md text-tertiary">{props.description}</p>
                </div>

                <ul className="flex flex-col gap-4 px-6 py-8 md:px-8 md:pb-10">
                    {props.features.map((feat) => (
                        <CheckItemText key={feat} iconStyle="outlined" color="success" text={feat} />
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
        </div>
    );
};

const PricingSimpleBanner = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");

    const plans = [
        {
            title: "Basic plan",
            subtitle: selectedPlan === "monthly" ? "$10/mth" : "$9/mth",
            description: "Our most popular plan.",
            secondAction: "Chat to sales",
            features: [
                "Access to all basic features",
                "Basic reporting and analytics",
                "Up to 10 individual users",
                "20 GB individual data",
                "Basic chat and email support",
            ],
        },
        {
            title: "Business plan",
            subtitle: selectedPlan === "monthly" ? "$20/mth" : "$15/mth",
            description: "Growing teams up to 20 users.",
            secondAction: "Chat to sales",
            banner: "Most popular plan",
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
            subtitle: selectedPlan === "monthly" ? "$40/mth" : "$39/mth",
            description: "Advanced features + unlimited users.",
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

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-md font-semibold text-primary md:text-display-lg">Pricing plans</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <Tabs selectedKey={selectedPlan} onSelectionChange={(item) => setSelectedPlan(item as string)} className="w-full md:w-auto">
                        <TabList
                            type="button-border"
                            size="md"
                            items={[
                                { id: "monthly", label: "Monthly billing" },
                                { id: "annually", label: "Annual billing" },
                            ]}
                            className="mt-8 w-full md:mt-12 md:w-auto [&_[role=tab]]:flex-1"
                        />
                    </Tabs>
                </div>

                <div className="mt-16 grid w-full grid-cols-1 items-end gap-4 md:mt-24 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardBanner key={plan.title} {...plan} />
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

const FeatureTextFeaturedIconTopCentered = ({
    color = "gray",
    theme = "modern",
    icon,
    title,
    subtitle,
    footer,
}: FeatureTextIcon & {
    color?: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "gradient" | "dark" | "outline" | "modern";
}) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <FeaturedIcon icon={icon} size="lg" color={color} theme={theme} className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color={color} theme={theme} className="inline-flex md:hidden" />

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const FeaturesCenterMockup01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="hidden md:flex">
                        <BadgeWithDot color="brand" type="modern" size="lg">
                            Features
                        </BadgeWithDot>
                    </span>
                    <span className="flex md:hidden">
                        <BadgeWithDot color="brand" type="modern" size="md">
                            Features
                        </BadgeWithDot>
                    </span>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Cutting-edge features for advanced analytics</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-24 lg:items-center">
                    <div className="flex h-full w-full items-center justify-center md:max-h-204 md:w-full">
                        <div
                            className={cx(
                                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[32px] md:p-1 md:shadow-modern-mockup-outer-lg md:ring-[2px]",
                            )}
                        >
                            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[24px] md:ring-[2px]">
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
                    <ul className="flex flex-1 flex-wrap justify-center gap-x-8 gap-y-10 lg:flex-nowrap">
                        {[
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
                                subtitle:
                                    "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                                icon: ChartBreakoutSquare,
                                cta: "Learn more",
                                href: "#",
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopCentered
                                    icon={item.icon}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    footer={
                                        <Button color="link-color" size="lg" href={item.href} iconTrailing={ArrowRight}>
                                            Learn more
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

const FeatureTextFeaturedIconLeft = ({ icon, title, subtitle, footer }: FeatureTextIcon) => (
    <div className="flex max-w-140 gap-4">
        <FeaturedIcon icon={icon} size="lg" color="gray" theme="modern" className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color="gray" theme="modern" className="inline-flex md:hidden" />

        <div className="flex flex-col items-start gap-4">
            <div>
                <h3 className="mt-1.5 text-lg font-semibold text-primary md:mt-2.5">{title}</h3>
                <p className="mt-1 text-md text-tertiary">{subtitle}</p>
            </div>

            {footer}
        </div>
    </div>
);

const FeaturesIconsAndImage03 = () => {
    return (
        <section className="bg-primary">
            <div className="bg-secondary pt-16 pb-[112px] md:pt-24 md:pb-40">
                <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2 lg:gap-24">
                    <div className="flex w-full flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">New feature</span>

                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Introducing team inboxes</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000
                            startups.
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-1">
                        {[
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
                        ].map((item, index) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconLeft key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mx-auto -mt-16 flex w-full max-w-container justify-center px-4 pb-16 md:-mt-24 md:px-8 md:pb-24">
                <VideoPlayer
                    size="lg"
                    showThumbnailOverlay
                    thumbnailUrl="https://www.untitledui.com/marketing/smiling-girl-7.webp"
                    src="https://www.untitledui.com/videos/untitled-ui-demo.mp4"
                    className="aspect-video w-full overflow-hidden rounded-lg shadow-3xl md:max-w-200"
                />
            </div>
        </section>
    );
};

const FAQSimple01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Frequently asked questions</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Everything you need to know about the product and billing. </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <dl className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
                        {faqs.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col items-center text-center">
                                    <FeaturedIcon color="gray" theme="modern" className="md:hidden" size="md" icon={item.icon} />
                                    <FeaturedIcon color="gray" theme="modern" className="hidden md:flex" size="lg" icon={item.icon} />

                                    <dt className="mt-4 text-lg font-semibold text-primary md:mt-5 md:text-xl">{item.question}</dt>
                                    <dd className="mt-1 text-md text-tertiary md:mt-2">{item.answer}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-secondary px-6 py-8 text-center md:mt-16 md:gap-8 md:px-8 md:py-8 md:pb-10">
                    <div className="flex items-end -space-x-4">
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80"
                            alt="Marco Kelly"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                            alt="Amelie Laurent"
                            size="xl"
                            className="z-10 ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/jaya-willis?fm=webp&q=80"
                            alt="Jaya Willis"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="xl">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

const CardHorizontalBrand = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-brand-section px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary_on-brand">
                            <span className="hidden md:inline">Start your 30-day free trial</span>
                            <span className="md:hidden">Start your free trial</span>
                        </h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand lg:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    </div>
                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge02 = () => {
    return (
        <footer>
            <div className="bg-secondary_alt py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col items-start gap-6 md:w-80 md:gap-6">
                            <UntitledLogo className="h-8 w-min shrink-0" />
                            <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                            <RatingBadge className="origin-top-left scale-[0.78]" />
                        </div>
                        <nav className="flex-1">
                            <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                                {footerNavList.slice(0, 5).map((category) => (
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
                    </div>
                </div>
            </div>
            <div className="bg-primary_alt py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row">
                        <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                        <ul className="flex gap-6">
                            {footerSocials.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <Icon size={24} aria-label={label} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const PricingPage08 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <PricingSimpleBanner />

            <SectionDivider />

            <FeaturesCenterMockup01 />

            <FeaturesIconsAndImage03 />

            <SectionDivider />

            <FAQSimple01 />

            <CardHorizontalBrand />

            <FooterLarge02 />
        </div>
    );
};

export default PricingPage08;
