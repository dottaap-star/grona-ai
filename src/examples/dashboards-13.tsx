"use client";

import { BarChartSquare02, CheckDone01, CurrencyDollar, FilterLines, HomeLine, PieChart03, Rows01, Users01, ZapFast } from "@untitledui/icons";
import { Bar, BarChart, CartesianGrid, Pie, PieChart, Tooltip as RechartsTooltip, ResponsiveContainer, XAxis } from "recharts";
import { FeaturedCardUpgradeCTA } from "@/components/application/app-navigation/base-components/featured-cards";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { CarouselIndicator } from "@/components/application/carousel/carousel.demo";
import { ChartTooltipContent } from "@/components/application/charts/charts-base";
import { DateRangePicker } from "@/components/application/date-picker/date-range-picker";
import { MetricChangeIndicator } from "@/components/application/metrics/metrics";
import { Table, TableRowActionsDropdown } from "@/components/application/table/table";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { ApplePayIcon, PayPalIcon, StripeIcon, VisaIcon } from "@/components/foundations/payment-icons";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

// Helper functions for formatting
const formatCurrency = (amount: number): string => {
    const formatted = Math.abs(amount).toLocaleString("en-US", { style: "currency", currency: "USD" });

    return amount >= 0 ? `+ ${formatted}` : `- ${formatted}`;
};

const AccountCard = ({
    data,
    title,
    value,
    change,
    className,
}: {
    data: Array<{ name: string; value: number; className: string }>;
    title: string;
    value: string;
    change: string;
    className?: string;
}) => (
    <div
        className={cx(
            "relative flex flex-col flex-wrap gap-x-6 gap-y-5 rounded-xl bg-primary_alt px-4 py-5 shadow-xs ring-1 ring-secondary ring-inset lg:flex-row lg:p-6",
            className,
        )}
    >
        <div className="h-30 w-30">
            <ResponsiveContainer>
                <PieChart>
                    <RechartsTooltip content={<ChartTooltipContent isPieChart />} />

                    <Pie
                        isAnimationActive={false}
                        startAngle={-270}
                        endAngle={-630}
                        stroke="none"
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        fill="currentColor"
                        innerRadius={45}
                        outerRadius={60}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="flex flex-1 flex-col gap-6">
            <p className="hidden text-md font-semibold text-primary lg:block">{title}</p>
            <div className="absolute top-4 right-4 lg:top-5 lg:right-5">
                <TableRowActionsDropdown />
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-tertiary">Current balance</p>
                <div className="flex items-end justify-between gap-4">
                    <p className="text-display-sm font-semibold text-primary">{value}</p>
                    <MetricChangeIndicator trend="positive" type="trend" value={change} className="mb-0.5" />
                </div>
            </div>
        </div>
    </div>
);

const pieChartData1 = [
    {
        name: "Cash",
        value: 200,
        className: "text-utility-brand-600",
    },
    {
        name: "Savings",
        value: 350,
        className: "text-utility-brand-500",
    },
    {
        name: "Investments",
        value: 100,
        className: "text-utility-brand-400",
    },
    {
        name: "Credit",
        value: 120,
        className: "text-utility-brand-300",
    },
    {
        name: "Other",
        value: 230,
        className: "text-utility-gray-200",
    },
];

const pieChartData2 = [
    {
        name: "Cash",
        value: 200,
        className: "text-utility-gray-600",
    },
    {
        name: "Savings",
        value: 350,
        className: "text-utility-gray-500",
    },
    {
        name: "Investments",
        value: 100,
        className: "text-utility-gray-400",
    },
    {
        name: "Credit",
        value: 120,
        className: "text-utility-gray-300",
    },
    {
        name: "Other",
        value: 230,
        className: "text-utility-gray-100",
    },
];

