"use client";

import { useState } from "react";
import { Clock, CurrencyDollarCircle, MarkerPin02 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { BadgeWithDot, BadgeWithFlag } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { Select } from "@/components/base/select/select";
import { NativeSelect } from "@/components/base/select/select-native";
import { TextArea } from "@/components/base/textarea/textarea";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import countries, { phoneCodeOptions } from "@/utils/countries";
import { cx } from "@/utils/cx";

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

const ContactMap02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">About us</span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">We're a distributed team</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">We have offices and teams all around the world.</p>
                </div>

                <div className="mt-16 flex flex-col gap-16 md:mt-24">
                    {/* World map */}
                    <svg className="mx-auto hidden w-full max-w-5xl overflow-visible lg:block" height="488" viewBox="0 0 1025 483" fill="none">
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

                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Support",
                                subtitle: "Our friendly team is here to help.",
                                cta: "support@untitledui.com",
                                href: "mailto:support@untitledui.com",
                            },
                            {
                                title: "Sales",
                                subtitle: "Questions or queries? Get in touch!",
                                cta: "sales@untitledui.com",
                                href: "mailto:sales@untitledui.com",
                            },
                            {
                                title: "Phone",
                                subtitle: "Mon-Fri from 8am to 5pm.",
                                cta: "+1 (555) 000-0000",
                                href: "tel:+1 (555) 000-0000",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col items-center text-center">
                                <h3 className="text-lg font-semibold text-primary md:text-xl">{item.title}</h3>
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

const ContactSectionSimpleIcons04Brand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    <div className="w-full max-w-90">
                        <div className="text-sm font-semibold text-tertiary_on-brand md:text-md">Our locations</div>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary_on-brand md:text-display-md">Visit our stores</h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Find us at these locations.</p>
                    </div>

                    <ul className="grid w-full grid-cols-1 gap-x-16 gap-y-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 md:gap-y-8 lg:grid-cols-2 lg:px-11">
                        {[
                            {
                                title: "Melbourne",
                                subtitle: "100 Flinders Street\nMelbourne VIC 3000 AU",
                            },
                            {
                                title: "Sydney",
                                subtitle: "100 George Street\nSydney NSW 2000 AU",
                            },
                            {
                                title: "Byron Bay",
                                subtitle: "100 Jonson Street\nByron Bay NSW 2481 AU",
                            },
                            {
                                title: "London",
                                subtitle: "100 Oxford Street\nLondon W1D 1LL UK",
                            },
                            {
                                title: "San Francisco",
                                subtitle: "100 Market Street\nSan Francisco, CA 94105 USA",
                            },
                            {
                                title: "Sweden",
                                subtitle: "Drottninggatan 100\n111 60 Stockholm SE",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col">
                                <h3 className="text-lg font-semibold text-primary_on-brand">{item.title}</h3>
                                <p className="mt-1 text-md whitespace-pre text-tertiary_on-brand">{item.subtitle}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

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

const TeamSectionSimple01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Meet our team</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {teamMembers.map((item) => (
                            <li key={item.title} className="flex flex-col items-center gap-4 md:gap-5">
                                <Avatar src={item.avatarUrl} alt={item.name} size="2xl" className="size-20 md:size-24" />
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                                    <p className="text-md text-brand-secondary">{item.title}</p>
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
    { id: "worldwide", label: "Worldwide", icon: MarkerPin02 },
    { id: "europe", label: "Europe", icon: MarkerPin02 },
    { id: "north-america", label: "North America", icon: MarkerPin02 },
    { id: "asia", label: "Asia", icon: MarkerPin02 },
    { id: "oceania", label: "Oceania", icon: MarkerPin02 },
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

const ContactSectionSimpleForm01 = () => {
    const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Get in touch</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We'd love to hear from you. Please fill out this form.</p>
                </div>

                <div className="mt-12 md:mt-16">
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mx-auto flex w-full flex-col gap-8 md:max-w-120"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
                                <Input isRequired size="md" name="firstName" label="First name" placeholder="First name" wrapperClassName="flex-1" />
                                <Input isRequired size="md" name="lastName" label="Last name" placeholder="Last name" wrapperClassName="flex-1" />
                            </div>

                            <Input isRequired size="md" name="email" label="Email" type="email" placeholder="you@company.com" />
                            <InputGroup
                                size="md"
                                name="phone"
                                label="Phone number"
                                leadingAddon={
                                    <NativeSelect
                                        value={selectedCountryPhone}
                                        onChange={(value) => setSelectedCountryPhone(value.currentTarget.value)}
                                        options={phoneCodeOptions.map((item) => ({
                                            label: item.label as string,
                                            value: item.id as string,
                                        }))}
                                    />
                                }
                            >
                                <InputBase
                                    type="tel"
                                    placeholder={countries.find((country) => country.code === selectedCountryPhone)?.phoneMask?.replaceAll("#", "0")}
                                />
                            </InputGroup>
                            <TextArea isRequired name="message" label="Message" placeholder="Leave us a message..." rows={5} />
                            <Checkbox
                                name="privacy"
                                size="md"
                                hint={
                                    <>
                                        You agree to our friendly{" "}
                                        <a
                                            href="#"
                                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            privacy policy.
                                        </a>
                                    </>
                                }
                            />
                        </div>

                        <Button type="submit" size="xl">
                            Send message
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

const PressMentions = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-md font-medium text-tertiary">We've been mentioned in the press</p>
                    <div className="flex flex-col flex-wrap justify-center gap-x-8 gap-y-4 md:flex-row">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="Washington" src="https://www.untitledui.com/logos/logotype/color/washington.svg" className="h-8 md:h-10 dark:hidden" />
                        <img alt="Techcrunch" src="https://www.untitledui.com/logos/logotype/color/techcrunch.svg" className="h-8 md:h-10 dark:hidden" />
                        <img alt="Bloomberg" src="https://www.untitledui.com/logos/logotype/color/bloomberg.svg" className="h-8 md:h-10 dark:hidden" />
                        <img alt="Gizmodo" src="https://www.untitledui.com/logos/logotype/color/gizmodo.svg" className="h-8 md:h-10 dark:hidden" />
                        <img alt="Forbes" src="https://www.untitledui.com/logos/logotype/color/forbes.svg" className="h-8 md:h-10 dark:hidden" />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="Washington"
                            src="https://www.untitledui.com/logos/logotype/white/washington.svg"
                            className="h-8 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Techcrunch"
                            src="https://www.untitledui.com/logos/logotype/white/techcrunch.svg"
                            className="h-8 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Bloomberg"
                            src="https://www.untitledui.com/logos/logotype/white/bloomberg.svg"
                            className="h-8 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Gizmodo"
                            src="https://www.untitledui.com/logos/logotype/white/gizmodo.svg"
                            className="h-8 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img alt="Forbes" src="https://www.untitledui.com/logos/logotype/white/forbes.svg" className="h-8 opacity-85 not-dark:hidden md:h-10" />
                    </div>
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
                badge: <span className="ml-1 rounded-md bg-white/10 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-white/30 ring-inset">New</span>,
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

const FooterLarge05Brand = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between gap-8 border-brand_alt md:flex-row md:border-b md:pb-16">
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

                <nav className="mt-12 md:mt-16">
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
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

                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="dark-mode" />
                    <p className="text-md text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const AboutPage02 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <ContactMap02 />

            <ContactSectionSimpleIcons04Brand />

            <TeamSectionSimple01 />

            <SectionDivider />

            <CareersCard04 />

            <SectionDivider />

            <ContactSectionSimpleForm01 />

            <SectionDivider />

            <PressMentions />

            <FooterLarge05Brand />
        </div>
    );
};

export default AboutPage02;
