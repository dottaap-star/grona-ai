"use client";

import { MarkerPin02 } from "@untitledui/icons";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components/verified-tick";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const BannerSlimBrandFullWidth = () => {
    return (
        <div className="relative border-b border-brand_alt bg-brand-section_subtle md:border-brand">
            <div className="p-4 md:py-3.5">
                <div className="flex flex-col gap-0.5 md:flex-row md:justify-center md:gap-1.5 md:text-center">
                    <p className="pr-8 text-md font-semibold text-primary_on-brand md:truncate md:pr-0">We're hiring!</p>
                    <p className="text-md text-tertiary_on-brand md:truncate">
                        Check out our{" "}
                        <a
                            href="#"
                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            open roles
                        </a>
                        .
                    </p>
                </div>
            </div>
            <div className="absolute top-2 right-2 md:top-1.5 md:right-2">
                <CloseButton size="md" theme="dark" label="Dismiss" />
            </div>
        </div>
    );
};

const ContactMap01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">About the company</span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                        Made with love, right here in <br />
                        Melbourne
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Come visit our friendly team at one of our offices.</p>
                </div>

                <div className="mt-16 flex flex-col gap-12 md:mt-24 md:gap-16">
                    <iframe
                        title="Our address"
                        src="https://snazzymaps.com/embed/451894"
                        className="h-80 w-full border-none md:h-100"
                        data-chromatic="ignore"
                    />
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Retail store",
                                subtitle: "Mon-Sat 9am to 5pm.",
                                icon: MarkerPin02,
                                cta: "150 Brunswick Street\nFitzroy VIC 3065 AU",
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                            {
                                title: "Showroom",
                                subtitle: "Mon-Fri 9am to 5pm.",
                                cta: "50 Flinders Street\nMelbourne VIC 3000 AU",
                                icon: MarkerPin02,
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                            {
                                title: "Head office",
                                subtitle: "Mon-Fri 9am to 5pm.",
                                icon: MarkerPin02,
                                cta: "100 Smith Street\nCollingwood VIC 3066 AU",
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col items-center text-center">
                                <item.icon className="size-6 text-icon-fg-brand" />
                                <h3 className="mt-3 text-lg font-semibold text-primary md:mt-4 md:text-xl">{item.title}</h3>
                                <p className="mt-1 text-md text-tertiary md:mt-2">{item.subtitle}</p>
                                <Button color="link-color" size="lg" href={item.href} className="mt-3 whitespace-pre md:mt-4">
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

const TeamSectionImageCard01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Meet our team</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 self-stretch sm:flex-row-reverse sm:justify-center">
                        <Button size="xl">Open positions</Button>
                        <Button color="secondary" size="xl">
                            About us
                        </Button>
                    </div>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
                        {teamMembers.map((item) => (
                            <li key={item.title} className="flex flex-col gap-4">
                                <img alt={item.name} src={item.avatarUrl} className="aspect-square w-full object-cover" />
                                <div>
                                    <h3 className="text-primaryl text-lg font-semibold">{item.name}</h3>
                                    <p className="text-md text-brand-secondary">{item.title}</p>
                                    <p className="mt-2 text-md text-tertiary">{item.summary}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const reviews = [
    [
        {
            id: "review-01",
            quote: "Untitled has been a lifesaver for our team—everything we need is right at our fingertips, and it helps us jump right into new design projects.",
            author: {
                name: "Nikolas Gibbons",
                title: "Product Designer, Powersurge",
                imageUrl: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80",
            },
            company: {
                name: "Powersurge",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/powersurge.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/powersurge.svg",
            },
        },
        {
            id: "review-02",
            quote: "We love Untitled! It's made the design process super streamlined.",
            author: {
                name: "Marco Kelly",
                title: "UI Designer, Railspeed",
                imageUrl: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80",
            },
            company: {
                name: "Railspeed",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/railspeed.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/railspeed.svg",
            },
        },
        {
            id: "review-03",
            quote: "Starting projects used to feel daunting, but Untitled simplifies everything. We've used it for both small and large projects, and it never disappoints.",
            author: {
                name: "Zaid Schwartz",
                title: "Founder, Wildcrafted",
                imageUrl: "https://www.untitledui.com/images/avatars/zaid-schwartz?fm=webp&q=80",
            },
            company: {
                name: "Wildcrafted",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/wildcrafted.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/wildcrafted.svg",
            },
        },
    ],
    [
        {
            id: "review-01",
            quote: "Untitled is our secret weapon for staying ahead of deadlines. It gives us everything we need to get started quickly.",
            author: {
                name: "Ammar Foley",
                title: "UX Designer, Goodwell",
                imageUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80",
            },
            company: {
                name: "Goodwell",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/goodwell.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/goodwell.svg",
            },
        },
        {
            id: "review-02",
            quote: "Untitled is hands down the best design library We've used. It has literally everything we need to get started for any possible project.",
            author: {
                name: "Florence Shaw",
                title: "Web Designer, Quixotic",
                imageUrl: "https://www.untitledui.com/images/avatars/florence-shaw?fm=webp&q=80",
            },
            company: {
                name: "Quixotic",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/quixotic.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/quixotic.svg",
            },
        },
        {
            id: "review-03",
            quote: "With Untitled, we can focus more on design and less on the tedious setup work. Best money ever spent.",
            author: {
                name: "Owen Garcia",
                title: "CTO, Solaris Energy",
                imageUrl: "https://www.untitledui.com/images/avatars/owen-garcia?fm=webp&q=80",
            },
            company: {
                name: "Solaris Energy",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/solaris-energy.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/solaris-energy.svg",
            },
        },
    ],
    [
        {
            id: "review-01",
            quote: "Our workflow has improved dramatically since we started using Untitled and it's become an integral part of our workflow. It's easy to use, and the resources are top-notch. I recommend it to everyone!",
            author: {
                name: "Mathilde Lewis",
                title: "Project Lead, Stack3d Lab",
                imageUrl: "https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80",
            },
            company: {
                name: "Stack3d Lab",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/stackedlab.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/stackedlab.svg",
            },
        },
        {
            id: "review-02",
            quote: "Untitled is an absolute game-changer for our projects. We can't imagine going back to how we used to work without it.",
            author: {
                name: "Stefan Sears",
                title: "UI/UX Designer, Magnolia",
                imageUrl: "https://www.untitledui.com/images/avatars/stefan-sears?fm=webp&q=80",
            },
            company: {
                name: "Magnolia",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/magnolia.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/magnolia.svg",
            },
        },
        {
            id: "review-03",
            quote: "Untitled has been a real time-saver for us. It's organized, efficient, and keeps us moving forward with every project.",
            author: {
                name: "Harriet Rojas",
                title: "Product Designer, Ikigai Labs",
                imageUrl: "https://www.untitledui.com/images/avatars/harriet-rojas?fm=webp&q=80",
            },
            company: {
                name: "Ikigai Labs",
                imageUrl: "https://www.untitledui.com/logos/logotype/color/ikigailabs.svg",
                imageUrlDark: "https://www.untitledui.com/logos/logotype/white/ikigailabs.svg",
            },
        },
    ],
];

const SocialCards03 = () => {
    let reviewsCount = 0;
    const maxVisibleReviewsOnMobile = 4;

    return (
        <div className="flex flex-col items-center gap-16 bg-primary py-16 lg:py-24">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h1 className="text-display-sm font-semibold text-primary lg:text-display-md">Our reviews</h1>
                <p className="text-lg text-tertiary lg:text-xl">Hear first-hand from our incredible community of customers.</p>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 mask-b-from-[calc(100%-340px)] px-4 lg:grid-cols-3 lg:gap-8 lg:px-8">
                {reviews.map((reviewGroup, reviewGroupIndex) => {
                    return (
                        <div
                            key={reviewGroupIndex}
                            className={cx(
                                "flex flex-col gap-5 lg:gap-8",
                                reviewGroupIndex === 0 && "lg:py-8",
                                reviewGroupIndex === 2 && "lg:pt-10",
                                reviewsCount >= maxVisibleReviewsOnMobile && "max-lg:hidden",
                            )}
                        >
                            {reviewGroup.map((review) => {
                                reviewsCount += 1;

                                return (
                                    <div
                                        key={review.id}
                                        className={cx(
                                            "flex flex-col gap-8 rounded-xl bg-primary_alt p-6 ring-1 ring-secondary ring-inset lg:justify-between lg:gap-12 lg:p-8",
                                            reviewsCount >= maxVisibleReviewsOnMobile && "max-lg:hidden",
                                        )}
                                    >
                                        <div className="flex flex-col items-start gap-3">
                                            <img className="h-8 dark:hidden" src={review.company.imageUrl} alt={review.company.name} />
                                            <img className="h-8 opacity-85 not-dark:hidden" src={review.company.imageUrlDark} alt={review.company.name} />
                                            <blockquote className="text-md text-tertiary">{review.quote}</blockquote>
                                        </div>
                                        <AvatarLabelGroup
                                            size="lg"
                                            src={review.author.imageUrl}
                                            alt={review.author.name}
                                            title={
                                                <span className="relative flex items-center gap-1">
                                                    {review.author.name}
                                                    <VerifiedTick size="lg" />
                                                </span>
                                            }
                                            subtitle={review.author.title}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const SimpleCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">We're hiring!</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Our team is growing fast and we're always looking for smart people.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
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

const navList = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge size="sm" type="modern" className="ml-1">
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
];

const FooterLarge04 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                        <UntitledLogo className="h-8 w-min shrink-0" />
                        <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <nav className="flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 xl:justify-end">
                        <ul className="grid w-full grid-cols-2 gap-8 md:max-w-xs">
                            {navList.map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-primary">{category.label}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label}>
                                                <Button color="link-color" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex w-full flex-col gap-4 md:max-w-90"
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
                    </nav>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { label: "Terms", href: "#" },
                            { label: "Privacy", href: "#" },
                            { label: "Cookies", href: "#" },
                        ].map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="rounded-xs text-md text-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const AboutPage03 = () => {
    return (
        <div className="bg-primary">
            <BannerSlimBrandFullWidth />

            <Header />

            <ContactMap01 />

            <SectionDivider />

            <TeamSectionImageCard01 />

            <SectionDivider />

            <SocialCards03 />

            <SectionDivider />

            <SimpleCentered />

            <FooterLarge04 />
        </div>
    );
};

export default AboutPage03;
