"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, MarkerPin02 } from "@untitledui/icons";
import { Collection, TabList as RACTabList, Tab, TabPanel, Tabs } from "react-aria-components";
import { TabList } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { NativeSelect } from "@/components/base/select/select-native";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";

const teamMembers2 = [
    {
        name: "Alisa Hester",
        title: "Founder & CEO",
        summary: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        avatarUrl: "https://www.untitledui.com/images/portraits/alisa-hester",
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
        name: "Rich Wilson",
        title: "Engineering Manager",
        summary: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
        avatarUrl: "https://www.untitledui.com/images/portraits/rich-wilson",
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
        name: "Annie Stanley",
        title: "Product Manager",
        summary: "Former PM for Airtable, Medium, Ghost, and Lumi.",
        avatarUrl: "https://www.untitledui.com/images/portraits/annie-stanley",
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
        name: "Johnny Bell",
        title: "Frontend Developer",
        summary: "Former frontend dev for Linear, Coinbase, and Postscript.",
        avatarUrl: "https://www.untitledui.com/images/portraits/johnny-bell",
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
        name: "Mia Ward",
        title: "Backend Developer",
        summary: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
        avatarUrl: "https://www.untitledui.com/images/portraits/mia-ward",
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
        name: "Archie Young",
        title: "Product Designer",
        summary: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        avatarUrl: "https://www.untitledui.com/images/portraits/archie-young",
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

const footerNavListBrand = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge type="modern" size="sm" className="ml-1">
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

const HeaderCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">The team</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">A small team with impressive cred.</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Want to work with some of the best global talent and build software used by all the companies you know and love? Join the team—we're
                        hiring!
                    </p>
                </div>
            </div>
        </section>
    );
};

