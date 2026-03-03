"use client";

import { SearchLg } from "@untitledui/icons";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { Input } from "@/components/base/input/input";
import { type Article, Simple01Vertical, Simple02Vertical } from "@/components/marketing/blog/base-components/blog-cards";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

const articles: Article[] = [
    {
        id: "article-1",
        title: "UX review presentations",
        summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        href: "#",
        category: {
            name: "Design",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/spirals.webp",
        publishedAt: "20 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Olivia Rhye",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
        tags: [
            {
                name: "Design",
                color: "brand",
                href: "#",
            },
            {
                name: "Research",
                color: "indigo",
                href: "#",
            },
            {
                name: "Presentation",
                color: "pink",
                href: "#",
            },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Migrating to Linear 101",
        summary: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        href: "#",
        category: {
            name: "Product",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/conversation.webp",
        publishedAt: "19 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Phoenix Baker",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
        },
        tags: [
            {
                name: "Product",
                color: "blue-light",
                href: "#",
            },
            {
                name: "Tools",
                color: "pink",
                href: "#",
            },
            {
                name: "SaaS",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-3",
        title: "Building your API stack",
        summary: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        href: "#",
        category: {
            name: "Software Engineering",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp",
        publishedAt: "18 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Lana Steiner",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        },
        tags: [
            {
                name: "Software Development",
                color: "success",
                href: "#",
            },
            {
                name: "Tools",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-3.5",
        title: "Bill Walsh leadership lessons",
        summary: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        href: "#",
        category: {
            name: "Product",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
        publishedAt: "17 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Alec Whitten",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/alec-whitten?fm=webp&q=80",
        },
        tags: [
            {
                name: "Leadership",
                color: "brand",
                href: "#",
            },
            {
                name: "Management",
                color: "gray-blue",
                href: "#",
            },
        ],
    },
    {
        id: "article-4",
        title: "PM mental models",
        summary: "Mental models are simple expressions of complex processes or relationships.",
        href: "#",
        category: {
            name: "Product",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/smiling-girl-6.webp",
        publishedAt: "16 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Demi Wilkinson",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
        },
        tags: [
            {
                name: "Product",
                color: "blue-light",
                href: "#",
            },
            {
                name: "Research",
                color: "indigo",
                href: "#",
            },
            {
                name: "Frameworks",
                color: "orange",
                href: "#",
            },
        ],
    },
    {
        id: "article-5",
        title: "What is wireframing?",
        summary: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        href: "#",
        category: {
            name: "Design",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/wireframing-layout.webp",
        publishedAt: "15 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Candice Wu",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        },
        tags: [
            {
                name: "Design",
                color: "brand",
                href: "#",
            },
            {
                name: "Research",
                color: "indigo",
                href: "#",
            },
        ],
    },
    {
        id: "article-6",
        title: "How collaboration makes us better designers",
        summary: "Collaboration can make our teams stronger, and our individual designs better.",
        href: "#",
        category: {
            name: "Design",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/two-people.webp",
        publishedAt: "14 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Natali Craig",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80",
        },
        tags: [
            {
                name: "Design",
                color: "brand",
                href: "#",
            },
            {
                name: "Research",
                color: "indigo",
                href: "#",
            },
        ],
    },
    {
        id: "article-7",
        title: "Our top 10 Javascript frameworks to use",
        summary: "JavaScript frameworks make development easy with extensive features and functionalities.",
        href: "#",
        category: {
            name: "Product",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/workspace-5.webp",
        publishedAt: "13 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Drew Cano",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80",
        },
        tags: [
            {
                name: "Software Development",
                color: "success",
                href: "#",
            },
            {
                name: "Tools",
                color: "pink",
                href: "#",
            },
            {
                name: "SaaS",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-8",
        title: "Podcast: Creating a better CX Community",
        summary: "Starting a community doesn't need to be complicated, but how do you get started?",
        href: "#",
        category: {
            name: "Customer Success",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/sythesize.webp",
        publishedAt: "12 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Orlando Diggs",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80",
        },
        tags: [
            {
                name: "Podcasts",
                color: "brand",
                href: "#",
            },
            {
                name: "Customer Success",
                color: "gray-blue",
                href: "#",
            },
        ],
    },
];

const featuredArticle: Article = {
    id: "article-001",
    category: {
        name: "Design",
        href: "#",
    },
    thumbnailUrl: "https://www.untitledui.com/marketing/blog-featured-post-02.webp",
    title: 'Improve your design skills: Develop an "eye" for design',
    summary: 'Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.',
    href: "#",
    publishedAt: "10 April 2025",
    readingTime: "8 min read",
    author: {
        name: "Amélie Laurent",
        href: "#",
        avatarUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
    },
    tags: [
        {
            name: "Design",
            color: "gray",
            href: "#",
        },
        {
            name: "Research",
            color: "gray",
            href: "#",
        },
        {
            name: "Presentation",
            color: "gray",
            href: "#",
        },
    ],
};

const tabs = [
    {
        id: "all",
        label: "View all",
    },
    {
        id: "design",
        label: "Design",
    },
    {
        id: "product",
        label: "Product",
    },
    {
        id: "software-engineering",
        label: "Software Development",
    },
    {
        id: "customer-success",
        label: "Customer Success",
    },
    {
        id: "leadership",
        label: "Leadership",
    },
    {
        id: "management",
        label: "Management",
    },
];

export const BlogHeaderFeaturedPost02 = () => {
    const isDesktop = useBreakpoint("lg");

    return (
        <div className="bg-primary">
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Our blog</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">The latest writings from our team</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">The latest industry news, interviews, technologies, and resources.</p>
                    </div>
                </div>
            </section>

            <main className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 pb-16 md:gap-16 md:px-8 md:pb-24">
                <a
                    href={featuredArticle.href}
                    className="relative hidden w-full overflow-hidden outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-4 md:block md:h-145 lg:h-180"
                >
                    <img src={featuredArticle.thumbnailUrl} alt={featuredArticle.title} className="absolute inset-0 size-full object-cover" />
                    <div className="absolute top-0 left-0 size-20 bg-linear-to-br from-bg-primary from-50% via-black via-50% to-black"></div>

                    <div className="absolute inset-x-0 bottom-0 w-full bg-linear-to-t from-black/40 to-transparent pt-24">
                        <div className="flex w-full items-start gap-6 p-8">
                            <div className="flex flex-1 flex-col gap-2">
                                <p className="flex-1 text-display-xs font-semibold text-white">{featuredArticle.title}</p>
                                <p className="line-clamp-2 text-md text-white">{featuredArticle.summary}</p>
                            </div>
                            <div className="flex items-center gap-2 rounded-xs">
                                <Avatar focusable size="md" src={featuredArticle.author.avatarUrl} alt="Image provided by Unsplash.com" />
                                <div>
                                    <p className="text-sm font-semibold text-white">{featuredArticle.author.name}</p>
                                    <p className="text-sm text-white">{featuredArticle.publishedAt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="md:hidden">
                    <Simple01Vertical article={featuredArticle} imageClassName="rounded-none" />
                </div>

                <div className="flex flex-col gap-12 md:flex-row md:gap-16">
                    <div className="flex w-full flex-col items-stretch gap-8 md:max-w-70">
                        <Input aria-label="Search" placeholder="Search" size="md" icon={SearchLg} />
                        <div className="flex flex-col gap-5">
                            <p className="text-sm font-semibold text-brand-secondary">Blog categories</p>
                            <Tabs orientation="vertical" className="flex w-full">
                                <TabList type="line" size="md" items={tabs} />
                            </Tabs>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 lg:gap-16">
                        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
                            {articles.slice(0, 8).map((article) => (
                                <li key={article.id} className={cx("flex flex-col gap-6 md:gap-8", !isDesktop && "nth-[n+6]:hidden")}>
                                    <Simple02Vertical article={article} badgeTheme="modern" />
                                </li>
                            ))}
                        </ul>

                        <PaginationPageMinimalCenter />
                    </div>
                </div>
            </main>
        </div>
    );
};
