"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen01, CodeSquare02, MessageChatCircle } from "@untitledui/icons";
import type { Transition } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import type { BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { StarIcon } from "@/components/foundations/rating-stars";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const NotFoundSimple04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-16 px-4 md:gap-24 md:px-8">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-primary-600 text-md font-semibold">404 error</span>

                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">We lost this page</h1>
                        </div>
                        <p className="text-lg text-tertiary md:text-xl">
                            We searched high and low, but couldn't find what you're looking for. <br className="max-md:hidden" /> Let's find a better place for
                            you to go.
                        </p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                        <Button iconLeading={ArrowLeft} color="secondary" size="xl">
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>
                </div>

                <div className="mx-auto w-full">
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
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
                                title: "Chat to us",
                                subtitle: "Can't find what you're looking for?",
                                icon: MessageChatCircle,
                                cta: "Chat to our team",
                                href: "#",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex flex-col gap-8 bg-secondary p-5 text-left md:gap-12 md:p-6">
                                <item.icon className="size-6 text-icon-fg-brand" />

                                <div className="flex flex-col items-start gap-4 md:gap-5">
                                    <div className="flex flex-col gap-1 md:gap-2">
                                        <h3 className="text-lg font-semibold text-primary md:text-xl">{item.title}</h3>
                                        <p className="text-md text-tertiary">{item.subtitle}</p>
                                    </div>
                                    <Button color="link-color" size="lg" href={item.href} iconTrailing={<ArrowRight className="size-5" />}>
                                        {item.cta}
                                    </Button>
                                </div>
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

const Simple01Horizontal = ({ article, imageClassName }: { article: Article; imageClassName?: string }) => (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-start">
        <a href={article.href} className="shrink-0 overflow-hidden rounded-2xl" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover xl:w-80", imageClassName)} />
        </a>

        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-brand-secondary">{article.category.name}</span>

                <div className="flex flex-col gap-1">
                    <a
                        href={article.category.href}
                        className="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.title}
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

const BlogSectionSimpleCenterAligned02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Latest writings</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">The latest news, technologies, and resources from our team.</p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2">
                    {articles.slice(0, 4).map((article) => (
                        <li key={article.id}>
                            <Simple01Horizontal article={article} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const reviews = [
    {
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects faster.",
        name: "Alisa Hester",
        title: "PM, Hourglass",
        company: "Web Design Agency",
        rating: 5,
        image: "https://www.untitledui.com/images/portraits/alisa-hester",
    },
    {
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        name: "Felicity Pierre",
        title: "Head of Design, Layers",
        company: "UX Agency",
        rating: 5,
        image: "https://www.untitledui.com/marketing/podcast-girl.webp",
    },
    {
        quote: "We've really sped up our workflow using Untitled.",
        name: "Fleur Cook",
        title: "PM, Hourglass",
        company: "Web Design Agency",
        rating: 5,
        image: "https://www.untitledui.com/marketing/girl.webp",
    },
];

const SplitImageQuote02 = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const transition: Transition = { type: "tween", duration: 0.8, ease: [0.8, 0, 0.2, 1] };

    return (
        <section className="bg-primary py-16 lg:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-x-16 gap-y-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="flex max-w-3xl flex-col items-start">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">
                        Join 4,000+ startups growing with Untitled
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Start your 30-day free trial today.</p>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="relative h-170 w-full overflow-hidden lg:h-180">
                    <AnimatePresence initial={false} mode="popLayout">
                        <motion.img
                            key={currentReviewIndex}
                            src={reviews[currentReviewIndex].image}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                zIndex: 1,
                                opacity: 1,
                            }}
                            exit={{
                                zIndex: 0,
                                opacity: 0,
                            }}
                            transition={transition}
                            className="size-full object-cover"
                        />
                    </AnimatePresence>
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 flex h-110 items-end overflow-hidden bg-linear-to-t from-black/40 to-black/0 pt-16 md:pt-20 lg:pt-24"></div>
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
                                key={currentReviewIndex}
                                initial={{
                                    y: 180,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    zIndex: 1,
                                    opacity: 1,
                                }}
                                exit={{
                                    y: 180,
                                    zIndex: 0,
                                    opacity: 0,
                                }}
                                transition={transition}
                                className="absolute inset-x-0 bottom-0 flex flex-col border-t border-alpha-white/30 bg-primary/30 px-5 pt-6 pb-8 backdrop-blur-[10px] md:p-8"
                            >
                                <q className="text-xl font-semibold text-white md:text-display-sm">{reviews[currentReviewIndex].quote}</q>

                                <div className="mt-5 flex flex-col-reverse justify-between gap-4 md:mt-8 md:flex-row">
                                    <p className="text-xl font-semibold whitespace-nowrap text-white md:text-display-xs">{reviews[currentReviewIndex].name}</p>
                                    <div aria-hidden="true" className="hidden gap-1 md:flex">
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                    </div>
                                </div>

                                <div className="mt-2 flex flex-col justify-between gap-4 md:mt-3 md:flex-row md:gap-3">
                                    <div className="flex flex-col md:gap-1">
                                        <p className="text-lg font-semibold text-white md:text-md">{reviews[currentReviewIndex].company}</p>
                                        <p className="text-md font-medium text-white md:text-sm">{reviews[currentReviewIndex].title}</p>
                                    </div>
                                    <div className="flex gap-4 md:gap-8">
                                        <button
                                            aria-label="Previous review"
                                            onClick={() => setCurrentReviewIndex(currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1)}
                                            className="group flex size-12 cursor-pointer items-center justify-center rounded-full ring-1 ring-white/50 outline-focus-ring transition duration-100 ease-linear ring-inset hover:ring-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                        >
                                            <ArrowLeft className="transition-inherit size-5 text-white group-hover:opacity-70 md:size-6" />
                                        </button>
                                        <button
                                            aria-label="Next review"
                                            onClick={() => setCurrentReviewIndex(currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1)}
                                            className="group flex size-12 cursor-pointer items-center justify-center rounded-full ring-1 ring-white/50 outline-focus-ring transition duration-100 ease-linear ring-inset hover:ring-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                        >
                                            <ArrowRight className="transition-inherit size-5 text-white group-hover:opacity-70 md:size-6" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
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

const FooterLarge04 = () => {
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
                                Start growing with Untitled
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

const NotFoundPage04 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <NotFoundSimple04 />

            <SectionDivider />

            <BlogSectionSimpleCenterAligned02 />

            <SectionDivider />

            <SplitImageQuote02 />

            <FooterLarge04 />
        </div>
    );
};

export default NotFoundPage04;