const barData = [
    {
        date: "2025-01-01",
        A: 300,
        B: 200,
        C: 350,
    },
    {
        date: "2025-02-01",
        A: 320,
        B: 300,
        C: 300,
    },
    {
        date: "2025-03-01",
        A: 300,
        B: 200,
        C: 240,
    },
    {
        date: "2025-04-01",
        A: 240,
        B: 300,
        C: 280,
    },
    {
        date: "2025-05-01",
        A: 320,
        B: 280,
        C: 100,
    },
    {
        date: "2025-06-01",
        A: 330,
        B: 300,
        C: 130,
    },
    {
        date: "2025-07-01",
        A: 300,
        B: 200,
        C: 100,
    },
    {
        date: "2025-08-01",
        A: 350,
        B: 300,
        C: 200,
    },
    {
        date: "2025-09-01",
        A: 300,
        B: 200,
        C: 100,
    },
    {
        date: "2025-10-01",
        A: 200,
        B: 300,
        C: 280,
    },
    {
        date: "2025-11-01",
        A: 240,
        B: 300,
        C: 300,
    },
    {
        date: "2025-12-01",
        A: 200,
        B: 400,
        C: 350,
    },
];

const transactions = [
    {
        id: "transaction-01",
        paymentMethod: {
            type: "Visa ending in 1234",
            expiry: "Expiry 06/2025",
            logo: <VisaIcon className="h-8 w-11.5" />,
        },
        amount: 244.0,
    },
    {
        id: "transaction-02",
        paymentMethod: {
            type: "Visa ending in 1234",
            expiry: "Expiry 06/2025",
            logo: <VisaIcon className="h-8 w-11.5" />,
        },
        amount: 326.0,
    },
    {
        id: "transaction-03",
        paymentMethod: {
            type: "Stripe deposit",
            email: "billing@untitledui.com",
            logo: <StripeIcon className="h-8 w-11.5" />,
        },
        amount: 408.0,
    },
    {
        id: "transaction-04",
        paymentMethod: {
            type: "Visa ending in 1234",
            expiry: "Expiry 06/2025",
            logo: <VisaIcon className="h-8 w-11.5" />,
        },
        amount: 628.0,
    },
    {
        id: "transaction-05",
        paymentMethod: {
            type: "PayPal deposit",
            email: "alina@untitledui.com",
            logo: <PayPalIcon className="h-8 w-11.5" />,
        },
        amount: 166.0,
    },
    {
        id: "transaction-06",
        paymentMethod: {
            type: "Apple Pay",
            email: "molly@untitledui.com",
            logo: <ApplePayIcon className="h-8 w-11.5" />,
        },
        amount: 250.0,
    },
    {
        id: "transaction-07",
        paymentMethod: {
            type: "Visa ending in 1234",
            expiry: "Expiry 06/2025",
            logo: <VisaIcon className="h-8 w-11.5" />,
        },
        amount: 144.0,
    },
    {
        id: "transaction-08",
        paymentMethod: {
            type: "Stripe deposit",
            email: "billing@untitledui.com",
            logo: <StripeIcon className="h-8 w-11.5" />,
        },
        amount: 408.0,
    },
];

const colors: Record<string, string> = {
    A: "text-utility-brand-700",
    B: "text-utility-brand-500",
    C: "text-utility-gray-200",
};

