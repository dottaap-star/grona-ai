"use client";

import { Fragment } from "react";
import { ArrowLeft, ArrowRight, BookOpen01, Cube01, MessageChatCircle, SearchLg } from "@untitledui/icons";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

const NotFoundSimple06 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-8 px-4 md:gap-16 md:px-8">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center md:gap-12">
                    <div className="flex flex-col items-center gap-4 md:gap-6">
                        <div className="flex flex-col justify-center gap-3">
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative w-max">
                                    <span className="relative z-10">
                                        <BadgeWithDot type="modern" color="brand" size="lg">
                                            404 error
                                        </BadgeWithDot>
                                    </span>

                                    <BackgroundPattern
                                        pattern="grid"
                                        size="lg"
                                        className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
                                    />
                                    <BackgroundPattern
                                        pattern="grid"
                                        size="md"
                                        className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden"
                                    />
                                </div>

                                <h1 className="z-10 hidden text-display-md font-semibold text-primary md:block md:text-display-lg lg:text-display-xl">
                                    We can't find this page
                                </h1>
                                <h1 className="z-10 text-display-md font-semibold text-primary md:hidden md:text-display-lg lg:text-display-xl">
                                    We lost this page
                                </h1>
                            </div>
                        </div>
                        <p className="z-10 text-lg text-tertiary md:text-xl">The page you are looking for doesn't exist or has been moved.</p>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="z-10 flex w-full flex-col gap-4 md:hidden"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="search"
                            type="search"
                            inputClassName="w-full md:py-3!"
                            placeholder="Search our site"
                            icon={SearchLg}
                        />
                        <Button type="submit" size="xl" color="secondary">
                            Search
                        </Button>
                    </Form>

                    <div className="z-10 flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                        <Button iconLeading={ArrowLeft} color="secondary" size="xl">
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>
                </div>

                <div className="mx-auto flex w-full items-center justify-center">
                    <ul className="grid w-full grid-cols-1 gap-5 md:max-w-140">
                        {[
                            {
                                title: "Documentation",
                                subtitle: "Dive in to learn all about our product.",
                                icon: Cube01,
                                cta: "Start learning",
                                href: "#",
                            },
                            {
                                title: "Our blog",
                                subtitle: "Read the latest posts on our blog.",
                                icon: BookOpen01,
                                cta: "View latest posts",
                                href: "#",
                            },
                            {
                                title: "Chat to us",
                                subtitle: "Can't find what you're looking for?",
                                icon: MessageChatCircle,
                                cta: "Chat to our team",
                                href: "#",
                            },
                        ].map((item) => (
                            <Fragment key={item.title}>
                                <hr className="w-full border-t border-secondary" />
                                <li className="flex flex-col gap-4 text-left md:flex-row md:gap-5">
                                    <FeaturedIcon color="gray" size="lg" theme="modern" className="hidden md:flex" icon={item.icon} />

                                    <FeaturedIcon color="gray" size="md" theme="modern" className="md:hidden" icon={item.icon} />

                                    <div className="flex w-full flex-row items-start justify-between gap-2 md:gap-5">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-lg font-semibold text-primary md:text-xl">{item.title}</h3>
                                            <p className="text-md text-tertiary">{item.subtitle}</p>
                                        </div>
                                        <ArrowRight className="size-6 text-fg-quaternary" />
                                    </div>
                                </li>
                                <hr className="hidden w-full border-t border-secondary last:flex" />
                            </Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

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
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
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
        title: "Company",
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
    {
        title: "Use cases",
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
        title: "Social",
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
        title: "Legal",
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

const FooterLarge05 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between gap-8 border-secondary md:flex-row md:border-b md:pb-16">
                    <div className="flex flex-col gap-2">
                        <p id="newsletter-label" className="text-lg font-semibold text-primary md:text-xl">
                            Join our newsletter
                        </p>
                        <p id="newsletter-hint" className="text-md text-tertiary">
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
                        {navList.map((category) => (
                            <li key={category.title}>
                                <h4 className="text-sm font-semibold text-quaternary">{category.title}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button color="link-gray" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-8 w-min" />
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const NotFoundPage05 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <NotFoundSimple06 />

            <FooterLarge05 />
        </div>
    );
};

export default NotFoundPage05;
