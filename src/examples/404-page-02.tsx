"use client";

import { SearchLg } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";

const NotFoundSplitImage03 = () => {
    return (
        <section className="relative flex flex-col gap-16 bg-primary py-16 lg:grid lg:min-h-240 lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-0">
            <div className="flex h-full lg:py-24">
                <div className="flex w-full items-center justify-center px-4 md:px-8">
                    <div className="flex flex-col items-start gap-8 md:gap-12 lg:pr-8">
                        <div className="flex max-w-132 flex-col gap-4 md:gap-6">
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                                Uh oh, we can't find that page...
                            </h1>
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
                            className="flex w-full flex-col items-center justify-center gap-4 self-stretch md:max-w-120 md:flex-row md:self-auto"
                        >
                            <Input
                                isRequired
                                size="md"
                                name="search"
                                type="search"
                                placeholder="Search our site"
                                icon={SearchLg}
                                inputClassName="w-full md:py-3!"
                            />
                            <Button type="submit" size="xl" className="w-full md:w-max">
                                Search
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className="relative h-60 w-full px-4 md:h-95 md:px-8 lg:h-full lg:px-0">
                <img
                    className="inset-0 size-full bg-center object-cover object-top lg:absolute"
                    src="https://www.untitledui.com/shared-assets/spirals.webp"
                    alt="Image by Good Faces at Unsplash.com"
                />
            </div>
        </section>
    );
};

const navList2 = [
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

const socials = [
    { title: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { title: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { title: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { title: "GitHub", icon: GitHub, href: "https://github.com/" },
    { title: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { title: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { title: "Layers", icon: Layers, href: "https://layers.com/" },
];

const FooterLarge02 = () => {
    return (
        <footer>
            <div className="bg-secondary py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col items-start gap-6 md:w-80 md:gap-6">
                            <UntitledLogo className="h-8 w-min shrink-0" />
                            <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                            <RatingBadge className="origin-top-left scale-[0.78]" />
                        </div>
                        <nav className="flex-1">
                            <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                                {navList2.slice(0, 5).map((category) => (
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
                    </div>
                </div>
            </div>
            <div className="bg-primary py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row">
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
            </div>
        </footer>
    );
};

const NotFoundPage02 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <NotFoundSplitImage03 />

            <FooterLarge02 />
        </div>
    );
};

export default NotFoundPage02;
