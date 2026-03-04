import { ArrowRight, Building07, Code02, ShoppingBag01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const useCases = [
    {
        title: "E-commerce",
        description: "Increase AOV, reduce cart abandonment, and optimize product pages with AI-powered A/B tests.",
        href: "/for/ecommerce",
        icon: ShoppingBag01,
    },
    {
        title: "SaaS",
        description: "Optimize trial-to-paid conversions, feature adoption flows, and pricing page performance.",
        href: "/for/saas",
        icon: Code02,
    },
    {
        title: "Agencies",
        description: "Deliver CRO results for clients without hiring developers. Manage multiple sites from one account.",
        href: "/for/agencies",
        icon: Building07,
    },
];

export const UseCasesSection = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Solutions</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                        Built for teams that drive growth
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {useCases.map((useCase) => (
                        <a
                            key={useCase.title}
                            href={useCase.href}
                            className="group flex flex-col rounded-2xl border border-secondary bg-primary p-6 transition-shadow hover:shadow-lg md:p-8"
                        >
                            <FeaturedIcon icon={useCase.icon} size="lg" color="brand" theme="light" />
                            <h3 className="mt-5 text-lg font-semibold text-primary">{useCase.title}</h3>
                            <p className="mt-2 flex-1 text-md text-tertiary">{useCase.description}</p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition-colors group-hover:text-brand-secondary_hover">
                                Learn more
                                <ArrowRight className="size-4" />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
