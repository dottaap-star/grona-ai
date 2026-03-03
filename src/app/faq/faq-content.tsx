"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { SectionDivider } from "@/components/shared-assets/section-divider";

import { faqCategories } from "./faq-data";

// ─── Deep Link Map ──────────────────────────────────────────────────

const deepLinks: Record<string, { text: string; href: string }[]> = {
    "How does Grona work?": [
        { text: "See how it works", href: "/how-it-works" },
    ],
    "What can I change on my website?": [
        { text: "See features", href: "/features" },
    ],
    "Does Grona work with Shopify?": [
        { text: "See integrations", href: "/integrations" },
    ],
    "Does Grona work with WordPress?": [
        { text: "See integrations", href: "/integrations" },
    ],
    "Does Grona work with Webflow?": [
        { text: "See integrations", href: "/integrations" },
    ],
    "Is the free tier really free?": [
        { text: "See pricing", href: "/pricing" },
    ],
    "What happens when I hit my pageview limit?": [
        { text: "See pricing", href: "/pricing" },
    ],
    "How does Grona compare to VWO?": [
        { text: "Compare with VWO", href: "/compare/vwo" },
    ],
    "Who uses Grona?": [
        { text: "Read case study", href: "/case-studies/mouthshield" },
    ],
    "What if I need help?": [
        { text: "Book a demo", href: "/demo" },
    ],
};

// ─── Accordion Item ─────────────────────────────────────────────────

function AccordionItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const links = deepLinks[question];

    return (
        <div className="border-b border-secondary">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-5 text-left"
            >
                <span className="text-lg font-medium text-primary">
                    {question}
                </span>
                <ChevronDown
                    className={`size-5 shrink-0 text-quaternary transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-secondary">{answer}</p>
                        {links && links.length > 0 && (
                            <div className="flex gap-4 pb-5">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm font-semibold text-brand-secondary hover:text-brand-secondary_hover"
                                    >
                                        {link.text} &rarr;
                                    </Link>
                                ))}
                            </div>
                        )}
                        {!links && <div className="pb-1" />}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── FAQ Content ────────────────────────────────────────────────────

export function FAQContent() {
    return (
        <>
            {/* S1: Hero */}
            <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">
                            Frequently asked questions
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Everything you need to know about Grona.
                        </p>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* S2: FAQ Categories */}
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl">
                        {faqCategories.map((category, categoryIndex) => (
                            <div
                                key={category.label}
                                className={
                                    categoryIndex > 0 ? "mt-12 md:mt-16" : ""
                                }
                            >
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                                    {category.label}
                                </h3>
                                <div className="mt-4">
                                    {category.items.map((item) => (
                                        <AccordionItem
                                            key={item.question}
                                            question={item.question}
                                            answer={item.answer}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* S3: CTA */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            Questions answered? Start optimizing.
                        </h2>
                        <div className="mt-8">
                            <Button
                                color="primary"
                                size="xl"
                                href="https://app.grona.ai/signup"
                            >
                                Start Free
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-tertiary">
                            No credit card required.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
