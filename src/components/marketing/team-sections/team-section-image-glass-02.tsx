"use client";

import { ArrowUpRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";

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

export const TeamSectionImageGlass02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Our team</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Some of the people you'll be working with</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We're a 100% remote team spread all across the world. Join us! </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button size="xl">Open positions</Button>
                        <Button color="secondary" size="xl">
                            About us
                        </Button>
                    </div>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
                        {teamMembers2.map((item) => (
                            <li key={item.title} className="relative flex h-108 w-full flex-col justify-end md:h-128">
                                <img alt={item.name} src={item.avatarUrl} className="absolute top-0 left-0 z-0 size-full object-cover" />

                                <div className="z-10 bg-linear-to-t from-black/40 to-black/0 pt-16 md:pt-20 lg:pt-24">
                                    <div className="relative bg-primary/30 px-5 pt-5 pb-6 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold">{item.name}</h3>
                                            <ArrowUpRight className="size-6" />
                                        </div>
                                        <p className="mt-2 text-md font-semibold">{item.title}</p>
                                        <p className="mt-0.5 text-sm md:text-md">{item.summary}</p>
                                        <ul className="mt-4 flex gap-5">
                                            {item.socials.map((social) => (
                                                <li key={social.href}>
                                                    <a
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex rounded-xs text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                                    >
                                                        <social.icon className="size-5" />
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
