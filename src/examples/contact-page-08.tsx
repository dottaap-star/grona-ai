"use client";

import { useState } from "react";
import { MarkerPin02, PlayCircle } from "@untitledui/icons";
import { AppStoreButton, GooglePlayWhiteButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { TextArea } from "@/components/base/textarea/textarea";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import countries, { phoneCodeOptions } from "@/utils/countries";

const ContactSimpleForm = () => {
    const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Get in touch</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">We'd love to hear from you. Please fill out this form.</p>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="mx-auto mt-16 flex flex-col gap-8 md:mt-24 md:max-w-120"
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
                        <TextArea isRequired label="Message" placeholder="Leave us a message..." rows={5} />
                        <Checkbox
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
                        Send message
                    </Button>
                </Form>
            </div>
        </section>
    );
};

const ContactSectionIconsAndImage = () => {
    return (
        <div className="bg-primary">
            <section className="bg-secondary pt-16 pb-28 md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
                        <div className="flex w-full max-w-3xl flex-col">
                            <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                            <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Chat to our friendly team</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We'd love to hear from you! Please get in touch.</p>
                        </div>

                        <ul className="grid grid-cols-1 gap-10 md:gap-8">
                            {[
                                {
                                    title: "Melbourne",
                                    subtitle: "100 Flinders Street, \nMelbourne VIC 3000 AU",
                                    icon: MarkerPin02,
                                },
                                { title: "Sydney", subtitle: "100 George Street, \nSydney NSW 2000 AU", icon: MarkerPin02 },
                            ].map((item) => (
                                <li key={item.title} className="flex items-start gap-4">
                                    <item.icon className="size-6 pt-0.5 text-icon-fg-brand" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary md:text-xl">{item.title}</h3>
                                        <p className="mt-1 text-md whitespace-pre text-tertiary md:mt-2 md:whitespace-normal">{item.subtitle}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="-mt-16 pb-16 md:-mt-24 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <img
                        src="https://www.untitledui.com/marketing/smiling-girl-3.webp"
                        className="h-60 w-full object-cover shadow-3xl md:h-120 lg:h-140"
                        alt="Team discussing a topic"
                    />
                </div>
            </section>
        </div>
    );
};

const CardVertical = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-secondary px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary xl:text-display-md">
                        <span className="hidden md:inline">Start your 30-day free trial</span>
                        <span className="md:hidden">Start your free trial</span>
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-center">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const socials = [
    { title: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { title: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { title: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { title: "GitHub", icon: GitHub, href: "https://github.com/" },
    { title: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { title: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { title: "Layers", icon: Layers, href: "https://layers.com/" },
];

const FooterLarge11 = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center border-b border-brand_alt pb-8 text-center md:pb-16">
                    <h2 className="text-display-xs font-semibold text-primary_on-brand md:text-display-sm">No long-term contracts. No catches. Simple.</h2>
                    <p className="mt-2 text-md text-tertiary_on-brand md:mt-4 md:text-xl">Start your 30-day free trial. Cancel anytime.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-12 md:flex-row md:self-center">
                        <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                            View demo
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-col justify-between gap-x-8 gap-y-12 md:mt-16 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                            <UntitledLogo className="dark-mode" />
                            <p className="text-md text-tertiary_on-brand">Design amazing digital experiences that create more happy in the world.</p>
                        </div>
                        <nav>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                                {[
                                    { title: "Overview", href: "#" },
                                    { title: "Features", href: "#" },
                                    { title: "Pricing", href: "#" },
                                    { title: "Careers", href: "#" },
                                    { title: "Help", href: "#" },
                                    { title: "Privacy", href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button
                                            className="text-footer-button-fg hover:text-footer-button-fg_hover"
                                            color="link-color"
                                            size="lg"
                                            href={item.href}
                                        >
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-md font-medium text-primary_on-brand">Get the app</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 lg:flex-col">
                            <AppStoreButton href="#" className="w-[135px]" />
                            <GooglePlayWhiteButton href="#" className="w-[135px]" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row">
                    <p className="text-md text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {socials.map(({ title, icon: Icon, href }) => (
                            <li key={title}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xs text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon size={24} aria-label={title} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const ContactPage08 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <ContactSimpleForm />

            <ContactSectionIconsAndImage />

            <CardVertical />

            <FooterLarge11 />
        </div>
    );
};

export default ContactPage08;
