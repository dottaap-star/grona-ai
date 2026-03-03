"use client";

import type { ComponentPropsWithRef, FC } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Link01 } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Header } from "@/components/marketing/header-navigation/header";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import { withBasePath } from "@/utils/base-path";

type Article = {
    id: string;
    href: string;
    thumbnailUrl: string;
    title: string;
    summary: string;
    publishedAt: string;
    readingTime: string;
};

type Tool = {
    id: string;
    name: string;
    imageUrl: string;
    description: string[];
    features: string[];
    isFeatured?: boolean;
};

const relatedArticles: Article[] = [
    {
        id: "article-1",
        title: "10 Best Ways to Achieve CRO Through Google Ads",
        summary: "Need strategic ways to boost Google Ads CRO? These best practices will help you optimize your PPC campaigns.",
        href: "#",
        thumbnailUrl: "/assets/images/blogs/related-article-1.jpg",
        publishedAt: "28 May 2025",
        readingTime: "8 min read",
    },
    {
        id: "article-2",
        title: "Google Ads Best Practices | Convert To Win",
        summary: "Not getting the results you expected from your Google Ads? Try personalizing landing pages. Learn simple tips to skyrocket conversions and sales.",
        href: "#",
        thumbnailUrl: "/assets/images/blogs/related-article-2.jpeg",
        publishedAt: "27 May 2025",
        readingTime: "10 min read",
    },
    {
        id: "article-3",
        title: "Dynamic Search Ads + Personalization: A Conversion Strategy That Works",
        summary: "Learn how to create high-converting Dynamic Search Ads with personalization. Learn 7 ways to customize DSAs and boost results.",
        href: "#",
        thumbnailUrl: "/assets/images/blogs/related-article-3.png",
        publishedAt: "27 May 2025",
        readingTime: "12 min read",
    },
];

