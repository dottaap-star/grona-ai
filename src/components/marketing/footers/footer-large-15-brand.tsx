import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";

export const FooterLarge15Brand = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 md:items-center">
                    <UntitledLogo className="dark-mode" />
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
                                    <Button className="text-footer-button-fg hover:text-footer-button-fg_hover" color="link-color" size="lg" href={item.href}>
                                        {item.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-brand_alt pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>

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
                                    className="rounded-xs text-md text-quaternary_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-tertiary_on-brand focus-visible:outline-2 focus-visible:outline-offset-2"
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
