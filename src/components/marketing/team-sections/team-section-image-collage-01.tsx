"use client";

import { ArrowUpRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { cx } from "@/utils/cx";

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
    {
        name: "Amanda Carr",
        title: "UI Designer",
        summary: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        avatarUrl: "https://www.untitledui.com/images/portraits/amanda-carr",
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
        name: "Mason Phillips",
        title: "UI Designer",
        avatarUrl: "https://www.untitledui.com/images/portraits/mason-phillips",
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

export const TeamSectionImageCollage01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Join our team</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We're just getting started</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:justify-center">
                        <Button color="secondary" size="xl">
                            Read our principles
                        </Button>
                        <Button size="xl">We're hiring!</Button>
                    </div>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full auto-rows-[432px] grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[360px] lg:grid-cols-3">
                        {teamMembers.map((item, index) => (
                            <li
                                key={item.title}
                                className={cx(
                                    index === 0
                                        ? "lg:col-span-2 lg:row-span-2"
                                        : index === 3
                                          ? "lg:row-span-2"
                                          : index === 6
                                            ? "lg:col-span-2 lg:row-span-2"
                                            : "",
                                    "relative flex w-full flex-col justify-end",
                                )}
                            >
                                <img alt={item.name} src={item.avatarUrl} className="absolute top-0 left-0 z-0 size-full object-cover" />

                                <div className="z-10 bg-linear-to-t from-black/40 to-black/0 p-3 pt-16 md:p-4 md:pt-20 lg:pt-24">
                                    <div className="rounded-xl bg-primary/30 px-4 pt-5 pb-6 text-white ring-1 ring-alpha-white/30 backdrop-blur-[10px] ring-inset md:px-5">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold">{item.name}</h3>
                                            <ArrowUpRight className="size-6" />
                                        </div>
                                        <p className="mt-2 text-md font-semibold">{item.title}</p>
                                        <p className={cx("mt-0.5 text-sm md:text-md", [0, 3, 6].includes(index) ? "" : "lg:hidden")}>{item.summary}</p>
                                        <ul className={cx("mt-4 flex gap-5", [0, 3, 6].includes(index) ? "" : "lg:hidden")}>
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
