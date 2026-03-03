"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, MarkerPin02 } from "@untitledui/icons";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";

export const jobs: JobCard01Props[] = [
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

const HeaderCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our team</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Leadership team</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">We're building the future of software development.</p>
                </div>
            </div>
        </section>
    );
};

const TeamSectionSimple01 = () => {
    const teamMembers = [
        {
            name: "Olivia Rhye",
            title: "Founder & CEO",
            summary: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Phoenix Baker",
            title: "Engineering Manager",
            summary: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Lana Steiner",
            title: "Product Manager",
            summary: "Former PM for Linear, Lambda School, and On Deck.",
            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Demi Wilkinson",
            title: "Frontend Developer",
            summary: "Former frontend dev for Linear, Coinbase, and Postscript.",
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Zahra Christensen",
            title: "Backend Developer",
            summary: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
            avatarUrl: "https://www.untitledui.com/images/avatars/zahra-christensen?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Caitlyn King",
            title: "Product Designer",
            summary: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
            avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Zaid Schwartz",
            title: "UX Researcher",
            summary: "Lead user research for Slack. Contractor for Netflix and Udacity.",
            avatarUrl: "https://www.untitledui.com/images/avatars/zaid-schwartz?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Marco Kelly",
            title: "Customer Success",
            summary: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
            avatarUrl: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
    ];

    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {teamMembers.map((item) => (
                        <li key={item.title} className="flex flex-col items-center gap-4 md:gap-5">
                            <Avatar src={item.avatarUrl} alt={item.name} size="2xl" className="size-20 md:size-24" />
                            <div className="flex flex-col items-center text-center">
                                <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                                <p className="text-md text-brand-secondary">{item.title}</p>
                                <ul className="mt-4 flex gap-4">
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
        </section>
    );
};

const TeamSectionSimple01Additional = () => {
    const teamMembers = [
        {
            name: "Lori Bryson",
            title: "Sequoia Capital",
            summary: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            avatarUrl: "https://www.untitledui.com/images/avatars/lori-bryson?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Anaiah Whitten",
            title: "Valar Ventures",
            summary: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
            avatarUrl: "https://www.untitledui.com/images/avatars/anaiah-whitten?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Noah Pierre",
            title: "New Enterprise Associates",
            summary: "Former PM for Linear, Lambda School, and On Deck.",
            avatarUrl: "https://www.untitledui.com/images/avatars/noah-pierre?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
        {
            name: "Katherine Moss",
            title: "Blackbird Ventures",
            summary: "Former frontend dev for Linear, Coinbase, and Postscript.",
            avatarUrl: "https://www.untitledui.com/images/avatars/katherine-moss?fm=webp&q=80",
            socials: [
                {
                    icon: X,
                    href: "https://x.com/",
                },
                {
                    icon: LinkedIn,
                    href: "https://www.linkedin.com/",
                },
                {
                    icon: Dribbble,
                    href: "https://dribbble.com/",
                },
            ],
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Board members</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We're lucky to be supported by some of the best investors in the world.</p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {teamMembers.map((item) => (
                            <li key={item.title} className="flex flex-col items-center gap-4 md:gap-5">
                                <Avatar src={item.avatarUrl} alt={item.name} size="2xl" className="size-20 md:size-24" />
                                <div className="flex flex-col items-center text-center">
                                    <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                                    <p className="text-md text-brand-secondary">{item.title}</p>
                                    <ul className="mt-4 flex gap-4">
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

export interface JobCardSimpleProps {
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
    {
        id: "all",
        label: "View all",
    },
    {
        id: "design",
        label: "Design",
    },
    {
        id: "softwareEngineering",
        label: "Software Engineering",
    },
    {
        id: "customerSuccess",
        label: "Customer Success",
    },
    {
        id: "sales",
        label: "Sales",
    },
    {
        id: "marketing",
        label: "Marketing",
    },
];

const CareersCard01 = () => {
    const [selectedTab, setSelectedTab] = useState("all");

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        We're committed to bringing world-class, passionate professionals together to push new boundaries and grow
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        We believe in building teams where unique perspectives and talents can thrive and everyone has what they need to excel in their role,
                        career, and at home.
                    </p>
                </div>

                <div className="mt-12 w-full md:mx-auto md:mt-16 md:w-max">
                    <NativeSelect
                        aria-label="Departments"
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

const TeamSectionImageCollage02 = () => {
    return (
        <section className="bg-primary py-16 lg:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 gap-16 overflow-hidden px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="flex max-w-3xl flex-col items-start">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Get to know us</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We're just getting started</h2>
                    <div className="flex flex-col">
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Untitled is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team
                            all around the world.
                        </p>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Our philosophy is simple—hire a team of diverse and passionate people and foster a culture that empowers you to do you best work.
                            Read more about
                        </p>
                    </div>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl">
                            Read our principles
                        </Button>
                        <Button size="xl">We're hiring!</Button>
                    </div>
                </div>

                <div className="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 justify-self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4">
                    <img
                        src="https://www.untitledui.com/images/portraits/megan-sims"
                        className="size-full object-cover"
                        alt="Megan Sims"
                        style={{ gridArea: "7 / 5 / 13 / 9" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/portraits/nic-davidson"
                        className="size-full object-cover"
                        alt="Nic Davidson"
                        style={{ gridArea: "1 / 7 / 7 / 11" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Amelie Laurent"
                        style={{ gridArea: "3 / 3 / 7 / 7" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Lily-Rose Chedjou"
                        style={{ gridArea: "7 / 9 / 11 / 13" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/levi-rocha?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Levi Rocha"
                        style={{ gridArea: "7 / 1 / 12 / 5" }}
                    />
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
        author: {
            name: "Caitlyn King",
            title: "COO, OdeaoLabs",
            imageUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/color/odeaolabs.svg",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/odeaolabs.svg",
        },
    },
    {
        id: "review-03",
        quote: "Every project starts with Untitled, and it's made a huge difference in our output. It's a game-changer for our design team.",
        author: {
            name: "Olly Schroeder",
            title: "Designer, Nietzsche",
            imageUrl: "https://www.untitledui.com/images/avatars/olly-schroeder?fm=webp&q=80",
        },
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

const navList = [
    {
        title: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge size="sm" type="modern" className="ml-1">
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
        title: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
];

const FooterLarge04 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                        <UntitledLogo className="h-8 w-min shrink-0" />
                        <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <nav className="flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 xl:justify-end">
                        <ul className="grid w-full grid-cols-2 gap-8 md:max-w-xs">
                            {navList.map((category) => (
                                <li key={category.title}>
                                    <h4 className="text-sm font-semibold text-primary">{category.title}</h4>
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
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex w-full flex-col gap-4 md:max-w-90"
                        >
                            <label htmlFor="newsletters-email" className="text-sm font-semibold text-primary">
                                Stay up to date
                            </label>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Input
                                    isRequired
                                    id="newsletters-email"
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
                    </nav>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { title: "Terms", href: "#" },
                            { title: "Privacy", href: "#" },
                            { title: "Cookies", href: "#" },
                        ].map(({ title, href }) => (
                            <li key={title}>
                                <a href={href} className="text-md text-quaternary transition duration-100 ease-linear hover:text-tertiary">
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const TeamPage02 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <HeaderCentered />

            <TeamSectionSimple01 />

            <TeamSectionSimple01Additional />

            <CareersCard01 />

            <SectionDivider />

            <TeamSectionImageCollage02 />

            <SectionDivider />

            <SocialCards01 />

            <SimpleCentered />

            <FooterLarge04 />
        </div>
    );
};

export default TeamPage02;
