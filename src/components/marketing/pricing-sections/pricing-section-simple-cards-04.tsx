import { PricingTierCardDualCheckItems } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

const plans = [
    {
        title: "Basic plan",
        price: 10,
        description: "Our most popular plan for small teams.",
        contentTitle: "FEATURES",
        contentDescription: (
            <>
                Everything in our <span className="text-md font-semibold">free plan</span> plus....
            </>
        ),
        features: [
            "Access to basic features",
            "Basic reporting + analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat support",
            "Attend events",
            "Automatic updates",
            "Backup your account",
            "Audit log and notes",
            "Feature requests",
        ],
    },
    {
        title: "Business plan",
        price: 20,
        description: "Advanced features and reporting.",
        contentTitle: "FEATURES",
        contentDescription: (
            <>
                Everything in our <span className="text-md font-semibold">basic plan</span> plus....
            </>
        ),
        badge: "Popular",
        features: [
            "200+ integrations",
            "Advanced reporting",
            "Up to 20 individual users",
            "40 GB individual data",
            "Priority chat support",
            "Advanced custom fields",
            "Audit log and data history",
            "Backup your account",
            "Personalized service",
            "+ many more...",
        ],
    },
];

export const PricingSectionSimpleCards04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Plans that fit your scale</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid w-full max-w-xl grid-cols-1 gap-4 md:mt-16 md:gap-8 xl:max-w-none xl:grid-cols-2">
                    {plans.map((plan) => (
                        <PricingTierCardDualCheckItems key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};
