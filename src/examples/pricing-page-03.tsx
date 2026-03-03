"use client";

import { type ComponentProps, type FC, type ReactNode, useState } from "react";
import {
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
import { motion } from "motion/react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
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

const HeaderPrimaryDark = (props: ComponentProps<typeof Header>) => {
    return (
        <Header
            {...props}
            className={cx(
                "bg-brand-section [&_nav>ul>li>a]:text-secondary_on-brand [&_nav>ul>li>a]:hover:text-secondary_on-brand [&_nav>ul>li>button]:text-secondary_on-brand [&_nav>ul>li>button]:hover:text-secondary_on-brand [&_nav>ul>li>button>svg]:text-fg-brand-secondary_alt [&_svg_path.fill-fg-primary]:fill-fg-white",
                props.className,
            )}
        />
    );
};

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

const PricingTierCardBadgeGroup = (props: {
    title: string;
    subtitle: string;
    description?: string;
    features: string[];
    isMostPopular?: boolean;
    className?: string;
}) => {
    return (
        <div className={cx("flex flex-col overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt", props.className)}>
            <div className="flex flex-col items-center p-6 pb-8 text-center md:p-8">
                <BadgeGroup size="lg" color="brand" theme="modern" addonText={props.title} iconTrailing={false}>
                    {props.isMostPopular ? "Most popular" : undefined}
                </BadgeGroup>

                <p className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">{props.subtitle}</p>
                <p className="mt-2 text-md text-tertiary">{props.description}</p>
            </div>

            <div className="mx-6 border-t border-secondary md:mx-8"></div>

            <ul className="flex flex-col gap-4 px-6 py-8 md:px-8">
                {props.features.map((feat) => (
                    <CheckItemText key={feat} iconStyle="outlined" color="primary" text={feat} />
                ))}
            </ul>

            <div className="mx-6 border-t border-secondary md:mx-8"></div>

            <div className="mt-auto flex flex-col gap-3 p-6 pb-8 md:p-8">
                <Button size="xl">Get started</Button>
            </div>
        </div>
    );
};

const PricingPrimaryDarkBadge = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");
    const plans = [
        {
            title: "Basic plan",
            subtitle: selectedPlan === "annually" ? "$9/m" : "$10/mth",
            description: "Our most popular plan.",
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
            subtitle: selectedPlan === "annually" ? "$15/m" : "$20/mth",
            description: "Growing teams up to 20 users.",
            badge: "Popular",
            isMostPopular: true,
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
            subtitle: selectedPlan === "annually" ? "$39/m" : "$40/mth",
            description: "Advanced features + unlimited users.",
            badge: "Popular",
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
        <section className="bg-primary">
            <div className="bg-brand-section pt-16 pb-32 md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <p className="text-sm font-semibold text-secondary_on-brand md:text-md">Pricing</p>
                        <h2 className="mt-3 text-display-md font-semibold text-primary_on-brand md:text-display-lg">Pricing plans</h2>
                        <p className="mt-4 text-lg text-secondary_on-brand md:mt-6 md:text-xl">
                            Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                        </p>

                        <Tabs
                            className="mt-8 w-full md:mt-12 md:w-auto"
                            selectedKey={selectedPlan}
                            onSelectionChange={(value) => setSelectedPlan(value as string)}
                        >
                            <TabList
                                type="button-gray"
                                size="md"
                                className="[&_[role=tab]]:flex-1 [&_[role=tab]]:text-secondary_on-brand [&_[role=tab]]:hover:bg-white/10 [&_[role=tab]]:selected:bg-brand-primary_alt [&_[role=tab]]:selected:text-brand-secondary"
                                items={[
                                    { id: "monthly", label: "Monthly billing" },
                                    { id: "annually", label: "Annual billing" },
                                ]}
                            />
                        </Tabs>
                    </div>
                </div>
            </div>

            <div className="m-auto -mt-16 max-w-container px-4 pb-16 md:-mt-24 md:px-8 md:pb-24">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardBadgeGroup key={plan.title} {...plan} />
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

const FeaturesSimpleIcons01 = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {[
                        {
                            title: "Share team inboxes",
                            subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                            icon: MessageChatCircle,
                        },
                        {
                            title: "Deliver instant answers",
                            subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                            icon: Zap,
                        },
                        {
                            title: "Manage your team with reports",
                            subtitle:
                                "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                            icon: ChartBreakoutSquare,
                        },
                    ].map((item) => (
                        <li key={item.title}>
                            <FeatureTextFeaturedIconTopCentered icon={item.icon} title={item.title} subtitle={item.subtitle} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const FAQAccordion04 = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    <div className="flex w-full max-w-3xl flex-col lg:max-w-xl">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Support</span>

                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">FAQs</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5">
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
                    <div className="flex w-full flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.question}
                                className={cx(
                                    "rounded-2xl bg-transparent p-5 transition duration-300 ease-in-out md:p-8",
                                    openQuestions.has(index) && "bg-secondary",
                                )}
                            >
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:flex-row md:gap-6"
                                    >
                                        <span className="flex-1 text-lg font-medium text-primary">{faq.question}</span>

                                        <span aria-hidden="true" className="mt-0.5 flex size-6 items-center text-fg-quaternary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line
                                                    className={cx(
                                                        "origin-center rotate-0 transition duration-150 ease-out",
                                                        openQuestions.has(index) && "-rotate-90",
                                                    )}
                                                    x1="12"
                                                    y1="8"
                                                    x2="12"
                                                    y2="16"
                                                ></line>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <motion.div
                                    className="overflow-hidden"
                                    initial={false}
                                    animate={{ height: openQuestions.has(index) ? "auto" : 0, opacity: openQuestions.has(index) ? 1 : 0 }}
                                    transition={{ type: "spring", damping: 24, stiffness: 240, bounce: 0.4 }}
                                >
                                    <div className="pt-2 pr-8 md:pr-12">
                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SimpleLogos01 = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-start lg:grid-cols-[1fr_max-content] lg:gap-x-8">
                    <div className="max-w-3xl">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Start your free trial</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    </div>

                    <div className="mt-8 flex flex-col-reverse justify-start gap-3 sm:flex-row lg:mt-0">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>

                    <div className="mt-12 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-4 md:justify-start">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="Odeaolabs" src="https://www.untitledui.com/logos/logotype/color/odeaolabs.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Kintsugi" src="https://www.untitledui.com/logos/logotype/color/kintsugi.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Stackedlab" src="https://www.untitledui.com/logos/logotype/color/stackedlab.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Magnolia" src="https://www.untitledui.com/logos/logotype/color/magnolia.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Warpspeed" src="https://www.untitledui.com/logos/logotype/color/warpspeed.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Sisyphus" src="https://www.untitledui.com/logos/logotype/color/sisyphus.svg" className="h-9 md:h-10 dark:hidden" />
                        <img
                            alt="Catalog"
                            src="https://www.untitledui.com/logos/logotype/color/catalog.svg"
                            className="h-9 max-md:hidden md:h-10 dark:hidden"
                        />
                        <img
                            alt="Pictelai"
                            src="https://www.untitledui.com/logos/logotype/color/pictelai.svg"
                            className="h-9 max-md:hidden md:h-10 dark:hidden"
                        />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="Odeaolabs"
                            src="https://www.untitledui.com/logos/logotype/white/odeaolabs.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Kintsugi"
                            src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Stackedlab"
                            src="https://www.untitledui.com/logos/logotype/white/stackedlab.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Magnolia"
                            src="https://www.untitledui.com/logos/logotype/white/magnolia.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Warpspeed"
                            src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Sisyphus"
                            src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Catalog"
                            src="https://www.untitledui.com/logos/logotype/white/catalog.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10"
                        />
                        <img
                            alt="Pictelai"
                            src="https://www.untitledui.com/logos/logotype/white/pictelai.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge05 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between gap-8 border-secondary md:flex-row md:border-b md:pb-16">
                    <div className="flex flex-col gap-2">
                        <p id="newsletter-label" className="text-lg font-semibold text-primary md:text-xl">
                            Join our newsletter
                        </p>
                        <p id="newsletter-hint" className="text-md text-tertiary">
                            We'll send you a nice letter once per week. No spam.
                        </p>
                    </div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="w-full sm:w-100"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Input
                                isRequired
                                aria-labelledby="newsletter-label"
                                aria-describedby="newsletter-hint"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                size="md"
                                wrapperClassName="flex-1"
                            />
                            <Button type="submit" size="lg">
                                Subscribe
                            </Button>
                        </div>
                    </Form>
                </div>

                <nav className="mt-12 md:mt-16">
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

const PricingPage03 = () => {
    return (
        <div className="bg-primary">
            <HeaderPrimaryDark />

            <PricingPrimaryDarkBadge />

            <FeaturesSimpleIcons01 />

            <FAQAccordion04 />

            <SimpleLogos01 />

            <FooterLarge05 />
        </div>
    );
};

export default PricingPage03;
