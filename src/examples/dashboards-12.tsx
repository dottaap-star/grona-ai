"use client";

import { useMemo, useState } from "react";
import {
    BarChartSquare02,
    CheckDone01,
    Edit01,
    FilterLines,
    HomeLine,
    Monitor04,
    PieChart03,
    Plus,
    Rows01,
    ShoppingBag02,
    ShoppingCart01,
    Users01,
} from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import { Area, AreaChart, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, XAxis } from "recharts";
import { SidebarNavigationSlim } from "@/components/application/app-navigation/sidebar-navigation/sidebar-slim";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { CarouselIndicator } from "@/components/application/carousel/carousel.demo";
import { ChartTooltipContent } from "@/components/application/charts/charts-base";
import { DateRangePicker } from "@/components/application/date-picker/date-range-picker";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { Table, TableRowActionsDropdown } from "@/components/application/table/table";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarProfilePhoto } from "@/components/base/avatar/avatar-profile-photo";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { MastercardIcon, VisaIcon } from "@/components/foundations/payment-icons";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";
import { cx } from "@/utils/cx";

// Helper functions for formatting
const formatCurrency = (amount: number): string => {
    const formatted = Math.abs(amount).toLocaleString("en-US", { style: "currency", currency: "USD" });

    return amount >= 0 ? `+ ${formatted}` : `- ${formatted}`;
};

const formatDateTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
    const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

    return `${dayOfWeek} ${time.toLowerCase()}`;
};

const lineData = [
    {
        date: "2025-01-01",
        A: 600,
        B: 350,
    },
    {
        date: "2025-02-01",
        A: 620,
        B: 370,
    },
    {
        date: "2025-03-01",
        A: 630,
        B: 380,
    },
    {
        date: "2025-04-01",
        A: 650,
        B: 400,
    },
    {
        date: "2025-05-01",
        A: 600,
        B: 350,
    },
    {
        date: "2025-06-01",
        A: 650,
        B: 400,
    },
    {
        date: "2025-07-01",
        A: 620,
        B: 370,
    },
    {
        date: "2025-08-01",
        A: 750,
        B: 500,
    },
    {
        date: "2025-09-01",
        A: 780,
        B: 530,
    },
    {
        date: "2025-10-01",
        A: 750,
        B: 500,
    },
    {
        date: "2025-11-01",
        A: 780,
        B: 530,
    },
    {
        date: "2025-12-01",
        A: 820,
        B: 570,
    },
];

const transactions = [
    {
        id: "transaction-01",
        merchant: "Spotify",
        avatarUrl: "https://www.untitledui.com/application/spotify.webp",
        initials: "SP",
        amount: -18.99,
        dateTime: new Date(2025, 0, 8, 13, 0).getTime(),
        category: "Subscriptions",
        paymentMethod: {
            type: "Visa",
            last4: "1234",
            expiry: "06/2025",
            logo: <VisaIcon className="h-8 w-11.5" />,
        },
    },
    {
        id: "transaction-02",
        merchant: "A Coffee",
        initials: "AC",
        amount: -4.5,
        dateTime: new Date(2025, 0, 8, 7, 20).getTime(),
        category: "Food and dining",
        paymentMethod: {
            type: "Visa",
            last4: "1234",
            expiry: "06/2025",
            logo: <VisaIcon className="h-8 w-11.5" />,
        },
    },
    {
        id: "transaction-03",
        merchant: "Stripe",
        avatarUrl: "https://www.untitledui.com/application/stripe.webp",
        initials: "ST",
        amount: 88,
        dateTime: new Date(2025, 0, 8, 2, 45).getTime(),
        category: "Income",
        paymentMethod: {
            type: "Mastercard",
            last4: "1234",
            expiry: "06/2025",
            logo: <MastercardIcon className="h-8 w-11.5" />,
        },
    },
    {
        id: "transaction-04",
        merchant: "Figma",
        avatarUrl: "https://www.untitledui.com/application/figma.webp",
        initials: "FI",
        amount: -15,
        dateTime: new Date(2025, 0, 7, 18, 10).getTime(),
        category: "Subscriptions",
        paymentMethod: {
            type: "Visa",
            last4: "1234",
            expiry: "06/2025",
            logo: <VisaIcon className="h-8 w-11.5" />,
        },
    },
    {
        id: "transaction-05",
        merchant: "TBF Bakery",
        initials: "TB",
        amount: -12.5,
        dateTime: new Date(2025, 0, 7, 7, 52).getTime(),
        category: "Food and dining",
        paymentMethod: {
            type: "Visa",
            last4: "1234",
            expiry: "06/2025",
            logo: <VisaIcon className="h-8 w-11.5" />,
        },
    },
    {
        id: "transaction-06",
        merchant: "Fresh F&V",
        initials: "FV",
        amount: -40.2,
        dateTime: new Date(2025, 0, 7, 12, 15).getTime(),
        category: "Groceries",
        paymentMethod: {
            type: "Visa",
            last4: "1234",
            expiry: "06/2025",
            logo: <VisaIcon className="h-8 w-11.5" />,
        },
    },
    {
        id: "transaction-07",
        merchant: "Stripe",
        avatarUrl: "https://www.untitledui.com/application/stripe.webp",
        initials: "ST",
        amount: 88,
        dateTime: new Date(2025, 0, 7, 5, 40).getTime(),
        category: "Income",
        paymentMethod: {
            type: "Mastercard",
            last4: "1234",
            expiry: "06/2025",
            logo: <MastercardIcon className="h-8 w-11.5" />,
        },
    },
];

