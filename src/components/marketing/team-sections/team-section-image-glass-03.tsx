"use client";

import { ArrowUpRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";

const teamMembers = [
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

export const TeamSectionImageGlass03 = () => {
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
                        {teamMembers.slice(0, 4).map((item) => (
                            <li key={item.title} className="relative flex aspect-[0.793] w-full flex-col justify-end md:aspect-[0.75]">
                                <img alt={item.name} src={item.avatarUrl} className="absolute top-0 left-0 z-0 size-full object-cover" />

                                <div className="z-10 bg-linear-to-t from-black/40 to-black/0 p-3 pt-16 md:p-4 md:pt-20 lg:pt-24">
                                    <div className="rounded-xl bg-primary/30 px-4 pt-5 pb-6 text-white ring-1 ring-alpha-white/30 backdrop-blur-[10px] ring-inset md:px-5">
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
