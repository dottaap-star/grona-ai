"use client";

import { useMemo, useState } from "react";
import { parseDate } from "@internationalized/date";
import { SearchLg } from "@untitledui/icons";
import { BarChartSquare02, Calendar, CheckDone01, ChevronRight, File05, PieChart03, Rows01, Users01 } from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import { Area, AreaChart, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, XAxis } from "recharts";
import type { NavItemType } from "@/components/application/app-navigation/config";
import { SidebarNavigationSectionsSubheadings } from "@/components/application/app-navigation/sidebar-navigation/sidebar-sections-subheadings";
import { ChartTooltipContent } from "@/components/application/charts/charts-base";
import { DateRangePicker } from "@/components/application/date-picker/date-range-picker";
import { MetricChangeIndicator, MetricsChart04 } from "@/components/application/metrics/metrics";
import { PaginationCardMinimal } from "@/components/application/pagination/pagination";
import { Table, TableCard, TableRowActionsDropdown } from "@/components/application/table/table";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Badge } from "@/components/base/badges/badges";
import { Input } from "@/components/base/input/input";

// Helper functions for formatting
const formatCurrency = (amount: number): string => amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

const formatDate = (timestamp: number): string =>
    new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

const navItemsWithSectionsSubheadings: Array<{ label: string; items: NavItemType[] }> = [
    {
        label: "General",
        items: [
            {
                label: "Dashboard",
                href: "/",
                icon: BarChartSquare02,
            },
            {
                label: "Projects",
                href: "/projects",
                icon: Rows01,
            },
            {
                label: "Documents",
                href: "/documents",
                icon: File05,
            },
            {
                label: "Calendar",
                href: "/calendar",
                icon: Calendar,
            },
        ],
    },
    {
        label: "Untitled UI",
        items: [
            {
                label: "Reporting",
                href: "#",
                icon: PieChart03,
            },
            {
                label: "Tasks",
                href: "#",
                icon: CheckDone01,
                badge: (
                    <Badge size="sm" type="modern">
                        8
                    </Badge>
                ),
            },
            {
                label: "Users",
                href: "#",
                icon: Users01,
            },
        ],
    },
    {
        label: "Your teams",
        items: [
            {
                label: "Catalog",
                href: "#",
                icon: () => <Avatar src="https://www.untitledui.com/logos/images/Catalog.jpg" className="mr-2 size-5" />,
                badge: (
                    <div className="flex items-center gap-3">
                        <Badge size="sm" type="modern">
                            ⌘1
                        </Badge>
                        <ChevronRight size={16} className="text-fg-quaternary" />
                    </div>
                ),
            },
            {
                label: "Warpspeed",
                href: "#",
                icon: () => <Avatar src="https://www.untitledui.com/logos/images/Warpspeed.jpg" className="mr-2 size-5" />,
                badge: (
                    <div className="flex items-center gap-3">
                        <Badge size="sm" type="modern">
                            ⌘2
                        </Badge>
                        <ChevronRight size={16} className="text-fg-quaternary" />
                    </div>
                ),
            },
            {
                label: "Boltshift",
                href: "#",
                icon: () => <Avatar src="https://www.untitledui.com/logos/images/Boltshift.jpg" className="mr-2 size-5" />,
                badge: (
                    <div className="flex items-center gap-3">
                        <Badge size="sm" type="modern">
                            ⌘3
                        </Badge>
                        <ChevronRight size={16} className="text-fg-quaternary" />
                    </div>
                ),
            },
            {
                label: "Sisyphus",
                href: "#",
                icon: () => <Avatar src="https://www.untitledui.com/logos/images/Sisyphus.jpg" className="mr-2 size-5" />,
                badge: (
                    <div className="flex items-center gap-3">
                        <Badge size="sm" type="modern">
                            ⌘4
                        </Badge>
                        <ChevronRight size={16} className="text-fg-quaternary" />
                    </div>
                ),
            },
        ],
    },
];

const lineData = [
    {
        date: new Date(2025, 0, 2),
        A: 156.77,
    },
    {
        date: new Date(2025, 0, 4),
        A: 158.55,
    },
    {
        date: new Date(2025, 0, 6),
        A: 159.99,
    },
    {
        date: new Date(2025, 0, 8),
        A: 165.99,
    },
    {
        date: new Date(2025, 0, 10),
        A: 160.66,
    },
    {
        date: new Date(2025, 0, 12),
        A: 165.33,
    },
    {
        date: new Date(2025, 0, 14),
        A: 175.88,
    },
    {
        date: new Date(2025, 0, 16),
        A: 180.33,
    },
    {
        date: new Date(2025, 0, 18),
        A: 195.44,
    },
    {
        date: new Date(2025, 0, 20),
        A: 190.99,
    },
    {
        date: new Date(2025, 0, 22),
        A: 200.77,
    },
    {
        date: new Date(2025, 0, 24),
        A: 210.44,
    },
    {
        date: new Date(2025, 0, 26),
        A: 220.05,
    },
    {
        date: new Date(2025, 0, 28),
        A: 224.01,
    },
    {
        date: new Date(2025, 0, 30),
        A: 222.15,
    },
];

