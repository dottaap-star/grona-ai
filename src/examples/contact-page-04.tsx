"use client";

import { MarkerPin02, MessageChatCircle, MessageSmileCircle, Phone } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";

const ContactMap01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Our locations</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Come visit our friendly team at one of our offices.</p>
                </div>

                <div className="mt-16 flex flex-col gap-12 md:mt-24 md:gap-16">
                    <iframe
                        title="Our address"
                        src="https://snazzymaps.com/embed/451894"
                        className="h-80 w-full border-none md:h-100"
                        data-chromatic="ignore"
                    />
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Retail store",
                                subtitle: "Mon-Sat 9am to 5pm.",
                                icon: MarkerPin02,
                                cta: "150 Brunswick Street\nFitzroy VIC 3065 AU",
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                            {
                                title: "Showroom",
                                subtitle: "Mon-Fri 9am to 5pm.",
                                cta: "50 Flinders Street\nMelbourne VIC 3000 AU",
                                icon: MarkerPin02,
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                            {
                                title: "Head office",
                                subtitle: "Mon-Fri 9am to 5pm.",
                                icon: MarkerPin02,
                                cta: "100 Smith Street\nCollingwood VIC 3066 AU",
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col items-center text-center">
                                <item.icon className="size-6 text-icon-fg-brand" />
                                <h3 className="mt-3 text-lg font-semibold text-primary md:mt-4 md:text-xl">{item.title}</h3>
                                <p className="mt-1 text-md text-tertiary md:mt-2">{item.subtitle}</p>
                                <Button color="link-color" size="lg" href={item.href} className="mt-3 whitespace-pre md:mt-4">
                                    {item.cta}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const ContactSectionIconCards01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We'd love to hear from you</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Our friendly team is always here to chat.</p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "Chat to sales",
                                subtitle: "Speak to our friendly team.",
                                href: "mailto:sales@untitledui.com",
                                cta: "sales@untitledui.com",
                                icon: MessageSmileCircle,
                            },
                            {
                                title: "Chat to support",
                                subtitle: "We're here to help.",
                                href: "mailto:sales@untitledui.com",
                                cta: "support@untitledui.com",
                                icon: MessageChatCircle,
                            },
                            {
                                title: "Visit us",
                                subtitle: "Visit our office HQ.",
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                                cta: "100 Smith Street\nCollingwood VIC 3066 AU",
                                icon: MarkerPin02,
                            },
                            { title: "Call us", subtitle: "Mon-Fri from 8am to 5pm.", href: "tel:+1 (555) 000-0000", cta: "+1 (555) 000-0000", icon: Phone },
                        ].map((item) => (
                            <li key={item.title} className="flex h-full flex-col items-start bg-secondary p-6">
                                <FeaturedIcon size="lg" icon={item.icon} color="brand" theme="dark" />

                                <h3 className="mt-12 text-lg font-semibold text-primary md:mt-16 md:text-xl">{item.title}</h3>
                                <p className="mt-1 text-md text-tertiary md:mt-2">{item.subtitle}</p>
                                <Button color="link-color" size="lg" href={item.href} className="mt-4 whitespace-pre md:mt-5">
                                    {item.cta}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const navList = [
    {
        title: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge size="sm" type="modern" className="ml-1">
                        New
                    </Badge>
                ),
            },
            { label: "Tutorials", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Releases", href: "#" },
        ],
    },

    {
        title: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
];

const FooterLarge04 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                        <UntitledLogo className="h-8 w-min shrink-0" />
                        <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <nav className="flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 xl:justify-end">
                        <ul className="grid w-full grid-cols-2 gap-8 md:max-w-xs">
                            {navList.map((category) => (
                                <li key={category.title}>
                                    <h4 className="text-sm font-semibold text-primary">{category.title}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label}>
                                                <Button color="link-color" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex w-full flex-col gap-4 md:max-w-90"
                        >
                            <label htmlFor="newsletters-email" className="text-sm font-semibold text-primary">
                                Stay up to date
                            </label>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Input
                                    isRequired
                                    id="newsletters-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    size="md"
                                    wrapperClassName="flex-1"
                                />
                                <Button type="submit" size="lg">
                                    Subscribe
                                </Button>
                            </div>
                        </Form>
                    </nav>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { title: "Terms", href: "#" },
                            { title: "Privacy", href: "#" },
                            { title: "Cookies", href: "#" },
                        ].map((item) => (
                            <li key={item.title}>
                                <a href={item.href} className="text-md text-quaternary transition duration-100 ease-linear hover:text-tertiary">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const ContactPage04 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <ContactMap01 />

            <ContactSectionIconCards01 />

            <FooterLarge04 />
        </div>
    );
};

export default ContactPage04;