const TeamSectionImageGlass01 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
                    {teamMembers2.map((item) => (
                        <li key={item.title} className="relative flex h-108 w-full flex-col justify-end md:h-120">
                            <img src={item.avatarUrl} alt={item.name} className="absolute top-0 left-0 z-0 size-full object-cover" />

                            <div className="z-10 bg-linear-to-t from-black/40 to-black/0 p-3 pt-16 md:p-5 md:pt-20 lg:pt-24">
                                <div className="rounded-xl bg-primary/30 px-4 pt-5 pb-6 text-white ring-1 ring-alpha-white/30 backdrop-blur-[10px] ring-inset md:px-5">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-display-xs font-semibold md:text-display-sm">{item.name}</h3>
                                        <ArrowUpRight className="size-6" />
                                    </div>
                                    <p className="mt-2 text-md font-semibold md:mt-3 md:text-lg">{item.title}</p>
                                    <p className="mt-1 text-sm md:text-md">{item.summary}</p>
                                    <ul className="mt-5 flex gap-5 md:mt-6">
                                        {item.socials.map((social) => (
                                            <li key={social.href}>
                                                <a
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex rounded-xs text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                                >
                                                    <social.icon className="size-5 md:size-6" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
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

const CareersCard01 = () => {
    const [selectedTab, setSelectedTab] = useState("all");

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

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">We're looking for the best</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We're a 100% remote team spread all across the world. Join us!</p>
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

const CardVertical = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-secondary px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary xl:text-display-md">Can't see a position that suits you?</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">
                        We're always looking for smart, motivated people.
                        <br />
                        Send us your CV and let's have a chat. We'd love to meet you!
                    </p>
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

const reviews = [
    {
        id: "review-01",
        company: "3Portals",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/3portals.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/3portals.svg",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: {
            name: "Kelly Williams",
            role: "Head of Design",
            avatarUrl: "https://www.untitledui.com/images/avatars/kelly-williams?fm=webp&q=80",
        },
    },
    {
        id: "review-02",
        company: "Warpspeed",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: {
            name: "Candice Wu",
            role: "Product Manager",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        },
    },
    {
        id: "review-03",
        company: "GlobalBank",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/globalbank.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/globalbank.svg",
        quote: "We're a diverse mix of people who love to solve problems. Every day I get to work with some of the brightest minds in the industry!",
        author: {
            name: "Ammar Foley",
            role: "UX Designer",
            avatarUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80",
        },
    },
    {
        id: "review-04",
        company: "Ikigai Labs",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/ikigailabs.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/ikigailabs.svg",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: {
            name: "Olivia Rhye",
            role: "Head of Product",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
    },
    {
        id: "review-05",
        company: "Eightball",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/eightball.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/eightball.svg",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: {
            name: "Alisa Hester",
            role: "Head of Product",
            avatarUrl: "https://www.untitledui.com/images/avatars/alisa-hester?fm=webp&q=80",
        },
    },
];

const TestimonialSimpleCentered03 = () => {
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(2);

    return (
        <Tabs
            selectedKey={reviews[selectedReviewIndex].id}
            onSelectionChange={(value) => setSelectedReviewIndex(reviews.findIndex((review) => review.id === value))}
        >
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-center gap-10 md:gap-12">
                        <Collection items={reviews}>
                            {(review) => (
                                <TabPanel className="flex flex-col gap-8 text-center">
                                    <blockquote className="text-display-sm font-medium text-primary md:text-display-md lg:text-display-lg">
                                        {review.quote}
                                    </blockquote>
                                    <figcaption className="flex justify-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <Avatar src={review.author.avatarUrl} alt={review.author.name} size="2xl" />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-lg font-semibold text-primary">{review.author.name}</p>
                                                <cite className="text-md text-tertiary not-italic">{review.author.role}</cite>
                                            </div>
                                        </div>
                                    </figcaption>
                                </TabPanel>
                            )}
                        </Collection>

                        <RACTabList className="hidden grid-cols-5 justify-items-center gap-8 md:grid" items={reviews}>
                            {(review) => (
                                <Tab>
                                    <img src={review.companyLogoUrl} className="h-12 dark:hidden" alt={review.company} />
                                    <img src={review.companyLogoUrlDark} className="h-12 opacity-85 not-dark:hidden" alt={review.company} />
                                </Tab>
                            )}
                        </RACTabList>

                        <div className="flex w-full items-center justify-between md:hidden">
                            <Button
                                aria-label="See previous review"
                                color="link-color"
                                className="text-quaternary md:hidden"
                                onClick={() => setSelectedReviewIndex(selectedReviewIndex == 0 ? reviews.length - 1 : selectedReviewIndex - 1)}
                            >
                                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>

                            <img src={reviews[selectedReviewIndex].companyLogoUrl} className="h-10 object-contain" alt={reviews[selectedReviewIndex].company} />

                            <Button
                                aria-label="See next review"
                                className="md:hidden"
                                color="link-color"
                                onClick={() => setSelectedReviewIndex(selectedReviewIndex == reviews.length - 1 ? 0 : selectedReviewIndex + 1)}
                            >
                                <svg aria-hidden="true" className="h-5 w-10 rotate-180 text-quaternary" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Tabs>
    );
};

const FooterLarge03 = () => {
    return (
        <footer className="dark-mode bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
                    <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {footerNavListBrand.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-primary">{category.label}</h4>
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
                    <div className="w-full md:max-w-[135px]">
                        <h4 className="text-sm font-semibold text-primary">Start growing with Untitled</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 md:flex-col">
                            <AppStoreButton href="#" className="w-[135px]" />
                            <GooglePlayButton href="#" className="w-[135px]" />
                        </div>
                    </div>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-8 w-min" />
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const TeamPage04 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderCentered />

            <TeamSectionImageGlass01 />

            <SectionDivider />

            <CareersCard01 />

            <CardVertical />

            <TestimonialSimpleCentered03 />

            <FooterLarge03 />
        </div>
    );
};

export default TeamPage04;
