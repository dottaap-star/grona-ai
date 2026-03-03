"use client";

import { useState } from "react";
import { Clock, MarkerPin02, PlayCircle } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { TextArea } from "@/components/base/textarea/textarea";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import countries, { phoneCodeOptions } from "@/utils/countries";

const HeaderCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">About us</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                        Our mission is to increase the <br /> GDP of your startup
                    </h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Untitled is a technology company that builds infrastructure for your startup, so you don't have to. Businesses of every size—from new
                        startups to public companies—use our software to manage their businesses.
                    </p>
                </div>
            </div>
        </section>
    );
};

const SocialProofFullWidth = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-md font-medium text-tertiary">We're trusted by some of the best</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="Odeaolabs logo" src="https://www.untitledui.com/logos/logotype/color/odeaolabs.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Kintsugi logo" src="https://www.untitledui.com/logos/logotype/color/kintsugi.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Stackedlab logo" src="https://www.untitledui.com/logos/logotype/color/stackedlab.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Magnolia logo" src="https://www.untitledui.com/logos/logotype/color/magnolia.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Warpspeed logo" src="https://www.untitledui.com/logos/logotype/color/warpspeed.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Sisyphus logo" src="https://www.untitledui.com/logos/logotype/color/sisyphus.svg" className="h-9 md:h-12 dark:hidden" />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="Odeaolabs logo"
                            src="https://www.untitledui.com/logos/logotype/white/odeaolabs.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Kintsugi logo"
                            src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Stackedlab logo"
                            src="https://www.untitledui.com/logos/logotype/white/stackedlab.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Magnolia logo"
                            src="https://www.untitledui.com/logos/logotype/white/magnolia.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Warpspeed logo"
                            src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Sisyphus logo"
                            src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                    </div>
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
                    <ul className="flex w-full max-w-3xl flex-col gap-8 justify-self-center lg:max-w-none lg:py-6">
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

const CardVerticalBrand = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-brand-section px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary_on-brand xl:text-display-md">Join our careers newsletter</h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 lg:text-xl">Be the first to know when new jobs are posted!</p>
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
                            inputClassName="border-none"
                            wrapperClassName="py-0.5 md:max-w-[345px]"
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

const FooterLarge13 = () => {
    return (
        <footer className="dark-mode bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col md:items-center md:text-center">
                    <UntitledLogoMinimal className="drop-shadow" />
                    <h2 className="mt-8 text-display-xs font-semibold text-primary md:mt-12 md:text-display-sm">Let's get started on something great</h2>
                    <p className="mt-2 text-md text-tertiary md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
                        <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                            View demo
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
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

const AboutPage08 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderCentered />

            <SocialProofFullWidth />

            <TeamSectionSimple03 />

            <SectionDivider />

            <CareersSimple04 />

            <CardVerticalBrand />

            <SectionDivider />

            <ContactSectionSimpleForm01 />

            <FooterLarge13 />
        </div>
    );
};

export default AboutPage08;
