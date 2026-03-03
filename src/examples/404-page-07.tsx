"use client";

import { SearchLg } from "@untitledui/icons";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { TextIllustration, TextIllustrationSM } from "@/components/shared-assets/not-found/illustrations";

const NotFoundIllustration02 = () => {
    return (
        <section className="grid flex-1 bg-primary py-16 md:min-h-240 md:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 items-start gap-8 px-4 md:items-center md:px-8 lg:grid-cols-2">
                <div className="mx-auto flex w-full max-w-148 flex-col items-start gap-8 md:gap-12 md:pr-8">
                    <TextIllustrationSM className="lg:hidden" />

                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-md font-semibold text-brand-secondary">404 error</span>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Under maintenance</h1>
                        </div>
                        <p className="text-lg text-tertiary md:max-w-120 md:text-xl">
                            Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site:
                        </p>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex w-full flex-col items-stretch gap-4 md:max-w-120 md:flex-row md:items-start"
                    >
                        <Input isRequired size="md" name="search" type="search" inputClassName="md:py-3!" placeholder="Search our site" icon={SearchLg} />
                        <Button type="submit" size="xl">
                            Search
                        </Button>
                    </Form>
                </div>

                <div className="relative hidden items-center justify-center lg:flex">
                    <TextIllustration className="md:w-full" />
                </div>
            </div>
        </section>
    );
};

const AbstractImages = () => {
    return (
        <section className="bg-secondary py-16 lg:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 gap-16 overflow-hidden px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="flex max-w-3xl flex-col items-start">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">No long-term contracts. No catches.</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Start your 30-day free trial today.</p>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 justify-self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4">
                    <img
                        src="https://www.untitledui.com/marketing/abstract-image-01.webp"
                        className="size-full object-cover"
                        alt="Alisa Hester"
                        style={{ gridArea: "3 / 3 / 7 / 7" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/abstract-image-02.webp"
                        className="size-full object-cover"
                        alt="Alisa Hester"
                        style={{ gridArea: "1 / 7 / 7 / 11" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/abstract-image-03.webp"
                        className="size-full object-cover"
                        alt="Alisa Hester"
                        style={{ gridArea: "7 / 5 / 13 / 9" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/abstract-image-04.webp"
                        className="size-full object-cover"
                        alt="Alisa Hester"
                        style={{ gridArea: "7 / 9 / 10 / 13" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/smiling-girl-2.webp"
                        className="size-full object-cover"
                        alt="Alisa Hester"
                        style={{ gridArea: "7 / 1 / 10 / 5" }}
                    />
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

const FooterLarge07 = () => {
    return (
        <footer className="dark-mode bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                            <UntitledLogo className="h-8 w-min shrink-0" />
                            <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
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
                                        <Button color="link-gray" size="lg" href={item.href}>
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="md:w-[135px]">
                        <h4 className="text-md font-medium text-brand-secondary">Start growing with Untitled</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 lg:flex-col">
                            <AppStoreButton href="#" className="w-[135px]" />
                            <GooglePlayButton href="#" className="w-[135px]" />
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {socials.map(({ title, icon: Icon, href }) => (
                            <li key={title}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
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

const NotFoundPage07 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <NotFoundIllustration02 />

            <AbstractImages />

            <FooterLarge07 />
        </div>
    );
};

export default NotFoundPage07;
