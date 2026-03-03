"use client";

import { type ReactNode, useState } from "react";
import { CheckCircle, CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { motion } from "motion/react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const billings = [
    { id: "monthly", label: "Monthly billing" },
    { id: "annually", label: "Annual billing", badge: "Save 20%" },
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

const PricingTierCardDualCheckItems = (props: {
    title: string;
    description?: string;
    contentTitle: string;
    contentDescription: ReactNode;
    price?: number;
    badge?: string;
    features: string[];
    className?: string;
}) => {
    return (
        <div className={cx("flex flex-col overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt", props.className)}>
            <div className="flex flex-col-reverse gap-4 px-6 pt-6 pb-8 md:flex-row md:justify-between md:gap-8 md:px-8 md:pt-8 md:pb-6">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold text-primary">{props.title}</h2>
                        {props.badge && (
                            <Badge size="md" type="pill-color" color="brand">
                                {props.badge}
                            </Badge>
                        )}
                    </div>
                    <p className="text-md text-tertiary">{props.description}</p>
                </div>
                <div className="flex items-baseline gap-1">
                    <span className="-translate-y-[5px] text-display-md font-semibold text-primary md:-translate-y-[15px]">$</span>
                    <span className="text-display-lg font-semibold text-primary md:text-display-xl">{props.price || 10}</span>
                    <span className="text-md font-medium text-tertiary">per month</span>
                </div>
            </div>

            <div className="flex flex-col gap-6 border-t border-secondary px-6 py-8 md:px-8 md:pt-8 md:pb-10">
                <div className="flex flex-col gap-1">
                    <p className="text-md font-semibold text-primary">{props.contentTitle}</p>
                    <p className="text-md text-tertiary">{props.contentDescription}</p>
                </div>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                    {props.features.map((feat) => (
                        <CheckItemText key={feat} color="success" text={feat} />
                    ))}
                </ul>
            </div>

            <div className="mt-auto flex flex-col gap-3 border-t border-secondary px-6 pt-6 pb-8 md:p-8">
                <Button size="xl">Get started</Button>
            </div>
        </div>
    );
};

const PricingSimpleDualCheckItem = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");

    const plans = [
        {
            id: "monthly",
            title: "Basic plan",
            price: selectedPlan === "monthly" ? 10 : 9,
            description: "Our most popular plan for small teams.",
            contentTitle: "FEATURES",
            contentDescription: (
                <>
                    Everything in our <span className="text-md font-semibold">free plan</span> plus....
                </>
            ),
            features: [
                "Access to basic features",
                "Attend events",
                "Basic reporting + analytics",
                "Automatic updates",
                "Up to 10 individual users",
                "Backup your account",
                "20 GB individual data",
                "Audit log and notes",
                "Basic chat support",
                "Feature requests",
            ],
        },
        {
            id: "annually",
            title: "Business plan",
            price: selectedPlan === "monthly" ? 20 : 15,
            description: "Advanced features and reporting.",
            contentTitle: "FEATURES",
            contentDescription: (
                <>
                    Everything in our <span className="text-md font-semibold">basic plan</span> plus....
                </>
            ),
            badge: "Popular",
            features: [
                "200+ integrations",
                "Advanced custom fields",
                "Advanced reporting",
                "Audit log and data history",
                "Up to 20 individual users",
                "Backup your account",
                "40 GB individual data",
                "Personalized service",
                "Priority chat support",
                "+ many more...",
            ],
        },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</p>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Plans that fit your scale</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <Tabs selectedKey={selectedPlan} onSelectionChange={(item) => setSelectedPlan(item as string)} className="w-full md:w-auto">
                        <TabList type="button-border" size="md" items={billings} className="mt-8 w-full md:mt-12 md:w-auto [&_[role=tab]]:flex-1" />
                    </Tabs>
                </div>

                <div className="mt-16 grid w-full grid-cols-1 gap-4 md:mt-24 md:justify-items-center md:gap-8 xl:grid-cols-2 xl:justify-items-stretch">
                    {plans.map((plan) => (
                        <PricingTierCardDualCheckItems key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQAccordion03 = () => {
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
                    <div className="flex w-full flex-col gap-8">
                        {faqsExtended.map((faq, index) => (
                            <div key={faq.question}>
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer items-start justify-between gap-6 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                    >
                                        <span className="text-lg font-medium text-primary">{faq.question}</span>

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
                                    <div className="pt-2 pr-12">
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

const reviews = [
    {
        id: "review-01",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: {
            name: "Sienna Hewitt",
            title: "Project Manager, Warpspeed",
            imageUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
        },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
        },
    },
    {
        id: "review-02",
        quote: "Untitled has become an essential part of our design process. It speeds up our workflow and ensures every project starts with a solid foundation.",
        author: { name: "Caitlyn King", title: "COO, OdeaoLabs", imageUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80" },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/color/odeaolabs.svg",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/odeaolabs.svg",
        },
    },
    {
        id: "review-03",
        quote: "Every project starts with Untitled, and it's made a huge difference in our output. It's a game-changer for our design team.",
        author: { name: "Olly Schroeder", title: "Designer, Nietzsche", imageUrl: "https://www.untitledui.com/images/avatars/olly-schroeder?fm=webp&q=80" },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/color/nietzsche.svg",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/nietzsche.svg",
        },
    },
    {
        id: "review-04",
        quote: "Using Untitled has streamlined our entire design process. It's an invaluable part of our studio!",
        author: {
            name: "Riley O'Moore",
            title: "Design Engineer, QuartzAI",
            imageUrl: "https://www.untitledui.com/images/avatars/riley-moore?fm=webp&q=80",
        },
        company: {
            name: "QuartzAI",
            imageUrl: "https://www.untitledui.com/logos/logotype/color/quartzai.svg",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/quartzai.svg",
        },
    },
];

const SocialCards01 = () => {
    return (
        <div className="flex flex-col items-center gap-16 bg-primary py-16 lg:py-24">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h1 className="text-display-sm font-semibold text-primary lg:text-display-md">Our reviews</h1>
                <p className="text-lg text-tertiary lg:text-xl">Hear first-hand from our incredible community of customers.</p>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 px-4 lg:grid-cols-2 lg:gap-6 lg:px-8">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="flex flex-col gap-12 rounded-xl bg-primary_alt p-6 shadow-xs ring-1 ring-secondary lg:min-h-64 lg:justify-between lg:gap-0 lg:p-8"
                    >
                        <div className="flex flex-col items-start gap-3">
                            <img className="h-8 lg:hidden dark:hidden" src={review.company.imageUrl} alt={review.company.name} />
                            <img className="h-8 opacity-85 not-dark:hidden lg:hidden" src={review.company.imageUrlDark} alt={review.company.name} />
                            <blockquote className="text-lg font-medium text-primary lg:text-xl">{review.quote}</blockquote>
                        </div>
                        <div className="flex justify-between">
                            <AvatarLabelGroup
                                size="lg"
                                src={review.author.imageUrl}
                                alt={review.author.name}
                                title={
                                    <span className="relative flex items-center gap-1">
                                        {review.author.name}
                                        <VerifiedTick size="lg" />
                                    </span>
                                }
                                subtitle={review.author.title}
                            />
                            <img className="h-8 max-lg:hidden dark:hidden" src={review.company.imageUrl} alt={review.company.name} />
                            <img className="h-8 opacity-85 not-dark:hidden max-lg:hidden" src={review.company.imageUrlDark} alt={review.company.name} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SimpleCenteredBrand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">Start your free trial</h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
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

const FooterLarge05 = () => {
    return (
        <footer className="dark-mode bg-primary py-12 md:pt-16">
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

const PricingPage07 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <PricingSimpleDualCheckItem />

            <SectionDivider />

            <FAQAccordion03 />

            <SectionDivider />

            <SocialCards01 />

            <SimpleCenteredBrand />

            <FooterLarge05 />
        </div>
    );
};

export default PricingPage07;
