"use client";

import { useState } from "react";
import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { motion } from "motion/react";
import { cx } from "@/utils/cx";

const faqsExtended = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        icon: Heart,
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
        icon: SwitchHorizontal01,
    },
    {
        question: "What is your cancellation policy?",
        answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
        icon: SlashCircle01,
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        icon: File05,
    },
    {
        question: "How does billing work?",
        answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
        icon: CreditCardRefresh,
    },
    {
        question: "How do I change my account email?",
        answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
        icon: Mail01,
    },
];

export const FAQAccordion03Brand = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    <div className="flex w-full max-w-3xl flex-col lg:max-w-xl">
                        <span className="text-sm font-semibold text-secondary_on-brand md:text-md">Support</span>

                        <h2 className="mt-3 text-display-sm font-semibold text-primary_on-brand md:text-display-md">FAQs</h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5">
                            Everything you need to know about the product and billing. Can't find the answer you're looking for? Please{" "}
                            <a
                                href="#"
                                className="rounded-xs underline underline-offset-4 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                chat to our friendly team
                            </a>
                            .
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-8">
                        {faqsExtended.map((faq, index) => (
                            <div key={faq.question}>
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer items-start justify-between gap-6 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                    >
                                        <span className="text-md font-semibold text-primary_on-brand">{faq.question}</span>

                                        <span aria-hidden="true" className="flex size-6 items-center text-icon-fg-brand_on-brand">
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
                                                    className={cx(
                                                        "origin-center rotate-0 transition duration-150 ease-out",
                                                        openQuestions.has(index) && "-rotate-90",
                                                    )}
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
                                    animate={{
                                        height: openQuestions.has(index) ? "auto" : 0,
                                        opacity: openQuestions.has(index) ? 1 : 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        damping: 24,
                                        stiffness: 240,
                                        bounce: 0.4,
                                    }}
                                >
                                    <div className="pt-1 pr-12">
                                        <p className="text-md text-tertiary_on-brand">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
