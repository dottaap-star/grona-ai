"use client";

import { useState } from "react";
import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { Collection, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";

const faqsExtended = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        icon: Heart,
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
        icon: SwitchHorizontal01,
    },
    {
        question: "What is your cancellation policy?",
        answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
        icon: SlashCircle01,
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        icon: File05,
    },
    {
        question: "How does billing work?",
        answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
        icon: CreditCardRefresh,
    },
    {
        question: "How do I change my account email?",
        answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
        icon: Mail01,
    },
];

const HeaderCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Support</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">FAQs</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Everything you need to know about the product and billing. Can't find the answer you're looking for? Please{" "}
                        <a
                            href="#"
                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            chat to our friendly team
                        </a>{" "}
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

const FAQSimple04 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div>
                    <dl className="grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {faqsExtended.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col">
                                    <dt className="text-lg font-medium text-primary">{item.question}</dt>
                                    <dd className="mt-2 text-md text-tertiary">{item.answer}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-secondary px-5 py-8 md:mt-16 md:flex-row md:gap-8 md:p-8">
                    <div className="w-full max-w-3xl">
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="xl">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

const ContentSectionSplitImage03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 items-center gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2">
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our studio</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">People first. Design later.</h2>
                    <div className="prose mt-8 md:prose-lg md:mt-12">
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam.
                        </p>
                        <p>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada.
                        </p>

                        <p>
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
                            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
                            congue convallis aliquet.
                        </p>
                        <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
                            dictum molestie sem tempor. Diam elit, orci, tincidunt aenean.{" "}
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
                        <Button color="secondary" size="xl">
                            Get in touch
                        </Button>
                        <Button size="xl">Our process</Button>
                    </div>
                </div>

                <div className="h-60 lg:h-163.5">
                    <img
                        src="https://www.untitledui.com/marketing/content-section-03.webp"
                        className="size-full object-cover"
                        alt="Abstract 3D holographic rectangles"
                    />
                </div>
            </div>
        </section>
    );
};

const reviews = [
    {
        id: "review-01",
        company: "3Portals",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/3portals.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/3portals.svg",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: { name: "Kelly Williams", role: "Head of Design", avatarUrl: "https://www.untitledui.com/images/avatars/kelly-williams?fm=webp&q=80" },
    },
    {
        id: "review-02",
        company: "Warpspeed",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: { name: "Candice Wu", role: "Product Manager", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
    },
    {
        id: "review-03",
        company: "GlobalBank",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/globalbank.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/globalbank.svg",
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
        author: { name: "Ammar Foley", role: "UX Designer", avatarUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80" },
    },
    {
        id: "review-04",
        company: "Ikigai Labs",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/ikigailabs.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/ikigailabs.svg",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: { name: "Olivia Rhye", role: "Head of Product", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
    },
    {
        id: "review-05",
        company: "Eightball",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/eightball.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/eightball.svg",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: { name: "Alisa Hester", role: "Head of Product", avatarUrl: "https://www.untitledui.com/images/avatars/alisa-hester?fm=webp&q=80" },
    },
];

const TestimonialSimpleCentered03 = () => {
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(2);

    return (
        <Tabs
            selectedKey={reviews[selectedReviewIndex].id}
            onSelectionChange={(value) => setSelectedReviewIndex(reviews.findIndex((review) => review.id === value))}
        >
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-center gap-10 md:gap-12">
                        <Collection items={reviews}>
                            {(review) => (
                                <TabPanel className="flex flex-col gap-8 text-center">
                                    <blockquote className="text-display-sm font-medium text-balance text-primary md:text-display-md lg:text-display-lg">
                                        {review.quote}
                                    </blockquote>
                                    <figcaption className="flex justify-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <Avatar src={review.author.avatarUrl} alt={review.author.name} size="2xl" />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-lg font-semibold text-primary">{review.author.name}</p>
                                                <cite className="text-md text-tertiary not-italic">
                                                    {review.author.role}, {review.company}
                                                </cite>
                                            </div>
                                        </div>
                                    </figcaption>
                                </TabPanel>
                            )}
                        </Collection>

                        <TabList className="hidden grid-cols-5 justify-items-center gap-8 md:grid" items={reviews}>
                            {(review) => (
                                <Tab>
                                    <img src={review.companyLogoUrl} className="h-12 dark:hidden" alt={review.company} />
                                    <img src={review.companyLogoUrlDark} className="h-12 opacity-85 not-dark:hidden" alt={review.company} />
                                </Tab>
                            )}
                        </TabList>

                        <div className="flex w-full items-center justify-between md:hidden">
                            <Button
                                aria-label="See previous review"
                                color="link-color"
                                className="text-quaternary md:hidden"
                                onClick={() => setSelectedReviewIndex(selectedReviewIndex == 0 ? reviews.length - 1 : selectedReviewIndex - 1)}
                            >
                                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>

                            <img src={reviews[selectedReviewIndex].companyLogoUrl} className="h-10 object-contain" alt={reviews[selectedReviewIndex].company} />

                            <Button
                                aria-label="See next review"
                                className="md:hidden"
                                color="link-color"
                                onClick={() => setSelectedReviewIndex(selectedReviewIndex == reviews.length - 1 ? 0 : selectedReviewIndex + 1)}
                            >
                                <svg aria-hidden="true" className="h-5 w-10 rotate-180 text-quaternary" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Tabs>
    );
};

const FooterLarge04 = () => {
    const navList = [
        {
            title: "Product",
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
            title: "Resources",
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

    return (
        <footer className="dark-mode bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                        <UntitledLogo className="h-8 w-min shrink-0" />
                        <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <nav className="flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 xl:justify-end">
                        <ul className="grid w-full grid-cols-2 gap-8 md:max-w-xs">
                            {navList.map((category) => (
                                <li key={category.title}>
                                    <h4 className="text-sm font-semibold text-primary">{category.title}</h4>
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

const FAQPage04 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderCentered />

            <FAQSimple04 />

            <SectionDivider />

            <ContentSectionSplitImage03 />

            <TestimonialSimpleCentered03 />

            <FooterLarge04 />
        </div>
    );
};

export default FAQPage04;
