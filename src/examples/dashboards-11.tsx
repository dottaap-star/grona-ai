"use client";

import {
    Archive,
    ArrowLeft,
    BarChartSquare02,
    CheckDone01,
    ClockFastForward,
    CurrencyDollarCircle,
    FilterLines,
    Grid03,
    HomeLine,
    Inbox01,
    LineChartUp03,
    NotificationBox,
    Package,
    PieChart03,
    Rows01,
    SearchLg,
    Settings03,
    Star01,
    Stars01,
    User01,
    UserSquare,
    Users01,
    UsersPlus,
} from "@untitledui/icons";
import { Area, AreaChart, CartesianGrid, Legend, Tooltip as RechartsTooltip, ResponsiveContainer, XAxis } from "recharts";
import { FeedItem } from "@/components/application/activity-feed/activity-feed";
import { SidebarNavigationSlim } from "@/components/application/app-navigation/sidebar-navigation/sidebar-slim";
import { Breadcrumbs } from "@/components/application/breadcrumbs/breadcrumbs";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";
import { DateRangePicker } from "@/components/application/date-picker/date-range-picker";
import { MetricsChart01 } from "@/components/application/metrics/metrics";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";

// Helper function for formatting relative time
const formatRelativeTime = (timestamp: number): string => {
    const now = Date.now();
    const diffInMinutes = Math.floor((now - timestamp) / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 1) {
        return "Just now";
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} mins ago`;
    } else if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    } else if (diffInDays === 1) {
        // Yesterday - show time
        const date = new Date(timestamp);
        const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
        return `Yesterday ${time.toLowerCase()}`;
    } else if (diffInDays <= 7) {
        // Within a week - show day and time
        const date = new Date(timestamp);
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
        const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
        return `${dayOfWeek} ${time.toLowerCase()}`;
    } else {
        return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
    }
};

const lineData = [
    {
        date: "2025-01-01",
        A: 600,
        B: 400,
        C: 100,
    },
    {
        date: "2025-02-01",
        A: 620,
        B: 405,
        C: 160,
    },
    {
        date: "2025-03-01",
        A: 630,
        B: 400,
        C: 170,
    },
    {
        date: "2025-04-01",
        A: 650,
        B: 410,
        C: 190,
    },
    {
        date: "2025-05-01",
        A: 600,
        B: 320,
        C: 200,
    },
    {
        date: "2025-06-01",
        A: 650,
        B: 430,
        C: 230,
    },
    {
        date: "2025-07-01",
        A: 620,
        B: 400,
        C: 200,
    },
    {
        date: "2025-08-01",
        A: 750,
        B: 540,
        C: 300,
    },
    {
        date: "2025-09-01",
        A: 780,
        B: 490,
        C: 390,
    },
    {
        date: "2025-10-01",
        A: 750,
        B: 450,
        C: 300,
    },
    {
        date: "2025-11-01",
        A: 780,
        B: 480,
        C: 340,
    },
    {
        date: "2025-12-01",
        A: 820,
        B: 500,
        C: 450,
    },
];

const ordersMetricData = [
    { value: 55 },
    { value: 50 },
    { value: 40 },
    { value: 32 },
    { value: 40, highlight: true },
    { value: 35 },
    { value: 32 },
    { value: 28 },
    { value: 30 },
    { value: 25 },
    { value: 18 },
    { value: 20 },
    { value: 12 },
    { value: 15 },
    { value: 10 },
];

const feedItems = [
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
        name: "Demi Wilkinson",
        title: "Webflow 101",
        unseen: true,
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/aliah-lane?fm=webp&q=80",
        name: "Aliah Lane",
        title: "SEO Masterclass",
        unseen: true,
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        name: "Lana Steiner",
        title: "Figma Mockups",
        unseen: true,
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        name: "Candice Wu",
        title: "Webflow 101",
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/ava-wright?fm=webp&q=80",
        name: "Ava Wright",
        title: "SEO Masterclass",
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/koray-okumus?fm=webp&q=80",
        name: "Koray Okumus",
        title: "SEO Masterclass",
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/andi-lane?fm=webp&q=80",
        name: "Andi Lane",
        title: "The Guide to Backlinks",
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80",
        name: "Drew Cano",
        title: "The Figma Dashboard Bundle",
        date: Date.now() - 3 * 60 * 60 * 1000,
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/zahir-mays?fm=webp&q=80",
        name: "Zahir Mays",
        title: "The Figma Dashboard Bundle",
        date: Date.now() - 4 * 60 * 60 * 1000,
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/rene-wells?fm=webp&q=80",
        name: "Rene Wells",
        title: "The Design Handbook",
        date: Date.now() - 4 * 60 * 60 * 1000,
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/joshua-wilson?fm=webp&q=80",
        name: "Joshua Wilson",
        title: "Phone 13 Mockups",
        date: Date.now() - 4 * 60 * 60 * 1000,
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/lori-bryson?fm=webp&q=80",
        name: "Lori Bryson",
        title: "SEO Masterclass",
        date: Date.now() - 4 * 60 * 60 * 1000,
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/loki-bright?fm=webp&q=80",
        name: "Loki Bright",
        title: "Figma Mockups",
        date: Date.now() - 5 * 60 * 60 * 1000,
    },
    {
        avatarUrl: "https://www.untitledui.com/images/avatars/anita-cruz?fm=webp&q=80",
        name: "Anita Cruz",
        title: "The Guide to Backlinks",
        date: Date.now() - 6 * 60 * 60 * 1000,
    },
];

export const Dashboard11 = () => {
    return (
        <div className="flex flex-col bg-primary lg:flex-row">
            <SidebarNavigationSlim
                activeUrl="/dashboard/overview"
                items={[
                    {
                        label: "Home",
                        href: "/",
                        icon: HomeLine,
                        items: [
                            { label: "Overview", href: "/overview", icon: Grid03 },
                            { label: "Products", href: "/products", icon: Package },
                            { label: "Orders", href: "/orders", icon: CurrencyDollarCircle },
                            { label: "Customers", href: "/customers", icon: Users01 },
                            { label: "Inbox", href: "/inbox", icon: Inbox01, badge: 4 },
                            { label: "What's new?", href: "/whats-new", icon: Stars01 },
                        ],
                    },
                    {
                        label: "Dashboard",
                        href: "/dashboard",
                        icon: BarChartSquare02,
                        items: [
                            { label: "Overview", href: "/dashboard/overview", icon: Grid03 },
                            { label: "Notifications", href: "/dashboard/notifications", icon: NotificationBox, badge: 10 },
                            { label: "Analytics", href: "/dashboard/analytics", icon: LineChartUp03 },
                            { label: "Saved reports", href: "/dashboard/saved-reports", icon: Star01 },
                            { label: "Scheduled reports", href: "/dashboard/scheduled-reports", icon: ClockFastForward },
                            { label: "User reports", href: "/dashboard/user-reports", icon: UserSquare },
                            { label: "Manage notifications", href: "/dashboard/manage-notifications", icon: Settings03 },
                        ],
                    },
                    {
                        label: "Projects",
                        href: "/projects",
                        icon: Rows01,
                        items: [
                            { label: "View all", href: "/projects/all", icon: Rows01 },
                            { label: "Personal", href: "/projects/personal", icon: User01 },
                            { label: "Team", href: "/projects/team", icon: Users01 },
                            { label: "Shared with me", href: "/projects/shared-with-me", icon: UsersPlus },
                            { label: "Archive", href: "/projects/archive", icon: Archive },
                        ],
                    },
                    {
                        label: "Tasks",
                        href: "/tasks",
                        icon: CheckDone01,
                    },
                    {
                        label: "Reporting",
                        href: "/reporting",
                        icon: PieChart03,
                    },
                    {
                        label: "Users",
                        href: "/users",
                        icon: Users01,
                    },
                ]}
            />
            <main className="flex flex-1 flex-col gap-8 pt-8 pb-12">
                <div className="flex flex-col gap-5 px-4 lg:px-8">
                    {/* Page header */}
                    <div className="flex flex-col gap-4">
                        <Breadcrumbs type="button" className="hidden lg:inline-flex">
                            <Breadcrumbs.Item href="#" icon={HomeLine} />
                            <Breadcrumbs.Item href="#">Dashboard</Breadcrumbs.Item>
                            <Breadcrumbs.Item href="#">Overview</Breadcrumbs.Item>
                        </Breadcrumbs>
                        <Button size="md" color="link-gray" iconLeading={ArrowLeft} className="inline-flex lg:hidden">
                            Back
                        </Button>

                        <div className="flex justify-between gap-4">
                            <div className="flex flex-col gap-0.5 lg:gap-1">
                                <p className="text-xl font-semibold text-primary lg:text-display-xs">Welcome back, Olivia</p>
                                <p className="text-md text-balance text-tertiary">Your current sales summary and activity.</p>
                            </div>
                            <div className="hidden w-80 lg:flex">
                                <Input icon={SearchLg} shortcut aria-label="Search" placeholder="Search" size="sm" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-4 lg:flex-row">
                        {/* Desktop */}
                        <ButtonGroup defaultSelectedKeys={["12-months"]} className="hidden lg:inline-flex">
                            <ButtonGroupItem id="12-months">12 months</ButtonGroupItem>
                            <ButtonGroupItem id="30-days">30 days</ButtonGroupItem>
                            <ButtonGroupItem id="7-days">7 days</ButtonGroupItem>
                            <ButtonGroupItem id="24-hours">24 hours</ButtonGroupItem>
                        </ButtonGroup>

                        {/* Mobile */}
                        <ButtonGroup defaultSelectedKeys={["12-months"]} className="inline-flex lg:hidden">
                            <ButtonGroupItem id="12-months">12m</ButtonGroupItem>
                            <ButtonGroupItem id="30-days">30d</ButtonGroupItem>
                            <ButtonGroupItem id="7-days">7d</ButtonGroupItem>
                            <ButtonGroupItem id="24-hours">24h</ButtonGroupItem>
                        </ButtonGroup>

                        <div className="flex gap-3">
                            <DateRangePicker />
                            <Button size="md" color="secondary" iconLeading={FilterLines}>
                                Filters
                            </Button>
                            <Button size="md" color="secondary" iconLeading={SearchLg} className="inline-flex lg:hidden" />
                        </div>
                    </div>
                </div>

                <div className="px-4 lg:px-8">
                    <div className="flex h-54 flex-col gap-2">
                        <ResponsiveContainer className="h-full">
                            <AreaChart
                                data={lineData}
                                className="text-tertiary [&_.recharts-text]:text-xs"
                                margin={{
                                    left: 5,
                                    right: 5,
                                }}
                            >
                                <Legend
                                    verticalAlign="top"
                                    align="right"
                                    layout="horizontal"
                                    content={<ChartLegendContent reversed className="-translate-y-2" />}
                                />

                                <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                                <XAxis
                                    fill="currentColor"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={10}
                                    interval="preserveStartEnd"
                                    dataKey="date"
                                    tickFormatter={(value) => new Date(value).toLocaleString(undefined, { month: "short" })}
                                />

                                <RechartsTooltip
                                    content={<ChartTooltipContent />}
                                    labelFormatter={(value) => new Date(value).toLocaleString(undefined, { month: "long" })}
                                    cursor={{
                                        className: "stroke-utility-brand-600 stroke-2",
                                    }}
                                />

                                <Area
                                    isAnimationActive={false}
                                    className="text-utility-brand-600 [&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]"
                                    dataKey="A"
                                    name="2023"
                                    type="monotone"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    activeDot={{
                                        className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                    }}
                                />

                                <Area
                                    isAnimationActive={false}
                                    className="text-utility-brand-400 [&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]"
                                    dataKey="B"
                                    name="2024"
                                    type="monotone"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeDasharray="0.1 8"
                                    strokeLinecap="round"
                                    activeDot={{
                                        className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                    }}
                                />

                                <Area
                                    isAnimationActive={false}
                                    className="text-utility-brand-700 [&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]"
                                    dataKey="C"
                                    name="2025"
                                    type="monotone"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeDasharray="0.1 8"
                                    strokeLinecap="round"
                                    activeDot={{
                                        className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                    }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="flex flex-col gap-5 px-4 md:flex-row md:flex-wrap lg:gap-6 lg:px-8">
                    <MetricsChart01 title="$1,280" subtitle="Today's revenue" change="15%" changeDescription="last mth" className="flex-1 md:min-w-[320px]" />
                    <MetricsChart01
                        title="14"
                        subtitle="Today's orders"
                        trend="negative"
                        change="10%"
                        changeDescription="last mth"
                        chartData={ordersMetricData}
                        className="flex-1 md:min-w-[320px]"
                    />
                    <MetricsChart01 title="$91.42" subtitle="Avg. order value" change="20%" changeDescription="last mth" className="flex-1 md:min-w-[320px]" />
                </div>

                <div className="flex flex-col gap-6 px-4 lg:px-8">
                    <div className="flex flex-col justify-between gap-4 border-b border-secondary pb-5 lg:flex-row lg:items-center">
                        <p className="text-lg font-semibold text-primary">Recent activity</p>
                        <div className="flex gap-3">
                            <Button size="md" color="secondary">
                                Download
                            </Button>
                            <Button size="md">View all</Button>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        {feedItems.map((item, index) => (
                            <FeedItem
                                id={index}
                                key={index}
                                size="md"
                                unseen={item.unseen}
                                user={{ avatarUrl: item.avatarUrl, href: "#", name: item.name, status: "online" }}
                                action={{ href: "#", content: "Purchased", target: item.title }}
                                connector={index !== feedItems.length - 1}
                            />
                        ))}
                    </div>
                    <div className="hidden grid-cols-2 gap-x-16 lg:grid">
                        <div>
                            {feedItems.slice(0, feedItems.length / 2).map((item, index) => (
                                <FeedItem
                                    id={index}
                                    key={index}
                                    size="md"
                                    unseen={item.unseen}
                                    user={{ avatarUrl: item.avatarUrl, href: "#", name: item.name, status: "online" }}
                                    action={{ href: "#", content: "Purchased", target: item.title }}
                                    connector={index !== feedItems.length / 2 - 1}
                                />
                            ))}
                        </div>
                        <div>
                            {feedItems.slice(feedItems.length / 2).map((item, index) => (
                                <FeedItem
                                    id={index}
                                    key={index}
                                    size="md"
                                    unseen={item.unseen}
                                    date={item.date ? formatRelativeTime(item.date) : undefined}
                                    user={{ avatarUrl: item.avatarUrl, href: "#", name: item.name, status: "online" }}
                                    action={{ href: "#", content: "Purchased", target: item.title }}
                                    connector={index !== feedItems.length / 2 - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
