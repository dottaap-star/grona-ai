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
import { FeatureCardVertical } from "./base-components/nav-menu-item-card";

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

export const Menu3ColWithSidebar = ({ className, isMobile }: { className?: string; isMobile?: boolean }) => {
    return (
        <section className={cx("relative overflow-hidden bg-primary md:shadow-lg", className)}>
            <div className="mx-auto flex max-w-container flex-col md:items-start md:px-8 md:pb-6 xl:flex-row xl:pb-0">
                <div className="grid grid-cols-1 gap-5 pt-4 pb-5 md:flex-1 md:grid-cols-3 md:py-6 md:pr-5">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="mb-3 px-4 text-sm font-semibold text-brand-tertiary md:px-0">{column.title}</h3>
                            <ul className="flex flex-col gap-0.5">
                                {column.items.map(({ title, subtitle, href, Icon, badge }) => (
                                    <li key={title}>
                                        <NavMenuItemLink icon={Icon} title={title} subtitle={isMobile ? "" : subtitle} badge={badge} href={href} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="w-full bg-secondary px-1 pt-2 pb-3 md:max-w-70 md:rounded-2xl md:p-2">
                    <FeatureCardVertical
                        href="#"
                        imgSrc="https://www.untitledui.com/marketing/smiling-girl-2.webp"
                        title="We've just released an update!"
                        description="Check out the all new dashboard view. Pages now load 3x faster."
                        actionsContent={
                            <div className="inline-flex gap-3">
                                <Button color="link-gray" size="sm">
                                    Dismiss
                                </Button>
                                <Button color="link-color" size="sm">
                                    Changelog
                                </Button>
                            </div>
                        }
                    />
                </div>
            </div>
        </section>
    );
};
