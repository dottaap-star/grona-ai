"use client";

import { ArrowLeft, ArrowRight, Home02, BookOpen01, CreditCard02, Stars02 } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";
import { FooterSection } from "@/app/homepage/footer-section";

const recoveryLinks = [
    {
        title: "Features",
        description: "See what Grona can do",
        href: "/features",
        icon: Stars02,
    },
    {
        title: "Pricing",
        description: "Plans start free",
        href: "/pricing",
        icon: CreditCard02,
    },
    {
        title: "Blog",
        description: "CRO tips and strategies",
        href: "/blog",
        icon: BookOpen01,
    },
    {
        title: "Homepage",
        description: "Start from the beginning",
        href: "/",
        icon: Home02,
    },
];

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="bg-primary">
            <Header isFloating />

            <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">
                            404 error
                        </span>
                        <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                            This page has a 0% conversion rate
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                            Even our AI can&apos;t optimize a page that doesn&apos;t exist. But we
                            can help you find what you&apos;re looking for.
                        </p>

                        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row">
                            <Button
                                color="secondary"
                                size="xl"
                                iconLeading={ArrowLeft}
                                onClick={() => router.back()}
                            >
                                Go back
                            </Button>
                            <Button size="xl" href="/">
                                Take me home
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
                        <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                            Where would you like to go?
                        </h2>
                    </div>

                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
                        {recoveryLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="group flex items-start gap-4 rounded-2xl border border-secondary bg-primary p-6 transition-shadow hover:shadow-lg md:p-8"
                            >
                                <FeaturedIcon
                                    icon={link.icon}
                                    size="lg"
                                    color="brand"
                                    theme="light"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-primary">
                                        {link.title}
                                    </h3>
                                    <p className="mt-1 text-md text-tertiary">
                                        {link.description}
                                    </p>
                                </div>
                                <ArrowRight className="mt-1 size-5 text-tertiary transition-colors group-hover:text-brand-secondary" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
}
