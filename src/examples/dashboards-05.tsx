"use client";

import { useMemo, useState } from "react";
import { BarChartSquare02, CheckDone01, FilterLines, HomeLine, PieChart03, Rows01, SearchLg, Users01 } from "@untitledui/icons";
import type { Selection, SortDescriptor } from "react-aria-components";
import { Bar, CartesianGrid, ComposedChart, Line, Tooltip as RechartsTooltip, ResponsiveContainer, XAxis } from "recharts";
import { FeaturedCardEventCTA } from "@/components/application/app-navigation/base-components/featured-cards";
import { NavAccountCard } from "@/components/application/app-navigation/base-components/nav-account-card";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { Breadcrumbs } from "@/components/application/breadcrumbs/breadcrumbs";
import { ChartTooltipContent, selectEvenlySpacedItems } from "@/components/application/charts/charts-base";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { Table, TableRowActionsDropdown } from "@/components/application/table/table";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";

// Helper functions for formatting
const formatDate = (timestamp: number): string =>
    new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

const data = [
    { date: "2025-01-01", A: 633, B: 190 },
    { date: "2025-01-06", A: 443, B: 228 },
    { date: "2025-01-12", A: 506, B: 225 },
    { date: "2025-01-18", A: 316, B: 227 },
    { date: "2025-01-24", A: 760, B: 209 },
    { date: "2025-02-01", A: 950, B: 220 },
    { date: "2025-02-05", A: 760, B: 224 },
    { date: "2025-02-11", A: 633, B: 285 },
    { date: "2025-02-17", A: 570, B: 279 },
    { date: "2025-02-23", A: 253, B: 296 },
    { date: "2025-03-01", A: 380, B: 263 },
    { date: "2025-03-07", A: 443, B: 333 },
    { date: "2025-03-13", A: 506, B: 335 },
    { date: "2025-03-19", A: 443, B: 306 },
    { date: "2025-04-25", A: 316, B: 315 },
    { date: "2025-04-01", A: 190, B: 325 },
    { date: "2025-04-06", A: 316, B: 343 },
    { date: "2025-04-12", A: 380, B: 367 },
    { date: "2025-04-18", A: 506, B: 372 },
    { date: "2025-04-24", A: 443, B: 374 },
    { date: "2025-05-01", A: 696, B: 278 },
    { date: "2025-05-06", A: 950, B: 258 },
    { date: "2025-05-12", A: 823, B: 341 },
    { date: "2025-05-18", A: 633, B: 357 },
    { date: "2025-05-24", A: 570, B: 372 },
    { date: "2025-06-01", A: 253, B: 404 },
    { date: "2025-06-06", A: 316, B: 314 },
    { date: "2025-06-11", A: 443, B: 344 },
    { date: "2025-06-17", A: 380, B: 359 },
    { date: "2025-06-23", A: 253, B: 400 },
    { date: "2025-07-01", A: 190, B: 381 },
    { date: "2025-07-05", A: 316, B: 427 },
    { date: "2025-07-11", A: 506, B: 494 },
    { date: "2025-07-17", A: 633, B: 371 },
    { date: "2025-07-23", A: 570, B: 382 },
    { date: "2025-08-01", A: 760, B: 383 },
    { date: "2025-08-06", A: 950, B: 361 },
    { date: "2025-08-10", A: 823, B: 358 },
    { date: "2025-08-16", A: 696, B: 405 },
    { date: "2025-08-22", A: 570, B: 400 },
    { date: "2025-09-01", A: 443, B: 391 },
    { date: "2025-09-03", A: 316, B: 425 },
    { date: "2025-09-09", A: 253, B: 406 },
    { date: "2025-09-15", A: 380, B: 472 },
    { date: "2025-09-21", A: 506, B: 441 },
    { date: "2025-10-01", A: 633, B: 477 },
    { date: "2025-10-03", A: 570, B: 465 },
    { date: "2025-10-09", A: 443, B: 488 },
    { date: "2025-10-15", A: 380, B: 501 },
    { date: "2025-10-21", A: 316, B: 615 },
    { date: "2025-11-01", A: 570, B: 612 },
    { date: "2025-11-02", A: 506, B: 673 },
    { date: "2025-11-08", A: 443, B: 630 },
    { date: "2025-11-14", A: 506, B: 575 },
    { date: "2025-12-20", A: 760, B: 630 },
    { date: "2025-12-26", A: 443, B: 597 },
    { date: "2025-12-02", A: 696, B: 618 },
    { date: "2025-12-08", A: 506, B: 572 },
    { date: "2025-12-14", A: 316, B: 636 },
    { date: "2025-12-20", A: 633, B: 664 },
    { date: "2025-12-25", A: 380, B: 742 },
    { date: "2025-12-31", A: 633, B: 808 },
];

