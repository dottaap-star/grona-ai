"use client";

import { CurrencyDollar, Flag04, Folder, MessageChatCircle, MessageCircle01, PlayCircle, Users01 } from "@untitledui/icons";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

const items = [
    {
        title: "About us",
        subtitle: "Learn about our team and what we're working towards.",
        href: "/",
        Icon: Flag04,
    },
    {
        title: "Press",
        subtitle: "News and writings, press releases, and resources.",
        href: "/",
        Icon: MessageCircle01,
    },
    {
        title: "Careers",
        subtitle: "We're always looking for talented people. Join our team!",
        href: "/",
        Icon: Users01,
        badge: (
            <BadgeWithDot color="success" size="sm" type="modern">
                We're hiring!
            </BadgeWithDot>
        ),
    },
    {
        title: "Legal",
        subtitle: "Licensing and reseller docs, terms, and privacy policy.",
        href: "/",
        Icon: Folder,
    },
];

export const Menu4ColSlimWithFooter = ({ className, isFloating }: { className?: string; isFloating?: boolean }) => {
    return (
        <section
            className={cx("relative bg-primary md:overflow-hidden md:shadow-lg", isFloating && "md:rounded-2xl md:ring-1 md:ring-secondary_alt", className)}
        >
            <div className={cx("mx-auto max-w-container", !isFloating && "md:px-8")}>
                <ul
                    className={cx(
                        "grid grid-cols-1 gap-0.5 pt-2 pb-4 md:grid-cols-2 md:gap-1 xl:grid-cols-4 xl:flex-nowrap",
                        isFloating ? "md:p-5" : "md:py-6",
                    )}
                >
                    {items.map(({ title, subtitle, href, Icon, badge }) => (
                        <li key={title}>
                            <NavMenuItemLink
                                icon={<FeaturedIcon icon={Icon} className="shrink-0" color="gray" theme="modern" size="lg" />}
                                title={title}
                                subtitle={subtitle}
                                badge={badge}
                                href={href}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-secondary md:mx-2 md:mb-2 md:rounded-lg">
                <div
                    className={cx(
                        "mx-auto flex max-w-container items-center justify-center rounded-xl bg-secondary px-6 py-6 md:justify-between md:py-5",
                        !isFloating && "md:px-8",
                    )}
                >
                    <div className="flex gap-2">
                        <p className="text-md font-medium text-tertiary">Ready to get started?</p>
                        <Button href="#" color="link-color" size="lg">
                            Sign up for free
                        </Button>
                    </div>

                    <ul className="hidden gap-4 md:flex">
                        <li className="flex">
                            <Button href="#" color="link-color" size="lg" iconLeading={CurrencyDollar}>
                                Pricing
                            </Button>
                        </li>
                        <li className="flex">
                            <Button href="#" color="link-color" size="lg" iconLeading={PlayCircle}>
                                Watch demo
                            </Button>
                        </li>
                        <li className="flex">
                            <Button href="#" color="link-color" size="lg" iconLeading={MessageChatCircle}>
                                Chat to sales
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
