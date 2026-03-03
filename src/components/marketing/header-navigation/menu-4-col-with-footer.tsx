"use client";

import type { FC, ReactNode } from "react";
import {
    BarLineChart,
    BookClosed,
    ChartBreakoutCircle,
    CheckCircleBroken,
    CurrencyDollar,
    CurrencyDollarCircle,
    FileCode01,
    Flag04,
    Folder,
    LineChartUp05,
    MessageChatCircle,
    MessageCircle01,
    MessageSmileSquare,
    Monitor04,
    PieChart03,
    PlayCircle,
    Stars02,
    Users01,
} from "@untitledui/icons";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
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
        title: "Products",
        items: [
            { title: "Interactive reports", subtitle: "Learn about your users.", href: "/", Icon: ChartBreakoutCircle },
            { title: "Team dashboard", subtitle: "Monitor your metrics.", href: "/", Icon: Monitor04 },
            { title: "Limitless segmentation", subtitle: "Surface hidden trends.", href: "/", Icon: PieChart03 },
            { title: "Group analytics", subtitle: "Measure B2B account health.", href: "/", Icon: BarLineChart },
        ],
    },
    {
        title: "Use cases",
        items: [
            { title: "Convert", subtitle: "Analyze conversion rates.", href: "/", Icon: CheckCircleBroken },
            { title: "Engage", subtitle: "Measure active usage.", href: "/", Icon: MessageSmileSquare },
            { title: "Retain", subtitle: "Find retention drivers.", href: "/", Icon: CurrencyDollarCircle },
            {
                title: "Grow",
                subtitle: "Grow your user base faster.",
                href: "/",
                Icon: LineChartUp05,
                badge: (
                    <Badge color="gray" size="sm" type="modern">
                        New
                    </Badge>
                ),
            },
        ],
    },
    {
        title: "Resources",
        items: [
            { title: "Blog", subtitle: "The latest industry news.", href: "/", Icon: BookClosed },
            { title: "Customer stories", subtitle: "Learn how our customers.", href: "/", Icon: Stars02 },
            { title: "Video tutorials", subtitle: "New features and techniques.", href: "/", Icon: PlayCircle },
            { title: "Documentation", subtitle: "All the boring stuff.", href: "/", Icon: FileCode01 },
        ],
    },
    {
        title: "Company",
        items: [
            { title: "About us", subtitle: "Learn about our story.", href: "/", Icon: Flag04 },
            { title: "Press", subtitle: "News and press resources.", href: "/", Icon: MessageCircle01 },
            {
                title: "Careers",
                subtitle: "Join our team!",
                href: "/",
                Icon: Users01,
                badge: (
                    <BadgeWithDot color="success" size="sm" type="modern">
                        We're hiring!
                    </BadgeWithDot>
                ),
            },
            { title: "Legal", subtitle: "All the boring stuff.", href: "/", Icon: Folder },
        ],
    },
];

export const Menu4ColWithFooter = ({ className }: { className?: string }) => {
    return (
        <section className={cx("relative overflow-hidden bg-primary md:shadow-lg", className)}>
            <div className="mx-auto max-w-container md:px-8">
                <div className="grid grid-cols-1 gap-5 pt-4 pb-5 md:grid-cols-2 md:py-6 xl:grid-cols-4">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="mb-3 px-4 text-sm font-semibold text-brand-tertiary md:px-0">{column.title}</h3>
                            <ul className="flex flex-col gap-0.5">
                                {column.items.map(({ title, subtitle, href, Icon, badge }) => (
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
                    ))}
                </div>
            </div>
            <div className="hidden bg-secondary md:mx-2 md:mb-2 md:block md:rounded-lg">
                <div className="mx-auto flex max-w-container items-center justify-between rounded-xl bg-secondary px-8 py-5">
                    <div className="flex gap-2">
                        <p className="text-md font-medium text-tertiary">Ready to get started?</p>
                        <Button href="#" color="link-color" size="lg">
                            Sign up for free
                        </Button>
                    </div>

                    <ul className="flex gap-4">
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