export const Dashboard13 = () => {
    const isDesktop = useBreakpoint("lg");

    return (
        <div className="flex min-h-screen flex-col bg-secondary_alt lg:flex-row">
            <SidebarNavigationSimple
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
                featureCard={
                    <FeaturedCardUpgradeCTA
                        icon={ZapFast}
                        title="Upgrade to PRO"
                        badge="20% OFF"
                        description="Unlock 200+ integrations, 40 GB data, and advanced reporting."
                        confirmLabel="Upgrade now"
                        onConfirm={() => {}}
                        onDismiss={() => {}}
                    />
                }
            />

            <main className="flex min-w-0 flex-1 flex-col gap-8 pt-8 pb-12">
                {/* Page header */}
                <div className="flex flex-col gap-5 px-4 lg:px-8">
                    <div className="flex flex-col justify-between gap-4 lg:flex-row">
                        <div className="flex flex-col gap-0.5 lg:gap-1">
                            <p className="text-xl font-semibold text-primary lg:text-display-xs">Banking Dashboard</p>
                            <p className="text-md text-tertiary">Welcome back, Olivia!</p>
                        </div>
                        <div className="flex gap-3">
                            <Button size="md" color="secondary" iconLeading={CurrencyDollar}>
                                Deposit
                            </Button>
                            <Button size="md">Send funds</Button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-4 lg:flex-row">
                        <ButtonGroup defaultSelectedKeys={["12-months"]} selectionMode="single">
                            <ButtonGroupItem id="12-months">
                                <span className="max-lg:hidden">12 months</span>
                                <span className="lg:hidden">12m</span>
                            </ButtonGroupItem>
                            <ButtonGroupItem id="30-days">
                                <span className="max-lg:hidden">30 days</span>
                                <span className="lg:hidden">30d</span>
                            </ButtonGroupItem>
                            <ButtonGroupItem id="7-days">
                                <span className="max-lg:hidden">7 days</span>
                                <span className="lg:hidden">7d</span>
                            </ButtonGroupItem>
                            <ButtonGroupItem id="24-hours">
                                <span className="max-lg:hidden">24 hours</span>
                                <span className="lg:hidden">24h</span>
                            </ButtonGroupItem>
                        </ButtonGroup>

                        <div className="flex gap-3">
                            <DateRangePicker />
                            <Button size="md" color="secondary" iconLeading={FilterLines}>
                                Filters
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 lg:gap-6">
                    <div className="flex flex-col gap-x-6 gap-y-5 px-4 md:flex-row md:flex-wrap lg:px-8">
                        <AccountCard data={pieChartData1} title="Primary account" value="$40,206.20" change="3.4%" className="flex-1 md:min-w-[448px]" />
                        <AccountCard data={pieChartData2} title="Secondary account" value="$6,421.10" change="2.0%" className="flex-1 md:min-w-[448px]" />
                    </div>

                    <div className="flex flex-col gap-8 px-4 lg:flex-row lg:gap-6 lg:px-8">
                        <div className="flex flex-1 flex-col gap-8 lg:gap-6">
                            <div className="relative flex flex-col flex-wrap gap-y-5 rounded-xl bg-primary_alt px-4 py-5 shadow-xs ring-1 ring-secondary ring-inset lg:p-6">
                                <div className="absolute top-5 right-4 lg:top-6 lg:right-6">
                                    <TableRowActionsDropdown />
                                </div>

                                <p className="text-lg font-semibold text-primary">Balance over time</p>
                                <ResponsiveContainer className="h-50!">
                                    <BarChart
                                        data={barData}
                                        className="text-tertiary [&_.recharts-text]:text-xs"
                                        margin={{
                                            left: 0,
                                            right: 0,
                                        }}
                                    >
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
                                                className: "fill-utility-gray-300/30",
                                            }}
                                        />

                                        <Bar
                                            isAnimationActive={false}
                                            className={colors["A"]}
                                            dataKey="A"
                                            name="Cash"
                                            type="monotone"
                                            stackId="a"
                                            fill="currentColor"
                                            maxBarSize={isDesktop ? 32 : 16}
                                        />
                                        <Bar
                                            isAnimationActive={false}
                                            className={colors["B"]}
                                            dataKey="B"
                                            name="Savings"
                                            type="monotone"
                                            stackId="a"
                                            fill="currentColor"
                                            maxBarSize={isDesktop ? 32 : 16}
                                        />
                                        <Bar
                                            isAnimationActive={false}
                                            className={colors["C"]}
                                            dataKey="C"
                                            name="Other"
                                            type="monotone"
                                            stackId="a"
                                            fill="currentColor"
                                            maxBarSize={isDesktop ? 32 : 16}
                                            radius={[6, 6, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="relative flex flex-col overflow-hidden rounded-xl bg-primary_alt shadow-xs ring-1 ring-secondary ring-inset">
                                <div className="absolute top-5 right-4 lg:top-6 lg:right-6">
                                    <TableRowActionsDropdown />
                                </div>

                                <div className="flex flex-col gap-5 px-4 py-5 lg:p-6">
                                    <p className="text-lg font-semibold text-primary">Your cards</p>
                                    <div className="hidden flex-wrap gap-8 lg:flex">
                                        <div className="flex w-72 flex-col gap-4">
                                            <CreditCard width={272} type="brand-dark" className="dark:hidden" />
                                            <CreditCard width={272} type="transparent-gradient" className="hidden dark:block" />
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between">
                                                    <p className="text-sm font-medium text-secondary">Spending this month</p>
                                                    <span className="text-sm text-tertiary">$2,840.40</span>
                                                </div>
                                                <ProgressBar value={58} />
                                            </div>
                                        </div>
                                        <div className="flex w-72 flex-col gap-4">
                                            <CreditCard width={272} type="gray-dark" className="dark:hidden" />
                                            <CreditCard width={272} type="transparent-gradient" className="hidden dark:block" />
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between">
                                                    <p className="text-sm font-medium text-secondary">Spending this month</p>
                                                    <span className="text-sm text-tertiary">$1,260.20</span>
                                                </div>
                                                <ProgressBar value={32} />
                                            </div>
                                        </div>
                                    </div>
                                    <Carousel.Root className="flex flex-col gap-5 lg:hidden">
                                        <Carousel.Content overflowHidden={false} className="gap-5">
                                            {[1, 2, 3].map((id) => (
                                                <Carousel.Item key={id} className="basis-auto">
                                                    <CreditCard width={272} type="brand-dark" className="dark:hidden" />
                                                    <CreditCard width={272} type="transparent-gradient" className="hidden dark:block" />
                                                </Carousel.Item>
                                            ))}
                                        </Carousel.Content>

                                        <CarouselIndicator size="lg" framed={false} />
                                    </Carousel.Root>
                                </div>
                                <div className="flex justify-end border-t border-secondary px-4 py-3 lg:px-6 lg:py-4">
                                    <Button size="md" color="secondary">
                                        Manage cards
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col flex-wrap gap-y-5 rounded-xl bg-primary_alt px-4 py-5 shadow-xs ring-1 ring-secondary ring-inset lg:w-100 lg:p-6">
                            <div className="absolute top-5 right-4 lg:top-6 lg:right-6">
                                <TableRowActionsDropdown />
                            </div>

                            <p className="text-lg font-semibold text-primary">Recent deposits</p>
                            <div className="flex flex-col gap-4">
                                <Table aria-label="Recent deposits">
                                    <Table.Header className="hidden">
                                        <Table.Head id="merchant" isRowHeader className="w-full" />
                                        <Table.Head id="amount" />
                                    </Table.Header>
                                    <Table.Body items={transactions} className="border-b border-secondary">
                                        {(item) => (
                                            <Table.Row id={item.id}>
                                                <Table.Cell className="w-full px-0">
                                                    <div className="flex items-center gap-3">
                                                        {item.paymentMethod.logo}
                                                        <div className="flex flex-col">
                                                            <p className="text-sm font-medium text-primary">{item.paymentMethod.type}</p>
                                                            <p className="text-sm text-nowrap text-tertiary">
                                                                {item.paymentMethod.expiry || item.paymentMethod.email}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Table.Cell>
                                                <Table.Cell className="pr-0 text-sm text-nowrap text-success-primary">{formatCurrency(item.amount)}</Table.Cell>
                                            </Table.Row>
                                        )}
                                    </Table.Body>
                                </Table>
                                <div className="flex justify-end">
                                    <Button size="md" color="link-color">
                                        <span className="hidden lg:inline">Show more</span>
                                        <span className="inline lg:hidden">Learn more</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
