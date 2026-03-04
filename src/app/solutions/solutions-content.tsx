"use client";

import { ArrowRight, ShoppingBag01, Code02, Building07 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const verticals = [
    {
        title: "E-commerce",
        description:
            "Increase add-to-cart rates, reduce cart abandonment, and optimize product pages with AI-powered A/B tests.",
        href: "/for/ecommerce",
        icon: ShoppingBag01,
    },
    {
        title: "SaaS",
        description:
            "Optimize trial-to-paid conversions, landing page performance, and pricing page layout without engineering tickets.",
        href: "/for/saas",
        icon: Code02,
    },
    {
        title: "Agencies",
        description:
            "Deliver CRO results for clients without hiring developers. Manage multiple sites from one account.",
        href: "/for/agencies",
        icon: Building07,
    },
];

export const SolutionsContent = () => {
    return (
        <div className="bg-primary">
            {/* Hero */}
            <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">
                            Solutions by industry
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                            See how Grona works for your business type.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vertical Cards */}
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
                        {verticals.map((vertical) => (
                            <a
                                key={vertical.title}
                                href={vertical.href}
                                className="group flex flex-col rounded-2xl border border-secondary bg-primary p-6 transition-shadow hover:shadow-lg md:p-8"
                            >
                                <FeaturedIcon icon={vertical.icon} size="lg" color="brand" theme="light" />
                                <h2 className="mt-5 text-xl font-semibold text-primary">{vertical.title}</h2>
                                <p className="mt-2 flex-1 text-md text-tertiary">{vertical.description}</p>
                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition-colors group-hover:text-brand-secondary_hover">
                                    Learn more
                                    <ArrowRight className="size-4" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* General CTA */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                        <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                            Don't see your industry?
                        </h2>
                        <p className="mt-4 text-md text-tertiary">
                            Grona works with any website, any industry. Start free.
                        </p>
                        <div className="mt-8">
                            <Button href="/features" size="lg" color="primary" iconTrailing={ArrowRight}>
                                See all features
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
