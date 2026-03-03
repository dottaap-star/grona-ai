"use client";

import { Clock, MarkerPin02 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

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

const HeaderLeft = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">The team</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Our leadership</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        To be the company our customers want us to be, it takes an eclectic group of passionate operators. Get to know the people leading the
                        way at Untitled.
                    </p>
                </div>
            </div>
        </section>
    );
};

const TeamSectionImageCard02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamMembers.map((item) => (
                        <li key={item.title} className="flex flex-col gap-5 md:gap-6">
                            <img src={item.avatarUrl} alt={item.name} className="h-78 w-full object-cover md:h-74" />
                            <div>
                                <h3 className="text-lg font-semibold text-primary md:text-xl">{item.name}</h3>
                                <p className="text-md text-brand-secondary md:mt-0.5 md:text-lg">{item.title}</p>
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

const CareersSimple04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-3xl flex-col lg:mx-0">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Start doing work that matters</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16">
                    <ul className="flex w-full max-w-3xl flex-col gap-8 justify-self-center lg:max-w-none">
                        {jobs.slice(0, -1).map((job) => (
                            <li key={job.title}>
                                <JobCardSimple {...job} />
                            </li>
                        ))}
                    </ul>
                    <div className="h-60 md:h-110 md:flex-1 lg:relative lg:h-full">
                        <img
                            src="https://www.untitledui.com/marketing/woman-and-laptop.webp"
                            alt="Woman and laptop"
                            className="size-full object-cover lg:absolute lg:inset-0"
                        />
                    </div>
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
                                                className="relative flex w-max max-w-45 flex-col items-center rounded-lg bg-primary px-4 py-3 text-center shadow-lg ring-1 ring-secondary_alt"
                                            >
                                                <img aria-hidden="true" src={pin.flag} alt={pin.location} className="size-5 max-w-none rounded-full" />
                                                <p className="mt-2 text-xs font-semibold text-primary">{pin.location}</p>
                                                <p className="mt-1 text-xs text-tertiary">{pin.address}</p>
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
                                <cite className="text-sm text-tertiary not-italic">Web Developer, Untitled</cite>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

const CardHorizontalBrand = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-16 gap-y-8 rounded-2xl bg-brand-section px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-col">
                        <h2 className="text-display-sm font-semibold text-primary_on-brand">Be the first to know about open roles</h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand lg:text-xl">Stay in the loop with everything you need to know.</p>
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
                            inputClassName="border-none"
                            wrapperClassName="flex-1 py-0.5 md:max-w-[345px]"
                            hint={
                                <span className="text-tertiary_on-brand">
                                    <span className="md:hidden">Read about our</span>
                                    <span className="max-md:hidden">We care about your data in our</span>{" "}
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

const FooterLarge08 = () => {
    return (
        <footer className="bg-secondary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <UntitledLogo className="h-8 w-min shrink-0" />
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

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex w-full flex-col gap-4 sm:max-w-90"
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

const TeamPage07 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderLeft />

            <SectionDivider />

            <TeamSectionImageCard02 />

            <SectionDivider />

            <CareersSimple04 />

            <SectionDivider />

            <VectorMap03 />

            <TestimonialCard />

            <CardHorizontalBrand />

            <FooterLarge08 />
        </div>
    );
};

export default TeamPage07;
