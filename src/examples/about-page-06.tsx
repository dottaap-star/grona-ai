"use client";

import { Clock, CurrencyDollarCircle, PlayCircle } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot, BadgeWithFlag } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
];

const HeaderSpaceBetween = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-3 text-sm font-semibold text-brand-secondary md:text-md">About us</div>
                <div className="flex flex-col gap-x-16 lg:flex-row">
                    <h1 className="flex-1 text-display-md font-semibold text-primary md:text-display-lg">We do things differently...</h1>

                    <p className="w-ful mt-4 text-lg text-tertiary md:mt-6 md:text-xl lg:mt-3 lg:max-w-120">
                        Learn more about the company and the world-class team behind Untitled.
                    </p>
                </div>
            </div>
        </section>
    );
};

const MetricsSimpleWithActions01 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <dl className="flex flex-col gap-8 md:flex-row">
                        {[
                            { title: "400+", subtitle: "Projects completed", description: "We've helped build over 400 amazing projects." },
                            { title: "600%", subtitle: "Return on investment", description: "Our customers have reported an average of ~600% ROI." },
                            { title: "10k", subtitle: "Global downloads", description: "Our free UI kit has been downloaded over 10k times." },
                            { title: "200+", subtitle: "5-star reviews", description: "We're proud of our 5-star rating with over 200 reviews." },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-1 flex-col-reverse gap-3 text-center md:text-left">
                                <div className="flex flex-col gap-2">
                                    <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                    <p className="hidden text-md text-tertiary md:block">{item.description}</p>
                                </div>
                                <dd className="text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="flex flex-col-reverse gap-3 md:hidden">
                        <Button iconLeading={PlayCircle} color="secondary" size="xl">
                            Demo
                        </Button>
                        <Button size="xl"> Get started</Button>
                    </div>
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
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
            {
                title: "UX Designer",
                description: "We're looking for a mid-level UX designer to join our team.",
                href: "#",
                badgeColor: "blue",
                badgeText: "Design",
                salary: "80k - 100k",
                type: "Full-time",
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
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
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
            {
                title: "Frontend Developer",
                description: "We're looking for an experienced frontend developer to join our team.",
                href: "#",
                badgeColor: "pink",
                badgeText: "Software",
                salary: "80k - 100k",
                type: "Full-time",
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
            {
                title: "Backend Developer",
                description: "We're looking for an experienced backend developer to join our team.",
                href: "#",
                badgeColor: "pink",
                badgeText: "Software",
                salary: "80k - 100k",
                type: "Full-time",
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
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
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
        ],
    },
];

const CareersCard03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge className="hidden md:flex" size="lg" color="brand" type="pill-color">
                        Careers
                    </Badge>
                    <Badge className="md:hidden" size="md" color="brand" type="pill-color">
                        Careers
                    </Badge>

                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">We're looking for talented people</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We're a 100% remote team spread all across the world. Join us!</p>
                </div>
                <div className="mt-12 h-60 w-full md:mt-16 md:h-140">
                    <img src="https://www.untitledui.com/marketing/woman-artist-2.webp" alt="Woman artist" className="size-full object-cover" />
                </div>
                <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                    <ul className="flex flex-col gap-8 md:gap-16">
                        {jobsByCategory.map(({ category, jobs }) => (
                            <li key={category}>
                                <h2 className="text-lg font-semibold text-primary md:text-xl">{category}</h2>
                                <ul className="mt-5 flex flex-col gap-4 md:gap-6">
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
            </div>
        </section>
    );
};

const pins = [
    {
        location: "Seattle, USA",
        address: "911 E Pike Street, Capitol Hill, Seattle, WA 98122",
        flag: "https://www.untitledui.com/images/flags/US.svg",
        position: {
            x: 130,
            y: 157,
        },
    },
    {
        location: "San Francisco, USA",
        address: "2201 Valencia Street, Mission District, San Francisco, CA 94110",
        flag: "https://www.untitledui.com/images/flags/US.svg",
        position: {
            x: 158,
            y: 204,
        },
    },
    {
        location: "London, GB",
        address: "85 Redchurch Street, Shoreditch, London E2 7DJ",
        flag: "https://www.untitledui.com/images/flags/GB.svg",
        position: {
            x: 521,
            y: 97,
        },
    },
    {
        location: "Berlin, DE",
        address: "17 Weserstraße, Neukölln, 12045 Berlin",
        flag: "https://www.untitledui.com/images/flags/DE.svg",
        position: {
            x: 581,
            y: 73,
        },
    },
    {
        location: "Rome, IT",
        address: "12 Via del Pigneto, Pigneto, 00176 Roma RM",
        flag: "https://www.untitledui.com/images/flags/IT.svg",
        position: {
            x: 513,
            y: 176,
        },
    },
    {
        location: "Mumbai, IN",
        address: "21 Pali Hill Road, Bandra West, Mumbai, Maharashtra 400050",
        flag: "https://www.untitledui.com/images/flags/IN.svg",
        position: {
            x: 678,
            y: 224,
        },
    },
    {
        location: "Tokyo, JP",
        address: "3-15-7 Jingumae, Shibuya-ku, Tokyo 150-0001",
        flag: "https://www.untitledui.com/images/flags/JP.svg",
        position: {
            x: 843,
            y: 199,
        },
    },
    {
        location: "Melbourne, AUS",
        address: "100 Smith Street Collingwood VIC 3066 AU",
        flag: "https://www.untitledui.com/images/flags/AU.svg",
        position: {
            x: 885,
            y: 406,
        },
    },
    {
        location: "Auckland, NZ",
        address: "42 Ponsonby Road, Ponsonby, Auckland 1011",
        flag: "https://www.untitledui.com/images/flags/NZ.svg",
        position: {
            x: 958,
            y: 424,
        },
    },
];

const VectorMap03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <div className="max-md:hidden">
                        <Badge color="brand" size="lg" type="pill-color">
                            Stores
                        </Badge>
                    </div>
                    <div className="md:hidden">
                        <Badge color="brand" size="md" type="pill-color">
                            Stores
                        </Badge>
                    </div>

                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">We're a distributed team</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We have offices and teams all around the world.</p>
                </div>

                <div className="mt-12 flex flex-col gap-16 md:mt-16">
                    {/* World map */}
                    <svg height="488" className="mx-auto hidden w-full max-w-5xl overflow-visible lg:block" viewBox="0 0 1025 483" fill="none">
                        <image width="100%" x="0" y="0" href="https://www.untitledui.com/marketing/world-map-light-mode.svg" className="dark:hidden" />
                        <image width="100%" x="0" y="0" href="https://www.untitledui.com/marketing/world-map-dark-mode.svg" className="not-dark:hidden" />

                        <foreignObject width="100%" height="100%" x="0" y="0" className="overflow-visible">
                            {pins.map((pin, index) => (
                                <div key={pin.location} className="fixed" style={{ left: pin.position.x, top: pin.position.y }}>
                                    <div className="group relative">
                                        <div
                                            className={cx(
                                                "pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-[calc(100%-4px)] scale-95 opacity-0 transition duration-150 ease-in",
                                                "group-hover:pointer-events-auto group-hover:-translate-y-full group-hover:scale-100 group-hover:opacity-100 group-hover:ease-out",
                                                "group-focus-within:pointer-events-auto group-focus-within:-translate-y-full group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:ease-out",
                                            )}
                                        >
                                            <div
                                                id={`vector-map-pin-${index}`}
                                                className="relative flex w-max max-w-45 flex-col items-center rounded-lg bg-primary px-4 py-3 text-center shadow-lg"
                                            >
                                                <img aria-hidden="true" src={pin.flag} alt={pin.location} className="size-5 max-w-none rounded-full" />
                                                <p className="mt-2 text-xs font-semibold text-primary">{pin.location}</p>
                                                <p className="mt-1 text-xs text-tertiary">{pin.address}</p>

                                                {/* Tooltip arrow */}
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute bottom-0 left-1/2 flex h-1.5 w-4 -translate-x-1/2 translate-y-full items-end justify-center overflow-hidden pb-[3px]"
                                                >
                                                    <span className="size-3 -rotate-45 rounded-bl-[1px] bg-primary"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            aria-label="View location"
                                            aria-describedby={`vector-map-pin-${index}`}
                                            className="flex size-10 cursor-pointer items-center justify-center overflow-visible outline-hidden"
                                        >
                                            <span className="absolute size-10 rounded-full bg-fg-brand-secondary/10 transition duration-150 ease-linear group-focus-within:scale-[1.15] group-hover:scale-[1.15]" />
                                            <span className="absolute size-6 rounded-full bg-fg-brand-secondary/20 transition duration-150 ease-linear group-focus-within:scale-[1.15] group-hover:scale-[1.15]" />
                                            <span className="absolute size-2 rounded-full bg-fg-brand-secondary" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </foreignObject>
                    </svg>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <figure className="flex flex-col gap-6 rounded-2xl bg-secondary px-6 py-10 text-center md:gap-8 md:px-8 md:py-12 lg:p-16">
                    <div className="flex flex-col gap-3">
                        <span className="text-sm font-semibold text-brand-secondary">From our team</span>
                        <blockquote className="text-display-xs font-medium text-primary sm:text-display-sm md:text-display-md">
                            Untitled truly values work-life balance. We work hard and deliver, but at the end of the day you can switch off.
                        </blockquote>
                    </div>
                    <figcaption className="flex justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <Avatar src="https://www.untitledui.com/images/avatars/fleur-cook?fm=webp&q=80" alt="Fleur Cook" size="xl" />
                            <div className="flex flex-col gap-1">
                                <p className="text-md font-semibold text-primary">Fleur Cook</p>
                                <cite className="text-sm text-tertiary not-italic">Web Developer, Sisyphus</cite>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

const CardHorizontal = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-col">
                        <h2 className="text-display-sm font-semibold text-primary">Join 2,000+ subscribers</h2>
                        <p className="mt-4 text-lg text-tertiary lg:text-xl">Stay in the loop with everything you need to know.</p>
                    </div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[360px_max-content] md:gap-0.5"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            wrapperClassName="flex-1 py-0.5 md:max-w-[345px]"
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

const FooterLarge07 = () => {
    return (
        <footer className="bg-secondary py-12 md:pt-16">
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

const AboutPage06 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderSpaceBetween />

            <MetricsSimpleWithActions01 />

            <SectionDivider />

            <CareersCard03 />

            <VectorMap03 />

            <TestimonialCard />

            <CardHorizontal />

            <FooterLarge07 />
        </div>
    );
};

export default AboutPage06;
