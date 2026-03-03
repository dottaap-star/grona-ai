"use client";

import { useState } from "react";
import type { ComponentProps } from "react";
import {
    ArrowUpRight,
    Clock,
    CreditCardRefresh,
    File05,
    Heart,
    Mail01,
    MarkerPin02,
    MessageChatCircle,
    Phone,
    SlashCircle01,
    SwitchHorizontal01,
} from "@untitledui/icons";
import { motion } from "motion/react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { NativeSelect } from "@/components/base/select/select-native";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

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

const jobs: JobCard01Props[] = [
    {
        title: "Product Designer",
        department: "Design",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "blue",
        badgeText: "Design",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Engineering Manager",
        department: "Software Development",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "pink",
        badgeText: "Software",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Customer Success Manager",
        department: "Customer Success",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "success",
        badgeText: "CX",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Account Executive",
        department: "Sales",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "indigo",
        badgeText: "Sales",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "SEO Marketing Manager",
        department: "Marketing",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "orange",
        badgeText: "Marketing",
        location: "Remote",
        type: "Full-time",
    },
];

const HeaderSpaceBetween = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-3 text-sm font-semibold text-secondary_on-brand md:text-md">Nice to meet you</div>
                <div className="flex flex-col gap-x-16 lg:flex-row">
                    <h1 className="flex-1 text-display-md font-semibold text-primary_on-brand md:text-display-lg">About our company</h1>

                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl lg:mt-3 lg:max-w-120">
                        Learn more about the company and the team behind it. We're hiring!
                    </p>
                </div>
            </div>
        </section>
    );
};

const ContactSectionIconCards03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">We're hiring!</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We're looking for smart, motivated people. No matter where you live.</p>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-24">
                    <img
                        src="https://www.untitledui.com/marketing/smiling-girl-11.webp"
                        className="h-60 w-full object-cover md:h-100 lg:h-140"
                        alt="People discussing a topic"
                    />
                    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                        {[
                            {
                                title: "Email us your CV",
                                subtitle: "We're growing fast with 100+ open roles.",
                                href: "mailto:jobs@untitledui.com",
                                cta: "jobs@untitledui.com",
                                icon: MessageChatCircle,
                            },

                            {
                                title: "Meet our team",
                                subtitle: "Come meet our friendly team at HQ.",
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                                cta: "100 Smith Street\nCollingwood VIC 3066 AU",
                                icon: MarkerPin02,
                            },
                            {
                                title: "Call us",
                                subtitle: "Hear more about our open roles.",
                                href: "tel:+1 (555) 000-0000",
                                cta: "+1 (555) 000-0000",
                                icon: Phone,
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex h-full flex-col items-start bg-secondary p-6">
                                <FeaturedIcon size="lg" icon={item.icon} color="brand" theme="dark" />

                                <h3 className="mt-12 text-lg font-semibold text-primary md:mt-16 md:text-xl">{item.title}</h3>
                                <p className="mt-1 text-md text-tertiary md:mt-2">{item.subtitle}</p>
                                <Button color="link-color" size="lg" href={item.href} className="mt-4 whitespace-pre md:mt-5">
                                    {item.cta}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

interface JobCardSimpleProps {
    title: string;
    description: string;
    href: string;
    location: string;
    type: string;
    badgeText?: string;
    badgeColor: BadgeColors;
}

interface JobCard01Props extends JobCardSimpleProps {
    department: string;
}

const JobCard01 = (props: JobCard01Props) => {
    return (
        <a
            href={props.href}
            className="flex flex-col rounded-2xl bg-primary p-6 pb-6 ring-1 ring-secondary outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 md:pb-7"
        >
            <div className="flex items-center justify-between py-0.5 md:py-0">
                <span className="text-sm font-semibold text-brand-secondary">{props.department}</span>
                <Button color="link-color" size="sm" className="hidden md:flex" iconTrailing={ArrowUpRight}>
                    View job
                </Button>
                <div className="flex md:hidden">
                    <BadgeWithDot color={props.badgeColor} size="md">
                        {props.badgeText}
                    </BadgeWithDot>
                </div>
            </div>
            <div className="flex items-center gap-2 md:mt-0.5">
                <h3 className="text-md font-semibold text-primary">{props.title}</h3>
                <div className="hidden md:flex">
                    <BadgeWithDot color={props.badgeColor} size="md">
                        {props.badgeText}
                    </BadgeWithDot>
                </div>
            </div>
            <p className="mt-2 text-md text-tertiary">{props.description}</p>
            <div className="mt-5 flex gap-4">
                <div className="flex items-center gap-1.5">
                    <MarkerPin02 size={20} className="text-fg-quaternary" />
                    <span className="text-sm font-medium text-tertiary">{props.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock size={20} className="text-fg-quaternary" />
                    <span className="text-sm font-medium text-tertiary">{props.type}</span>
                </div>
            </div>
        </a>
    );
};

const departments = [
    { id: "all", label: "View all" },
    { id: "design", label: "Design" },
    { id: "softwareEngineering", label: "Software Engineering" },
    { id: "customerSuccess", label: "Customer Success" },
    { id: "sales", label: "Sales" },
    { id: "marketing", label: "Marketing" },
];

const CareersCard01 = () => {
    const [selectedTab, setSelectedTab] = useState("all");

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Open positions</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Want to work with some of the best global talent and build software used by all the companies you know and love? Join the team—we're
                        hiring!
                    </p>
                </div>

                <div className="mt-12 w-full md:mx-auto md:mt-16 md:w-max">
                    <NativeSelect
                        aria-label="Page tabs"
                        className="md:hidden"
                        value={departments.find(({ id }) => id === selectedTab)?.id ?? ""}
                        onChange={(event) => setSelectedTab(event.target.value)}
                        options={departments.map((tab) => ({ label: tab.label, value: tab.id }))}
                    />
                    <Tabs className="max-md:hidden">
                        <TabList size="md" type="button-border" items={departments} />
                    </Tabs>
                </div>

                <div className="mx-auto mt-8 max-w-3xl md:mt-16">
                    <ul className="flex flex-col gap-4 md:gap-6">
                        {jobs.map((job) => (
                            <li key={job.title}>
                                <JobCard01 {...job} />
                            </li>
                        ))}
                    </ul>
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

const FooterLarge09 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Let's get started on something great</h2>
                    <p className="mt-2 text-md text-tertiary md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-12 md:flex-row md:self-center">
                        <Button color="secondary" size="xl">
                            Chat to us
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
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

const AboutPage07 = () => {
    return (
        <div className="bg-primary">
            <HeaderPrimaryDark />

            <HeaderSpaceBetween />

            <ContactSectionIconCards03 />

            <SectionDivider />

            <CareersCard01 />

            <FAQAccordion01 />

            <FooterLarge09 />
        </div>
    );
};

export default AboutPage07;
