"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";


export const ContactFeaturesTabsMap02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:w-192">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our locations</span>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Visit our stores</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Say hello to our friendly team at one of these locations.</p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-3 lg:items-center">
                    <ul className="flex flex-col">
                        {[
                            {
                                title: "Melbourne",
                                subtitle: "100 Flinders Street\nMelbourne VIC 3000 AU",
                                cta: "View store",
                                href: "#",
                            },
                            {
                                title: "Sydney",
                                subtitle: "100 George Street\nSydney NSW 2000 AU",
                                cta: "View store",
                                href: "#",
                            },
                            {
                                title: "Byron Bay",
                                subtitle: "100 Jonson Street\nByron Bay NSW 2481 AU",
                                cta: "View store",
                                href: "#",
                            },
                        ].map((item, index) => (
                            <li
                                key={item.title}
                                className={cx(
                                    "flex max-w-lg cursor-pointer flex-col border-l-4 py-4 pl-5 transition duration-150 ease-in-out hover:border-brand",
                                    index === 0 ? "border-brand" : "border-tertiary",
                                )}
                            >
                                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                <p className="mt-1 text-md whitespace-pre text-tertiary">{item.subtitle}</p>
                                <Button color="link-color" size="lg" href={item.href} className="mt-4" iconTrailing={<ArrowRight size={20} />}>
                                    {item.cta}
                                </Button>
                            </li>
                        ))}
                    </ul>

                    <iframe
                        title="Our address"
                        src="https://snazzymaps.com/embed/451871"
                        className="col-span-2 h-60 w-full border-none lg:h-full"
                        data-chromatic="ignore"
                    />
                </div>
            </div>
        </section>
    );
};
