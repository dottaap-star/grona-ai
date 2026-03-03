"use client";

import { useState } from "react";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { type Article, Simple01Horizontal } from "@/components/marketing/blog/base-components/blog-cards";
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

const categories = [
    { id: "all", name: "View all" },
    { id: "design", name: "Design" },
    { id: "product", name: "Product" },
    { id: "software-engineering", name: "Software Engineering" },
    { id: "customer-success", name: "Customer Success" },
];

const tabs = [
    { id: "all", label: "View all" },
    { id: "design", label: "Design" },
    { id: "product", label: "Product" },
    { id: "software-engineering", label: "Software Engineering" },
    { id: "customer-success", label: "Customer Success" },
];

export const BlogHeaderSimple06 = () => {
    const isDesktop = useBreakpoint("lg");
    const [selectedTabIndex, setSelectedTabIndex] = useState(1);

    return (
        <div className="bg-primary">
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mb-3 text-sm font-semibold text-brand-secondary md:text-md">Our blog</div>
                    <div className="grid grid-cols-[minmax(1fr,768px)] gap-x-16 lg:grid-cols-[2fr_1fr]">
                        <h2 className="text-display-md font-semibold text-primary md:text-display-lg">Stories and interviews</h2>

                        <p className="mt-4 hidden text-lg text-tertiary md:mt-6 md:block md:text-xl lg:mt-3 lg:h-0 lg:w-120">
                            Subscribe to learn about new product features, the latest in technology, solutions, and updates.
                        </p>
                        <p className="mt-4 text-lg text-tertiary md:hidden">
                            The blog is the best source of information for interviews, tips, guides, industry best practices, and news. Subscribe for updates in
                            your inbox every week. No spam.
                        </p>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[335px_max-content]"
                        >
                            <div className="flex flex-col gap-1.5">
                                <Input isRequired size="md" name="email" type="email" placeholder="Enter your email" wrapperClassName="py-0.5" />
                                <span className="self-start text-sm text-tertiary">
                                    We care about your data in our{" "}
                                    <a
                                        href="#"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </span>
                            </div>
                            <Button type="submit" size="xl">
                                Get started
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>

            <main className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 pb-16 md:px-8 md:pb-24">
                <NativeSelect
                    aria-label="Categories"
                    className="md:hidden"
                    value={categories[selectedTabIndex - 1].name}
                    onChange={(event) => setSelectedTabIndex(categories.findIndex((tab) => tab.name === event.target.value))}
                    options={categories.map((tab) => ({
                        label: tab.name,
                        value: tab.name,
                    }))}
                />
                <div className="-m-1 hidden w-max self-start overflow-auto p-1 md:flex md:self-auto">
                    <Tabs>
                        <TabList type="button-minimal" size="md" items={tabs} />
                    </Tabs>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
                    {articles
                        .filter((ar) => ar.id !== "article-3.5")
                        .slice(0, 8)
                        .map((article) => (
                            <li key={article.id} className={cx("flex flex-col gap-6 xl:flex-row xl:items-start", !isDesktop && "nth-[n+6]:hidden")}>
                                <Simple01Horizontal article={article} />
                            </li>
                        ))}
                </ul>

                <PaginationPageMinimalCenter />
            </main>
        </div>
    );
};
