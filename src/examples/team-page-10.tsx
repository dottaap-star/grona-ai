"use client";

import { Clock, MarkerPin02 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";

const teamMembers = [
    {
        name: "Amélie Laurent",
        title: "Founder & CEO",
        summary: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        avatarUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
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
        name: "Nikolas Gibbons",
        title: "Engineering Manager",
        summary: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
        avatarUrl: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80",
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
        name: "Sienna Hewitt",
        title: "Product Manager",
        summary: "Former PM for Linear, Lambda School, and On Deck.",
        avatarUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
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
        name: "Lily-Rose Chedjou",
        title: "Frontend Developer",
        summary: "Former frontend dev for Linear, Coinbase, and Postscript.",
        avatarUrl: "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80",
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
                href: "https://www.linkedin.com/",
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

const jobs: JobCardSimpleProps[] = [
    {
        title: "Product Designer",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "blue",
        badgeText: "Design",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Engineering Manager",
        description: "We're looking for an experienced engineering manager to join our team.",
        href: "#",
        badgeColor: "pink",
        badgeText: "Software Development",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Customer Success Manager",
        description: "We're looking for a customer success manager to join our team.",
        href: "#",
        badgeColor: "success",
        badgeText: "Careers",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Account Executive",
        description: "We're looking for an account executive to join our team.",
        href: "#",
        badgeColor: "indigo",
        badgeText: "Sales",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "SEO Marketing Manager",
        description: "We're looking for an experienced SEO marketing manager to join our team.",
        href: "#",
        badgeColor: "orange",
        badgeText: "Marketing",
        location: "Remote",
        type: "Full-time",
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
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our team</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">A small team with impressive cred.</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        We're a distributed team with eclectic backgrounds from some of the best companies in the world.
                    </p>
                </div>
            </div>
        </section>
    );
};

const TeamSectionSimple04 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
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
        </section>
    );
};

const MetricsCardGrayLight = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 rounded-2xl bg-secondary px-6 py-10 md:gap-16 md:rounded-none md:bg-transparent md:p-0">
                    <dl className="flex flex-col gap-8 rounded-2xl bg-secondary md:flex-row md:p-16">
                        {[
                            { title: "400+", subtitle: "Projects completed" },
                            { title: "600%", subtitle: "Return on investment" },
                            { title: "10k", subtitle: "Global downloads" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-1 flex-col-reverse gap-3 text-center">
                                <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                <dd className="text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

const ContentSectionSplitImage03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 items-center gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2">
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">We're on a mission</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Our product philosophy</h2>
                    <div className="prose mt-8 md:prose-lg md:mt-12">
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam.
                        </p>
                        <p>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada.
                        </p>

                        <p>
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
                            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
                            congue convallis aliquet.
                        </p>
                        <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
                            dictum molestie sem tempor. Diam elit, orci, tincidunt aenean.{" "}
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
                        <Button color="secondary" size="xl">
                            Get in touch
                        </Button>
                        <Button size="xl">Our process</Button>
                    </div>
                </div>

                <div className="h-60 lg:h-163.5">
                    <img
                        src="https://www.untitledui.com/marketing/content-section-03.webp"
                        className="size-full object-cover"
                        alt="Abstract 3D holographic rectangles"
                    />
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

const JobCardSimple = (props: JobCardSimpleProps) => {
    return (
        <a href={props.href} className="relative flex flex-col rounded-xs pt-6 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-4">
            <div className="absolute top-0 h-px w-full border-t border-secondary"></div>
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <h3 className="text-md font-semibold text-primary">{props.title}</h3>
                <BadgeWithDot color={props.badgeColor} size="md" type="pill-color">
                    {props.badgeText}
                </BadgeWithDot>
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

const CareersSimple03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-3xl flex-col lg:mx-0">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Open positions</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We're looking for talented people</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We're a 100% remote team spread all across the world. Join us!</p>
                </div>
                <div className="mt-12 md:mt-16">
                    <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-x-16 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-12">
                        {jobs.map((job) => (
                            <li key={job.title}>
                                <JobCardSimple {...job} />
                            </li>
                        ))}
                        <li>
                            <JobCardSimple
                                {...{
                                    title: "UX Researcher",
                                    description: "We're looking for a senior user researcher to join our team.",
                                    department: "Design",
                                    href: "#",
                                    badgeColor: "blue",
                                    badgeText: "Design",
                                    location: "Remote",
                                    type: "Full-time",
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FooterLarge09 = () => {
    return (
        <footer className="bg-secondary py-12 md:pt-16">
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

const TeamPage10 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderCentered />

            <TeamSectionSimple04 />

            <MetricsCardGrayLight />

            <SectionDivider />

            <ContentSectionSplitImage03 />

            <SectionDivider />

            <CareersSimple03 />

            <FooterLarge09 />
        </div>
    );
};

export default TeamPage10;
