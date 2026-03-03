"use client";

import { useState } from "react";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { TextArea } from "@/components/base/textarea/textarea";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import countries, { phoneCodeOptions } from "@/utils/countries";
import { cx } from "@/utils/cx";

const pins = [
    {
        location: "Seattle, USA",
        address: "911 E Pike Street, Capitol Hill, Seattle, WA 98122",
        flag: "https://www.untitledui.com/images/flags/US.svg",
        position: {
            x: 130,
            y: 157,
        },
    },
    {
        location: "San Francisco, USA",
        address: "2201 Valencia Street, Mission District, San Francisco, CA 94110",
        flag: "https://www.untitledui.com/images/flags/US.svg",
        position: {
            x: 158,
            y: 204,
        },
    },
    {
        location: "London, GB",
        address: "85 Redchurch Street, Shoreditch, London E2 7DJ",
        flag: "https://www.untitledui.com/images/flags/GB.svg",
        position: {
            x: 521,
            y: 97,
        },
    },
    {
        location: "Berlin, DE",
        address: "17 Weserstraße, Neukölln, 12045 Berlin",
        flag: "https://www.untitledui.com/images/flags/DE.svg",
        position: {
            x: 581,
            y: 73,
        },
    },
    {
        location: "Rome, IT",
        address: "12 Via del Pigneto, Pigneto, 00176 Roma RM",
        flag: "https://www.untitledui.com/images/flags/IT.svg",
        position: {
            x: 513,
            y: 176,
        },
    },
    {
        location: "Mumbai, IN",
        address: "21 Pali Hill Road, Bandra West, Mumbai, Maharashtra 400050",
        flag: "https://www.untitledui.com/images/flags/IN.svg",
        position: {
            x: 678,
            y: 224,
        },
    },
    {
        location: "Tokyo, JP",
        address: "3-15-7 Jingumae, Shibuya-ku, Tokyo 150-0001",
        flag: "https://www.untitledui.com/images/flags/JP.svg",
        position: {
            x: 843,
            y: 199,
        },
    },
    {
        location: "Melbourne, AUS",
        address: "100 Smith Street Collingwood VIC 3066 AU",
        flag: "https://www.untitledui.com/images/flags/AU.svg",
        position: {
            x: 885,
            y: 406,
        },
    },
    {
        location: "Auckland, NZ",
        address: "42 Ponsonby Road, Ponsonby, Auckland 1011",
        flag: "https://www.untitledui.com/images/flags/NZ.svg",
        position: {
            x: 958,
            y: 424,
        },
    },
];

