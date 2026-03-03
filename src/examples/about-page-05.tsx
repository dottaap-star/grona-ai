"use client";

import type { ComponentPropsWithRef, FC, ReactNode } from "react";
import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ChartBreakoutSquare,
    Clock,
    Command,
    MarkerPin02,
    MessageChatCircle,
    MessageHeartCircle,
    MessageSmileCircle,
    Zap,
} from "@untitledui/icons";
import { AnimatePresence, motion } from "motion/react";
import type { Transition } from "motion/react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { StarIcon } from "@/components/foundations/rating-stars";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

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

const teamMembers = [
    {
        name: "Amélie Laurent",
        title: "Founder & CEO",
        summary: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        avatarUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Nikolas Gibbons",
        title: "Engineering Manager",
        summary: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
        avatarUrl: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Sienna Hewitt",
        title: "Product Manager",
        summary: "Former PM for Linear, Lambda School, and On Deck.",
        avatarUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Lily-Rose Chedjou",
        title: "Frontend Developer",
        summary: "Former frontend dev for Linear, Coinbase, and Postscript.",
        avatarUrl: "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Zahra Christensen",
        title: "Backend Developer",
        summary: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
        avatarUrl: "https://www.untitledui.com/images/avatars/zahra-christensen?fm=webp&q=80",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Caitlyn King",
        title: "Product Designer",
        summary: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Zaid Schwartz",
        title: "UX Researcher",
        summary: "Lead user research for Slack. Contractor for Netflix and Udacity.",
        avatarUrl: "https://www.untitledui.com/images/avatars/zaid-schwartz?fm=webp&q=80",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Marco Kelly",
        title: "Customer Success",
        summary: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
        avatarUrl: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
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

const HeaderCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">About us</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">We do things differently...</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        We focus on the details of everything we do. All to help businesses around the world focus on what's most important to them. We take
                        pride in this.
                    </p>
                </div>
            </div>
        </section>
    );
};

const MetricsImageWithCards01 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="relative grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:p-16 lg:grid-cols-3">
                        <img
                            src="https://www.untitledui.com/marketing/workspace-3.webp"
                            alt="Modern workspace background"
                            className="absolute inset-0 z-0 size-full object-cover"
                        />

                        {[
                            { title: "400+", subtitle: "Projects completed", description: "We've helped build over 400 projects with great companies." },
                            { title: "600%", subtitle: "Return on investment", description: "We've helped build over 400 projects with great companies." },
                            { title: "10k", subtitle: "Global downloads", description: "Our free UI kit has been downloaded over 10k times." },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="z-10 rounded-2xl bg-alpha-white/30 px-6 py-8 text-center ring-1 ring-alpha-white/30 backdrop-blur-xl ring-inset"
                            >
                                <p className="text-display-lg font-semibold text-white md:text-display-xl">{item.title}</p>
                                <p className="mt-3 text-lg font-semibold text-white">{item.subtitle}</p>
                                <p className="mt-2 text-md text-white">{item.description}</p>
                            </div>
                        ))}
                    </div>
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

const features = [
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
        subtitle: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
        icon: ChartBreakoutSquare,
    },
    {
        title: "Connect with customers",
        subtitle: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
        icon: MessageSmileCircle,
    },
    {
        title: "Connect the tools you already use",
        subtitle: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
        icon: Command,
    },
    {
        title: "Our people make the difference",
        subtitle: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
        icon: MessageHeartCircle,
    },
];

