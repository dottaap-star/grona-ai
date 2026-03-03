"use client";

import { type ReactNode, Fragment, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle, CreditCardRefresh, HelpCircle, Heart, Minus, SlashCircle01, SwitchHorizontal01, File05 } from "@untitledui/icons";
import { motion } from "motion/react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

type Tier = {
    name: string;
    canChatToSales?: boolean;
    highlighted?: boolean;
    badge?: string;
    href?: string;
    monthlyPrice?: number;
    description: string;
};

const tiers: Tier[] = [
    {
        name: "Starter",
        href: "https://app.grona.ai/signup",
        description: "Perfect for small teams testing AI optimization.",
    },
    {
        name: "Growth",
        highlighted: true,
        badge: "Popular",
        href: "https://app.grona.ai/signup",
        monthlyPrice: 25,
        description: "For growing businesses scaling conversion efforts.",
    },
    {
        name: "Scale",
        href: "https://app.grona.ai/signup",
        monthlyPrice: 40,
        description: "Advanced features for high-traffic websites.",
    },
    {
        name: "Enterprise",
        canChatToSales: true,
        href: "/demo",
        description: "Custom solutions for large organizations.",
    },
];

const getDisplayPrice = (tier: Tier, billingPeriod: "monthly" | "annually"): { label: string; subtext: string } => {
    if (!tier.monthlyPrice) {
        if (tier.canChatToSales) return { label: "Custom", subtext: "" };
        return { label: "Free", subtext: "" };
    }

    if (billingPeriod === "monthly") {
        return { label: `$${tier.monthlyPrice}`, subtext: "/mo" };
    }

    // Annual: 2 months free = pay for 10 months, show per-month equivalent
    const annualPerMonth = (tier.monthlyPrice * 10) / 12;
    return { label: `$${annualPerMonth.toFixed(2)}`, subtext: "/mo" };
};

type Section = { name: string; features: { name: string; tooltip: { title: string; description: string }; tiers: Record<string, boolean | string> }[] };

const sections: Section[] = [
    {
        name: "Optimization Power",
        features: [
            {
                name: "Active campaigns",
                tooltip: {
                    title: "Concurrent optimizations",
                    description: "The number of optimization experiments you can run at the same time.",
                },
                tiers: { Starter: "1", Growth: "3", Scale: "10", Enterprise: "Unlimited" },
            },
            {
                name: "Monthly pageviews",
                tooltip: {
                    title: "Traffic allowance",
                    description: "The total monthly pageviews supported by your plan.",
                },
                tiers: { Starter: "1k", Growth: "15k", Scale: "30k", Enterprise: "Unlimited" },
            },
        ],
    },
    {
        name: "AI Agents & Generators",
        features: [
            {
                name: "Primary analysis capability",
                tooltip: {
                    title: "Optimization intelligence",
                    description: "The depth of AI-driven analysis used to surface optimization opportunities.",
                },
                tiers: {
                    Starter: "Basic issue detection",
                    Growth: "Drop-off pattern analysis",
                    Scale: "Full multi-agent optimization loop",
                    Enterprise: "Dedicated AI agents",
                },
            },
            {
                name: "Variant generation",
                tooltip: {
                    title: "AI variant creation",
                    description: "The types of variants the AI can generate for experiments.",
                },
                tiers: {
                    Starter: false,
                    Growth: "Copy/CTA generator",
                    Scale: "Copy + Layout + Offer variations",
                    Enterprise: "Custom AI model fine-tuning",
                },
            },
            {
                name: "Monthly AI credits",
                tooltip: {
                    title: "AI processing allowance",
                    description: "Credits consumed during analysis, generation, optimization loops, and personalization.",
                },
                tiers: { Starter: "500", Growth: "1500", Scale: "3500", Enterprise: "Unlimited" },
            },
        ],
    },
    {
        name: "Personalization",
        features: [
            {
                name: "Personalization level",
                tooltip: {
                    title: "Targeted experiences",
                    description: "The sophistication of audience segmentation and personalization.",
                },
                tiers: {
                    Starter: "None",
                    Growth: "Basic (new/returning)",
                    Scale: "Advanced (UTM, Geo, Device, Behavioral)",
                    Enterprise: "Predictive + custom segments",
                },
            },
        ],
    },
    {
        name: "Integrations + Support",
        features: [
            {
                name: "Integrations",
                tooltip: {
                    title: "Connected tools",
                    description: "Supported integrations for analytics, CRM, and product workflows.",
                },
                tiers: {
                    Starter: "Visual no-code editor",
                    Growth: "GA4 + Clarity + HubSpot",
                    Scale: "GA4 + Clarity + HubSpot",
                    Enterprise: "All integrations",
                },
            },
            {
                name: "Support level",
                tooltip: {
                    title: "Response times",
                    description: "Support availability and response time targets by plan.",
                },
                tiers: {
                    Starter: "Email (72h)",
                    Growth: "Priority email/chat (24-48h)",
                    Scale: "Priority chat (<12h)",
                    Enterprise: "SLA + priority support",
                },
            },
            {
                name: "Account management",
                tooltip: {
                    title: "Success support",
                    description: "Additional success resources and account management options.",
                },
                tiers: {
                    Starter: false,
                    Growth: false,
                    Scale: "Multi-device consistency",
                    Enterprise: "Dedicated account manager",
                },
            },
        ],
    },
];

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
    <a href={href} className="font-semibold text-brand-secondary hover:text-brand-secondary_hover transition-colors">
        {children}
    </a>
);

