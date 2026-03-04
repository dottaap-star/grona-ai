"use client";

import { useRef, useState } from "react";
import { ArrowRight, CreditCard02, Phone, HelpCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { FooterSection } from "@/app/homepage/footer-section";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const quickLinks = [
    {
        title: "Looking for pricing?",
        href: "/pricing",
        icon: CreditCard02,
    },
    {
        title: "Want a live demo?",
        href: "/demo",
        icon: Phone,
    },
    {
        title: "Technical question?",
        href: "/faq",
        icon: HelpCircle,
    },
];

const ContactFormSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const mountedAt = useRef(Date.now());

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        const form = e.currentTarget;
        const data = new FormData(form);

        // Honeypot check: if the hidden field is filled, silently discard
        if (data.get("website")) {
            setSubmitted(true);
            return;
        }

        // Time-based check: reject submissions faster than 3 seconds
        if (Date.now() - mountedAt.current < 3000) {
            setSubmitted(true);
            return;
        }

        const firstName = data.get("firstName") as string;
        const lastName = data.get("lastName") as string;
        const email = data.get("email") as string;
        const message = data.get("message") as string;

        if (!firstName || !email || !message) {
            setError("Please fill in all required fields.");
            return;
        }

        // Build mailto link and open it
        const subject = encodeURIComponent(
            `Contact from ${firstName} ${lastName}`.trim()
        );
        const body = encodeURIComponent(
            `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        );
        window.location.href = `mailto:hello@grona.ai?subject=${subject}&body=${body}`;

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center text-center py-12">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                    Message sent
                </h2>
                <p className="mt-4 text-lg text-tertiary">
                    We typically respond within one business day. Check your email client to
                    complete sending.
                </p>
                <Button href="/" size="lg" className="mt-8">
                    Back to homepage
                </Button>
            </div>
        );
    }

    return (
        <div className="grid gap-16 lg:grid-cols-[1fr_auto]">
            <div className="flex w-full flex-col gap-12 sm:max-w-lg sm:justify-self-center lg:justify-self-start lg:py-4">
                <div className="flex flex-col">
                    <h1 className="text-display-md font-semibold text-primary">Get in touch</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Have a question about Grona? We typically respond within one business day.
                    </p>
                </div>

                <Form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
                            <Input
                                isRequired
                                size="md"
                                name="firstName"
                                label="First name"
                                placeholder="First name"
                                wrapperClassName="flex-1"
                            />
                            <Input
                                size="md"
                                name="lastName"
                                label="Last name"
                                placeholder="Last name"
                                wrapperClassName="flex-1"
                            />
                        </div>
                        <Input
                            isRequired
                            size="md"
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="you@company.com"
                        />
                        <TextArea
                            isRequired
                            label="Message"
                            name="message"
                            placeholder="Tell us how we can help..."
                            rows={4}
                        />

                        {/* Honeypot: hidden from humans, bots will fill it */}
                        <div aria-hidden="true" className="absolute -left-[9999px]">
                            <input
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <Checkbox
                            name="privacy"
                            size="md"
                            hint={
                                <>
                                    You agree to our{" "}
                                    <a
                                        href="/privacy"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </>
                            }
                        />
                    </div>

                    {error && <p className="text-sm text-error-primary">{error}</p>}

                    <Button type="submit" size="xl">
                        Send message
                    </Button>
                </Form>
            </div>

            {/* Quick links sidebar */}
            <div className="flex flex-col gap-4 lg:w-72 lg:pt-4">
                <p className="text-sm font-semibold text-quaternary">Maybe we can help faster</p>
                {quickLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="group flex items-center gap-3 rounded-xl border border-secondary bg-primary p-4 transition-shadow hover:shadow-md"
                    >
                        <FeaturedIcon icon={link.icon} size="md" color="brand" theme="light" />
                        <span className="flex-1 text-sm font-semibold text-primary">
                            {link.title}
                        </span>
                        <ArrowRight className="size-4 text-tertiary transition-colors group-hover:text-brand-secondary" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default function ContactPage01() {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <section className="bg-primary py-16 pt-32 md:py-24 md:pt-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <ContactFormSection />
                </div>
            </section>

            <FooterSection />
        </div>
    );
}
