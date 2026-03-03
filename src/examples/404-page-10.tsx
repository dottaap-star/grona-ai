"use client";

import { ArrowLeft, ArrowUpRight } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColor } from "@/components/base/badges/badges";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const NotFoundSimple01 = () => {
    return (
        <section className="flex items-start bg-primary py-16 md:items-center md:py-24 lg:min-h-240">
            <div className="mx-auto max-w-container grow px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col gap-8 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-md font-semibold text-brand-secondary">404 error</span>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">We can't find that page</h1>
                        </div>
                        <p className="text-lg text-tertiary md:text-xl">Sorry, the page you are looking for doesn't exist or has been moved.</p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 sm:flex-row">
                        <Button color="secondary" size="xl" iconLeading={ArrowLeft}>
                            Go back
                        </Button>
                        <Button size="xl">Take me home</Button>
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

const Simple01Vertical = ({ article, imageClassName }: { article: Article; imageClassName?: string }) => (
    <div className="flex flex-col gap-4">
        <a href={article.href} className="overflow-hidden rounded-2xl" tabIndex={-1}>
            <img
                src={article.thumbnailUrl}
                alt={article.title}
                className={cx("aspect-[1.5] w-full object-cover transition duration-100 ease-linear hover:scale-105", imageClassName)}
            />
        </a>

        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-brand-secondary">{article.category.name}</span>
                <div className="flex flex-col gap-1">
                    <a
                        href={article.href}
                        className="group/title flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.title}
                        <ArrowUpRight
                            className="mt-0.5 size-6 shrink-0 text-fg-quaternary transition duration-100 ease-linear group-hover/title:text-fg-quaternary_hover"
                            aria-hidden="true"
                        />
                    </a>

                    <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
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

const BlogSectionSimpleLeftAligned01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Our blog</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Latest blog posts</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Tool and strategies modern teams need to help their companies grow.</p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button size="xl">View all posts</Button>
                    </div>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {articles.slice(0, 3).map((article) => (
                        <li key={article.id}>
                            <Simple01Vertical article={article} />
                        </li>
                    ))}
                </ul>
                <div className="mt-12 flex flex-col gap-3 lg:hidden">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};

const CardHorizontal = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-col">
                        <h2 className="text-display-sm font-semibold text-primary">Join 2,000+ subscribers</h2>
                        <p className="mt-4 text-lg text-tertiary lg:text-xl">Stay in the loop with everything you need to know.</p>
                    </div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[360px_max-content] md:gap-0.5"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            wrapperClassName="flex-1 py-0.5 md:max-w-[345px]"
                            hint={
                                <span>
                                    We care about your data in our{" "}
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
        category: { name: "Product", href: "#" },
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
    {
        id: "article-3",
        title: "Building your API stack",
        summary: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        href: "#",
        category: { name: "Software Engineering", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp",
        publishedAt: "18 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Lana Steiner",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        },
        tags: [
            { name: "Software Development", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3.5",
        title: "PM mental models",
        summary: "Mental models are simple expressions of complex processes or relationships.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
        publishedAt: "17 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Demi Wilkinson",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
        },
        tags: [
            { name: "Leadership", color: "brand", href: "#" },
            { name: "Management", color: "gray-blue", href: "#" },
        ],
    },
    {
        id: "article-4",
        title: "PM mental models",
        summary: "Mental models are simple expressions of complex processes or relationships.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/brainstorming.webp",
        publishedAt: "16 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Demi Wilkinson",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
        },
        tags: [
            { name: "Product", color: "blue-light", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Frameworks", color: "orange", href: "#" },
        ],
    },
    {
        id: "article-5",
        title: "What is Wireframing?",
        summary: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/workspace-4.webp",
        publishedAt: "15 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Candice Wu",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-6",
        title: "How collaboration makes us better designers",
        summary: "Collaboration can make our teams stronger, and our individual designs better.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/collaboration.webp",
        publishedAt: "14 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Natali Craig",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80",
        },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-7",
        title: "Our top 10 Javascript frameworks to use",
        summary: "JavaScript frameworks make development easy with extensive features and functionalities.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/man-and-laptop-2.webp",
        publishedAt: "13 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Drew Cano",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80",
        },
        tags: [
            { name: "Software development", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-8",
        title: "Podcast: Creating a better CX Community",
        summary: "Starting a community doesn't need to be complicated, but how do you get started?",
        href: "#",
        category: { name: "Customer Success", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/podcast-girl-2.webp",
        publishedAt: "12 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Orlando Diggs",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80",
        },
        tags: [
            { name: "Podcasts", color: "brand", href: "#" },
            { name: "Customer success", color: "gray-blue", href: "#" },
        ],
    },
];

const navList2 = [
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

const socials = [
    { title: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { title: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { title: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { title: "GitHub", icon: GitHub, href: "https://github.com/" },
    { title: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { title: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { title: "Layers", icon: Layers, href: "https://layers.com/" },
];

const FooterLarge10 = () => {
    return (
        <footer className="bg-secondary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between border-b border-secondary pb-8 md:pb-16 lg:flex-row">
                    <div className="max-w-3xl">
                        <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Start your 30-day free trial</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    </div>

                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 xl:flex-row">
                    <div className="flex flex-col gap-6 md:w-80 md:gap-8">
                        <UntitledLogo className="h-8 w-min shrink-0" />
                        <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <nav className="flex-1">
                        <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                            {navList2.slice(0, 5).map((category) => (
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
                </div>

                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {socials.map(({ title, icon: Icon, href }) => (
                            <li key={title}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon size={24} aria-label={title} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const NotFoundPage09 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <NotFoundSimple01 />

            <SectionDivider />

            <BlogSectionSimpleLeftAligned01 />

            <CardHorizontal />

            <FooterLarge10 />
        </div>
    );
};

export default NotFoundPage09;