const faqsExtended: { question: string; answer: ReactNode; icon: typeof Heart }[] = [
    {
        question: "Is the free tier really free?",
        answer: "Yes. The Starter plan is free forever. 1 campaign, up to 1,000 pageviews per month, no credit card required, no time limit. You get full access to the core optimization workflow.",
        icon: File05,
    },
    {
        question: "Can I cancel anytime?",
        answer: "Yes. All plans are month-to-month with no long-term contracts. Cancel anytime from your account settings. Annual plans offer a discount (2 months free) and you can switch to monthly billing at your next renewal.",
        icon: SwitchHorizontal01,
    },
    {
        question: "What happens when I hit my pageview limit?",
        answer: "Your active experiments pause, but all your data and results are preserved. You can upgrade to resume testing immediately, or wait until your limit resets at the start of your next billing cycle.",
        icon: SlashCircle01,
    },
    {
        question: "Do I need to upgrade to see results?",
        answer: "No. The free Starter plan includes full analytics and result tracking for your campaign. Paid plans unlock more concurrent campaigns, higher traffic limits, and advanced AI features like variant generation and personalization.",
        icon: Heart,
    },
    {
        question: "What’s included in Enterprise?",
        answer: "Unlimited campaigns, unlimited pageviews, dedicated AI agents, custom model fine-tuning, predictive personalization, all integrations, a dedicated account manager, and SLA-backed priority support. Pricing is custom based on your needs.",
        icon: CreditCardRefresh,
    },
    {
        question: "How does Grona compare to VWO or Optimizely on price?",
        answer: (
            <>
                VWO starts at $199/mo. Optimizely starts at $36K/yr. Grona starts free and paid plans begin at $25/mo. You get AI-powered research, variant generation, and A/B testing in one tool. <Link href="/compare/vwo">See the full comparison</Link>.
            </>
        ),
        icon: SwitchHorizontal01,
    },
];


