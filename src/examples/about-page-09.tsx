"use client";

import type { ComponentPropsWithRef, FC } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, MarkerPin02 } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

const teamMembers2 = [
    {
        name: "Alisa Hester",
        title: "Founder & CEO",
        summary: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        avatarUrl: "https://www.untitledui.com/images/portraits/alisa-hester",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Rich Wilson",
        title: "Engineering Manager",
        summary: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
        avatarUrl: "https://www.untitledui.com/images/portraits/rich-wilson",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Annie Stanley",
        title: "Product Manager",
        summary: "Former PM for Airtable, Medium, Ghost, and Lumi.",
        avatarUrl: "https://www.untitledui.com/images/portraits/annie-stanley",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Johnny Bell",
        title: "Frontend Developer",
        summary: "Former frontend dev for Linear, Coinbase, and Postscript.",
        avatarUrl: "https://www.untitledui.com/images/portraits/johnny-bell",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Mia Ward",
        title: "Backend Developer",
        summary: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
        avatarUrl: "https://www.untitledui.com/images/portraits/mia-ward",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
    {
        name: "Archie Young",
        title: "Product Designer",
        summary: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        avatarUrl: "https://www.untitledui.com/images/portraits/archie-young",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: Dribbble, href: "https://dribbble.com/" },
        ],
    },
];

const HeaderSpaceBetween = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-3 text-sm font-semibold text-brand-secondary md:text-md">Nice to meet you</div>
                <div className="flex flex-col gap-x-16 lg:flex-row">
                    <h1 className="flex-1 text-display-md font-semibold text-primary md:text-display-lg">Our mission is to increase the GDP of your startup</h1>

                    <p className="w-ful mt-4 text-lg text-tertiary md:mt-6 md:text-xl lg:mt-3 lg:max-w-120">
                        Untitled is a technology company that builds infrastructure for your startup, so you don't have to. Businesses of every size—from new
                        startups to public companies—use our software to manage their businesses.
                    </p>
                </div>
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

const ContentSectionSimple03 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our story</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We're just getting started</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We've already helped over 4,000 companies achieve remarkable results. </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-16">
                    <div className="prose md:prose-lg">
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
                            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
                            aliquet sodales id est ac volutpat.
                        </p>
                        <p>
                            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
                            morbi eget ipsum. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus.
                            Sed vel, congue felis elit erat nam nibh orci.
                        </p>
                    </div>
                    <div className="prose md:prose-lg">
                        <p>
                            Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
                            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit
                            dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.{" "}
                        </p>
                        <ul>
                            <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                            <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                            <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                        </ul>
                        <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
                            dictum molestie sem tempor.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface RoundButtonProps extends ComponentPropsWithRef<"button"> {
    icon?: FC<{ className?: string }>;
}

const RoundButton = ({ icon: Icon, ...props }: RoundButtonProps) => {
    return (
        <Button
            {...props}
            color="link-gray"
            className={cx(
                "group flex size-12 items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14",
                props.className,
            )}
        >
            {props.children ??
                (isReactComponent(Icon) ? (
                    <Icon className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover md:size-6" />
                ) : null)}
        </Button>
    );
};

