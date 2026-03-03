"use client";

import { type ReactNode, useState } from "react";
import {
    ChartBreakoutSquare,
    Command,
    CreditCardRefresh,
    Heart,
    MessageSmileCircle,
    Rocket01,
    Zap,
} from "@untitledui/icons";
import type { FC } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
    <a href={href} className="font-semibold text-brand-secondary hover:text-brand-secondary_hover transition-colors">
        {children}
    </a>
);

const faqs: { question: string; answer: ReactNode; icon: FC<{ className?: string }> }[] = [
    {
        question: "Do I need coding experience to use Grona?",
        answer: (
            <>
                No. Grona is designed for marketers and non-technical users. Just describe what you want to improve in plain English, and our AI handles the technical implementation. Works with <Link href="/integrations">any platform</Link>.
            </>
        ),
        icon: Heart,
    },
    {
        question: "Can't I just use ChatGPT for this?",
        answer:
            "ChatGPT can suggest what to change. Grona actually does it. When you paste a URL, Grona pulls live competitor data, analyzes traffic sources, generates projected heatmaps, and gives you recommendations backed by real market data. Then you edit your site through chat, preview changes live, and deploy an A/B test to real visitors with built-in tracking. That full loop, from research to live experiment, is what a general-purpose AI can't do.",
        icon: MessageSmileCircle,
    },
    {
        question: "How quickly can I see results?",
        answer: (
            <>
                Most users see their first improvement suggestions within minutes. Once you deploy, results start tracking immediately. Many customers see measurable improvements within the first week. See <Link href="/how-it-works">how it works</Link>.
            </>
        ),
        icon: Zap,
    },
    {
        question: "What makes Grona different from other tools?",
        answer:
            "Grona is the only chat-first CRO tool that combines competitive research with live experimentation. Instead of complex dashboards and technical setup, you simply chat with our AI assistant to improve your website. Everything from analysis to deployment happens through conversation.",
        icon: Rocket01,
    },
    {
        question: "Can I use Grona with Shopify, WordPress, or other platforms?",
        answer: (
            <>
                Yes. Grona works with any website. Just copy and paste our installation code into your site's HTML, or use our platform-specific guides for Shopify, WordPress, Webflow, Wix, and Google Tag Manager. See all <Link href="/integrations">integrations</Link>.
            </>
        ),
        icon: Command,
    },
    {
        question: "What kind of results can I expect?",
        answer:
            "Results vary by website and campaign, but many customers see conversion lifts of 15-40%. The key is testing and iterating. Our AI helps you quickly try different approaches and measure what works.",
        icon: ChartBreakoutSquare,
    },
    {
        question: "Is there a free plan?",
        answer: (
            <>
                Yes. Grona's Starter plan is completely free: 1 campaign, up to 1,000 pageviews per month. No credit card required. <Link href="/pricing">See all plans</Link>.
            </>
        ),
        icon: CreditCardRefresh,
    },
];

export const FAQSection = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="relative z-0 bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Frequently asked questions</h2>
                </div>

                <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                    <div className="flex flex-col gap-8">
                        {faqs.map((faq, index) => (
                            <div key={faq.question} className="not-first:-mt-px not-first:border-t not-first:border-secondary not-first:pt-6">
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                    >
                                        <span className="text-md font-semibold text-primary">{faq.question}</span>

                                        <span aria-hidden="true" className="flex size-6 items-center text-fg-quaternary">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line
                                                    className={`origin-center rotate-0 transition duration-150 ease-out ${openQuestions.has(index) ? "-rotate-90" : ""}`}
                                                    x1="12"
                                                    y1="8"
                                                    x2="12"
                                                    y2="16"
                                                ></line>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <motion.div
                                    className="overflow-hidden"
                                    initial={false}
                                    animate={{ height: openQuestions.has(index) ? "auto" : 0, opacity: openQuestions.has(index) ? 1 : 0 }}
                                    transition={{ type: "spring", damping: 24, stiffness: 240, bounce: 0.4 }}
                                >
                                    <div className="pt-1 pr-8 md:pr-12">
                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
                    <p className="text-md text-tertiary">
                        Have more questions? Check the <a href="/faq" className="font-semibold text-brand-secondary hover:text-brand-secondary_hover transition-colors">full FAQ</a> or{" "}
                        <Button color="link-color" size="md" href="mailto:hello@grona.ai" className="inline p-0">
                            get in touch
                        </Button>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};
