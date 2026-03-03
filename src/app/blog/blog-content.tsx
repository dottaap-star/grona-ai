"use client";

import { ArrowRight } from "@untitledui/icons";
import Image from "next/image";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { SectionDivider } from "@/components/shared-assets/section-divider";

// ─── Data ────────────────────────────────────────────────────────────────────

const featuredPost = {
    title: "A/B Testing & Personalization: The Must-Have CRO Software for Marketers",
    excerpt:
        "Discover the best CRO software for A/B testing and personalization. Compare top tools like Grona, Optimizely, Hotjar, and more to boost your conversion rates.",
    href: "/blog/cro-software-for-marketers",
    image: "/assets/images/blogs/feature-cro.png",
    category: "CRO Tools",
    readTime: "8 min read",
    date: "January 14, 2026",
    author: "Grona Team",
};

// Future posts go here. When adding a new post, remove it from this array
// if it should be the featured post, or keep it here for the grid.
const posts: typeof featuredPost[] = [];

// ─── Sections ────────────────────────────────────────────────────────────────

function HeroSection() {
    return (
        <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">The Grona Blog</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Conversion optimization insights, A/B testing strategies, and CRO best practices.
                    </p>
                </div>
            </div>
        </section>
    );
}

function FeaturedPostSection() {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <a
                    href={featuredPost.href}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-secondary bg-secondary transition-shadow hover:shadow-lg md:flex-row"
                >
                    {/* Image */}
                    <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden md:aspect-auto md:w-1/2">
                        <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-center gap-4 p-6 md:p-10">
                        <div className="flex items-center gap-3">
                            <Badge type="pill-color" color="brand">
                                {featuredPost.category}
                            </Badge>
                            <span className="text-sm text-tertiary">{featuredPost.readTime}</span>
                        </div>

                        <h2 className="text-xl font-semibold text-primary md:text-display-xs">{featuredPost.title}</h2>

                        <p className="text-md text-tertiary">{featuredPost.excerpt}</p>

                        <div className="mt-2 flex items-center justify-between">
                            <p className="text-sm text-quaternary">
                                {featuredPost.author} · {featuredPost.date}
                            </p>
                            <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-secondary transition-colors group-hover:text-brand-primary">
                                Read article
                                <ArrowRight className="size-4" />
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}

function PostGridSection() {
    if (posts.length === 0) {
        return (
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="rounded-2xl border border-primary bg-primary px-6 py-12 text-center">
                        <p className="text-lg font-medium text-tertiary">More articles coming soon.</p>
                        <p className="mt-2 text-md text-quaternary">
                            Subscribe below to get notified when new posts are published.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <li key={post.href}>
                            <a
                                href={post.href}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-secondary bg-secondary transition-shadow hover:shadow-lg"
                            >
                                <div className="relative aspect-[3/2] w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col gap-3 p-5">
                                    <div className="flex items-center gap-3">
                                        <Badge type="pill-color" color="brand">
                                            {post.category}
                                        </Badge>
                                        <span className="text-sm text-tertiary">{post.readTime}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary">{post.title}</h3>
                                    <p className="line-clamp-2 text-md text-tertiary">{post.excerpt}</p>
                                    <p className="mt-auto pt-2 text-sm text-quaternary">
                                        {post.author} · {post.date}
                                    </p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function NewsletterSection() {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Get CRO insights in your inbox
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Weekly tips on conversion optimization, A/B testing, and growth.
                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
                    >
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="min-w-0 flex-1 rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-md text-primary shadow-xs placeholder:text-placeholder outline-none focus:border-brand-solid focus:ring-4 focus:ring-brand-shadow"
                        />
                        <Button type="submit" size="lg">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

// ─── Page Content ────────────────────────────────────────────────────────────

export function BlogContent() {
    return (
        <>
            <HeroSection />
            <FeaturedPostSection />
            <SectionDivider />
            <PostGridSection />
            <SectionDivider />
            <NewsletterSection />
        </>
    );
}
