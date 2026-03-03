"use client";

import { ArrowRight, BookOpen01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
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

export const MenuBlogPostsWithFooter = ({ className, isFloating, isMobile }: { className?: string; isFloating?: boolean; isMobile?: boolean }) => {
    return (
        <section className={cx("relative overflow-hidden bg-primary md:shadow-lg", isFloating && "md:rounded-2xl md:ring-1 md:ring-secondary_alt", className)}>
            <div className={cx("mx-auto max-w-container", isFloating ? "md:px-5" : "md:px-8")}>
                <ul className="grid grid-cols-1 gap-1 pt-2 pb-6 md:pt-5 lg:grid-cols-2 xl:grid-cols-3">
                    {articles.slice(0, isMobile ? 5 : undefined).map((article) => (
                        <li key={article.title}>
                            <ImageCardHorizontal {...article} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx("bg-secondary", isFloating && "md:mx-2 md:mb-2 md:rounded-lg")}>
                <div className={cx("relative mx-auto flex max-w-container items-center justify-center md:justify-between", isFloating ? "p-4" : "px-8 py-5")}>
                    <Button href="#" color="secondary" size={isFloating ? "md" : "lg"} iconLeading={BookOpen01} className="hidden md:inline-flex">
                        Documentation
                    </Button>
                    <Button href="#" color="primary" size={isFloating ? "md" : "lg"} className="hidden md:inline-flex">
                        View all posts
                    </Button>
                    <Button href="#" color="link-color" iconTrailing={ArrowRight} size={isFloating ? "md" : "lg"} className="inline-flex md:hidden">
                        View all blog posts
                    </Button>
                </div>
            </div>
        </section>
    );
};
