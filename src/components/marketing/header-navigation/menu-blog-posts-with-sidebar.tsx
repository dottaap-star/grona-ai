"use client";

import { cx } from "@/utils/cx";
import { NavMenuItemLink } from "./base-components/nav-menu-item";
import { ImageCardHorizontal } from "./base-components/nav-menu-item-card";

const articles = [
    {
        title: "Auto Layout explained",
        subtitle: "Jump right in—get an overview of the basics and fundamentals of auto layout so you can start...",
        imgSrc: "https://www.untitledui.com/marketing/auto-layout.webp",
    },

    {
        title: "Top techniques to level up your product design",
        subtitle: "The latest best practices and tips from the best in the industry. Learn how to level up your product...",
        imgSrc: "https://www.untitledui.com/marketing/man-and-laptop.webp",
    },
    {
        title: "Sythesize data like a pro through affinity diagramming",
        subtitle: "Synthesis is the mysterious rabbit hole that all data scientists have to learn eventually. What makes...",
        imgSrc: "https://www.untitledui.com/marketing/typing-girl.webp",
    },
    {
        title: "Streamline your user research process",
        subtitle: "As a user research team of 5 UX researchers, we quickly realized that we'll need to set up some...",
        imgSrc: "https://www.untitledui.com/marketing/conversation.webp",
    },
    {
        title: "How to embrace inclusivity in UX research",
        subtitle: "In user experience research, your main job is to consider the user—every user—regardless of...",
        imgSrc: "https://www.untitledui.com/marketing/orange-journal.webp",
    },
    {
        title: "The anatomy of great storytelling",
        subtitle: "Storytelling is everywhere, but great storytelling is rare. Hears how to master it.",
        imgSrc: "https://www.untitledui.com/marketing/two-people.webp",
    },
    {
        title: "How to write copy that converts",
        subtitle: "Improve your conversion rates and close more sales with these advanced copywriting tricks.",
        imgSrc: "https://www.untitledui.com/marketing/sythesize.webp",
    },
    {
        title: "How to create a powerful design presentation",
        subtitle: "How to create a powerful design presentation that gets everyone onboard.",
        imgSrc: "https://www.untitledui.com/marketing/story-telling.webp",
    },
    {
        title: "How to communicate the value of design",
        subtitle: "How do you measure and communicate the impact and value of design thinking workshops?",
        imgSrc: "https://www.untitledui.com/marketing/value-of-design.webp",
    },
];

export const MenuBlogPostsWithSidebar = ({ className, isMobile }: { className?: string; isMobile?: boolean }) => {
    return (
        <section className={cx("relative overflow-hidden bg-primary md:shadow-lg", className)}>
            <div className="mx-auto flex max-w-container flex-col md:flex-row md:gap-16 md:px-8">
                <div className="relative z-10 flex min-w-50 flex-col gap-3 py-4 md:pt-6 md:pb-8">
                    <h3 className="px-4 text-sm font-semibold text-brand-tertiary md:px-0">Blog categories</h3>
                    <ul className="flex flex-col gap-0.5">
                        {[
                            { title: "Design", href: "#" },
                            { title: "Product", href: "#" },
                            { title: "Data analytics", href: "#" },
                            { title: "Marketing & growth", href: "#" },
                            { title: "Customer success", href: "#" },
                            { title: "Team collaboration ", href: "#" },
                        ].map((item) => (
                            <li key={item.title}>
                                <NavMenuItemLink href={item.href} title={item.title} />
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="grid flex-1 grid-cols-1 gap-1 pb-5 md:pt-5 md:pb-6 lg:grid-cols-2">
                    {articles.slice(0, isMobile ? 4 : 6).map((article) => (
                        <li key={article.title}>
                            <ImageCardHorizontal {...article} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
