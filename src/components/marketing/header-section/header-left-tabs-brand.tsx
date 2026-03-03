import { TabList, Tabs } from "@/components/application/tabs/tabs";

const tabs = [
    { id: "monthly", label: "Monthly billing" },
    { id: "annually", label: "Annual billing" },
];

export const HeaderLeftTabsBrand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <span className="text-sm font-semibold text-secondary_on-brand md:text-md">Pricing</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary_on-brand md:text-display-lg">Simple, transparent pricing</h1>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <div className="mt-8 sm:self-start md:mt-12">
                        <Tabs>
                            <TabList
                                type="button-gray"
                                size="md"
                                items={tabs}
                                className="w-full md:w-auto [&_[role=tab]]:flex-1 [&_[role=tab]]:text-secondary_on-brand [&_[role=tab]]:hover:bg-white/10 [&_[role=tab]]:selected:bg-brand-primary_alt [&_[role=tab]]:selected:text-brand-secondary"
                            />
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};
