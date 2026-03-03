"use client";

import { MarkerPin02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const ContactMap01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Our locations</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Come visit our friendly team at one of our offices.</p>
                </div>

                <div className="mt-16 flex flex-col gap-12 md:mt-24 md:gap-16">
                    <iframe
                        title="Our address"
                        src="https://snazzymaps.com/embed/451894"
                        className="h-80 w-full border-none md:h-100"
                        data-chromatic="ignore"
                    />
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Retail store",
                                subtitle: "Mon-Sat 9am to 5pm.",
                                icon: MarkerPin02,
                                cta: "150 Brunswick Street\nFitzroy VIC 3065 AU",
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                            {
                                title: "Showroom",
                                subtitle: "Mon-Fri 9am to 5pm.",
                                cta: "50 Flinders Street\nMelbourne VIC 3000 AU",
                                icon: MarkerPin02,
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                            {
                                title: "Head office",
                                subtitle: "Mon-Fri 9am to 5pm.",
                                icon: MarkerPin02,
                                cta: "100 Smith Street\nCollingwood VIC 3066 AU",
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col items-center text-center">
                                <item.icon className="size-6 text-icon-fg-brand" />
                                <h3 className="mt-3 text-lg font-semibold text-primary md:mt-4">{item.title}</h3>
                                <p className="mt-1 text-md text-tertiary">{item.subtitle}</p>
                                <Button color="link-color" size="lg" href={item.href} className="mt-3 whitespace-pre md:mt-4">
                                    {item.cta}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