const getBadgeColor = (category: string) => {
    switch (category) {
        case "Subscriptions":
            return "blue";
        case "Food and dining":
            return "pink";
        case "Income":
            return "success";
        case "Groceries":
            return "indigo";
        default:
            return "gray";
    }
};

export const Dashboard12 = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();

    const sortedItems = useMemo(() => {
        if (!sortDescriptor) return transactions;

        return transactions.toSorted((a, b) => {
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
            <SidebarNavigationSlim
                activeUrl="/dashboard"
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
            <main className="flex min-w-0 flex-1 flex-col gap-8 pt-8 pb-12">
                <div className="flex flex-col flex-wrap items-start justify-between gap-x-4 gap-y-5 px-4 lg:flex-row lg:px-8">
                    <div className="flex flex-col gap-1">
                        <p className="text-md font-semibold text-tertiary">Your balance</p>
                        <div className="flex items-center gap-3">
                            <img src="https://www.untitledui.com/images/flags/US.svg" alt="USA" className="size-7" />
                            <p className="text-display-md font-semibold text-primary">$40,206.20</p>
                        </div>
                    </div>
                    <ButtonGroup defaultSelectedKeys={["personal"]} selectionMode="single">
                        <ButtonGroupItem id="personal">Personal</ButtonGroupItem>
                        <ButtonGroupItem id="business">Business</ButtonGroupItem>
                        <ButtonGroupItem id="credit">Credit</ButtonGroupItem>
                    </ButtonGroup>
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
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0.7" />
                                        <stop offset="95%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

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
                                    labelFormatter={(value) => new Date(value).toLocaleString(undefined, { month: "short", year: "numeric" })}
                                    cursor={{
                                        className: "stroke-utility-brand-600 stroke-2",
                                    }}
                                />

                                <Area
                                    isAnimationActive={false}
                                    className="text-utility-brand-600 [&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]"
                                    dataKey="A"
                                    name="Income"
                                    type="monotone"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="url(#gradient)"
                                    fillOpacity={0.1}
                                    activeDot={{
                                        className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                    }}
                                />

                                <Area
                                    isAnimationActive={false}
                                    className="text-utility-brand-400 [&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]"
                                    dataKey="B"
                                    name="Expenses"
                                    type="monotone"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    activeDot={{
                                        className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                    }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="flex flex-col gap-6 px-4 lg:px-8">
                    <div className="flex flex-col flex-wrap justify-between gap-x-4 gap-y-6 lg:flex-row lg:items-center">
                        <p className="text-lg font-semibold text-primary">Transaction history</p>
                        <div className="flex gap-3">
                            <DateRangePicker />
                            <Button size="md" color="secondary" iconLeading={FilterLines}>
                                Apply filter
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <Table sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} aria-label="Transaction history">
                            <Table.Header className="bg-primary">
                                <Table.Head id="transaction" label="Transaction" isRowHeader className="w-full min-w-46.5 px-0" />
                                <Table.Head id="amount" label="Amount" />
                                <Table.Head id="date" label="Date" className="max-lg:hidden" />
                                <Table.Head id="category" label="Category" className="max-lg:hidden" />
                                <Table.Head id="account" label="Account" className="hidden min-w-55 lg:table-cell" />
                                <Table.Head id="action" className="px-0" />
                            </Table.Header>
                            <Table.Body items={sortedItems}>
                                {(item) => (
                                    <Table.Row id={item.id}>
                                        <Table.Cell className="px-0">
                                            <div className="flex items-center gap-3">
                                                <Avatar size="md" src={item.avatarUrl} alt={item.merchant} initials={item.initials} />
                                                <p className="text-sm font-medium text-nowrap text-primary">{item.merchant}</p>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className={cx("text-nowrap", item.amount > 0 && "text-success-primary")}>
                                            {formatCurrency(item.amount)}
                                        </Table.Cell>
                                        <Table.Cell className="text-nowrap max-lg:hidden">{formatDateTime(item.dateTime)}</Table.Cell>
                                        <Table.Cell className="max-lg:hidden">
                                            <BadgeWithDot size="sm" type="modern" color={getBadgeColor(item.category)}>
                                                {item.category}
                                            </BadgeWithDot>
                                        </Table.Cell>
                                        <Table.Cell className="max-lg:hidden">
                                            <div className="flex items-center gap-3">
                                                {item.paymentMethod.logo}
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-medium text-primary">
                                                        {item.paymentMethod.type} {item.paymentMethod.last4}
                                                    </p>
                                                    <p className="text-sm text-nowrap text-tertiary">Expiry {item.paymentMethod.expiry}</p>
                                                </div>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="pr-0 pl-4">
                                            <ButtonUtility size="xs" color="tertiary" tooltip="Edit" icon={Edit01} />
                                        </Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>
                        <PaginationPageDefault page={1} total={10} />
                    </div>
                </div>
            </main>
            <div className="sticky top-0 hidden h-screen w-98 flex-col gap-8 overflow-auto border-l border-secondary bg-primary pb-12 lg:flex">
                <div className="flex flex-col">
                    <div className="p-2">
                        <div className="h-30 overflow-hidden rounded-lg bg-tertiary">
                            <img alt="Banner image" src="https://www.untitledui.com/application/clouds.webp" className="size-full object-cover" />
                        </div>
                    </div>
                    <div className="-mt-8 flex flex-col gap-6 px-6">
                        <AvatarProfilePhoto size="md" alt="Olivia Rhye" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" verified />
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <p className="text-display-xs font-semibold text-primary">Olivia Rhye</p>
                                <BadgeWithDot size="md" type="modern" color="brand">
                                    Premium
                                </BadgeWithDot>
                            </div>
                            <p className="text-md text-tertiary">olivia@untitledui.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex shrink-0 flex-col gap-5 overflow-x-clip px-6">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-primary">My cards</p>
                        <Button size="md" color="link-gray" iconLeading={Plus}>
                            Add card
                        </Button>
                    </div>
                    <Carousel.Root className="flex flex-col gap-5">
                        <Carousel.Content overflowHidden={false} className="gap-5">
                            {[1, 2, 3].map((id) => (
                                <Carousel.Item key={id} className="basis-auto">
                                    <CreditCard width={272} type="gray-light" className="dark:hidden" />
                                    <CreditCard width={272} type="transparent" className="hidden dark:block" />
                                </Carousel.Item>
                            ))}
                        </Carousel.Content>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between gap-4">
                                    <p className="text-sm font-medium text-primary">This month</p>
                                    <span className="text-sm text-tertiary">$1,240.40</span>
                                </div>
                                <ProgressBar value={60} />
                            </div>
                            <CarouselIndicator size="lg" framed={false} />
                        </div>
                    </Carousel.Root>
                </div>

                <div className="flex flex-col gap-5 border-t border-secondary px-6 pt-6">
                    <div className="flex items-start justify-between">
                        <p className="text-lg font-semibold text-primary">My budgets</p>
                        <TableRowActionsDropdown />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3 rounded-xl bg-utility-blue-50 p-4">
                            <FeaturedIcon size="md" color="brand" theme="light" icon={Monitor04} className="bg-utility-blue-100 text-utility-blue-700" />
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="flex justify-between gap-4">
                                    <p className="text-sm font-medium text-utility-blue-700">Subscriptions</p>
                                    <span className="text-sm text-utility-blue-700">$25 left</span>
                                </div>
                                <ProgressBar value={57} className="bg-utility-blue-100" progressClassName="bg-utility-blue-700" />
                            </div>
                        </div>
                        <div className="flex gap-3 rounded-xl bg-utility-pink-50 p-4">
                            <FeaturedIcon size="md" color="brand" theme="light" icon={ShoppingBag02} className="bg-utility-pink-100 text-utility-pink-700" />
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="flex justify-between gap-4">
                                    <p className="text-sm font-medium text-utility-pink-700">Food and booze</p>
                                    <span className="text-sm text-utility-pink-700">$120 left</span>
                                </div>
                                <ProgressBar value={74} className="bg-utility-pink-100" progressClassName="bg-utility-pink-700" />
                            </div>
                        </div>
                        <div className="flex gap-3 rounded-xl bg-utility-indigo-50 p-4">
                            <FeaturedIcon
                                size="md"
                                color="brand"
                                theme="light"
                                icon={ShoppingCart01}
                                className="bg-utility-indigo-100 text-utility-indigo-700"
                            />
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="flex justify-between gap-4">
                                    <p className="text-sm font-medium text-utility-indigo-700">Groceries</p>
                                    <span className="text-sm text-utility-indigo-700">$200 left</span>
                                </div>
                                <ProgressBar value={66} className="bg-utility-indigo-100" progressClassName="bg-utility-indigo-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
