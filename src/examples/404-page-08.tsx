"use client";

import { ArrowLeft } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";

const NotFoundSplitImage02 = () => {
    return (
        <section className="relative flex flex-col gap-16 bg-primary py-16 lg:grid lg:min-h-240 lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-0">
            <div className="flex h-full lg:flex-1 lg:py-24">
                <div className="flex w-full items-center justify-center px-4 md:px-8">
                    <div className="flex flex-col items-start gap-8 md:w-140 md:gap-12">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Page not found</h1>
                            <p className="text-lg text-tertiary md:max-w-lg md:text-xl">
                                Sorry, the page you are looking for doesn't exist or has been moved. Here are some helpful links:
                            </p>
                        </div>

                        <div className="flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                            <Button color="secondary" size="xl" iconLeading={ArrowLeft}>
                                Go back
                            </Button>
                            <Button size="xl">Take me home</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-60 w-full px-4 md:h-95 md:px-8 lg:h-full lg:px-0">
                <img
                    className="inset-0 size-full bg-center object-cover object-top lg:absolute"
                    src="https://www.untitledui.com/marketing/photographer-girl.webp"
                    alt="Image by Good Faces at Unsplash.com"
                />
            </div>
        </section>
    );
};

const FooterLarge08 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <UntitledLogo className="h-8 w-min shrink-0" />
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

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex w-full flex-col gap-4 sm:max-w-90"
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
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { title: "Terms", href: "#" },
                            { title: "Privacy", href: "#" },
                            { title: "Cookies", href: "#" },
                        ].map(({ title, href }) => (
                            <li key={title}>
                                <a href={href} className="text-md text-quaternary transition duration-100 ease-linear hover:text-tertiary">
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const NotFoundPage08 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <NotFoundSplitImage02 />

            <FooterLarge08 />
        </div>
    );
};

export default NotFoundPage08;
