"use client";

import { Fragment, useState } from "react";
import { CheckCircle, CreditCardRefresh, File05, Heart, HelpCircle, Mail01, Minus, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { motion } from "motion/react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";

type Tier = { name: string; canChatToSales?: boolean; highlighted?: boolean; badge?: string; href?: string; priceMonthly: number; description: string };

const tiers: Tier[] = [
    { name: "Basic", badge: "Popular", href: "#", priceMonthly: 10, description: "Basic features for up to 10 employees with everything you need." },
    {
        name: "Business",
        highlighted: true,
        canChatToSales: true,
        href: "#",
        priceMonthly: 20,
        description: "Advanced features and reporting, better workflows and automation.",
    },
    {
        name: "Enterprise",
        canChatToSales: true,
        href: "#",
        priceMonthly: 40,
        description: "Personalized service and enterprise security for large teams.",
    },
];

type Section = { name: string; features: { name: string; tooltip: { title: string; description: string }; tiers: Record<string, boolean | string> }[] };

const sections: Section[] = [
    {
        name: "Overview",
        features: [
            {
                name: "Basic features",
                tooltip: {
                    title: "Core platform tools",
                    description: "Access to essential tools required to manage your workspace and start using the platform.",
                },
                tiers: { Basic: true, Business: true, Enterprise: true },
            },
            {
                name: "Users",
                tooltip: {
                    title: "Manage team members",
                    description: "Add, remove, and manage users with control over access and permissions",
                },
                tiers: { Basic: "10", Business: "20", Enterprise: "Unlimited" },
            },
            {
                name: "Individual data",
                tooltip: {
                    title: "User-level insights",
                    description: "View data and activity specific to individual users in your workspace.",
                },
                tiers: { Basic: "20 GB", Business: "40 GB", Enterprise: "Unlimited" },
            },
            {
                name: "Support",
                tooltip: {
                    title: "Customer support access",
                    description: "Includes access to our help center, email support, and in-app assistance during business hours.",
                },
                tiers: { Basic: true, Business: true, Enterprise: true },
            },
            {
                name: "Automated workflows",
                tooltip: {
                    title: "Streamline recurring tasks",
                    description: "Set up workflows that automate repetitive actions to save time and reduce manual effort.",
                },
                tiers: { Business: true, Enterprise: true },
            },
            {
                name: "200+ integrations",
                tooltip: {
                    title: "Connect your tools",
                    description: "Integrate with 200+ apps like Slack, Google Workspace, and Salesforce for a seamless workflow.",
                },
                tiers: { Business: true, Enterprise: true },
            },
        ],
    },
    {
        name: "Reporting and analytics",
        features: [
            {
                name: "Analytics",
                tooltip: {
                    title: "Platform usage insights",
                    description: "Monitor trends, usage patterns, and key metrics across your account.",
                },
                tiers: { Basic: "Basic", Business: "Advanced", Enterprise: "Advanced" },
            },
            {
                name: "Export reports",
                tooltip: {
                    title: "Downloadable reporting",
                    description: "Export reports as CSV or PDF files for offline analysis and sharing.",
                },
                tiers: { Basic: true, Business: true, Enterprise: true },
            },
            {
                name: "Scheduled reports",
                tooltip: {
                    title: "Automated report delivery",
                    description: "Set up reports to be generated and emailed at regular intervals.",
                },
                tiers: { Basic: true, Business: true, Enterprise: true },
            },
            {
                name: "API Access",
                tooltip: {
                    title: "Build with our API",
                    description: "Use our REST API to programmatically interact with data, users, and workflows.",
                },
                tiers: { Business: true, Enterprise: true },
            },
            {
                name: "Advanced reports",
                tooltip: {
                    title: "Deeper analytics tools",
                    description: "Create custom visualizations, filters, and drilldowns for more complex reporting needs.",
                },
                tiers: { Business: true, Enterprise: true },
            },
            {
                name: "Saved reports",
                tooltip: {
                    title: "Quick access to key data",
                    description: "Save and reuse frequently used report configurations for fast insights.",
                },
                tiers: { Business: true, Enterprise: true },
            },
            {
                name: "Customer properties",
                tooltip: {
                    title: "Track customer attributes",
                    description: "Define and manage custom data points for each customer in your system.",
                },
                tiers: { Enterprise: true },
            },
            {
                name: "Custom fields",
                tooltip: {
                    title: "Flexible data structure",
                    description: "Add custom fields to users, reports, or properties to tailor the platform to your needs.",
                },
                tiers: { Enterprise: true },
            },
        ],
    },
    {
        name: "User access",
        features: [
            {
                name: "SSO/SAML authentication",
                tooltip: {
                    title: "Enterprise-grade login",
                    description: "Enable secure, single sign-on (SSO) with identity providers using SAML 2.0.",
                },
                tiers: { Basic: true, Business: true, Enterprise: true },
            },
            {
                name: "Advanced permissions",
                tooltip: {
                    title: "Granular access control",
                    description: "Control who can view, edit, or manage specific areas and features within the platform.",
                },
                tiers: { Business: true, Enterprise: true },
            },
            {
                name: "Audit log",
                tooltip: {
                    title: "Track account activity",
                    description: "Keep a detailed history of user actions and changes across your organization.",
                },
                tiers: { Enterprise: true },
            },
            {
                name: "Data history",
                tooltip: {
                    title: "Access historical records",
                    description: "View changes and trends over time with historical data access.",
                },
                tiers: { Enterprise: true },
            },
        ],
    },
];

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

const PricingLargeTable01 = () => {
    return (
        <section className="bg-primary">
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</span>

                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Compare our plans and find yours</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <Tabs className="w-full md:w-auto">
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
            </div>

            <div className="w-full pb-16 md:px-8 md:pb-24 lg:mx-auto lg:max-w-container">
                {/* xs to lg */}
                <div className="space-y-16 lg:hidden">
                    {tiers.map((tier) => (
                        <section key={tier.name}>
                            <div className="mb-8 flex flex-col px-4">
                                <p key={tier.name} className="flex items-center gap-2 text-xl font-semibold text-primary">
                                    {tier.name}
                                    {tier.badge && (
                                        <Badge size="md" type="pill-color" color="brand">
                                            {tier.badge}
                                        </Badge>
                                    )}
                                </p>
                                <p className="mt-4">
                                    <span className="text-display-lg font-semibold text-primary">${tier.priceMonthly}</span>
                                    <span className="ml-1.5 pb-2 text-md font-medium text-tertiary">per month</span>
                                </p>
                                <p className="mt-4 text-sm text-tertiary">{tier.description}</p>
                                <div className="mt-6 flex flex-col gap-3">
                                    <Button size="xl">Get started</Button>
                                </div>
                            </div>

                            {sections.map((section) => (
                                <table key={section.name} className="mb-8 w-full last:mb-0">
                                    <caption className="px-4 pb-4 text-left text-sm font-semibold text-brand-secondary">{section.name}</caption>
                                    <thead>
                                        <tr>
                                            <th className="sr-only" scope="col">
                                                Feature
                                            </th>
                                            <th className="sr-only" scope="col">
                                                Included
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {section.features.map((feature, index) => (
                                            <tr key={feature.name} className={cx(index % 2 === 0 && "bg-secondary_alt")}>
                                                <th className="flex py-4.5 pl-4 text-left text-sm font-medium text-primary" scope="row">
                                                    {feature.name}
                                                </th>
                                                <td className="py-4.5 pr-4">
                                                    <div className="flex items-center justify-end text-right">
                                                        {typeof feature.tiers[tier.name] === "string" ? (
                                                            <span className="block text-sm text-tertiary">{feature.tiers[tier.name]}</span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckCircle className="-my-1 size-6 text-fg-success-primary" />
                                                                ) : (
                                                                    <Minus className="ml-auto size-5 text-fg-disabled" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">{feature.tiers[tier.name] === true ? "Yes" : "No"}</span>
                                                            </>
                                                        )}{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ))}

                            <div className="mt-8 flex flex-col gap-3 px-4">
                                <Button size="xl">Get started</Button>
                                {tier.canChatToSales && (
                                    <Button color="secondary" size="xl">
                                        Chat to sales
                                    </Button>
                                )}
                            </div>
                        </section>
                    ))}
                </div>

                {/* lg+ */}
                <div className="max-lg:hidden">
                    <table className="h-px w-full table-fixed">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <thead>
                            <tr className="border-b border-secondary">
                                <th scope="col">
                                    <span className="sr-only">Feature by plans</span>
                                </th>
                                {tiers.map((tier) => (
                                    <th key={tier.name} className="w-1/4 px-6 pt-0 pb-4 text-left text-xl font-semibold text-primary" scope="col">
                                        <p className="inline-flex items-center gap-2">
                                            {tier.name}
                                            {tier.badge && (
                                                <Badge size="md" type="pill-color" color="brand">
                                                    {tier.badge}
                                                </Badge>
                                            )}
                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                {tiers.map((tier) => (
                                    <td key={tier.name} className="h-full px-6 py-8 align-top md:pb-12">
                                        <div className="flex h-full flex-col justify-between">
                                            <div className="flex flex-col">
                                                <p>
                                                    <span className="text-display-lg font-semibold text-primary">${tier.priceMonthly}</span>
                                                    <span className="ml-1.5 pb-2 text-md font-medium text-tertiary">per month</span>
                                                </p>
                                                <p className="mt-4 text-sm text-tertiary">{tier.description}</p>
                                            </div>
                                            <div className="mt-6 flex flex-col gap-3">
                                                <Button size="xl">Get started</Button>
                                                <Button color="secondary" size="xl">
                                                    Chat to sales
                                                </Button>
                                            </div>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            {sections.map((section, index) => (
                                <Fragment key={section.name}>
                                    <tr>
                                        <th
                                            className={cx(index > 0 ? "pt-10" : "pt-0", "px-6 pb-4 text-left text-sm font-semibold text-brand-secondary")}
                                            colSpan={4}
                                            scope="colgroup"
                                        >
                                            {section.name}
                                        </th>
                                    </tr>
                                    {section.features.map((feature, index) => (
                                        <tr
                                            key={feature.name}
                                            className={cx(
                                                index % 2 === 0 && "bg-secondary_alt",
                                                index === section.features.length - 1 && "border-b border-secondary",
                                            )}
                                        >
                                            <th className="px-6 py-5.5 text-left text-sm font-medium text-primary" scope="row">
                                                {feature.name}
                                                <Tooltip title={feature.tooltip.title} description={feature.tooltip.description} delay={0} closeDelay={0}>
                                                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                                                        <HelpCircle className="ml-1 inline-block size-4" />
                                                    </TooltipTrigger>
                                                </Tooltip>
                                            </th>
                                            {tiers.map((tier) => (
                                                <td key={tier.name} className="px-6 py-5">
                                                    <div className="flex items-center justify-center text-center">
                                                        {typeof feature.tiers[tier.name] === "string" ? (
                                                            <span className="block text-sm text-tertiary">{feature.tiers[tier.name]}</span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckCircle className="size-6 text-fg-success-primary" />
                                                                ) : (
                                                                    <Minus className="mx-auto size-5 text-fg-disabled" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">
                                                                    {feature.tiers[tier.name] === true ? "Included" : "Not included"} in {tier.name}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th className="sr-only" scope="row">
                                    Choose your plan
                                </th>
                                {tiers.map((tier) => (
                                    <td key={tier.name} className="px-6 pt-10 pb-8">
                                        <div className="flex flex-col gap-3">
                                            <Button size="xl">Get started</Button>
                                            <Button color="secondary" size="xl">
                                                Chat to sales
                                            </Button>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
};

const FAQAccordion01 = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Frequently asked questions</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Everything you need to know about the product and billing.</p>
                </div>

                <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                    <div className="flex flex-col gap-8">
                        {faqsExtended.map((faq, index) => (
                            <div key={faq.question} className="not-first:-mt-px not-first:border-t not-first:border-secondary not-first:pt-6">
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                    >
                                        <span className="text-lg font-medium text-primary">{faq.question}</span>

                                        <span aria-hidden="true" className="mt-0.5 flex size-6 items-center text-fg-quaternary">
                                            <svg
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

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-8 text-center md:mt-16 md:gap-8 md:pt-8 md:pb-10">
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

const SocialProofFullWidth = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-md font-medium text-tertiary">Join 4,000+ companies already growing</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="Odeaolabs" src="https://www.untitledui.com/logos/logotype/color/odeaolabs.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Kintsugi" src="https://www.untitledui.com/logos/logotype/color/kintsugi.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Stackedlab" src="https://www.untitledui.com/logos/logotype/color/stackedlab.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Magnolia" src="https://www.untitledui.com/logos/logotype/color/magnolia.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Warpspeed" src="https://www.untitledui.com/logos/logotype/color/warpspeed.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Sisyphus" src="https://www.untitledui.com/logos/logotype/color/sisyphus.svg" className="h-9 md:h-12 dark:hidden" />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="Odeaolabs"
                            src="https://www.untitledui.com/logos/logotype/white/odeaolabs.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Kintsugi"
                            src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Stackedlab"
                            src="https://www.untitledui.com/logos/logotype/white/stackedlab.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Magnolia"
                            src="https://www.untitledui.com/logos/logotype/white/magnolia.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Warpspeed"
                            src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Sisyphus"
                            src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CardVertical = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-secondary px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary xl:text-display-md">
                        <span className="hidden md:inline">Start your 30-day free trial</span>
                        <span className="md:hidden">Start your free trial</span>
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-center">
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

const FooterLarge01 = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-quaternary_on-brand">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button
                                                className="gap-1 text-footer-button-fg hover:text-footer-button-fg_hover"
                                                color="link-color"
                                                size="lg"
                                                href={item.href}
                                                iconTrailing={item.badge}
                                            >
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="dark-mode" />
                    <p className="text-md text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const PricingPage05 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <PricingLargeTable01 />

            <FAQAccordion01 />

            <SocialProofFullWidth />

            <CardVertical />

            <FooterLarge01 />
        </div>
    );
};

export default PricingPage05;
