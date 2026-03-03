"use client";

import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";

export const FooterLarge13 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col md:items-center md:text-center">
                    <UntitledLogoMinimal className="drop-shadow" />
                    <h2 className="mt-8 text-display-xs font-semibold text-primary md:mt-12 md:text-display-sm">Let's get started on something great</h2>
                    <p className="mt-2 text-md text-tertiary md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
                        <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                            View demo
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            {
                                label: "Terms",
                                href: "#",
                            },
                            {
                                label: "Privacy",
                                href: "#",
                            },
                            {
                                label: "Cookies",
                                href: "#",
                            },
                        ].map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="flex rounded-xs text-md text-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
