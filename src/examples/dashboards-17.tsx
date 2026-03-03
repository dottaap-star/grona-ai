"use client";

import { BarChartSquare02, CheckDone01, HomeLine, PieChart03, Plus, Rows01, SearchLg, TrendDown01, TrendUp01, Users01 } from "@untitledui/icons";
import { Tab as AriaTab, TabList as AriaTabList, Tabs as AriaTabs } from "react-aria-components";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Pie,
    PieChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
    XAxis,
} from "recharts";
import { SidebarNavigationSlim } from "@/components/application/app-navigation/sidebar-navigation/sidebar-slim";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";
import { CustomRadarChartTick } from "@/components/application/charts/radar-charts.demo";
import { TableRowActionsDropdown } from "@/components/application/table/table";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { BadgeWithIcon } from "@/components/base/badges/badges";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

interface Tab {
    label: string;
    value: string;
    trend: "positive" | "negative";
    change: string;
}

const LargeTab = ({ label, value, trend, change }: Tab) => {
    return (
        <AriaTab className="relative inline-flex min-w-36 flex-1 cursor-pointer pb-6 whitespace-nowrap focus:outline-hidden">
            {({ isSelected }) => (
                <>
                    <div className="flex w-full flex-col gap-2">
                        <p className="text-sm font-medium text-tertiary">{label}</p>
                        <div className="flex items-center gap-4">
                            <p className="text-display-xs font-semibold text-primary lg:text-display-sm">{value}</p>
                            <BadgeWithIcon
                                iconLeading={trend === "positive" ? TrendUp01 : TrendDown01}
                                type="modern"
                                size="md"
                                color={trend === "positive" ? "success" : "error"}
                            >
                                {change}
                            </BadgeWithIcon>
                        </div>
                    </div>

                    {isSelected && <div className="absolute bottom-0 left-0 h-1 w-full bg-fg-brand-primary_alt"></div>}
                </>
            )}
        </AriaTab>
    );
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

const radarData = [
    {
        subject: "Mon",
        A: 800,
        B: 400,
        C: 600,
    },
    {
        subject: "Tue",
        A: 600,
        B: 1000,
        C: 800,
    },
    {
        subject: "Wed",
        A: 600,
        B: 200,
        C: 400,
    },
    {
        subject: "Thu",
        A: 200,
        B: 600,
        C: 800,
    },
    {
        subject: "Fri",
        A: 400,
        B: 200,
        C: 600,
    },
    {
        subject: "Sat",
        A: 1000,
        B: 800,
        C: 600,
    },
    {
        subject: "Sun",
        A: 400,
        B: 1000,
        C: 800,
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

const pieChartData = [
    {
        name: "USA",
        value: 200,
        className: "text-utility-brand-600",
    },
    {
        name: "India",
        value: 350,
        className: "text-utility-brand-500",
    },
    {
        name: "UK",
        value: 100,
        className: "text-utility-brand-400",
    },
    {
        name: "Australia",
        value: 120,
        className: "text-utility-brand-300",
    },
    {
        name: "Canada",
        value: 230,
        className: "text-utility-gray-200",
    },
];

const tabs: Tab[] = [
    { label: "Users", value: "8.8k", trend: "positive", change: "7.4%" },
    { label: "Sessions", value: "10.2k", trend: "positive", change: "7.4%" },
    { label: "Bounce rate", value: "46.2%", trend: "negative", change: "0.2%" },
    { label: "Session duration", value: "4m 4s", trend: "positive", change: "7.4%" },
];

export const Dashboard17 = () => {
    const isDesktop = useBreakpoint("lg");

    return (
        <div className="flex flex-col bg-primary lg:flex-row">
            <SidebarNavigationSlim
                hideBorder
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
            />
            <main className="min-w-0 flex-1 lg:pt-2 lg:pl-1">
                <div className="flex h-full flex-col gap-8 border-secondary pt-8 pb-12 lg:rounded-tl-[24px] lg:border-t lg:border-l">
                    {/* Page header */}
                    <div className="flex flex-col justify-between gap-4 px-4 lg:flex-row lg:px-8">
                        <p className="text-xl font-semibold text-primary lg:text-display-xs">Website analytics</p>
                        <Input size="sm" shortcut aria-label="Search" placeholder="Search" icon={SearchLg} className="lg:max-w-80" />
                    </div>

                    <div className="flex flex-col gap-8 px-4 lg:flex-row lg:gap-12 lg:px-8">
                        <div className="flex w-full flex-col gap-6 lg:gap-5">
                            <div className="flex items-start justify-between border-b border-secondary pb-5">
                                <p className="text-lg font-semibold text-primary">Overview</p>
                                <TableRowActionsDropdown />
                            </div>

                            <AriaTabs className="-mx-4 overflow-hidden">
                                <AriaTabList className="flex gap-4 overflow-x-auto px-4 whitespace-nowrap">
                                    {tabs.map((tab, index) => (
                                        <LargeTab key={index} {...tab} />
                                    ))}
                                </AriaTabList>
                            </AriaTabs>

                            <div className="flex flex-col gap-5">
                                <div className="flex h-60 flex-col gap-2 lg:h-57">
                                    <ResponsiveContainer className="h-full">
                                        <AreaChart
                                            data={lineData}
                                            className="text-tertiary [&_.recharts-text]:text-xs"
                                            margin={{
                                                left: 5,
                                                right: 5,
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
                                                tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short" })}
                                            />

                                            <RechartsTooltip
                                                content={<ChartTooltipContent />}
                                                labelFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short", year: "numeric" })}
                                                cursor={{
                                                    className: "stroke-utility-brand-600 stroke-2",
                                                }}
                                            />

                                            <Area
                                                isAnimationActive={false}
                                                className="text-utility-brand-600"
                                                dataKey="A"
                                                name="Mobile"
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
                                                className="text-utility-brand-400"
                                                dataKey="B"
                                                name="Desktop"
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
                                                className="text-utility-brand-700"
                                                dataKey="C"
                                                name="Other"
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
                                <div className="flex justify-between gap-4 border-t border-secondary pt-4 lg:pt-5">
                                    {/* Desktop */}
                                    <ButtonGroup defaultSelectedKeys={["12-months"]} className="hidden lg:inline-flex">
                                        <ButtonGroupItem id="12-months">12 months</ButtonGroupItem>
                                        <ButtonGroupItem id="30-days">30 days</ButtonGroupItem>
                                        <ButtonGroupItem id="7-days">7 days</ButtonGroupItem>
                                        <ButtonGroupItem id="custom" iconLeading={Plus}>
                                            Custom
                                        </ButtonGroupItem>
                                    </ButtonGroup>

                                    {/* Mobile */}
                                    <ButtonGroup defaultSelectedKeys={["12-months"]} className="lg:hidden">
                                        <ButtonGroupItem id="12-months">12m</ButtonGroupItem>
                                        <ButtonGroupItem id="30-days">30d</ButtonGroupItem>
                                        <ButtonGroupItem id="7-days">7d</ButtonGroupItem>
                                        <ButtonGroupItem id="custom" iconLeading={Plus} aria-label="Custom" />
                                    </ButtonGroup>
                                    <Button size="md" color="secondary">
                                        <span className="hidden lg:inline">Audience overview</span>
                                        <span className="lg:hidden">Overview</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:max-w-98 lg:min-w-98 lg:gap-5">
                            <div className="flex items-start justify-between border-b border-secondary pb-5">
                                <p className="text-lg font-semibold text-primary">Traffic sources</p>
                                <TableRowActionsDropdown />
                            </div>

                            <ResponsiveContainer className="relative min-h-[325px] lg:max-h-100">
                                <RadarChart
                                    data={radarData}
                                    margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                    className="font-medium text-tertiary [&_.recharts-polar-grid]:text-utility-gray-100 [&_.recharts-text]:text-sm"
                                >
                                    <PolarGrid stroke="currentColor" className="text-utility-gray-100" />
                                    <PolarAngleAxis
                                        dataKey="subject"
                                        stroke="currentColor"
                                        tick={({ x, y, textAnchor, index, payload, ...props }) => (
                                            <text
                                                x={x}
                                                y={index === 0 ? (y as number) - 14 : index === 3 || index === 4 ? (y as number) + 10 : (y as number)}
                                                textAnchor={textAnchor}
                                                {...props}
                                                className={cx("recharts-text recharts-polar-angle-axis-tick-value", props.className)}
                                            >
                                                <tspan dy="0em" className="fill-utility-gray-700 text-xs font-medium lg:text-sm">
                                                    {payload.value}
                                                </tspan>
                                            </text>
                                        )}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <PolarRadiusAxis
                                        textAnchor="middle"
                                        tick={(props) => <CustomRadarChartTick {...props} />}
                                        axisLine={false}
                                        angle={90}
                                        domain={[0, 1000]}
                                    />

                                    <RechartsTooltip
                                        content={<ChartTooltipContent />}
                                        cursor={{
                                            className: "stroke-utility-brand-600  stroke-2",
                                            style: {
                                                transform: "translateZ(0)",
                                            },
                                        }}
                                    />

                                    <Radar
                                        isAnimationActive={false}
                                        className="text-utility-brand-600"
                                        dataKey="A"
                                        name="x.com"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinejoin="round"
                                        fill="currentColor"
                                        fillOpacity={0.2}
                                        activeDot={{
                                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                        }}
                                    />
                                    <Radar
                                        isAnimationActive={false}
                                        className="text-utility-pink-500"
                                        dataKey="B"
                                        name="google.com"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinejoin="round"
                                        fill="currentColor"
                                        fillOpacity={0.2}
                                        activeDot={{
                                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                        }}
                                    />
                                    <Radar
                                        isAnimationActive={false}
                                        className="text-utility-blue-light-500"
                                        dataKey="C"
                                        name="untitledui.com"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinejoin="round"
                                        fill="currentColor"
                                        fillOpacity={0.2}
                                        activeDot={{
                                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                        }}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="max-lg:hidden lg:px-8">
                        <div className="h-px w-full bg-border-secondary"></div>
                    </div>

                    <div className="flex flex-col gap-8 px-4 lg:flex-row lg:gap-12 lg:px-8">
                        <div className="flex w-full flex-col gap-6 lg:gap-5">
                            <div className="flex items-start justify-between border-b border-secondary pb-5">
                                <p className="text-lg font-semibold text-primary">How do you acquire users?</p>
                                <TableRowActionsDropdown />
                            </div>

                            <Tabs selectedKey="traffic-channel" className="items-start">
                                <TabList
                                    size="sm"
                                    type="button-border"
                                    items={[
                                        { id: "traffic-channel", label: "Traffic channel" },
                                        { id: "source", label: "Source" },
                                        { id: "referrals", label: "Referrals" },
                                    ]}
                                />
                            </Tabs>

                            <div className="flex flex-col gap-5">
                                <ResponsiveContainer className="h-60!">
                                    <BarChart
                                        data={barData}
                                        margin={{
                                            left: 0,
                                            right: 0,
                                        }}
                                        className="text-tertiary [&_.recharts-text]:text-xs"
                                    >
                                        <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                                        <Legend
                                            itemSorter="dataKey"
                                            verticalAlign="top"
                                            align="right"
                                            layout="horizontal"
                                            content={<ChartLegendContent reversed />}
                                        />

                                        <XAxis
                                            fill="currentColor"
                                            axisLine={false}
                                            tickLine={false}
                                            tickMargin={10}
                                            interval="preserveStartEnd"
                                            dataKey="date"
                                            tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short" })}
                                        />

                                        <RechartsTooltip
                                            content={<ChartTooltipContent />}
                                            labelFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short", year: "numeric" })}
                                            cursor={{
                                                className: "fill-utility-gray-300/30",
                                            }}
                                        />

                                        <Bar
                                            isAnimationActive={false}
                                            className="text-utility-brand-700"
                                            dataKey="A"
                                            name="Referral"
                                            stackId="a"
                                            fill="currentColor"
                                            maxBarSize={isDesktop ? 32 : 16}
                                        />
                                        <Bar
                                            isAnimationActive={false}
                                            className="text-utility-brand-500"
                                            dataKey="B"
                                            name="Organic search"
                                            stackId="a"
                                            fill="currentColor"
                                            maxBarSize={isDesktop ? 32 : 16}
                                        />
                                        <Bar
                                            isAnimationActive={false}
                                            className="text-utility-gray-200"
                                            dataKey="C"
                                            name="Direct"
                                            stackId="a"
                                            fill="currentColor"
                                            maxBarSize={isDesktop ? 32 : 16}
                                            radius={[6, 6, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>

                                <div className="flex justify-between gap-4 border-t border-secondary pt-4 lg:pt-5">
                                    <ButtonGroup defaultSelectedKeys={["12-months"]} className="hidden lg:inline-flex">
                                        <ButtonGroupItem id="12-months">12 months</ButtonGroupItem>
                                        <ButtonGroupItem id="30-days">30 days</ButtonGroupItem>
                                        <ButtonGroupItem id="7-days">7 days</ButtonGroupItem>
                                        <ButtonGroupItem id="custom" iconLeading={Plus}>
                                            Custom
                                        </ButtonGroupItem>
                                    </ButtonGroup>
                                    <ButtonGroup defaultSelectedKeys={["12-months"]} className="lg:hidden">
                                        <ButtonGroupItem id="12-months">12m</ButtonGroupItem>
                                        <ButtonGroupItem id="30-days">30d</ButtonGroupItem>
                                        <ButtonGroupItem id="7-days">7d</ButtonGroupItem>
                                        <ButtonGroupItem id="custom" iconLeading={Plus} aria-label="Custom" />
                                    </ButtonGroup>
                                    <Button size="md" color="secondary">
                                        <span className="hidden lg:inline">Audience overview</span>
                                        <span className="lg:hidden">Overview</span>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 lg:max-w-98 lg:min-w-98 lg:gap-5">
                            <div className="flex items-start justify-between border-b border-secondary pb-5">
                                <p className="text-lg font-semibold text-primary">Sessions by country</p>
                                <TableRowActionsDropdown />
                            </div>

                            <div className="h-60 w-82.5 lg:h-70 lg:w-92.5">
                                <ResponsiveContainer>
                                    <PieChart
                                        margin={{
                                            left: 0,
                                            right: 0,
                                            top: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <Legend itemSorter="dataKey" verticalAlign="top" align="right" layout="vertical" content={<ChartLegendContent />} />
                                        <RechartsTooltip content={<ChartTooltipContent isPieChart />} />

                                        <Pie
                                            isAnimationActive={false}
                                            startAngle={-270}
                                            endAngle={-630}
                                            stroke="none"
                                            data={pieChartData}
                                            dataKey="value"
                                            nameKey="name"
                                            fill="currentColor"
                                            innerRadius={isDesktop ? 106 : 90}
                                            outerRadius={isDesktop ? 140 : 120}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
