"use client";

import type { ReactNode } from "react";
import { ArrowUpRight, Clock, MarkerPin02, ZapFast } from "@untitledui/icons";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { StarIcon } from "@/components/foundations/rating-stars";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";

const HeaderCenteredButtons = () => {
    return (
        <section className="dark-mode bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Get to know us</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Meet the makers behind Untitled</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        We're a small group of bright, motivated designers and developers all around the world. We're growing fast and would love to meet you.
                        Check out our open roles!
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:mt-12 sm:flex-row sm:self-center">
                        <Button size="xl" color="secondary">
                            Chat to sales
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

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
];

const TeamSectionImageGlass03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    <div className="flex shrink-0 flex-col items-start lg:w-90">
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

                    <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-2">
                        {teamMembers2.slice(0, 4).map((item) => (
                            <li key={item.title} className="relative flex h-108 w-full flex-col justify-end md:h-120 md:w-95">
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
            </div>
        </section>
    );
};

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

const FeatureTextLeft = ({ title, subtitle, footer }: TextCentered) => (
    <div className="flex max-w-sm flex-col gap-4">
        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const FeaturesSimpleIcons04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-3">
                    <div className="max-w-3xl lg:col-span-1">
                        <FeaturedIcon icon={ZapFast} color="brand" size="xl" theme="light" className="hidden md:flex" />
                        <FeaturedIcon icon={ZapFast} color="brand" size="lg" theme="light" className="md:hidden" />

                        <h2 className="mt-5 text-display-sm font-semibold text-primary md:text-display-md">
                            We're an ambitious
                            <br /> and smart team
                            <br />
                            with a shared
                            <br /> mission
                        </h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Our shared values keep us connected and guide us as one team.</p>
                    </div>

                    <div className="lg:col-span-2">
                        <ul className="grid w-full grid-cols-1 gap-x-16 gap-y-10 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 md:gap-y-8 lg:grid-cols-2">
                            {[
                                {
                                    title: "Share team inboxes",
                                    subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                                },
                                {
                                    title: "Manage your team with reports",
                                    subtitle:
                                        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                                },
                                {
                                    title: "Connect the tools you already use",
                                    subtitle:
                                        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
                                },
                                {
                                    title: "Deliver instant answers",
                                    subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                                },
                                {
                                    title: "Connect with customers",
                                    subtitle:
                                        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
                                },
                                {
                                    title: "Our people make the difference",
                                    subtitle:
                                        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
                                },
                            ].map((item) => (
                                <li key={item.title}>
                                    <FeatureTextLeft title={item.title} subtitle={item.subtitle} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

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

const locations = [
    { id: "Worldwide", label: "Worldwide", icon: MarkerPin02 },
    { id: "Europe", label: "Europe", icon: MarkerPin02 },
    { id: "North America", label: "North America", icon: MarkerPin02 },
    { id: "Asia", label: "Asia", icon: MarkerPin02 },
    { id: "Oceania", label: "Oceania", icon: MarkerPin02 },
];

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

const CareersCard02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
                    <div className="flex max-w-3xl flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Join our team</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 md:gap-6">
                        <div>
                            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_240px] md:self-end">
                                <p className="hidden text-right text-md font-medium whitespace-nowrap text-tertiary md:block">Filter by location</p>
                                <Select
                                    aria-label="Filter by location"
                                    size="md"
                                    placeholderIcon={MarkerPin02}
                                    defaultSelectedKey="Worldwide"
                                    items={locations}
                                >
                                    {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                                </Select>
                            </div>
                        </div>

                        <ul className="flex flex-col gap-4 md:gap-6">
                            {jobs.map((job) => (
                                <li key={job.title}>
                                    <JobCard01 {...job} />
                                </li>
                            ))}
                        </ul>
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

const TestimonialSimpleLeftAligned = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <figure className="flex flex-col gap-10 lg:flex-row lg:gap-32">
                    <img
                        src="https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80"
                        alt="Mathilde Lewis"
                        className="size-[200px] rounded-2xl object-cover md:size-[328px]"
                        aria-hidden="true"
                    />
                    <div className="flex flex-col gap-8 md:-ml-2">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div aria-hidden="true" className="flex gap-1">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <blockquote className="text-display-xs font-medium text-primary md:text-display-md">
                                Love the simplicity of the service and the prompt customer support. We can't imagine working without it.
                            </blockquote>
                        </div>
                        <figcaption className="flex flex-col gap-1">
                            <p className="text-lg font-semibold text-primary">— Mathilde Lewis</p>
                            <cite className="text-md text-tertiary not-italic">Head of Design, Layers</cite>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    );
};

const NewsletterCTACardVertical = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-secondary px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary xl:text-display-md">Join our careers newsletter</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">Be the first to know when new jobs are posted!</p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch text-left sm:grid-cols-[360px_max-content] sm:self-center md:mt-8 md:gap-0"
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

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
];

const FooterLarge07 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                            <UntitledLogo className="h-8 w-min shrink-0" />
                            <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                        </div>
                        <nav>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                                {[
                                    { title: "Overview", href: "#" },
                                    { title: "Features", href: "#" },
                                    { title: "Pricing", href: "#" },
                                    { title: "Careers", href: "#" },
                                    { title: "Help", href: "#" },
                                    { title: "Privacy", href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button color="link-gray" size="lg" href={item.href}>
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-md font-medium text-brand-secondary">Get the app</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 lg:flex-col">
                            <AppStoreButton href="#" className="w-[135px]" />
                            <GooglePlayButton href="#" className="w-[135px]" />
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
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
        </footer>
    );
};

const TeamPage06 = () => {
    return (
        <div className="bg-primary">
            <Header className="dark-mode bg-primary" />

            <HeaderCenteredButtons />

            <TeamSectionImageGlass03 />

            <SectionDivider />

            <FeaturesSimpleIcons04 />

            <SectionDivider />

            <CareersCard02 />

            <CardVertical />

            <SectionDivider />

            <TestimonialSimpleLeftAligned />

            <NewsletterCTACardVertical />

            <FooterLarge07 />
        </div>
    );
};

export default TeamPage06;
