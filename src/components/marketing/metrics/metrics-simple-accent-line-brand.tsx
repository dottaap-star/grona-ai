"use client";

import { ArrowRight, ZapFast } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const MetricsSimpleAccentLineBrand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex w-full flex-col items-center self-center text-center md:max-w-3xl">
                        <FeaturedIcon color="brand" theme="dark" size="xl" icon={ZapFast} />

                        <h2 className="mt-4 text-display-sm font-semibold text-primary_on-brand md:mt-6 md:text-display-md">Build something great</h2>
                        <p className="mt-4 text-lg text-secondary_on-brand md:mt-5 md:text-xl">Everything you need to build modern UI and great products.</p>
                    </div>
                    <dl className="flex flex-col justify-between gap-10 md:flex-row md:gap-8">
                        {[
                            {
                                title: "400+",
                                subtitle: "Projects completed",
                                description: "We've helped build over 400 amazing projects.",
                                cta: "Learn more",
                                href: "#",
                            },
                            {
                                title: "600%",
                                subtitle: "Return on investment",
                                description: "Our customers have reported an average of ~600% ROI.",
                                cta: "Learn more",
                                href: "#",
                            },
                            {
                                title: "10k",
                                subtitle: "Global downloads",
                                description: "Our free UI kit has been downloaded over 10k times.",
                                cta: "Learn more",
                                href: "#",
                            },
                            {
                                title: "200+",
                                subtitle: "5-star reviews",
                                description: "We're proud of our 5-star rating with over 200 reviews.",
                                cta: "Learn more",
                                href: "#",
                            },
                        ].map((item) => (
                            <div key={item.title} className="flex-1 border-t-2 border-brand_alt pt-4 md:mt-0 md:border-t-0 md:border-l-2 md:pt-0 md:pl-6">
                                <div className="-mt-0.5 flex items-start justify-between gap-4 md:flex-col md:gap-5">
                                    <div className="flex flex-col-reverse gap-1 md:-ml-0.5">
                                        <dt className="text-lg font-semibold text-tertiary_on-brand">{item.subtitle}</dt>
                                        <dd className="text-display-lg font-semibold text-primary_on-brand">{item.title}</dd>
                                    </div>
                                    <Button
                                        color="link-color"
                                        size="lg"
                                        href={item.href}
                                        className="text-primary_on-brand hover:text-secondary_on-brand"
                                        iconTrailing={ArrowRight}
                                    >
                                        {item.cta}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