const PricingLargeTable01 = () => {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

    return (
        <section className="bg-primary">
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</span>

                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Start free. Scale when ready.</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        VWO starts at $199/mo. Optimizely starts at $36K/yr. Grona starts free.
                    </p>


                    <Tabs
                        className="w-full md:w-auto"
                        selectedKey={billingPeriod}
                        onSelectionChange={(key) => setBillingPeriod(key as "monthly" | "annually")}
                    >
                        <TabList
                            type="button-border"
                            size="md"
                            items={[
                                { id: "monthly", label: "Monthly" },
                                {
                                    id: "annually",
                                    label: (
                                        <span className="inline-flex items-center gap-2">
                                            Annual
                                            <Badge size="sm" type="pill-color" color="success">
                                                Save 2 months
                                            </Badge>
                                        </span>
                                    ),
                                },
                            ]}
                            className="mt-4 w-full md:mt-6 md:w-auto [&_[role=tab]]:flex-1"
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
                                    {(() => {
                                        const price = getDisplayPrice(tier, billingPeriod);
                                        return (
                                            <>
                                                <span className="text-display-lg font-semibold text-primary">{price.label}</span>
                                                {price.subtext && (
                                                    <span className="ml-1.5 pb-2 text-md font-medium text-tertiary">{price.subtext}</span>
                                                )}
                                            </>
                                        );
                                    })()}
                                </p>
                                <p className="mt-4 text-sm text-tertiary">{tier.description}</p>
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

                        </section>
                    ))}
                </div>

                {/* lg+ */}
                <div className="max-lg:hidden">
                    <table className="h-px w-full table-fixed">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <thead>
                            <tr className="border-b border-secondary">
                                <th className="w-[28%]" scope="col">
                                    <span className="sr-only">Feature by plans</span>
                                </th>
                                {tiers.map((tier) => (
                                    <th key={tier.name} className="w-[18%] px-6 pt-0 pb-4 text-left text-xl font-semibold text-primary" scope="col">
                                        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                            {tier.name}
                                            {tier.badge && (
                                                <Badge size="sm" type="pill-color" color="brand">
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
                                                    {(() => {
                                                        const price = getDisplayPrice(tier, billingPeriod);
                                                        return (
                                                            <>
                                                                <span className="text-display-lg font-semibold text-primary">{price.label}</span>
                                                                {price.subtext && (
                                                                    <span className="ml-1.5 pb-2 text-md font-medium text-tertiary">{price.subtext}</span>
                                                                )}
                                                            </>
                                                        );
                                                    })()}
                                                </p>
                                                <p className="mt-4 text-sm text-tertiary">{tier.description}</p>
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
                                            colSpan={5}
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

                <div className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
                    <p className="text-md text-tertiary">
                        Have more questions?{" "}
                        <Button color="link-color" size="md" href="mailto:hello@grona.ai" className="inline p-0">
                            Get in touch
                        </Button>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};



const ROIFraming = () => (
    <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 rounded-2xl border border-secondary bg-secondary px-6 py-5 md:px-10">
            <p className="text-sm font-semibold text-primary md:text-md">
                MouthShield saw a 40% conversion lift in 10 days. Their investment: one Grona subscription.
            </p>
            <a
                href="/case-studies/mouthshield"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-secondary transition-colors hover:text-brand-secondary_hover"
            >
                Read the case study
                <ArrowRight className="size-4" />
            </a>
        </div>
    </div>
);

const normalizeUrl = (url: string): string => {
    const trimmed = url.trim();
    if (!trimmed) return "";
    const clean = trimmed.replace(/\/+$/, "");
    if (!clean.match(/^https?:\/\//i)) return `https://${clean}`;
    return clean;
};

const SandboxCTA = () => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                    Not sure yet? Try it on your site first.
                </h2>
                <p className="mt-4 text-md text-tertiary">
                    No signup required. Paste your URL and start chatting with AI in 2 minutes.
                </p>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const url = formData.get("website-url") as string;
                        if (!url) return;
                        window.location.href = `https://app.grona.ai/try/edit/newCampaign?url=${encodeURIComponent(normalizeUrl(url))}`;
                    }}
                    className="mt-8 w-full"
                >
                    <div className="flex items-center gap-2 rounded-xl border border-secondary bg-secondary p-2">
                        <Input
                            isRequired
                            size="md"
                            name="website-url"
                            type="text"
                            placeholder="Enter your website URL"
                            wrapperClassName="flex-1 border-0 ring-0 shadow-none bg-transparent rounded-lg"
                        />
                        <Button type="submit" size="lg" iconTrailing={ArrowUpRight} />
                    </div>
                </Form>
            </div>
        </div>
    </section>
);

const PricingContent = () => {
    return (
        <>
            <PricingLargeTable01 />
            <ROIFraming />
            <FAQAccordion01 />
            <SandboxCTA />
        </>
    );
};

export default PricingContent;
