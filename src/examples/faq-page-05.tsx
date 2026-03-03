"use client";

import { useState } from "react";
import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { motion } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
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

const HeaderCenteredButtons = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">FAQs</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">We're here to help</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Have questions? We're here to help.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:mt-12 sm:flex-row sm:self-center">
                        <Button color="secondary" size="xl" className="md:hidden">
                            Chat to sales
                        </Button>

                        <Button size="xl">Get started</Button>
                    </div>
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

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-secondary px-6 py-8 text-center md:mt-16 md:gap-8 md:pt-8 md:pb-10">
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

const FeaturesIntegrationsIcons02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center gap-12 md:gap-16">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Integrations</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Get more value from your tools</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Connect your tools, connect your teams. With over 200 apps already available in our directory, your team's favorite tools are just a
                            click away.
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 self-center px-3 lg:grid-cols-8 lg:gap-8 lg:px-14">
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="notion" src="https://www.untitledui.com/logos/integrations/notion.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="slack" src="https://www.untitledui.com/logos/integrations/slack.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="google_drive" src="https://www.untitledui.com/logos/integrations/google_drive.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="intercom" src="https://www.untitledui.com/logos/integrations/intercom.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="jira" src="https://www.untitledui.com/logos/integrations/jira.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="dropbox" src="https://www.untitledui.com/logos/integrations/dropbox.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="stripe" src="https://www.untitledui.com/logos/integrations/stripe.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="zapier" src="https://www.untitledui.com/logos/integrations/zapier.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="figma" src="https://www.untitledui.com/logos/integrations/figma.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="confluence" src="https://www.untitledui.com/logos/integrations/confluence.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="mailchimp" src="https://www.untitledui.com/logos/integrations/mailchimp.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="zendesk" src="https://www.untitledui.com/logos/integrations/zendesk.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="google calendar" src="https://www.untitledui.com/logos/integrations/g-calendar.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="whatsapp" src="https://www.untitledui.com/logos/integrations/whatsapp.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="discord" src="https://www.untitledui.com/logos/integrations/discord.svg" className="size-16 md:size-20" />
                        </span>
                        <span className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="bitbucket" src="https://www.untitledui.com/logos/integrations/bitbucket.svg" className="size-16 md:size-20" />
                        </span>
                    </div>
                    <Button size="xl">All integrations</Button>
                </div>
            </div>
        </section>
    );
};

const SimpleCentered = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Sign up for our newsletter</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Be the first to know about releases and industry news and insights.</p>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[360px_max-content] sm:gap-0 sm:self-center"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            wrapperClassName="py-0.5 md:max-w-[345px]"
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
                        <Button type="submit" size="xl">
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

const FooterLarge06 = () => {
    return (
        <footer>
            <div className="relative bg-brand-section py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
                        <div className="flex flex-col gap-2">
                            <p id="newsletter-label" className="text-lg font-semibold text-primary_on-brand md:text-xl">
                                Join our newsletter
                            </p>
                            <p id="newsletter-hint" className="text-md text-tertiary_on-brand">
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
                </div>
                <div className="absolute bottom-0 left-0 h-px w-full bg-border-brand_alt"></div>
            </div>

            <div className="bg-brand-section py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col gap-6 md:w-80 md:gap-8">
                            <UntitledLogo className="dark-mode" />
                            <p className="text-md text-tertiary_on-brand">Design amazing digital experiences that create more happy in the world.</p>
                            <RatingBadge theme="light" className="origin-top-left scale-[0.78]" />
                        </div>
                        <nav className="flex-1">
                            <ul className="grid grid-cols-2 gap-8 md:grid-cols-5">
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
                    </div>

                    <div className="relative mt-12 flex flex-col-reverse justify-between gap-6 pt-8 md:mt-16 md:flex-row">
                        <div className="absolute top-0 left-0 h-px w-full bg-border-brand_alt"></div>
                        <p className="text-md text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>
                        <ul className="flex gap-6">
                            {footerSocials.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
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

const FAQPage05 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <HeaderCenteredButtons />

            <FAQAccordion01 />

            <FeaturesIntegrationsIcons02 />

            <SimpleCentered />

            <FooterLarge06 />
        </div>
    );
};

export default FAQPage05;
