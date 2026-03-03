import { Button } from "@/components/base/buttons/button";
import { type Article, Simple02Vertical } from "@/components/marketing/blog/base-components/blog-cards";

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
            name: "Design",
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
];

export const BlogSectionSplitLayout01 = () => {
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
