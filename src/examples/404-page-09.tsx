"use client";

import type { ComponentPropsWithRef, FC } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import type { BadgeColor } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

const NotFoundSimple02 = () => {
    return (
        <section className="flex items-start justify-center bg-primary py-16 md:items-center md:py-24 lg:min-h-240">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col gap-8 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div>
                                <BadgeWithDot type="modern" color="brand" size="lg">
                                    404 error
                                </BadgeWithDot>
                            </div>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Page not found</h1>
                        </div>
                        <p className="text-lg text-tertiary md:text-xl">Sorry, the page you are looking for doesn't exist.</p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 sm:flex-row">
                        <Button color="secondary" size="xl" iconLeading={ArrowLeft}>
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>

                    <ul className="flex flex-col gap-6">
                        {[
                            { title: "Documentation", href: "#", subtitle: "Dive in to learn all about our product." },
                            { title: "Our blog", href: "#", subtitle: "Read the latest posts on our blog." },
                            { title: "Chat to support", href: "#", subtitle: "Our friendly team is here to help." },
                        ].map((item) => (
                            <li key={item.title} className="flex flex-col items-start gap-1">
                                <Button color="link-color" size="xl" href={item.href} iconTrailing={<ArrowRight className="size-5" />}>
                                    {item.title}
                                </Button>
                                <p className="text-md text-tertiary">{item.subtitle}</p>
                            </li>
                        ))}
                    </ul>
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

const Simple04Vertical = ({ article, imageClassName, className }: { article: Article; imageClassName?: string; className?: string }) => (
    <div className={cx("flex flex-col gap-4", className)}>
        <div className="relative">
            <a href={article.href} className="w-full" tabIndex={-1}>
                <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover", imageClassName)} />
            </a>
            <div className="absolute inset-x-0 bottom-0 overflow-hidden bg-linear-to-b from-transparent to-black/40">
                <div className="relative flex items-start justify-between bg-alpha-white/30 p-4 backdrop-blur-md before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:p-5">
                    <div>
                        <a
                            href={article.author.href}
                            className="block rounded-xs text-sm font-semibold text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            {article.author.name}
                        </a>
                        <p className="text-sm text-white">{article.publishedAt}</p>
                    </div>
                    <a
                        href={article.category.href}
                        className="rounded-xs text-sm font-semibold text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.category.name}
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col gap-1">
                <a
                    href={article.category.href}
                    className="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    {article.title}
                </a>
                <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
            </div>

            <Button href={article.href} color="link-color" size="lg" iconTrailing={ArrowUpRight}>
                Read post
            </Button>
        </div>
    </div>
);

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

const BlogSectionCarouselLayout01 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Latest posts</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Untitled blog</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Interviews, tips, guides, industry best practices, and news.</p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button size="xl">View all posts</Button>
                    </div>
                </div>

                <Carousel.Root
                    className="mt-12 md:mt-16"
                    opts={{
                        align: "start",
                    }}
                >
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:gap-8 md:pr-8">
                        {articles.map((article) => (
                            <Carousel.Item key={article.id} className="max-w-xs md:max-w-96">
                                <Simple04Vertical article={article} />
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                    <div className="mt-1 flex gap-4 md:mt-8 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
                <div className="mt-12 flex flex-col gap-3 lg:hidden">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};

const IPhoneMockup01 = () => {
    return (
        <section className="overflow-hidden bg-primary pt-16 md:py-24">
            <div className="relative mx-auto grid w-full max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="z-20 flex max-w-3xl flex-col items-start">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">Growth performance tracking made easy</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Start your 30-day free trial today.</p>
                    <div className="mt-8 flex w-full gap-3 md:mt-12">
                        <AppStoreButton size="lg" />
                        <GooglePlayButton size="lg" />
                    </div>
                </div>

                <div className="relative min-h-90 md:min-h-100 md:w-full">
                    <svg className="absolute -bottom-24 left-1/2 -translate-x-1/2" width="532" height="416" viewBox="0 0 532 416" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M182.034 461.691C74.9901 428.768 1.32278 329.846 0.0121784 217.408C-1.15817 117.003 82.1936 43.2414 176.777 10.7273C260.07 -17.9056 346.327 12.9156 406.143 77.7959C484.913 163.236 571.343 274.645 512.702 375.097C449.003 484.212 302.448 498.727 182.034 461.691Z"
                            fill="currentColor"
                            className="text-bg-secondary"
                        />
                    </svg>

                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute top-0 right-1/2 w-full max-w-71 translate-x-1/2 drop-shadow-iphone-mockup md:max-w-78.5"
                    />
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

const FooterLarge09 = () => {
    return (
        <footer className="dark-mode bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Let's get started on something great</h2>
                    <p className="mt-2 text-md text-tertiary md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-12 md:flex-row md:self-center">
                        <Button color="secondary" size="xl">
                            Chat to us
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
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

const NotFoundPage09 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <NotFoundSimple02 />

            <SectionDivider />

            <BlogSectionCarouselLayout01 />

            <SectionDivider />

            <IPhoneMockup01 />

            <FooterLarge09 />
        </div>
    );
};

export default NotFoundPage09;