const croTools: Tool[] = [
    {
        id: "grona",
        name: "Grona",
        imageUrl: "/assets/images/blogs/relevic-homepage.png",
        description: [
            "Grona is built for marketers who want to personalize every visit without waiting on developers. You can run A/B tests, tailor content by campaign, and update layouts in just a few clicks.",
            "Our platform uses an advanced approach to bring personalization and testing together. Using our intuitive interface, you can create multiple page variations, run split URL tests, multivariate experiments, and multipage campaigns, all with minimal technical overhead. The platform lets you define traffic allocations, set test durations, and measure statistical significance to identify true winners.",
        ],
        features: [
            "Visitor behavior segmentation",
            "Geolocation targeting",
            "UTM and query parameters",
            "A/B and multivariate variations",
        ],
        isFeatured: true,
    },
    {
        id: "searchpilot",
        name: "SearchPilot",
        imageUrl: "/assets/images/blogs/searchpilot.png",
        description: [
            "SearchPilot lets you test changes to your website and see what helps more people find you on search engines. You can try different titles, layouts, and page content. Then check which version brings better results. It also helps you follow your rankings and create simple reports to keep track of what you've tested.",
            "Server-side SEO tests are the hallmark of SearchPilot. You can run experiments that split pages (not users) to ensure search engines and visitors see the same version. Their proprietary algorithm filters out seasonality and algorithm updates, detecting even small traffic changes while providing statistically significant results you can use to build business cases.",
        ],
        features: [
            "Change and test content without writing code",
            "Make rule-based changes across page sections",
            "Test across multiple domains and link structures",
        ],
    },
    {
        id: "hotjar",
        name: "Hotjar",
        imageUrl: "/assets/images/blogs/hotjar.png",
        description: [
            "A lot of visitors click around your site, but you aren't sure what's stopping them from converting. Hotjar is a CRO tool that reveals what users do and how they feel while browsing your pages. It shows heatmaps to track where people click, move, and scroll. You can watch real sessions to see where users get stuck or lose interest.",
            "Hotjar makes your A/B testing and personalization efforts much more effective. Instead of guessing what to test, you can use Hotjar's recordings to spot exactly where users struggle with your current design. This helps you create test variations that actually solve real problems.",
        ],
        features: [
            "Heatmaps and recordings to track user actions",
            "On-site surveys and feedback tools",
            "Funnel reports to spot problem pages",
        ],
    },
    {
        id: "adobe-target",
        name: "Adobe Target",
        imageUrl: "/assets/images/blogs/adobe-target.png",
        description: [
            "Some tools are built for small teams. Adobe Target is built for businesses with a lot going on. It helps you test and personalize digital experiences across your website, app, emails, and more. That helps you deliver the right content to the right people at the right time.",
            "Adobe Target excels at A/B testing and personalization for enterprise-level needs. You can easily create different versions of your pages to see which designs or messages convert best. Its AI-powered personalization automatically tailors content to different audience segments based on their behavior and preferences. The visual editor lets you make changes without coding, while robust analytics show you exactly how each variation performs.",
        ],
        features: [
            "Integration with Adobe Analytics for deeper insights",
            "Advanced targeting for specific audience segments",
            "AI-powered recommendations to boost engagement",
            "Visual experience composer for code-free testing",
        ],
    },
    {
        id: "heap",
        name: "Heap",
        imageUrl: "/assets/images/blogs/heap.png",
        description: [
            "Let's say people are signing up for your product, but you're not sure what got them there. Did they click a button on the homepage? Did they visit the pricing page first? Heap helps you find out without setting anything up ahead of time. It also tracks clicks, page views, and other actions as soon as someone visits your site. You don't need to create events or write any code. You can ask questions in plain words. Heap's AI CoPilot gives clear answers and helps you explore what users are doing.",
            "What makes Heap valuable for testing is that it captures every user interaction automatically. You can see exactly how users behave differently in each variation and create targeted segments for personalization based on real behavior patterns. This helps you understand not just which test won, but why it won and how to personalize experiences for different user groups.",
        ],
        features: [
            "Track clicks, views, and actions automatically",
            "Show full user journeys and drop-off points",
            "Ask questions and get simple answers",
        ],
    },
    {
        id: "optimizely",
        name: "Optimizely",
        imageUrl: "/assets/images/blogs/optimizely.png",
        description: [
            "You want to launch a big homepage change. But what if it hurts your numbers? With Optimizely, you don't have to guess. You can test one version next to another and let the results decide.",
            "It's made for teams that need to test across large websites, apps, or product features. You can try changes without touching code or run deeper tests behind the scenes. You can also show different content to different groups and track how each one reacts.",
            "Optimizely also lets you personalize your site based on who's visiting. For example, if someone has been to your site before and bought running shoes, you can show them new arrivals in running gear right on the homepage. For someone who's never visited, you might show an email signup with a 10% discount instead. Plus, you can test different personalized experiences to see which ones actually drive more sales or signups for each specific customer group.",
        ],
        features: [
            "Work with or without coding",
            "Support multi-page and feature-level testing",
            "Help teams track results across channels",
        ],
    },
    {
        id: "statsig",
        name: "Statsig",
        imageUrl: "/assets/images/blogs/statsig.png",
        description: [
            "For marketers closely working with product teams, Statsig is a CRO tool that helps you test ideas before going live. If you're planning a new pricing page, a different sign-up flow, or a feature inside your app, you can use this tool to test with a small group first.",
            "The results show what works and what needs to change. You can fix problems early and roll out updates only when you're ready. Statsig lets you control who sees what, and all the results stay in your own system.",
            "The tool makes A/B testing and personalization feel seamless rather than technical. Their feature flags let you instantly switch experiences on or off for specific users without needing to deploy new code each time. This makes it practical to personalize experiences based on user behavior, location, or account type without bogging down your CRO team.",
        ],
        features: [
            "Ready-to-use templates for quick test setup",
            "Holdout groups to measure true impact",
            "Easy integration with tools like Mixpanel or Amplitude",
        ],
    },
];

