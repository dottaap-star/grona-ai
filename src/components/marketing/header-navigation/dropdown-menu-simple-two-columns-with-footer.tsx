"use client";

import type { FC, ReactNode } from "react";
import {
    BarLineChart,
    ChartBreakoutCircle,
    CheckCircleBroken,
    CurrencyDollarCircle,
    LineChartUp05,
    MessageChatCircle,
    MessageSmileSquare,
    Monitor04,
    PieChart03,
    PlayCircle,
} from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
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
                    <Badge size="sm" color="gray" type="modern">
                        New
                    </Badge>
                ),
            },
        ],
    },

];

export const DropdownMenuSimpleTwoColumnsWithFooter = () => {
    return (
        <nav className="px-3 pb-2 md:w-160 md:p-0">
            <div className="flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary_alt md:gap-4 md:rounded-2xl md:p-2 md:shadow-lg">
                <div className="grid grid-cols-1 gap-5 pt-4 pb-5 md:grid-cols-2 md:gap-3 md:p-3 md:pb-0">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="mb-2 px-4 text-sm font-semibold text-brand-tertiary md:p-0">{column.title}</h3>
                            <ul className="flex flex-col gap-0.5">
                                {column.items.map(({ title, href, Icon, badge, subtitle }) => (
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

                <div className="flex flex-col items-start gap-5 bg-secondary px-4 py-5 md:flex-row md:items-center md:gap-3 md:rounded-lg md:px-6 md:py-5">
                    <Button color="link-color" size="lg" href="#">
                        Sign up for free
                    </Button>
                    <Button color="link-color" size="lg" className="md:ml-auto" href="#" iconLeading={PlayCircle}>
                        Watch demo
                    </Button>
                    <Button color="link-color" size="lg" href="#" iconLeading={MessageChatCircle}>
                        Chat to sales
                    </Button>
                </div>
            </div>
        </nav>
    );
};
