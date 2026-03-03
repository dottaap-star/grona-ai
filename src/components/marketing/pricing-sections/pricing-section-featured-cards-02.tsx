import { PricingTierCardCallout } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

const plans = [
    {
        title: "Basic plan",
        subtitle: "$10/mth",
        description: "Billed annually.",
        callOut: "Most popular!",
        features: [
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat and email support",
        ],
        hasCallout: true,
    },
    {
        title: "Business plan",
        subtitle: "$20/mth",
        description: "Billed annually.",
        features: ["200+ integrations", "Advanced reporting", "Up to 20 individual users", "40 GB individual data", "Priority chat and email support"],
    },
];

export const PricingSectionFeaturedCards02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-16 xl:flex-row">
                    <div className="w-full max-w-3xl xl:max-w-md">
                        <span className="block text-sm font-semibold text-brand-secondary md:text-md">Upgrade</span>
                        <h2 className="mt-3 hidden text-display-sm font-semibold text-primary md:flex md:text-display-md">Pricing plans that scale</h2>
                        <h2 className="mt-3 flex text-display-sm font-semibold text-primary md:hidden md:text-display-md">Pricing plans that scale with you</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                    </div>

                    <div className="grid w-full grid-cols-1 items-start gap-4 md:-ml-2 md:grid-cols-2 md:gap-8">
                        {plans.map((plan) => (
                            <PricingTierCardCallout key={plan.title} {...plan} checkItemTextColor="success" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