const orders = [
    {
        id: "#26678",
        date: new Date(2025, 0, 16).getTime(),
        status: "paid",
        amount: 100.14,
        customer: {
            name: "Sienna Hewitt",
            email: "hi@siennahewitt.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
        },
    },
    {
        id: "#26677",
        date: new Date(2025, 0, 16).getTime(),
        status: "paid",
        amount: 96.32,
        customer: {
            name: "Ammar Foley",
            email: "ammarfoley@gmail.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80",
        },
    },
    {
        id: "#26676",
        date: new Date(2025, 0, 15).getTime(),
        status: "paid",
        amount: 104.24,
        customer: {
            name: "Pippa Wilkinson",
            email: "pippa@pippaw.com",
        },
    },
    {
        id: "#26675",
        date: new Date(2025, 0, 14).getTime(),
        status: "paid",
        amount: 88.48,
        customer: {
            name: "Olly Schroeder",
            email: "olly_s@icloud.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/olly-schroeder?fm=webp&q=80",
        },
    },
    {
        id: "#26674",
        date: new Date(2025, 0, 14).getTime(),
        status: "paid",
        amount: 96.32,
        customer: {
            name: "Mathilde Lewis",
            email: "mathilde@hey.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80",
        },
    },
    {
        id: "#26673",
        date: new Date(2025, 0, 14).getTime(),
        status: "paid",
        amount: 107.1,
        customer: {
            name: "Julius Vaughan",
            email: "juliusvaughan@gmail.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/julius-vaughan?fm=webp&q=80",
        },
    },
    {
        id: "#26672",
        date: new Date(2025, 0, 14).getTime(),
        status: "paid",
        amount: 82.04,
        customer: {
            name: "Zaid Schwartz",
            email: "zaid@zaidstudio.com",
        },
    },
];

const getInitials = (name: string) => {
    const [firstName, lastName] = name.split(" ");

    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
};

