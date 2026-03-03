"use client";

import { MarkerPin02 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const ContactIconsAndMap02Brand = () => {
    return (
        <section className="bg-primary">
            <div className="bg-brand-section pt-16 pb-[112px] md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
                        <div className="flex w-full max-w-3xl flex-col">
                            <span className="text-sm font-semibold text-tertiary_on-brand md:text-md">Contact us</span>
                            <h2 className="mt-3 text-display-sm font-semibold text-primary_on-brand md:text-display-md">Our locations</h2>
                            <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Come visit our friendly team at one of our offices.</p>
                        </div>

                        <ul className="grid grid-cols-1 gap-10 md:gap-8">
                            {[
                                {
                                    title: "Melbourne",
                                    subtitle: "100 Flinders Street, Melbourne VIC 3000 AU",
                                    icon: MarkerPin02,
                                },
                                {
                                    title: "Sydney",
                                    subtitle: "100 George Street, Sydney NSW 2000 AU",
                                    icon: MarkerPin02,
                                },
                            ].map((item) => (
                                <li key={item.title} className="flex items-start gap-4">
                                    <FeaturedIcon className="md:hidden" icon={item.icon} color="brand" theme="dark" size="md" />
                                    <FeaturedIcon className="hidden md:flex" icon={item.icon} color="brand" theme="dark" size="lg" />

                                    <div className="pt-1.5 md:pt-2.5">
                                        <h3 className="text-lg font-semibold text-primary_on-brand">{item.title}</h3>
                                        <p className="mt-1 text-md text-tertiary_on-brand">{item.subtitle}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="-mt-16 pb-16 md:-mt-24 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <iframe
                        title="Our address"
                        src="https://snazzymaps.com/embed/451871"
                        className="h-60 w-full border-none md:h-129"
                        data-chromatic="ignore"
                    />
                </div>
            </div>
        </section>
    );
};
