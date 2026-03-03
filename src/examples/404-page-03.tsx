"use client";

import type { ComponentProps } from "react";
import { ArrowRight, ArrowUpRight, BookOpen01, CodeSquare02, MessageChatCircle, SearchLg } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import type { BadgeColor } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons-outline";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const NotFoundSplitImage05 = () => {
    return (
        <section className="grid flex-1 bg-primary py-16 md:pt-16 md:pb-24 lg:min-h-240 lg:px-20">
            <div className="flex h-full flex-col items-center justify-center gap-16 px-4 md:px-8 lg:flex-row lg:gap-8">
                <div className="flex w-full max-w-140 flex-col items-start gap-8 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <p className="text-md font-semibold text-brand-secondary">404 error</p>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">We lost this page</h1>
                        </div>
                        <p className="max-w-lg text-lg text-tertiary md:text-xl">Sorry, the page you are looking for doesn't exist.</p>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex h-max w-full max-w-120 flex-col gap-4 self-stretch md:flex-row md:self-auto"
                    >
                        <Input isRequired name="search" type="search" placeholder="Search our site" size="md" icon={SearchLg} inputClassName="md:py-3!" />
                        <Button type="submit" size="xl">
                            Search
                        </Button>
                    </Form>
                    <ul className="grid w-full grid-cols-1 gap-6">
                        {[
                            {
                                title: "Documentation",
                                subtitle: "Dive in to learn all about our product.",
                                icon: CodeSquare02,
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
                                title: "Chat to support",
                                subtitle: "Our friendly team is here to help.",
                                icon: MessageChatCircle,
                                cta: "Chat to our team",
                                href: "#",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex flex-col items-start gap-1 text-left">
                                <Button size="xl" color="link-color" iconTrailing={ArrowRight}>
                                    {item.title}
                                </Button>
                                <p className="text-md text-tertiary">{item.subtitle}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="size-full flex-1">
                    <div className="relative size-full overflow-hidden">
                        <img
                            className="h-70 w-full object-cover object-center md:h-110 lg:absolute lg:inset-0 lg:h-full"
                            src="https://www.untitledui.com/marketing/spirals.webp"
                            alt="Image by Daniel at Unsplash.com"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

type Article = {
    id: string;
    href: string;
    thumbnailUrl: string;
    title: string;
    summary: string;
    category: {
        href: string;
        name: string;
    };
    author: {
        href: string;
        name: string;
        avatarUrl: string;
    };
    publishedAt: string;
    readingTime: string;
    tags: Array<{ name: string; color: BadgeColor<"color">; href: string }>;
    isFeatured?: boolean;
};

const Simple02Vertical = ({
    article,
    badgeTheme = "light",
    imageClassName,
}: {
    article: Article;
    badgeTheme?: ComponentProps<typeof BadgeGroup>["theme"];
    imageClassName?: string;
}) => (
    <div className="flex flex-col gap-4">
        <a href={article.href} className="overflow-hidden" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover", imageClassName)} />
        </a>

        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-3">
                <BadgeGroup addonText={article.category.name} size="md" theme={badgeTheme} color="brand" className="pr-3" iconTrailing={null}>
                    {article.readingTime}
                </BadgeGroup>
                <div className="flex flex-col gap-1">
                    <a
                        href={article.category.href}
                        className="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.title}
                        <ArrowUpRight className="mt-0.5 size-6 shrink-0 text-fg-quaternary" aria-hidden="true" />
                    </a>
                    <p className="line-clamp-2 text-md text-tertiary md:line-clamp-none">{article.summary}</p>
                </div>
            </div>

            <div className="flex gap-2">
                <a href={article.author.href} tabIndex={-1} className="flex">
                    <Avatar focusable alt={article.author.name} src={article.author.avatarUrl} size="md" />
                </a>

                <div>
                    <a
                        href={article.author.href}
                        className="block rounded-xs text-sm font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.author.name}
                    </a>
                    <p className="text-sm text-tertiary">{article.publishedAt}</p>
                </div>
            </div>
        </div>
    </div>
);

const articles: Article[] = [
    {
        id: "article-1",
        title: "UX review presentations",
        summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/spirals.webp",
        publishedAt: "20 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Olivia Rhye",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Presentation", color: "pink", href: "#" },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Migrating to Linear 101",
        summary: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/conversation.webp",

        publishedAt: "19 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Phoenix Baker",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
        },
        tags: [
            { name: "Product", color: "blue-light", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
];

const BlogSectionSplitLayout01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-x-16 gap-y-12 px-4 md:px-8 lg:flex-row">
                <div className="w-full max-w-100">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Latest</p>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">From the blog</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5">The latest industry news, interviews, technologies, and resources.</p>
                    <div className="mt-12 hidden flex-col gap-3 md:mt-8 md:flex md:flex-row">
                        <Button size="xl">View all posts</Button>
                    </div>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:col-span-3">
                    {articles.slice(0, 2).map((article) => (
                        <li key={article.id} className="flex flex-col gap-5">
                            <Simple02Vertical article={article} />
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-3 md:hidden">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};

const SimpleCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
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

const navList2Brand = [
    {
        title: "Product",
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

const FooterLarge03 = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
                    <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {navList2Brand.map((category) => (
                            <li key={category.title}>
                                <h4 className="text-sm font-semibold text-quaternary_on-brand">{category.title}</h4>
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
                    <div className="w-full md:max-w-[135px]">
                        <h4 className="text-sm font-semibold text-primary_on-brand">Get the app</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 md:flex-col">
                            <AppStoreButton href="#" className="dark-mode w-[135px]" />
                            <GooglePlayButton href="#" className="dark-mode w-[135px]" />
                        </div>
                    </div>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="dark-mode" />
                    <p className="text-md text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const NotFoundPage03 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <NotFoundSplitImage05 />

            <SectionDivider />

            <BlogSectionSplitLayout01 />

            <SectionDivider />

            <SimpleCentered />

            <FooterLarge03 />
        </div>
    );
};

export default NotFoundPage03;
