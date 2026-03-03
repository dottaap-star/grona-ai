"use client";

import type { FC, ReactNode } from "react";
import {
    BookClosed,
    CheckCircleBroken,
    CurrencyDollarCircle,
    Flag04,
    MessageCircle01,
    MessageSmileSquare,
    PlayCircle,
    Stars02,
    Users01,
} from "@untitledui/icons";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

type MenuItem = {
    title: string;
    subtitle?: string;
    href: string;
    Icon: FC<{ className?: string }>;
    badge?: ReactNode;
};

type MenuColumn = {
    title: string;
    items: MenuItem[];
};

const columns: MenuColumn[] = [
    {
        title: "Use cases",
        items: [
            { title: "Convert", subtitle: "Analyze conversion rates and improve your sales.", href: "/", Icon: CheckCircleBroken },
            { title: "Engage", subtitle: "Measure active usage and target areas of improvement.", href: "/", Icon: MessageSmileSquare },
            { title: "Retain", subtitle: "Find retention drivers and make your customers smile.", href: "/", Icon: CurrencyDollarCircle },
        ],
    },
    {
        title: "Resources",
        items: [
            { title: "Blog", subtitle: "The latest industry new and guides curated by our expert team.", href: "/", Icon: BookClosed },
            { title: "Customer stories", subtitle: "Learn how our customers are using Untitled UI to 10x their growth.", href: "/", Icon: Stars02 },
            { title: "Video tutorials", subtitle: "Get up and running on our newest features and in-depth guides.", href: "/", Icon: PlayCircle },
        ],
    },
    {
        title: "Company",
        items: [
            { title: "About us", subtitle: "Learn about our team and what we're working towards.", href: "/", Icon: Flag04 },
            { title: "Press", subtitle: "News and writings, press releases, and press resources.", href: "/", Icon: MessageCircle01 },
            {
                title: "Careers",
                subtitle: "We're always looking for talented people. Join our remote team!",
                href: "/",
                Icon: Users01,
                badge: (
                    <BadgeWithDot color="success" size="sm" type="modern">
                        We're hiring!
                    </BadgeWithDot>
                ),
            },
        ],
    },
];

export const Menu2ColWithLinks = ({ className }: { className?: string }) => {
    return (
        <section className={cx("relative overflow-hidden bg-primary md:shadow-lg", className)}>
            <div className="mx-auto flex max-w-container flex-col lg:flex-row">
                <div className="grid grid-cols-1 gap-5 pt-4 pb-5 md:grid-cols-2 md:flex-row md:px-8 md:py-6 lg:grid-cols-3">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="mb-3 px-4 text-sm font-semibold text-brand-tertiary md:px-0">{column.title}</h3>
                            <ul className="hidden flex-col gap-0.5 md:flex">
                                {column.items.map(({ title, subtitle, href, Icon, badge }) => (
                                    <li key={title}>
                                        <NavMenuItemLink
                                            icon={Icon}
                                            title={title}
                                            subtitle={subtitle?.replace("press resources", "resources").replace("our team", "us")}
                                            badge={badge}
                                            href={href}
                                        />
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex flex-col gap-0.5 md:hidden">
                                {column.items.map(({ title, href, Icon, badge }) => (
                                    <li key={title}>
                                        <NavMenuItemLink icon={Icon} title={title} badge={badge} href={href} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="relative z-10 flex flex-col gap-3 bg-secondary px-4 pt-5 pb-6 md:px-8 md:py-6 lg:pl-6">
                    <h3 className="text-sm font-semibold text-brand-tertiary">Get started</h3>
                    <ul className="flex flex-col gap-3">
                        {[
                            { title: "Setup 101", href: "#" },
                            { title: "Adding users", href: "#" },
                            { title: "Video tutorials", href: "#" },
                            { title: "Libraries and SDKs", href: "#" },
                            { title: "Adding plugins", href: "#" },
                            { title: "Dashboard templates", href: "#" },
                        ].map((item) => (
                            <li key={item.title}>
                                <Button color="link-gray" size="lg" href={item.href}>
                                    {item.title}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