const FeaturesSimpleIcons02 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our values</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                        We're an ambitious and smart team <br />
                        with a shared mission
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Our shared values keep us connected and guide us as one team.</p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {features.map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopCentered icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const TeamSectionSimple04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Meet our team</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 self-stretch sm:flex-row-reverse sm:justify-center">
                        <Button size="xl">Open positions</Button>
                        <Button color="secondary" size="xl">
                            About us
                        </Button>
                    </div>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
                        {teamMembers.map((item) => (
                            <li key={item.title} className="flex flex-col items-center gap-5 bg-secondary px-6 py-6 md:pr-4">
                                <Avatar src={item.avatarUrl} alt={item.name} size="2xl" className="size-24" />
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                                    <p className="text-md text-brand-secondary">{item.title}</p>
                                    <p className="mt-2 text-md text-tertiary">{item.summary}</p>
                                    <ul className="mt-4 flex justify-center gap-4">
                                        {item.socials.map((social) => (
                                            <li key={social.href}>
                                                <a
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                                >
                                                    <social.icon className="size-5" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
                        WWant to work with some of the best global talent and build software used by all the companies you know and love? Join the team—we're
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

interface RoundButtonProps extends ComponentPropsWithRef<"button"> {
    icon?: FC<{ className?: string }>;
}

const RoundButton = ({ icon: Icon, ...props }: RoundButtonProps) => {
    return (
        <Button
            {...props}
            color="link-gray"
            className={cx(
                "group flex size-12 items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14",
                props.className,
            )}
        >
            {props.children ??
                (isReactComponent(Icon) ? (
                    <Icon className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover md:size-6" />
                ) : null)}
        </Button>
    );
};

const reviews = [
    {
        quote: "I've been welcomed warmly to the team and now I never want to leave.",
        author: {
            name: "Sienna Hewitt",
            title: "Project Manager, Warpspeed",
            avatarUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
        },
    },
    {
        quote: "I've been welcomed warmly to the team and now I never want to leave.",
        author: {
            name: "Caitlyn King",
            title: "Data Engineer, Sisyphus",
            avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
    },
    {
        quote: "I've been welcomed warmly to the team and now I never want to leave.",
        author: { name: "Lulu Meyers", title: "PM, Hourglass", avatarUrl: "https://www.untitledui.com/images/avatars/lulu-meyers?fm=webp&q=80" },
    },
];

const TestimonialAbstractImage = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const transition: Transition = { type: "spring", duration: 0.8 };

    return (
        <section className="bg-primary py-16 lg:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-12 overflow-hidden px-4 md:gap-16 md:px-8 lg:flex-row lg:items-center">
                <figure className="flex flex-col gap-8 md:gap-12 lg:flex-1">
                    <div className="flex flex-1 flex-col gap-6 md:gap-12">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div key={currentReviewIndex + "-rating"} aria-hidden="true" className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <motion.div
                                        key={`${currentReviewIndex}-${index}`}
                                        initial={{ opacity: 0, scale: 0.9, y: 6 }}
                                        animate={{ opacity: 1, scale: 1, y: 0, transition: { ...transition, delay: 0.5 + index * 0.1 } }}
                                        exit={{ opacity: 0, scale: 0.9, y: 6, transition: { ...transition, delay: 0.12 } }}
                                    >
                                        <StarIcon />
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.q
                                key={currentReviewIndex + "-quote"}
                                initial={{ opacity: 0, scale: 0.99, y: 12 }}
                                animate={{ opacity: 1, scale: 1, y: 0, transition: { ...transition, delay: 0.4 } }}
                                exit={{ opacity: 0, scale: 0.99, y: 12, transition: { ...transition, delay: 0.06 } }}
                                className="origin-bottom-left text-display-sm font-medium text-balance text-primary sm:text-display-md md:text-display-lg"
                            >
                                {reviews[currentReviewIndex].quote}
                            </motion.q>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col justify-between gap-6 md:flex-row">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
                                key={currentReviewIndex}
                                initial={{ opacity: 0, scale: 0.99, y: 12 }}
                                animate={{ opacity: 1, scale: 1, y: 0, transition: { ...transition, delay: 0.3 } }}
                                exit={{ opacity: 0, scale: 0.99, y: 12, transition }}
                                className="flex origin-bottom-left gap-4"
                            >
                                <Avatar src={reviews[currentReviewIndex].author.avatarUrl} alt={reviews[currentReviewIndex].author.name} size="xl" />
                                <figcaption className="flex flex-col gap-0.5">
                                    <p className="text-lg font-semibold whitespace-nowrap text-primary">{reviews[currentReviewIndex].author.name}</p>
                                    <cite className="text-md whitespace-nowrap text-tertiary not-italic">{reviews[currentReviewIndex].author.title}</cite>
                                </figcaption>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-4 md:gap-8">
                            <RoundButton
                                icon={ArrowLeft}
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1)}
                            />
                            <RoundButton
                                icon={ArrowRight}
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1)}
                            />
                        </div>
                    </div>
                </figure>

                <div className="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4 lg:flex-1">
                    <img
                        src="https://www.untitledui.com/marketing/testimonial-abstract-image-01.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "3 / 3 / 7 / 7" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/smiling-girl-3.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "1 / 7 / 7 / 11" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/ai-woman-03.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "7 / 1 / 10 / 5" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/two-standing-women.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "7 / 5 / 13 / 9" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/smiling-girl-8.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "7 / 9 / 10 / 13" }}
                    />
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
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Join our careers newsletter</h1>
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

const AboutPage05 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderCentered />

            <MetricsImageWithCards01 />

            <FeaturesSimpleIcons02 />

            <TeamSectionSimple04 />

            <CareersCard01 />

            <TestimonialAbstractImage />

            <SimpleCentered />

            <FooterLarge05 />
        </div>
    );
};

export default AboutPage05;
