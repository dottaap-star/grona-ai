"use client";

import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const faqs = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
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

export const FAQSimple03Brand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:w-192">
                    <span className="text-sm font-semibold text-secondary_on-brand md:text-md">Support</span>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary_on-brand md:text-display-md">Frequently asked questions</h2>
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

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-24 lg:grid-cols-2 lg:items-center">
                    <dl className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-1">
                        {faqs.slice(0, 4).map((item) => (
                            <div key={item.question}>
                                <div className="flex gap-4">
                                    <FeaturedIcon color="brand" theme="dark" className="md:hidden" size="md" icon={item.icon} />
                                    <FeaturedIcon color="brand" theme="dark" className="hidden md:flex" size="lg" icon={item.icon} />

                                    <div className="flex flex-col pt-1.5 md:pt-2.5">
                                        <dt className="text-lg font-semibold text-primary_on-brand">{item.question}</dt>
                                        <dd className="mt-1 text-md text-tertiary_on-brand">{item.answer}</dd>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </dl>

                    <div className="h-60 md:-ml-8 md:h-140">
                        <img src="https://www.untitledui.com/marketing/smiling-girl-5.webp" alt="Smiling girl" className="size-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};