const users = [
    {
        id: "user-01",
        name: "Lily-Rose Chedjou",
        email: "lilyrose@gmail.com",
        access: ["Admin", "Data export", "Data import"],
        lastActive: new Date(2025, 0, 16).getTime(),
        dateAdded: new Date(2024, 9, 10).getTime(),
        avatarUrl: "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80",
    },
    {
        id: "user-02",
        name: "Caitlyn King",
        email: "hi@caitlynking.com",
        access: ["Admin", "Data export", "Data import"],
        lastActive: new Date(2025, 0, 16).getTime(),
        dateAdded: new Date(2024, 7, 1).getTime(),
        avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
    },
    {
        id: "user-03",
        name: "Fleur Cook",
        email: "fleurcook@icloud.com",
        access: ["Data export", "Data import"],
        lastActive: new Date(2025, 0, 15).getTime(),
        dateAdded: new Date(2024, 6, 28).getTime(),
        avatarUrl: "https://www.untitledui.com/images/avatars/fleur-cook?fm=webp&q=80",
    },
    {
        id: "user-04",
        name: "Marco Kelly",
        email: "marco@marcokelly.co",
        access: ["Data export", "Data import"],
        lastActive: new Date(2025, 0, 14).getTime(),
        dateAdded: new Date(2024, 8, 3).getTime(),
        avatarUrl: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80",
    },
    {
        id: "user-05",
        name: "Lulu Meyers",
        email: "lulu@lulumeyers.com",
        access: ["Data export", "Data import"],
        lastActive: new Date(2025, 0, 14).getTime(),
        dateAdded: new Date(2024, 0, 18).getTime(),
        avatarUrl: "https://www.untitledui.com/images/avatars/lulu-meyers?fm=webp&q=80",
    },
    {
        id: "user-06",
        name: "Mikey Lawrence",
        email: "m.lawrence@gmail.com",
        access: ["Data export", "Data import"],
        lastActive: new Date(2025, 0, 16).getTime(),
        dateAdded: new Date(2024, 0, 14).getTime(),
        avatarUrl: "https://www.untitledui.com/images/avatars/mikey-lawrence?fm=webp&q=80",
    },
    {
        id: "user-07",
        name: "Freya Browning",
        email: "hey@freyabrowning.com",
        access: ["Data export", "Data import"],
        lastActive: new Date(2025, 0, 14).getTime(),
        dateAdded: new Date(2024, 11, 16).getTime(),
        avatarUrl: "https://www.untitledui.com/images/avatars/freya-browning?fm=webp&q=80",
    },
];

