"use client";

import { useState } from "react";
import { Select } from "@/components/base/select/select";
import { SelectItem } from "@/components/base/select/select-item";
import { Slider } from "@/components/base/slider/slider";
import { Label } from "@/components/base/input/label";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";

export const ROICalculatorSection = () => {
    const [industry, setIndustry] = useState("Ecommerce");
    const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
    const [conversionRate, setConversionRate] = useState(2.4);
    const [averageOrderValue, setAverageOrderValue] = useState(100);

    const upliftRates: Record<string, number> = {
        Ecommerce: 0.18,
        SaaS: 0.25,
        Agencies: 0.18,
        "Financial Services": 0.16,
        "Health & Wellness": 0.2,
        Education: 0.18,
        Travel: 0.24,
        "Real Estate": 0.15,
        "B2B Lead Gen": 0.25,
        "Media & Publishing": 0.17,
        "Consumer Apps": 0.2,
    };

    const calculateROI = () => {
        const uplift = upliftRates[industry] || 0.18;
        const currentMonthlyRevenue = monthlyVisitors * (conversionRate / 100) * averageOrderValue;
        const newConversionRate = conversionRate * (1 + uplift);
        const newMonthlyRevenue = monthlyVisitors * (newConversionRate / 100) * averageOrderValue;
        const additionalMonthly = newMonthlyRevenue - currentMonthlyRevenue;
        const additionalAnnual = additionalMonthly * 12;

        return {
            uplift: uplift * 100,
            currentMonthlyRevenue: Math.round(currentMonthlyRevenue),
            newConversionRate: parseFloat(newConversionRate.toFixed(2)),
            newMonthlyRevenue: Math.round(newMonthlyRevenue),
            additionalMonthly: Math.round(additionalMonthly),
            additionalAnnual: Math.round(additionalAnnual),
        };
    };

    const results = calculateROI();

    const industries = [
        { id: "Ecommerce", label: "Ecommerce" },
        { id: "SaaS", label: "SaaS" },
        { id: "Agencies", label: "Agencies" },
        { id: "Financial Services", label: "Financial Services" },
        { id: "Health & Wellness", label: "Health & Wellness" },
        { id: "Education", label: "Education" },
        { id: "Travel", label: "Travel" },
        { id: "Real Estate", label: "Real Estate" },
        { id: "B2B Lead Gen", label: "B2B Lead Gen" },
        { id: "Media & Publishing", label: "Media & Publishing" },
        { id: "Consumer Apps", label: "Consumer Apps" },
    ];

    const formatCurrency = (value: number) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);

    const formatNumber = (value: number) => new Intl.NumberFormat("en-US").format(value);

    return (
        <section className="relative z-0 bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Calculate your ROI</h2>
                        <p className="mt-4 text-lg text-tertiary">See what a conversion lift could mean for your business.</p>
                    </div>

                    <div className="rounded-2xl border border-secondary bg-primary p-6 md:p-10">
                        <div className="grid gap-10 lg:grid-cols-2">
                            {/* Inputs */}
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Select
                                        selectedKey={industry}
                                        onSelectionChange={(key) => setIndustry(key as string)}
                                        items={industries}
                                        label="Industry"
                                        size="md"
                                    >
                                        {(item) => <SelectItem id={item.id}>{item.label}</SelectItem>}
                                    </Select>
                                </div>

                                <div>
                                    <Label>Monthly Visitors</Label>
                                    <div className="mt-2">
                                        <Slider
                                            value={[monthlyVisitors]}
                                            onChange={(values) => {
                                                const val = Array.isArray(values) ? values[0] : values;
                                                setMonthlyVisitors(typeof val === "number" ? val : monthlyVisitors);
                                            }}
                                            minValue={1000}
                                            maxValue={100000}
                                            step={1000}
                                            labelFormatter={(value) => formatNumber(value)}
                                            formatOptions={{ style: "decimal", maximumFractionDigits: 0 }}
                                            labelPosition="top-floating"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Conversion Rate (%)</Label>
                                        <div className="mt-2">
                                            <Input
                                                type="number"
                                                value={conversionRate.toString()}
                                                onChange={(value) => {
                                                    const val = parseFloat(value);
                                                    if (!isNaN(val) && val >= 0) setConversionRate(val);
                                                }}
                                                inputClassName="text-center"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Avg. Order Value ($)</Label>
                                        <div className="mt-2">
                                            <Input
                                                type="number"
                                                value={averageOrderValue.toString()}
                                                onChange={(value) => {
                                                    const val = parseFloat(value);
                                                    if (!isNaN(val) && val >= 1) setAverageOrderValue(val);
                                                }}
                                                inputClassName="text-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="flex flex-col gap-4">
                                <div className="rounded-xl border border-secondary bg-secondary p-6">
                                    <p className="text-xs font-medium uppercase tracking-wider text-quaternary">Additional monthly revenue</p>
                                    <p className="mt-2 text-display-sm font-semibold text-brand-secondary md:text-display-md">
                                        {formatCurrency(results.additionalMonthly)}
                                    </p>
                                    <p className="mt-1 text-sm text-tertiary">
                                        {formatCurrency(results.additionalAnnual)} per year
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-xl border border-secondary bg-secondary p-4">
                                        <p className="text-xs font-medium text-quaternary">Current revenue</p>
                                        <p className="mt-1 text-lg font-semibold text-primary">{formatCurrency(results.currentMonthlyRevenue)}/mo</p>
                                    </div>
                                    <div className="rounded-xl border border-secondary bg-secondary p-4">
                                        <p className="text-xs font-medium text-quaternary">Projected revenue</p>
                                        <p className="mt-1 text-lg font-semibold text-primary">{formatCurrency(results.newMonthlyRevenue)}/mo</p>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-secondary bg-secondary px-4 py-3 text-center text-sm text-tertiary">
                                    Expected uplift: +{results.uplift.toFixed(0)}% for {industry} &middot; New CR: {results.newConversionRate}%
                                </div>

                                <Button size="lg" href="https://app.grona.ai/signup" className="w-full justify-center">
                                    Start your free optimization
                                </Button>
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-sm text-tertiary">
                        Actual results vary based on traffic quality and site performance.
                    </p>
                </div>
            </div>
        </section>
    );
};
