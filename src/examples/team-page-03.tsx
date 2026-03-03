"use client";

import { Clock, CurrencyDollarCircle, MarkerPin02 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot, BadgeWithFlag } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
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

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
];

const HeaderLeft = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">The team</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Meet the team behind Untitled</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">We're a small team on a big mission.</p>
                </div>
            </div>
        </section>
    );
};

const TeamSectionSimple03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                    <div className="flex shrink-0 flex-col items-start lg:w-87">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Our team</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Leadership team</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            We're a cross-disciplinary team that loves to create great experiences for our customers.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 self-stretch sm:flex-row sm:self-start lg:flex-row-reverse">
                            <Button size="xl">Open positions</Button>
                            <Button color="secondary" size="xl">
                                About us
                            </Button>
                        </div>
                    </div>

                    <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:ml-3 lg:grid-cols-2 xl:grid-cols-3">
                        {teamMembers.slice(0, -2).map((item) => (
                            <li key={item.title} className="flex gap-4 md:flex-col md:gap-5">
                                <Avatar src={item.avatarUrl} alt={item.name} size="2xl" className="size-20 md:size-24" />
                                <div>
                                    <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                                    <p className="text-md text-brand-secondary">{item.title}</p>
                                    <p className="mt-2 text-md text-tertiary">{item.summary}</p>
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

interface JobCardSimpleProps {
    title: string;
    description: string;
    href: string;
    location: string;
    type: string;
    badgeText?: string;
    badgeColor: BadgeColors;
}

interface JobCard02Props extends Omit<JobCardSimpleProps, "location"> {
    salary: string;
    location: { city: string; country: string; countryCode: string };
}

const JobCard02 = (props: JobCard02Props) => {
    return (
        <a
            href={props.href}
            className="flex flex-col rounded-2xl bg-primary p-6 ring-1 ring-secondary outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2"
        >
            <div className="flex flex-col items-start gap-2 md:flex-row">
                <h3 className="text-md font-semibold text-primary">{props.title}</h3>

                <div className="flex flex-1 gap-2 md:flex-row-reverse md:justify-between">
                    <BadgeWithFlag flag="AU" color="gray" size="md" type="modern">
                        <span>
                            {props.location.city}, <span className="hidden md:inline-flex">{props.location.country}</span>
                            <span className="inline-flex md:hidden">{props.location.countryCode}</span>
                        </span>
                    </BadgeWithFlag>

                    <BadgeWithDot color={props.badgeColor} size="md" type="modern">
                        {props.badgeText}
                    </BadgeWithDot>
                </div>
            </div>

            <p className="mt-2 text-md text-tertiary">{props.description}</p>

            <div className="mt-5 flex gap-4">
                <div className="flex items-center gap-1.5">
                    <Clock size={20} className="text-fg-quaternary" />
                    <span className="text-sm font-medium text-tertiary">{props.type}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <CurrencyDollarCircle size={20} className="text-fg-quaternary" />
                    <span className="text-sm font-medium text-tertiary">{props.salary}</span>
                </div>
            </div>
        </a>
    );
};

const locations = [
    { id: "Worldwide", label: "Worldwide", icon: MarkerPin02 },
    { id: "Europe", label: "Europe", icon: MarkerPin02 },
    { id: "North America", label: "North America", icon: MarkerPin02 },
    { id: "Asia", label: "Asia", icon: MarkerPin02 },
    { id: "Oceania", label: "Oceania", icon: MarkerPin02 },
];

const jobsByCategory: { category: string; description: string; jobs: JobCard02Props[] }[] = [
    {
        category: "Design",
        description: "Open positions in our design team.",
        jobs: [
            {
                title: "Product Designer",
                description: "We're looking for a mid-level product designer to join our team.",
                href: "#",
                badgeColor: "blue",
                badgeText: "Design",
                salary: "80k - 100k",
                type: "Full-time",
                location: {
                    city: "Melbourne",
                    country: "Australia",
                    countryCode: "AU",
                },
            },
            {
                title: "UX Designer",
                description: "We're looking for a mid-level UX designer to join our team.",
                href: "#",
                badgeColor: "blue",
                badgeText: "Design",
                salary: "80k - 100k",
                type: "Full-time",
                location: {
                    city: "Melbourne",
                    country: "Australia",
                    countryCode: "AU",
                },
            },
        ],
    },
    {
        category: "Software Development",
        description: "Open positions in our software team.",
        jobs: [
            {
                title: "Engineering Manager",
                description: "We're looking for an experienced engineering manager to join our team.",
                href: "#",
                badgeColor: "pink",
                badgeText: "Software",
                salary: "80k - 100k",
                type: "Full-time",
                location: {
                    city: "Melbourne",
                    country: "Australia",
                    countryCode: "AU",
                },
            },
            {
                title: "Frontend Developer",
                description: "We're looking for an experienced frontend developer to join our team.",
                href: "#",
                badgeColor: "pink",
                badgeText: "Software",
                salary: "80k - 100k",
                type: "Full-time",
                location: {
                    city: "Melbourne",
                    country: "Australia",
                    countryCode: "AU",
                },
            },
            {
                title: "Backend Developer",
                description: "We're looking for an experienced backend developer to join our team.",
                href: "#",
                badgeColor: "pink",
                badgeText: "Software",
                salary: "80k - 100k",
                type: "Full-time",
                location: {
                    city: "Melbourne",
                    country: "Australia",
                    countryCode: "AU",
                },
            },
        ],
    },
    {
        category: "Customer Success",
        description: "Open positions in our CX team.",
        jobs: [
            {
                title: "Customer Success Manager",
                description: "We're looking for a mid-level product designer to join our team.",
                href: "#",
                badgeColor: "success",
                badgeText: "Customer Success",
                salary: "80k - 100k",
                type: "Full-time",
                location: {
                    city: "Melbourne",
                    country: "Australia",
                    countryCode: "AU",
                },
            },
        ],
    },
];

const CareersCard04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-8">
                    <div className="flex w-full max-w-3xl flex-col">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Start doing work that matters</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                        </p>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_240px]">
                            <p className="hidden text-right text-md font-medium whitespace-nowrap text-tertiary md:block">Location:</p>
                            <Select aria-label="Location" size="md" placeholderIcon={MarkerPin02} defaultSelectedKey="Worldwide" items={locations}>
                                {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-16">
                    <ul className="flex flex-col gap-8 md:gap-16">
                        {jobsByCategory.map(({ category, description, jobs }) => (
                            <li
                                key={category}
                                className="flex flex-col justify-between gap-5 border-secondary md:gap-8 lg:flex-row lg:items-start lg:gap-8 lg:border-t lg:pt-12"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold text-primary lg:text-xl">{category}</h2>
                                    <p className="mt-1 text-md text-tertiary lg:mt-2">{description}</p>
                                </div>
                                <ul className="flex flex-1 flex-col gap-4 md:gap-6 lg:max-w-3xl">
                                    {jobs.map((job) => (
                                        <li key={job.title}>
                                            <JobCard02 {...job} />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12 h-60 w-full md:mt-16 md:h-120 lg:h-180">
                    <img src="https://www.untitledui.com/marketing/collaboration.webp" alt="Collaboration" className="size-full object-cover" />
                </div>
            </div>
        </section>
    );
};

const SimpleCentered = () => {
    return (
        <section className="dark-mode bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Get notified when new roles open up</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Be the first to know when new jobs are posted!</p>

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

const FooterLarge02 = () => {
    return (
        <footer className="dark-mode">
            <div className="bg-primary py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col items-start gap-6 md:w-80 md:gap-6">
                            <UntitledLogo className="h-8 w-min shrink-0" />
                            <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                            <RatingBadge className="origin-top-left scale-[0.78]" />
                        </div>
                        <nav className="flex-1">
                            <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                                {footerNavList.slice(0, 5).map((category) => (
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
                    </div>
                </div>
            </div>
            <div className="bg-secondary_alt py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row">
                        <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                        <ul className="flex gap-6">
                            {footerSocials.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
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

const TeamPage03 = () => {
    return (
        <div className="bg-primary">
            <Header className="bg-secondary" />

            <HeaderLeft />

            <TeamSectionSimple03 />

            <SectionDivider />

            <CareersCard04 />

            <SimpleCentered />

            <FooterLarge02 />
        </div>
    );
};

export default TeamPage03;