export const Dashboard05 = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["user-02", "user-03", "user-05"]));

    const sortedItems = useMemo(() => {
        return users.toSorted((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Handle numbers
            if (typeof first === "number" && typeof second === "number") {
                return sortDescriptor.direction === "ascending" ? first - second : second - first;
            }

            // Handle strings
            if (typeof first === "string" && typeof second === "string") {
                const result = first.localeCompare(second);
                return sortDescriptor.direction === "ascending" ? result : -result;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <div className="flex flex-col bg-primary lg:flex-row">
            <SidebarNavigationSimple
                items={[
                    {
                        label: "Home",
                        href: "/",
                        icon: HomeLine,
                    },
                    {
                        label: "Dashboard",
                        href: "/dashboard",
                        icon: BarChartSquare02,
                    },
                    {
                        label: "Projects",
                        href: "/projects",
                        icon: Rows01,
                    },
                    {
                        label: "Tasks",
                        href: "/tasks",
                        icon: CheckDone01,
                        badge: 8,
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
                showAccountCard={false}
                featureCard={
                    <FeaturedCardEventCTA
                        title="Join our workshop"
                        badge="Live"
                        description="Learn how to leverage ChatGPT to supercharge your workflow."
                        confirmLabel="Join now!"
                        onConfirm={() => {}}
                        onDismiss={() => {}}
                    />
                }
            />

            <main className="flex min-w-0 flex-1 flex-col gap-8 pt-8 pb-12">
                <div className="flex justify-between gap-4 px-4 lg:px-8">
                    {/* Page header */}
                    <div className="flex flex-col gap-4">
                        <div className="hidden items-center gap-1 lg:flex">
                            <img
                                src="https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80"
                                alt="Sienna Hewitt"
                                className="size-7 rounded-md outline-[0.5px] -outline-offset-[0.5px] outline-avatar-contrast-border"
                            />

                            <Breadcrumbs type="button">
                                <Breadcrumbs.Item href="#">Sienna Hewitt</Breadcrumbs.Item>
                                <Breadcrumbs.Item href="#">Dashboard</Breadcrumbs.Item>
                            </Breadcrumbs>
                        </div>
                        <div className="flex flex-col gap-0.5 lg:gap-1">
                            <p className="text-xl font-semibold text-primary lg:text-display-xs">Welcome back, Sienna</p>
                            <p className="text-md text-balance text-tertiary">Here's an overview of your site traffic and recently active users.</p>
                        </div>
                    </div>
                    <div className="hidden w-64 lg:block">
                        <NavAccountCard popoverPlacement="bottom right" selectedAccountId="sienna" />
                    </div>
                </div>

                <div className="flex flex-col gap-5 px-4 lg:px-8">
                    <div className="flex flex-col justify-between gap-4 lg:flex-row">
                        <p className="flex gap-1 text-lg font-semibold text-primary">
                            Site traffic <span className="text-success-primary">+104%</span>
                        </p>
                        <div className="flex gap-3">
                            <Tabs className="items-start">
                                <TabList
                                    type="button-minimal"
                                    items={[
                                        {
                                            id: "12months",
                                            label: (
                                                <>
                                                    <span className="max-md:hidden">12 months</span>
                                                    <span className="md:hidden">12m</span>
                                                </>
                                            ),
                                        },
                                        {
                                            id: "30days",
                                            label: (
                                                <>
                                                    <span className="max-md:hidden">30 days</span>
                                                    <span className="md:hidden">30d</span>
                                                </>
                                            ),
                                        },
                                        {
                                            id: "7days",
                                            label: (
                                                <>
                                                    <span className="max-md:hidden">7 days</span>
                                                    <span className="md:hidden">7d</span>
                                                </>
                                            ),
                                        },
                                        {
                                            id: "24hours",
                                            label: (
                                                <>
                                                    <span className="max-md:hidden">24 hours</span>
                                                    <span className="md:hidden">24h</span>
                                                </>
                                            ),
                                        },
                                    ]}
                                />
                            </Tabs>

                            <Button size="sm" color="secondary" iconLeading={FilterLines}>
                                Filters
                            </Button>
                        </div>
                    </div>

                    <div className="flex h-60 flex-col gap-2">
                        <ResponsiveContainer className="h-full">
                            <ComposedChart
                                data={data}
                                margin={{
                                    top: 12,
                                }}
                                className="text-tertiary [&_.recharts-text]:text-xs"
                            >
                                <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                                <XAxis
                                    fill="currentColor"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={8}
                                    interval="preserveStartEnd"
                                    dataKey="date"
                                    tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short" })}
                                    ticks={selectEvenlySpacedItems(data, 12).map((item) => item.date)}
                                />

                                <RechartsTooltip
                                    content={<ChartTooltipContent />}
                                    labelFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short", year: "numeric" })}
                                    cursor={{
                                        className: "stroke-utility-gray-300",
                                    }}
                                />

                                <Bar
                                    isAnimationActive={false}
                                    className="text-utility-brand-600_alt"
                                    name="Mobile"
                                    dataKey="A"
                                    type="monotone"
                                    fill="currentColor"
                                    maxBarSize={8}
                                    radius={[4, 4, 0, 0]}
                                />
                                <Line
                                    isAnimationActive={false}
                                    className="text-utility-brand-400"
                                    dataKey="B"
                                    name="Desktop"
                                    type="monotone"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeDasharray="0.1 8"
                                    strokeLinecap="round"
                                    activeDot={false}
                                    dot={false}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="flex flex-col gap-6 lg:gap-5">
                    <div className="flex flex-col justify-between gap-4 px-4 lg:flex-row lg:items-center lg:px-8">
                        <p className="text-lg font-semibold text-primary">Recently active</p>
                        <Input size="sm" type="search" shortcut aria-label="Search" placeholder="Search" icon={SearchLg} className="lg:max-w-80" />
                    </div>

                    <div className="px-0 lg:px-8">
                        <Table
                            aria-label="Pages and screens"
                            selectionMode="multiple"
                            sortDescriptor={sortDescriptor}
                            onSortChange={setSortDescriptor}
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                            className="bg-primary"
                        >
                            <Table.Header
                                bordered={false}
                                className="lg:bg-transparent lg:[&>tr>th]:bg-secondary lg:[&>tr>th:first-of-type]:rounded-l-xl lg:[&>tr>th:first-of-type]:pl-3 lg:[&>tr>th:last-of-type]:rounded-r-xl"
                            >
                                <Table.Head id="name" isRowHeader allowsSorting className="w-full text-xs font-semibold text-brand-secondary">
                                    {selectedKeys instanceof Set ? selectedKeys.size : 0} selected
                                </Table.Head>
                                <Table.Head id="access" label="Access" allowsSorting className="max-lg:hidden" />
                                <Table.Head id="lastActive" label="Last active" allowsSorting className="max-lg:hidden" />
                                <Table.Head id="dateAdded" label="Date added" allowsSorting className="max-lg:hidden" />
                                <Table.Head id="actions" />
                            </Table.Header>

                            <Table.Body items={sortedItems}>
                                {(user) => (
                                    <Table.Row id={user.id} className="lg:[&>td:first-of-type]:pl-3">
                                        <Table.Cell className="text-nowrap">
                                            <div className="flex w-max items-center gap-3">
                                                <Avatar src={user.avatarUrl} alt={user.name} size="md" />
                                                <div>
                                                    <p className="text-sm font-medium text-primary">{user.name}</p>
                                                    <p className="text-sm text-tertiary">{user.email}</p>
                                                </div>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="text-nowrap max-lg:hidden">
                                            <div className="flex gap-1">
                                                {user.access.map((access) => (
                                                    <BadgeWithDot
                                                        key={access}
                                                        color={access === "Admin" ? "brand" : access === "Data export" ? "blue" : "success"}
                                                        type="modern"
                                                        size="sm"
                                                    >
                                                        {access}
                                                    </BadgeWithDot>
                                                ))}
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="text-nowrap max-lg:hidden">{formatDate(user.lastActive)}</Table.Cell>
                                        <Table.Cell className="text-nowrap max-lg:hidden">{formatDate(user.dateAdded)}</Table.Cell>

                                        <Table.Cell className="px-4 lg:px-3">
                                            <div className="flex items-center justify-end">
                                                <TableRowActionsDropdown />
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>
                        <PaginationPageMinimalCenter page={1} total={10} className="px-4 pt-3 lg:px-0" />
                    </div>
                </div>
            </main>
        </div>
    );
};
