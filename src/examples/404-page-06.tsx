"use client";

import { ArrowLeft, ArrowUpRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import type { BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const NotFoundSplitMockup = () => {
    return (
        <section className="flex items-start justify-center bg-primary py-16 md:items-center md:pb-24 lg:min-h-240 lg:overflow-hidden lg:px-20">
            <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-16 px-4 md:px-8 lg:flex-row">
                <div className="flex w-full flex-col items-start gap-8 text-center md:gap-12 md:text-left">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <p className="text-md font-semibold text-brand-secondary">404 error</p>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Under maintenance</h1>
                        </div>
                        <p className="text-lg text-tertiary md:max-w-120 md:text-xl">
                            The page you're looking for is currently under maintenance and will be back soon. Stay tuned!
                        </p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                        <Button color="secondary" size="xl" iconLeading={ArrowLeft}>
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>
                </div>
                <div className="relative bg-primary lg:absolute lg:-mr-264 lg:w-auto lg:max-w-256">
                    <div className="rounded-[9.03px] p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px]">
                        <div className="overflow-hidden rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                            <div className="relative overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[20.21px] md:ring-[1.68px]">
                                {/* Light mode image (hidden in dark mode) */}
                                <img
                                    alt="Split mockup image"
                                    className="size-full object-cover object-left dark:hidden"
                                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                />
                                {/* Dark mode image (hidden in light mode) */}
                                <img
                                    alt="Split mockup image"
                                    className="size-full object-cover object-left not-dark:hidden"
                                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                />
                            </div>
                        </div>
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

const Simple03Vertical = ({
    article,
    imageClassName,
    titleClassName,
    className,
}: {
    article: Article;
    imageClassName?: string;
    titleClassName?: string;
    className?: string;
}) => (
    <div className={cx("flex flex-col gap-4", className)}>
        <a href={article.href} className="overflow-hidden rounded-2xl" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover", imageClassName)} />
        </a>

        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-semibold text-brand-secondary">
                    {article.author.name} • {article.publishedAt}
                </p>
                <div className="flex w-full flex-col gap-1">
                    <a
                        href={article.category.href}
                        className={cx(
                            "flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2",
                            titleClassName,
                        )}
                    >
                        {article.title}
                        <ArrowUpRight className="mt-0.5 size-6 shrink-0 text-fg-quaternary" aria-hidden="true" />
                    </a>
                    <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
                </div>
            </div>

            <div className="flex gap-2">
                {article.tags.map((tag) => (
                    <a key={tag.name} href={tag.href} className="rounded-xl outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <Badge color={tag.color} size="md">
                            {tag.name}
                        </Badge>
                    </a>
                ))}
            </div>
        </div>
    </div>
);

const BlogSectionSimpleCenterAligned01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Latest posts</p>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Untitled blog</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Interviews, tips, guides, industry best practices, and news.</p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {articles.slice(0, 3).map((article) => (
                        <li key={article.id}>
                            <Simple03Vertical article={article} />
                        </li>
                    ))}
                </ul>

                <div className="mt-12 flex flex-col justify-center gap-3 md:mt-16 md:flex-row">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};

const navList2 = [
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

const socials = [
    { title: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { title: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { title: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { title: "GitHub", icon: GitHub, href: "https://github.com/" },
    { title: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { title: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { title: "Layers", icon: Layers, href: "https://layers.com/" },
];

const FooterLarge06 = () => {
    return (
        <footer>
            <div className="relative bg-brand-section py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
                        <div className="flex flex-col gap-2">
                            <p id="newsletter-label" className="text-lg font-semibold text-primary_on-brand md:text-xl">
                                Join our newsletter
                            </p>
                            <p id="newsletter-hint" className="text-md text-tertiary_on-brand">
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
                </div>
                <div className="absolute bottom-0 left-0 h-px w-full bg-border-brand_alt"></div>
            </div>

            <div className="bg-brand-section py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col gap-6 md:w-80 md:gap-8">
                            <UntitledLogo className="dark-mode" />
                            <p className="text-md text-tertiary_on-brand">Design amazing digital experiences that create more happy in the world.</p>
                            <RatingBadge theme="light" className="origin-top-left scale-[0.78]" />
                        </div>
                        <nav className="flex-1">
                            <ul className="grid grid-cols-2 gap-8 md:grid-cols-5">
                                {navList2.map((category) => (
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
                        </nav>
                    </div>

                    <div className="relative mt-12 flex flex-col-reverse justify-between gap-6 pt-8 md:mt-16 md:flex-row">
                        <div className="absolute top-0 left-0 h-px w-full bg-border-brand_alt"></div>
                        <p className="text-md text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>
                        <ul className="flex gap-6">
                            {socials.map(({ title, icon: Icon, href }) => (
                                <li key={title}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xs text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <Icon size={24} aria-label={title} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const NotFoundPage06 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <NotFoundSplitMockup />

            <SectionDivider />

            <BlogSectionSimpleCenterAligned01 />

            <FooterLarge06 />
        </div>
    );
};

export default NotFoundPage06;
