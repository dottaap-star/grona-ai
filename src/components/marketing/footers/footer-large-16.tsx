"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";

export const FooterLarge16 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 md:items-center">
                    <UntitledLogo className="h-8 w-min shrink-0" />
                    <nav>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                            {[
                                {
                                    label: "Overview",
                                    href: "#",
                                },
                                {
                                    label: "Features",
                                    href: "#",
                                },
                                {
                                    label: "Pricing",
                                    href: "#",
                                },
                                {
                                    label: "Careers",
                                    href: "#",
                                },
                                {
                                    label: "Help",
                                    href: "#",
                                },
                                {
                                    label: "Privacy",
                                    href: "#",
                                },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Button color="link-gray" size="lg" href={item.href}>
                                        {item.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="relative mt-12 flex flex-col justify-between gap-8 pt-8 md:mt-16 md:flex-row md:items-center">
                    <div className="absolute top-0 left-0 h-px w-full bg-border-secondary"></div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex w-full flex-col gap-4 sm:flex-row md:max-w-100"
                    >
                        <Input isRequired id="newsletters-email" name="email" type="email" placeholder="Enter your email" size="md" wrapperClassName="flex-1" />
                        <Button type="submit" size="lg">
                            Subscribe
                        </Button>
                    </Form>
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
