"use client";

import { SearchLg } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

const NotFoundSplitImage01 = () => {
    return (
        <section className="relative flex flex-col gap-16 overflow-hidden bg-primary py-16 lg:grid lg:min-h-240 lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-0">
            <div className="flex w-full items-center justify-center px-4 md:px-8">
                <div className="flex flex-col items-start gap-8 md:w-140 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="relative w-max">
                            <FeaturedIcon color="gray" size="xl" theme="modern" className="z-10 hidden md:flex" icon={SearchLg} />
                            <FeaturedIcon color="gray" size="lg" theme="modern" className="z-10 md:hidden" icon={SearchLg} />

                            <BackgroundPattern
                                pattern="circle"
                                size="lg"
                                className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
                            />
                            <BackgroundPattern
                                pattern="circle"
                                size="md"
                                className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden"
                            />
                        </div>
                        <div className="z-10 flex flex-col gap-4 md:gap-6">
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">404 error</h1>
                            <p className="text-lg text-tertiary md:max-w-lg md:text-xl">
                                Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site:
                            </p>
                        </div>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="z-10 flex w-full flex-col justify-center gap-4 md:max-w-120 md:flex-row md:items-center md:self-auto"
                    >
                        <Input isRequired name="search" type="search" placeholder="Search our site" inputClassName="w-full py-2.5! md:py-3!" icon={SearchLg} />
                        <Button type="submit" size="xl">
                            Search
                        </Button>
                    </Form>
                </div>
            </div>

            <div className="h-60 w-full px-4 md:h-95 md:px-8 lg:h-full lg:py-6 lg:pr-6 lg:pl-0">
                <div className="relative flex h-full flex-1">
                    <img
                        className="inset-0 size-full bg-center object-cover object-center lg:absolute"
                        src="https://www.untitledui.com/shared-assets/spirals-shapes.webp"
                        alt="Image by Good Faces at Unsplash.com"
                    />
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

const NotFoundPage01 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <NotFoundSplitImage01 />

            <FooterLarge01 />
        </div>
    );
};

export default NotFoundPage01;
