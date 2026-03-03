"use client";

import { Mail01, MarkerPin02, Phone } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const ContactIconsAndMap01Brand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <span className="text-sm font-semibold text-tertiary_on-brand md:text-md">Contact us</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary_on-brand md:text-display-md">Get in touch</h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Our friendly team would love to hear from you.</p>
                </div>

                <div className="mt-12 grid grid-cols-1 items-start gap-12 md:mt-16 md:gap-16 lg:grid-cols-3">
                    <ul className="col-span-1 grid w-full grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-1 lg:gap-y-12">
                        {[
                            {
                                title: "Email",
                                subtitle: "Our friendly team is here to help.",
                                icon: Mail01,
                                cta: "hi@untitledui.com",
                                href: "mailto:hi@untitledui.com",
                            },
                            {
                                title: "Office",
                                subtitle: "Come say hello at our office HQ.",
                                cta: "100 Smith Street\nCollingwood VIC 3066 AU",
                                icon: MarkerPin02,
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                            {
                                title: "Phone",
                                subtitle: "Mon-Fri from 8am to 5pm.",
                                icon: Phone,
                                cta: "+1 (555) 000-0000",
                                href: "tel:+1 (555) 000-0000",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex items-start gap-4">
                                <FeaturedIcon className="md:hidden" icon={item.icon} color="brand" theme="dark" size="md" />
                                <FeaturedIcon className="hidden md:flex" icon={item.icon} color="brand" theme="dark" size="lg" />

                                <div className="lg:pt-2.5">
                                    <h3 className="text-lg font-semibold text-primary_on-brand">{item.title}</h3>
                                    <p className="mt-1 text-md text-tertiary_on-brand">{item.subtitle}</p>
                                    <Button size="lg" color="link-gray" href={item.href} className="mt-4 whitespace-pre text-primary_on-brand lg:mt-5">
                                        {item.cta}
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <iframe
                        title="Our address"
                        src="https://snazzymaps.com/embed/451894"
                        className="col-span-2 h-60 w-full border-none lg:h-full"
                        data-chromatic="ignore"
                    />
                </div>
            </div>
        </section>
    );
};
