import { Button } from "@/components/base/buttons/button";
import { GronaLogo } from "@/components/foundations/logo/grona-logo";
import { LinkedIn, Instagram, TikTok } from "@/components/foundations/social-icons";
import { footerNav } from "@/lib/navigation";

const socialLinks = [
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/company/grona-ai" },
    { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/grona.ai/" },
    { label: "TikTok", icon: TikTok, href: "https://www.tiktok.com/@grona.ai" },
];

export const FooterSection = () => {
    return (
        <footer className="bg-primary py-12 md:py-14">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 lg:flex-row lg:justify-between">
                    <div className="flex max-w-xs flex-col gap-3">
                        <GronaLogo />
                        <p className="text-md text-tertiary">Smarter Websites. Higher Sales.</p>
                    </div>

                    <nav>
                        <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-12">
                            {footerNav.map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label}>
                                                <Button color="link-gray" size="lg" href={item.href} className="gap-1 p-0">
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

                <div className="mt-12 flex flex-col-reverse items-center justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
                    <p className="text-md text-quaternary">
                        Built for teams that never stop testing. &copy; {new Date().getFullYear()} grona.ai
                    </p>
                    <ul className="flex gap-6">
                        {socialLinks.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon size={24} aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