const ContactMap02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">We'd love to hear from you</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">We have offices and teams all around the world.</p>
                </div>

                <div className="mt-16 flex flex-col gap-16 md:mt-24">
                    {/* World map */}
                    <svg className="mx-auto hidden w-full max-w-5xl overflow-visible lg:block" height="488" viewBox="0 0 1025 483" fill="none">
                        <image width="100%" x="0" y="0" href="https://www.untitledui.com/marketing/world-map-light-mode.svg" className="dark:hidden" />
                        <image width="100%" x="0" y="0" href="https://www.untitledui.com/marketing/world-map-dark-mode.svg" className="not-dark:hidden" />

                        <foreignObject width="100%" height="100%" x="0" y="0" className="overflow-visible">
                            {pins.map((pin, index) => (
                                <div key={pin.location} className="fixed" style={{ left: pin.position.x, top: pin.position.y }}>
                                    <div className="group relative">
                                        <div
                                            className={cx(
                                                "pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-[calc(100%-4px)] scale-95 opacity-0 transition duration-150 ease-in",
                                                "group-hover:pointer-events-auto group-hover:-translate-y-full group-hover:scale-100 group-hover:opacity-100 group-hover:ease-out",
                                                "group-focus-within:pointer-events-auto group-focus-within:-translate-y-full group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:ease-out",
                                            )}
                                        >
                                            <div
                                                id={`vector-map-pin-${index}`}
                                                className="relative flex w-max max-w-45 flex-col items-center rounded-lg bg-primary px-4 py-3 text-center shadow-lg ring-1 ring-secondary_alt"
                                            >
                                                <img aria-hidden="true" src={pin.flag} alt={pin.location} className="size-5 max-w-none rounded-full" />
                                                <p className="mt-2 text-xs font-semibold text-primary">{pin.location}</p>
                                                <p className="mt-1 text-xs text-tertiary">{pin.address}</p>
                                            </div>
                                        </div>

                                        <button
                                            aria-label="View location"
                                            aria-describedby={`vector-map-pin-${index}`}
                                            className="flex size-10 cursor-pointer items-center justify-center overflow-visible outline-hidden"
                                        >
                                            <span className="absolute size-10 rounded-full bg-fg-brand-secondary/10 transition duration-150 ease-linear group-focus-within:scale-[1.15] group-hover:scale-[1.15]" />
                                            <span className="absolute size-6 rounded-full bg-fg-brand-secondary/20 transition duration-150 ease-linear group-focus-within:scale-[1.15] group-hover:scale-[1.15]" />
                                            <span className="absolute size-2 rounded-full bg-fg-brand-secondary" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </foreignObject>
                    </svg>

                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Support",
                                subtitle: "Our friendly team is here to help.",
                                cta: "support@untitledui.com",
                                href: "mailto:support@untitledui.com",
                            },
                            {
                                title: "Sales",
                                subtitle: "Questions or queries? Get in touch!",
                                cta: "sales@untitledui.com",
                                href: "mailto:sales@untitledui.com",
                            },
                            {
                                title: "Phone",
                                subtitle: "Mon-Fri from 8am to 5pm.",
                                cta: "+1 (555) 000-0000",
                                href: "tel:+1 (555) 000-0000",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col items-center text-center">
                                <h3 className="text-lg font-semibold text-primary md:text-xl">{item.title}</h3>
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

const locations = [
    {
        title: "Melbourne",
        subtitle: "100 Flinders Street\nMelbourne VIC 3000 AU",
    },
    {
        title: "Sydney",
        subtitle: "100 George Street\nSydney NSW 2000 AU",
    },
    {
        title: "Byron Bay",
        subtitle: "100 Jonson Street\nByron Bay NSW 2481 AU",
    },
    {
        title: "London",
        subtitle: "100 Oxford Street\nLondon W1D 1LL UK",
    },
    {
        title: "San Francisco",
        subtitle: "100 Market Street\nSan Francisco, CA 94105 USA",
    },

    {
        title: "Sweden",
        subtitle: "Drottninggatan 100\n111 60 Stockholm SE",
    },
];

const ContactSectionSimpleIcons04 = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    <div className="w-full max-w-90">
                        <div className="text-sm font-semibold text-tertiary_on-brand md:text-md">Our locations</div>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary_on-brand md:text-display-md">Visit our stores</h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Find us at these locations.</p>
                    </div>

                    <ul className="grid w-full grid-cols-1 gap-x-16 gap-y-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 md:gap-y-8 lg:grid-cols-2 lg:px-11">
                        {locations.map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col">
                                <h3 className="text-lg font-semibold text-primary_on-brand md:text-xl">{item.title}</h3>
                                <p className="mt-1 text-md whitespace-pre text-tertiary_on-brand md:mt-2">{item.subtitle}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const ContactSectionSimpleForm03 = () => {
    const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");

    return (
        <section className="grid grid-cols-1 bg-primary lg:grid-cols-2">
            <div className="w-full px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto md:max-w-120">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Let's level up your brand, together</h2>
                    <p className="mt-4 text-lg whitespace-pre-line text-tertiary md:mt-5 md:text-xl">
                        You can reach us anytime via{" "}
                        <Button color="link-color" size="xl" href="mailto:hi@untitledui.com" className="text-lg font-medium md:text-xl">
                            hi@untitledui.com
                        </Button>
                    </p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-12 flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
                                <Input isRequired size="md" name="firstName" label="First name" placeholder="First name" wrapperClassName="flex-1" />
                                <Input isRequired size="md" name="lastName" label="Last name" placeholder="Last name" wrapperClassName="flex-1" />
                            </div>
                            <Input isRequired size="md" name="email" label="Email" type="email" placeholder="you@company.com" />
                            <InputGroup
                                size="md"
                                name="phone"
                                label="Phone number"
                                leadingAddon={
                                    <NativeSelect
                                        aria-label="Country code"
                                        value={selectedCountryPhone}
                                        onChange={(value) => setSelectedCountryPhone(value.currentTarget.value)}
                                        options={phoneCodeOptions.map((item) => ({
                                            label: item.label as string,
                                            value: item.id as string,
                                        }))}
                                    />
                                }
                            >
                                <InputBase
                                    type="tel"
                                    placeholder={countries.find((country) => country.code === selectedCountryPhone)?.phoneMask?.replaceAll("#", "0")}
                                />
                            </InputGroup>
                            <TextArea isRequired name="message" label="Message" placeholder="Leave us a message..." rows={5} />
                            <fieldset className="max-md:hidden">
                                <legend className="text-sm font-medium text-secondary">Services</legend>
                                <div className="mt-4 grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-2">
                                    <Checkbox name="design" size="md" label="Website design" />
                                    <Checkbox name="content" size="md" label="Content creation" />
                                    <Checkbox name="ux" size="md" label="UX design" />
                                    <Checkbox name="consulting" size="md" label="Strategy & consulting" />
                                    <Checkbox name="research" size="md" label="User research" />
                                    <Checkbox name="other" size="md" label="Other" />
                                </div>
                            </fieldset>
                            <Checkbox
                                className="lg:hidden"
                                name="privacy"
                                size="md"
                                hint={
                                    <>
                                        You agree to our friendly{" "}
                                        <a
                                            href="#"
                                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            privacy policy.
                                        </a>
                                    </>
                                }
                            />
                        </div>

                        <Button type="submit" size="xl">
                            <span className="hidden lg:inline">Get started</span>
                            <span className="lg:hidden">Send message</span>
                        </Button>
                    </Form>
                </div>
            </div>

            <div className="relative max-lg:hidden">
                <img
                    src="https://www.untitledui.com/marketing/woman-artist.webp"
                    className="max-size-full absolute inset-0 h-full object-cover"
                    alt="Woman artist working in her creative studio"
                />
            </div>
        </section>
    );
};

const SimpleCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Sign up for our newsletter</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Be the first to know about releases and industry news and insights.</p>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[360px_max-content] sm:gap-0 sm:self-center"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            wrapperClassName="py-0.5 md:max-w-[345px]"
                            hint={
                                <span>
                                    We care about your data in our{" "}
                                    <a
                                        href="#"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </span>
                            }
                        />
                        <Button type="submit" size="xl">
                            Subscribe
                        </Button>
                    </Form>
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
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
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
        title: "Company",
        items: [
            { label: "About us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "News", href: "#" },
            { label: "Media kit", href: "#" },
            { label: "Contact", href: "#" },
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
    {
        title: "Use cases",
        items: [
            { label: "Startups", href: "#" },
            { label: "Enterprise", href: "#" },
            { label: "Government", href: "#" },
            { label: "SaaS centre", href: "#" },
            { label: "Marketplaces", href: "#" },
            { label: "Ecommerce", href: "#" },
        ],
    },
    {
        title: "Social",
        items: [
            { label: "Twitter", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "AngelList", href: "#" },
            { label: "Dribbble", href: "#" },
        ],
    },
    {
        title: "Legal",
        items: [
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Cookies", href: "#" },
            { label: "Licenses", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
];

const FooterLarge01 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {navList.map((category) => (
                            <li key={category.title}>
                                <h4 className="text-sm font-semibold text-quaternary">{category.title}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button color="link-gray" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-8 w-min" />
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const ContactPage05 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <ContactMap02 />

            <ContactSectionSimpleIcons04 />

            <ContactSectionSimpleForm03 />

            <SimpleCentered />

            <FooterLarge01 />
        </div>
    );
};

export default ContactPage05;