export const Dashboard03 = () => {
    const [selectedTab, setSelectedTab] = useState<string>("custom");
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return orders.toSorted((a, b) => {
            let first = a[sortDescriptor.column as keyof typeof a];
            let second = b[sortDescriptor.column as keyof typeof b];

            // Extract name from objects if needed
            if (typeof first === "object" && first && "name" in first) {
                first = first.name;
            }
            if (typeof second === "object" && second && "name" in second) {
                second = second.name;
            }

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
            <SidebarNavigationSectionsSubheadings items={navItemsWithSectionsSubheadings} />

            <main className="min-w-0 flex-1 bg-primary pt-8 pb-12">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5 px-4 lg:px-8">
                        {/* Page header simple with avatar */}
                        <div className="relative flex flex-col gap-4 bg-primary">
                            <div className="flex flex-col gap-4 lg:flex-row">
                                <div className="flex flex-1 gap-3 lg:gap-4">
                                    <Avatar size="xl" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />
                                    <div>
                                        <h1 className="text-xl font-semibold text-primary">Welcome back, Olivia</h1>
                                        <p className="text-md text-balance text-tertiary">16 January, 2025</p>
                                    </div>
                                </div>
                                <Input className="md:w-80" size="sm" shortcut aria-label="Search" placeholder="Search" icon={SearchLg} />
                            </div>
                        </div>

                        <div className="flex justify-between gap-6">
                            <Tabs className="w-auto" selectedKey={selectedTab} onSelectionChange={(value) => setSelectedTab(value as string)}>
                                <TabList
                                    type="button-minimal"
                                    items={[
                                        { id: "custom", label: "Custom" },
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

                            <div className="max-lg:hidden">
                                <DateRangePicker
                                    defaultValue={{
                                        start: parseDate("2025-01-10"),
                                        end: parseDate("2025-01-16"),
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 px-4 md:flex-row md:flex-wrap lg:gap-6 lg:px-8">
                        <MetricsChart04
                            className="flex-1 md:min-w-[320px]"
                            title="$2,114.40"
                            subtitle="Sales"
                            type="simple"
                            change="2.4%"
                            changeTrend="positive"
                            chartColor="text-fg-brand-secondary"
                            chartCurveType="linear"
                            chartData={[
                                { value: 10 },
                                { value: 15 },
                                { value: 12 },
                                { value: 20 },
                                { value: 18 },
                                { value: 25 },
                                { value: 30 },
                                { value: 28 },
                                { value: 32 },
                                { value: 35 },
                                { value: 40 },
                                { value: 32 },
                                { value: 40 },
                                { value: 50 },
                                { value: 55 },
                            ]}
                        />
                        <MetricsChart04
                            className="flex-1 md:min-w-[320px]"
                            title="24"
                            subtitle="Orders"
                            type="simple"
                            change="8.6%"
                            changeTrend="positive"
                            chartColor="text-fg-brand-secondary"
                            chartCurveType="linear"
                            chartData={[
                                { value: 5 },
                                { value: 9 },
                                { value: 7 },
                                { value: 8 },
                                { value: 9 },
                                { value: 10 },
                                { value: 13 },
                                { value: 9 },
                                { value: 10 },
                                { value: 11 },
                                { value: 13 },
                                { value: 9 },
                                { value: 11 },
                                { value: 10 },
                                { value: 8 },
                                { value: 17 },
                                { value: 16 },
                                { value: 19 },
                                { value: 22 },
                                { value: 18 },
                                { value: 17 },
                                { value: 16 },
                                { value: 17 },
                                { value: 19 },
                                { value: 15 },
                                { value: 16 },
                                { value: 15 },
                                { value: 17 },
                            ]}
                        />
                        <MetricsChart04
                            className="flex-1 md:min-w-[320px]"
                            title="$88.10"
                            subtitle="Average order value"
                            type="simple"
                            change="6.0%"
                            changeTrend="positive"
                            chartColor="text-fg-brand-secondary"
                            chartAreaFill="none"
                            chartData={[{ value: 5 }, { value: 4 }, { value: 8 }, { value: 6 }, { value: 8 }, { value: 5 }, { value: 12 }]}
                        />
                    </div>

                    <div className="px-4 lg:px-8">
                        <div className="flex flex-col gap-0.5 rounded-xl bg-secondary_subtle shadow-xs ring-1 ring-secondary ring-inset">
                            <div className="flex gap-4 px-5 pt-3 pb-2">
                                <p className="text-sm font-semibold text-primary">Sales</p>
                            </div>
                            <div className="flex flex-col gap-5 rounded-xl bg-primary p-5 ring-1 ring-secondary ring-inset">
                                <div className="flex flex-col items-start gap-4 lg:flex-row">
                                    <div className="flex flex-1 flex-col gap-3">
                                        <p className="text-display-sm font-semibold text-primary">$8,422.60</p>
                                        <div className="flex gap-2">
                                            <MetricChangeIndicator value="3.2%" trend="positive" type="simple" />
                                            <p className="text-sm font-medium text-tertiary">vs last 30 days</p>
                                        </div>
                                    </div>

                                    <Tabs defaultSelectedKey="30days" className="w-auto">
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
                                </div>

                                <div className="flex h-54 flex-col gap-1.5 lg:h-60">
                                    <ResponsiveContainer className="h-full">
                                        <AreaChart data={lineData} className="text-tertiary [&_.recharts-text]:text-xs">
                                            <defs>
                                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="currentColor" className="text-utility-gray-500" stopOpacity="0.8" />
                                                    <stop offset="80%" stopColor="currentColor" className="text-utility-gray-500" stopOpacity="0" />
                                                </linearGradient>

                                                <pattern id="verticalLines" width="8" height="100%" fill="url(#gradient)" patternUnits="userSpaceOnUse">
                                                    <line
                                                        x1="0"
                                                        y1="0"
                                                        x2="0"
                                                        y2="100%"
                                                        stroke="currentColor"
                                                        className="text-utility-gray-200"
                                                        strokeWidth="1.5"
                                                    />
                                                    {/* The fading background. */}
                                                    {/* <rect width="100%" height="100%" fill="url(#gradient)" fillOpacity={0.15} /> */}
                                                </pattern>
                                            </defs>

                                            <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                                            <XAxis
                                                // fill="currentColor"
                                                // axisLine={false}
                                                // tickLine={false}
                                                // tickMargin={16}
                                                // interval="preserveStartEnd"
                                                // tickFormatter={(value) => new Date(value).getDate().toString()}
                                                hide
                                                dataKey="date"
                                            />

                                            <RechartsTooltip
                                                formatter={(value) => `$${value}`}
                                                labelFormatter={(value) =>
                                                    new Date(value).toLocaleString(undefined, {
                                                        // Format options for "Jan 25, 2025"
                                                        month: "short",
                                                        day: "2-digit",
                                                        year: "numeric",
                                                    })
                                                }
                                                content={<ChartTooltipContent />}
                                                cursor={{
                                                    className: "stroke-utility-brand-600 stroke-2",
                                                }}
                                            />

                                            <Area
                                                isAnimationActive={false}
                                                className="text-utility-brand-600 [&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]"
                                                dataKey="A"
                                                type="linear"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="url(#verticalLines)"
                                                fillOpacity={1}
                                                activeDot={{
                                                    className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                                }}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                    <ul className="mt-auto flex justify-between px-2 lg:px-6">
                                        <li className="text-xs text-tertiary">2</li>
                                        <li className="hidden text-xs text-tertiary md:block">4</li>
                                        <li className="text-xs text-tertiary">6</li>
                                        <li className="hidden text-xs text-tertiary md:block">8</li>
                                        <li className="text-xs text-tertiary">10</li>
                                        <li className="hidden text-xs text-tertiary md:block">12</li>
                                        <li className="text-xs text-tertiary">14</li>
                                        <li className="hidden text-xs text-tertiary md:block">16</li>
                                        <li className="text-xs text-tertiary">18</li>
                                        <li className="hidden text-xs text-tertiary md:block">20</li>
                                        <li className="text-xs text-tertiary">22</li>
                                        <li className="hidden text-xs text-tertiary md:block">24</li>
                                        <li className="text-xs text-tertiary">26</li>
                                        <li className="hidden text-xs text-tertiary md:block">28</li>
                                        <li className="text-xs text-tertiary">30</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 px-4 lg:px-8">
                        <TableCard.Root className="bg-secondary_subtle shadow-xs lg:rounded-xl">
                            <div className="flex gap-4 px-5 pt-3 pb-2.5">
                                <p className="text-sm font-semibold text-primary">Orders</p>
                            </div>

                            <div className="flex flex-col items-start gap-4 rounded-t-xl border-b border-secondary bg-primary p-5 ring-1 ring-secondary lg:flex-row">
                                <div className="flex flex-1 flex-col gap-3">
                                    <p className="text-display-sm font-semibold text-primary">24</p>
                                    <div className="flex gap-2">
                                        <MetricChangeIndicator value="8.6%" trend="positive" type="simple" />
                                        <p className="text-sm font-medium text-tertiary">vs last 30 days</p>
                                    </div>
                                </div>

                                <Tabs className="w-auto">
                                    <TabList
                                        type="button-minimal"
                                        items={[
                                            { id: "all", label: "All orders" },
                                            { id: "paid", label: "Paid" },
                                            { id: "refunded", label: "Refunded" },
                                        ]}
                                    />
                                </Tabs>
                            </div>

                            <Table
                                aria-label="Pages and screens"
                                selectionMode="multiple"
                                sortDescriptor={sortDescriptor}
                                onSortChange={setSortDescriptor}
                                className="bg-primary"
                            >
                                <Table.Header className="bg-primary">
                                    <Table.Head id="id" label="Order" isRowHeader className="w-full" />
                                    <Table.Head id="date" label="Date" />
                                    <Table.Head id="status" label="Status" className="max-md:hidden" />
                                    <Table.Head id="amount" label="Amount" className="max-md:hidden" />
                                    <Table.Head id="customer" label="Customer" className="max-md:hidden" />
                                    <Table.Head id="actions" />
                                </Table.Header>

                                <Table.Body items={sortedItems}>
                                    {(order) => (
                                        <Table.Row id={order.id}>
                                            <Table.Cell className="font-medium! text-primary">{order.id}</Table.Cell>
                                            <Table.Cell className="text-nowrap">{formatDate(order.date)}</Table.Cell>
                                            <Table.Cell className="max-md:hidden">
                                                <BadgeWithDot
                                                    color={order.status === "paid" ? "success" : order.status === "failed" ? "error" : "gray"}
                                                    type="modern"
                                                    size="sm"
                                                    className="capitalize"
                                                >
                                                    {order.status}
                                                </BadgeWithDot>
                                            </Table.Cell>
                                            <Table.Cell className="max-md:hidden">{formatCurrency(order.amount)}</Table.Cell>
                                            <Table.Cell className="text-nowrap max-md:hidden">
                                                <div className="flex w-max items-center gap-3">
                                                    <Avatar
                                                        src={order.customer.avatarUrl}
                                                        initials={getInitials(order.customer.name)}
                                                        alt={order.customer.name}
                                                        size="md"
                                                    />
                                                    <div>
                                                        <p className="text-sm font-medium text-primary">{order.customer.name}</p>
                                                        <p className="text-sm text-tertiary">{order.customer.email}</p>
                                                    </div>
                                                </div>
                                            </Table.Cell>

                                            <Table.Cell className="px-4">
                                                <div className="flex items-center justify-end">
                                                    <TableRowActionsDropdown />
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    )}
                                </Table.Body>
                            </Table>
                            <PaginationCardMinimal align="right" page={1} total={4} />
                        </TableCard.Root>
                    </div>
                </div>
            </main>
        </div>
    );
};
