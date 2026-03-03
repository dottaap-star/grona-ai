"use client";

import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

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

export const FAQSimple04Brand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">FAQs</h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">
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

                <div className="mt-12 md:mt-16">
                    <dl className="grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {faqsExtended.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col">
                                    <dt className="text-md font-semibold text-primary_on-brand">{item.question}</dt>
                                    <dd className="mt-1 text-md text-tertiary_on-brand">{item.answer}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand-section_subtle px-5 py-8 md:mt-16 md:flex-row md:gap-8 md:p-8">
                    <div className="w-full max-w-3xl">
                        <h4 className="text-xl font-semibold text-primary_on-brand">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary_on-brand md:text-lg">
                            Can't find the answer you're looking for? Please chat to our friendly team.
                        </p>
                    </div>
                    <Button size="xl">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};