const TestimonialCaseStudyCards = () => {
    const studies = [
        {
            company: "Layers",
            quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects faster.",
            background: "bg-utility-brand-600",
            logo: "https://www.untitledui.com/logos/logotype/white/layers.svg",
            href: "#",
        },
        {
            company: "Sisyphus",
            quote: "We've been using Untitled to kick start every new project and can't work without it.",
            background: "bg-utility-success-600",
            logo: "https://www.untitledui.com/logos/logotype/white/sisyphus.svg",
            href: "#",
        },
        {
            company: "Capsule",
            quote: "Love the simplicity of the service and the prompt customer support.",
            background: "bg-utility-blue-600",
            logo: "https://www.untitledui.com/logos/logotype/white/capsule.svg",
            href: "#",
        },
        {
            company: "Catalog",
            quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects faster.",
            background: "bg-utility-indigo-600",
            logo: "https://www.untitledui.com/logos/logotype/white/catalog.svg",
            href: "#",
        },
    ];

    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
                    <div className="flex max-w-3xl flex-col gap-4 md:gap-5">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">We're proud of our success stories</h2>
                        <p className="text-lg text-tertiary md:text-xl">Case studies from some of our amazing customers who are building faster.</p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start">
                        <Button color="secondary" size="xl">
                            Our customers
                        </Button>
                        <Button size="xl">Create account</Button>
                    </div>
                </div>

                <Carousel.Root className="mt-12 md:mt-16" opts={{ align: "start" }}>
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:gap-8 md:pr-8">
                        {studies.map((study) => (
                            <Carousel.Item
                                key={study.company}
                                className={cx(
                                    "relative flex h-118 max-w-76 shrink-0 cursor-grab items-end p-6 md:h-126 md:w-full md:max-w-sm md:p-5",
                                    study.background,
                                )}
                            >
                                <img src={study.logo} alt={study.company} className="absolute top-6 left-6 h-10 object-contain md:top-8 md:left-8 md:h-12" />

                                <div className="flex cursor-auto flex-col bg-alpha-white/30 px-4 py-5 ring-1 ring-alpha-white/30 backdrop-blur-md ring-inset md:p-5 md:px-6 md:py-8">
                                    <p className="text-display-xs font-semibold text-white md:text-display-sm">{study.company}</p>
                                    <q className="mt-3 text-lg font-medium text-balance text-white md:mt-4">{study.quote}</q>

                                    <Button color="link-gray" size="lg" href={study.href} className="mt-8 text-white" iconTrailing={ArrowUpRight}>
                                        Read case study
                                    </Button>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                    <div className="mt-8 flex gap-4 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
            </div>
        </section>
    );
};

const TeamSectionImageGlass04 = () => {
    return (
        <section className="overflow-hidden bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">We're a fast-growing team</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            We're always on the lookout for passionate, dynamic, and talented individuals.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button size="xl">We're hiring!</Button>
                        <Button color="secondary" size="xl">
                            Read our principles
                        </Button>
                    </div>
                </div>

                <Carousel.Root className="mt-12 md:mt-16" opts={{ align: "start" }}>
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:gap-8 md:pr-8">
                        {teamMembers2.map((member) => (
                            <Carousel.Item
                                key={member.title}
                                className="relative flex h-108 w-full max-w-70 cursor-grab flex-col justify-end md:h-120 md:max-w-96"
                            >
                                <img src={member.avatarUrl} alt={member.name} className="absolute inset-0 z-0 size-full cursor-grab object-cover" />

                                <div className="z-10 bg-linear-to-t from-black/40 to-black/0 pt-16 md:pt-20 lg:pt-24">
                                    <div className="relative bg-primary/30 px-5 pt-5 pb-6 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-display-xs font-semibold md:text-display-sm">{member.name}</h3>
                                            <ArrowUpRight className="size-6" />
                                        </div>
                                        <p className="mt-2 text-md font-semibold md:mt-3 md:text-lg">{member.title}</p>
                                        <p className="mt-1 text-sm md:text-md">{member.summary}</p>
                                        <ul className="mt-5 flex gap-5 md:mt-6">
                                            {member.socials.map((social) => (
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
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                    <div className="mt-8 flex gap-4 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} className="bg-transparent" />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} className="bg-transparent" />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
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

const AboutPage09 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderSpaceBetween />

            <MetricsCardGrayLight />

            <ContentSectionSimple03 />

            <SectionDivider />

            <TestimonialCaseStudyCards />

            <TeamSectionImageGlass04 />

            <CareersSimple03 />

            <FooterLarge08 />
        </div>
    );
};

export default AboutPage09;
