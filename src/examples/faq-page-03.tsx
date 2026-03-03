"use client";

import type { FC, ReactNode } from "react";
import { CreditCardRefresh, File05, Heart, Mail01, MessageChatCircle, SlashCircle01, SwitchHorizontal01, Zap } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";

const faqs = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
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
        answer: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
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

const footerNavListBrand = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge type="modern" size="sm" className="ml-1">
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

const HeaderSpaceBetweenButtons = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-3 text-sm font-semibold text-brand-secondary md:text-md">FAQs</div>
                <div className="grid grid-cols-[minmax(auto,768px)] gap-x-16 lg:grid-cols-[1fr_480px]">
                    <h1 className="text-display-md font-semibold text-primary md:text-display-lg">
                        How can we help<span className="max-md:hidden"> you</span>?
                    </h1>

                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl lg:mt-3 lg:h-0">Have questions? We're here to help. </p>

                    <div className="mt-8 flex flex-col-reverse gap-3 sm:mt-8 sm:flex-row">
                        <Button color="secondary" size="xl">
                            Chat to sales
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQSimple03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:w-192">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Frequently asked questions</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Everything you need to know about the product and billing. Can't find the answer you're looking for? Please{" "}
                        <a
                            href="#"
                            className="rounded-xs underline underline-offset-4 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            chat to our friendly team
                        </a>
                        .
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-24 lg:grid-cols-2 lg:items-center">
                    <dl className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-1">
                        {faqs.slice(0, 4).map((item) => (
                            <div key={item.question}>
                                <div className="flex gap-4">
                                    <FeaturedIcon color="gray" theme="modern" className="md:hidden" size="md" icon={item.icon} />
                                    <FeaturedIcon color="gray" theme="modern" className="hidden md:flex" size="lg" icon={item.icon} />

                                    <div className="flex flex-col pt-1.5 md:pt-2.5">
                                        <dt className="text-lg font-semibold text-primary md:text-xl">{item.question}</dt>
                                        <dd className="mt-1 text-md text-tertiary md:mt-2">{item.answer}</dd>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </dl>

                    <div className="h-60 md:-ml-8 md:h-140">
                        <img
                            src="https://www.untitledui.com/marketing/smiling-girl-5.webp"
                            alt="Happy woman smiling confidently while using a laptop, representing customer satisfaction"
                            className="size-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

interface FeatureTextIcon extends TextCentered {
    icon: FC<{ className?: string }>;
}

const FeatureTextFeaturedIconLeft = ({ icon, title, subtitle, footer }: FeatureTextIcon) => (
    <div className="flex max-w-140 gap-4">
        <FeaturedIcon icon={icon} size="lg" color="gray" theme="modern" className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color="gray" theme="modern" className="inline-flex md:hidden" />

        <div className="flex flex-col items-start gap-4">
            <div>
                <h3 className="mt-1.5 text-lg font-semibold text-primary md:mt-2.5">{title}</h3>
                <p className="mt-1 text-md text-tertiary">{subtitle}</p>
            </div>

            {footer}
        </div>
    </div>
);

const FeaturesIconsAndImage04 = () => {
    return (
        <section className="bg-primary">
            <div className="bg-secondary pt-16 pb-[112px] md:pt-24 md:pb-40">
                <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2 lg:gap-24">
                    <div className="flex w-full flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">New feature</span>

                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Introducing team inboxes</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000
                            startups.
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-1">
                        {[
                            {
                                title: "Share team inboxes",
                                subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                                icon: MessageChatCircle,
                                cta: "Learn more",
                                href: "#",
                            },
                            {
                                title: "Deliver instant answers",
                                subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                                icon: Zap,
                                cta: "Learn more",
                                href: "#",
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconLeft icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mx-auto -mt-16 flex w-full max-w-container justify-center px-4 pb-16 md:-mt-24 md:px-8 md:pb-24">
                <img
                    src="https://www.untitledui.com/marketing/spirals.webp"
                    alt="Abstract spiral pattern artwork with vibrant colors and modern design"
                    className="h-60 w-full object-cover md:h-100 lg:h-129"
                />
            </div>
        </section>
    );
};

const SimpleCentered = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Start your free trial</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
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

const FooterLarge03 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
                    <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {footerNavListBrand.map((category) => (
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
                    <div className="w-full md:max-w-[135px]">
                        <h4 className="text-sm font-semibold text-primary">Get the app</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 md:flex-col">
                            <AppStoreButton href="#" className="w-[135px]" />
                            <GooglePlayButton href="#" className="w-[135px]" />
                        </div>
                    </div>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-8 w-min" />
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const FAQPage03 = () => {
    return (
        <div className="bg-primary">
            <Header className="bg-secondary" />

            <HeaderSpaceBetweenButtons />

            <FAQSimple03 />

            <FeaturesIconsAndImage04 />

            <SimpleCentered />

            <FooterLarge03 />
        </div>
    );
};

export default FAQPage03;
