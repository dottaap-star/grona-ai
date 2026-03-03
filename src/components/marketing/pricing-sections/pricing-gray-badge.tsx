import { Button } from "@/components/base/buttons/button";
import { PricingTierCardBadge } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

const plans = [
    {
        title: "Basic plan",
        subtitle: "$10/mth",
        description: "Our most popular plan.",
        features: [
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat and email support",
        ],
    },
    {
        title: "Business plan",
        subtitle: "$20/mth",
        description: "Growing teams up to 20 users.",
        features: [
            "200+ integrations",
            "Advanced reporting and analytics",
            "Up to 20 individual users",
            "40 GB individual data",
            "Priority chat and email support",
        ],
    },
    {
        title: "Enterprise plan",
        subtitle: "$40/mth",
        description: "Advanced features + unlimited users.",
        features: [
            "Advanced custom fields",
            "Audit log and data history",
            "Unlimited individual users",
            "Unlimited individual data",
            "Personalized + priority service",
        ],
    },
];

export const PricingGrayBadge = () => {
    return (
        <section className="bg-primary">
            <div className="pt-16 pb-32 md:pt-24 md:pb-48">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</p>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Simple, transparent pricing</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                            We believe Untitled should be accessible to all companies, no matter the size.
                        </p>
                        <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-center md:mt-12">
                            <Button color="secondary" size="xl">
                                Chat to sales
                            </Button>
                            <Button size="xl">Get started</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-auto -mt-16 max-w-container px-4 pb-16 md:-mt-24 md:px-8 md:pb-24">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardBadge key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};
