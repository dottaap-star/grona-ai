"use client";

import { TabList, Tabs } from "@/components/application/tabs/tabs";

const tabs = [
    { id: "monthly", label: "Monthly billing" },
    { id: "annually", label: "Annual billing" },
];

export const HeaderCenteredTabs = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Simple, transparent pricing</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <div className="mt-8 self-stretch sm:self-center md:mt-12">
                        <Tabs>
                            <TabList type="button-border" size="md" items={tabs} className="w-full md:w-auto [&_[role=tab]]:flex-1" />
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};
