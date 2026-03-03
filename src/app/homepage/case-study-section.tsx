import { ArrowRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";

export const CaseStudySection = () => {
    return (
        <section className="relative z-0 bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="rounded-2xl border border-secondary bg-primary p-8 md:p-12 text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Badge color="success" size="sm">Case Study</Badge>
                            <span className="text-sm text-tertiary">E-commerce</span>
                        </div>

                        <p className="text-display-xs font-semibold text-primary md:text-display-sm">
                            MouthShield saw a 40% conversion lift in 10 days
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
                            {[
                                { value: "40%", label: "Conversion lift" },
                                { value: "10 days", label: "To results" },
                                { value: "4.69% → 6.6%", label: "Conversion rate" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-display-sm font-semibold text-brand-tertiary_alt md:text-display-md">{stat.value}</div>
                                    <div className="mt-1 text-sm text-tertiary">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <blockquote className="mt-8 pt-6 border-t border-secondary">
                            <p className="text-md text-tertiary italic">
                                "We saw real, actionable results and I wouldn't hesitate to work with them again."
                            </p>
                            <cite className="mt-3 block text-sm font-semibold text-primary not-italic">
                                Peter Lavelle, Co-director SEO, King Edward First
                            </cite>
                        </blockquote>

                        <div className="mt-6">
                            <a
                                href="/case-studies/mouthshield"
                                className="inline-flex items-center gap-2 text-md font-semibold text-brand-secondary transition-colors hover:text-brand-secondary_hover"
                            >
                                Read the full story
                                <ArrowRight className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