const HeroSection = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-primary">
            <div className="relative mx-auto flex max-w-container flex-col items-center px-4 py-16 md:flex-row md:px-8 md:pt-16 md:pb-24">
                <div className="flex max-w-180 flex-col items-start md:flex-1 md:max-w-none md:pr-8">
                    <BadgeGroup size="md" addonText="CRO" color="brand" theme="light" className="pr-3" iconTrailing={null}>
                        10 min read
                    </BadgeGroup>
                    <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-xl">
                        A/B Testing & Personalization
                    </h1>
                    <p className="mt-4 max-w-140 text-lg text-tertiary md:mt-6 md:text-xl">
                        What is the Must-Have CRO Software for Marketers?
                    </p>
                    <p className="mt-4 max-w-140 text-lg text-tertiary md:mt-6 md:text-xl">
                        Discover the best CRO software for testing and personalization. Compare top tools and learn how to boost your conversion rates.
                    </p>

                    <div className="mt-8 flex items-center gap-3 md:mt-12">
                        <Image src={withBasePath("/assets/images/blogs/author.jpeg")} width={48} height={48} className="size-12 rounded-full object-cover" alt="Grona Team" />
                        <div>
                            <p className="text-md font-semibold text-primary">Grona Team</p>
                            <p className="text-md text-tertiary">Published 14 Jan 2026</p>
                        </div>
                    </div>
                </div>

                <Image
                    className="mt-16 h-100 w-full object-cover md:mt-0 md:h-180 md:w-140 md:flex-shrink-0"
                    src={withBasePath("/assets/images/blogs/feature-cro.png")}
                    alt="CRO Software Dashboard"
                    width={560}
                    height={720}
                />
            </div>

            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex justify-center gap-16">
                    <div className="hidden w-60 flex-col gap-8 md:flex">
                        <div className="w-full border-t border-secondary" />
                        <div className="flex flex-col gap-4">
                            <p className="text-md font-semibold text-brand-secondary">Table of contents</p>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: "What is CRO Software?", href: "#what-is-cro" },
                                    { title: "Best CRO Software", href: "#best-cro-software" },
                                    { title: "Grona", href: "#grona" },
                                    { title: "SearchPilot", href: "#searchpilot" },
                                    { title: "Hotjar", href: "#hotjar" },
                                    { title: "Adobe Target", href: "#adobe-target" },
                                    { title: "Heap", href: "#heap" },
                                    { title: "Optimizely", href: "#optimizely" },
                                    { title: "Statsig", href: "#statsig" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button href={item.href} size="lg" color="link-gray">
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full border-t border-secondary" />
                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy(window.location.href)} iconLeading={copied ? Check : Link01} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                    <div className="max-w-prose md:max-w-180">
                        <div className="mx-auto prose md:prose-lg">
                            <p className="lead">
                                If you're still guessing what drives conversions, you're leaving money on the table. With the right conversion rate optimization
                                (CRO) software, you don't need to guess. You can test, personalize, and tweak every part of your site until it performs.
                            </p>
                            <p className="lead">
                                This article covers the must-have tools for <strong>A/B testing and personalization</strong>. The kind that helps you optimize like a
                                pro and convert more visitors into customers.
                            </p>
                            <hr />
                            <h2 id="what-is-cro">What is CRO Software for Marketers?</h2>
                            <p>
                                CRO stands for conversion rate optimization. It's a way to improve your site so more visitors take action, whether that's buying a
                                product, signing up, or booking a call.
                            </p>
                            <p>
                                CRO software helps marketers do this with tools that test, track, and personalize. You can test everything from headlines to page
                                layouts and calls to action.
                            </p>
                            <h3>How Marketers Use CRO Tools</h3>
                            <p>Marketers use CRO tools to:</p>
                            <ul>
                                <li>Try different versions of a page</li>
                                <li>See where users click or leave</li>
                                <li>
                                    <strong>Personalize content</strong> based on visitor behavior
                                </li>
                                <li>Collect feedback and measure what works</li>
                            </ul>
                            <p>
                                Although CRO covers many areas, this guide focuses on tools that let you A/B test and personalize (because these are the core of{" "}
                                <strong>conversion-focused marketing</strong>).
                            </p>

                            <hr />

                            <h2 id="best-cro-software">Best CRO Software For Marketers: Our Top Picks</h2>
                            <p>
                                Now that you know what CRO software does, let's go over the tools worth your time. To build this list, we looked at ease of use, user
                                experience, pricing, support, and how well each tool helps you take action. We also considered whether the features are
                                beginner-friendly or built for more advanced marketers.
                            </p>
                            <p>Each tool on this list offers a different strength, but all of them are built to help you improve your site and get better results.</p>
                        </div>

                        {/* Tool Sections */}
                        {croTools.map((tool, index) => (
                            <div key={tool.id} className="mt-12 md:mt-16" id={tool.id}>
                                <div className="mx-auto prose md:prose-lg">
                                    <h3>
                                        {index + 1}. {tool.name}
                                    </h3>
                                </div>

                                <figure className="my-8">
                                    <Image
                                        className="h-60 w-full rounded-lg object-cover md:h-96"
                                        src={tool.imageUrl}
                                        alt={`${tool.name} homepage`}
                                        width={1200}
                                        height={384}
                                        onError={(e) => {
                                            // Fallback for missing images
                                            e.currentTarget.src = "/assets/images/blogs/feature-cro.png";
                                        }}
                                    />
                                </figure>

                                <div className="mx-auto prose md:prose-lg">
                                    {tool.description.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}

                                    <div
                                        className={cx(
                                            "not-prose my-6 rounded-lg p-6",
                                            tool.isFeatured ? "bg-brand-50 border border-brand-200" : "bg-secondary",
                                        )}
                                    >
                                        <p className="mb-3 text-md font-semibold text-primary">{tool.isFeatured ? "Grona includes:" : `${tool.name} features:`}</p>
                                        <ul className="flex flex-col gap-2">
                                            {tool.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-md text-tertiary">
                                                    <span className="mt-1 text-brand-600">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {tool.isFeatured && (
                                        <p className="text-center">
                                            <strong>It works with major platforms and helps you start optimizing immediately.</strong>
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Conclusion CTA */}
                        <div className="mx-auto prose md:prose-lg mt-16">
                            <hr />
                            <h2>Ready to Turn Visitors into Conversions?</h2>
                            <p>You've seen the tools. Now it's time to use them.</p>
                            <p>
                                CRO software helps you test ideas, find what works, and make your site better for every visitor. You don't need to guess what will
                                boost clicks or sign-ups. You can know for sure.
                            </p>
                            <p>
                                If you're ready to optimize your conversion rates and drive real growth, Grona can help. We combine AI-driven insights with powerful
                                testing and personalization capabilities to help you maximize every visitor.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button size="xl" className="flex-1">
                                Start Your Free Trial
                            </Button>
                            <Button size="xl" color="secondary" className="flex-1">
                                Book a Demo
                            </Button>
                        </div>

                        <div className="-mt-px mt-12 flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row">
                            <div className="flex gap-2">
                                <Badge color="brand" size="md">
                                    CRO
                                </Badge>
                                <Badge color="indigo" size="md">
                                    A/B Testing
                                </Badge>
                                <Badge color="pink" size="md">
                                    Personalization
                                </Badge>
                            </div>
                            <div className="flex gap-3 md:hidden">
                                <Button color="secondary" size="md" onClick={() => copy(window.location.href)} iconLeading={copied ? Check : Link01} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
                (isReactComponent(Icon) ? <Icon className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover md:size-6" /> : null)}
        </Button>
    );
};

const ArticleCard = ({ article }: { article: Article }) => (
    <article className="flex flex-col gap-4">
        <div className="relative">
            <a href={article.href} className="w-full" tabIndex={-1}>
                <Image src={article.thumbnailUrl} alt={article.title} width={600} height={400} className="aspect-[1.5] w-full rounded-lg object-cover" />
            </a>
        </div>

        <div className="flex flex-col items-start gap-3">
            <div className="flex flex-col gap-2">
                <a
                    href={article.href}
                    className="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    {article.title}
                </a>
                <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-tertiary">
                <time>{article.publishedAt}</time>
                <span>•</span>
                <span>{article.readingTime}</span>
            </div>

            <Button href={article.href} color="link-color" size="lg" iconTrailing={ArrowUpRight}>
                Read article
            </Button>
        </div>
    </article>
);

const RelatedArticlesSection = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Related articles</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Continue reading</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Dive deeper into conversion optimization and marketing best practices.
                        </p>
                    </div>

                    <div className="mt-8 hidden gap-3 lg:mt-0 lg:flex">
                        <Button size="xl" href="/blog">
                            View all articles
                        </Button>
                    </div>
                </div>

                <Carousel.Root className="mt-12 md:mt-16" opts={{ align: "start" }}>
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:gap-8 md:pr-8">
                        {relatedArticles.map((article) => (
                            <Carousel.Item key={article.id} className="max-w-xs md:max-w-96">
                                <ArticleCard article={article} />
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                    <div className="mt-8 flex gap-4 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
                <div className="mt-12 flex flex-col gap-3 lg:hidden">
                    <Button size="xl" href="/blog">
                        View all articles
                    </Button>
                </div>
            </div>
        </section>
    );
};

const NewsletterCTA = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary">
                            <span className="hidden md:inline">Get conversion optimization tips in your inbox</span>
                            <span className="md:hidden">Stay updated with CRO tips</span>
                        </h2>
                        <p className="mt-4 text-lg text-tertiary lg:text-xl">
                            Join thousands of marketers getting weekly insights on A/B testing, personalization, and conversion optimization.
                        </p>
                    </div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Newsletter signup:", data);
                        }}
                        className="flex w-full flex-col gap-4 sm:flex-row md:max-w-100"
                    >
                        <Input isRequired id="newsletter-email" name="email" type="email" placeholder="Enter your email" size="md" wrapperClassName="flex-1" />
                        <Button type="submit" size="xl">
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

const BlogPostCROSoftware = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <HeroSection />

            <SectionDivider />

            <RelatedArticlesSection />

            <SectionDivider />

            <NewsletterCTA />
        </div>
    );
};

export default BlogPostCROSoftware;
