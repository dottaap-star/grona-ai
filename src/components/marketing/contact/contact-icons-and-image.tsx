"use client";

import { MarkerPin02 } from "@untitledui/icons";

export const ContactIconsAndImage = () => {
    return (
        <div className="bg-primary">
            <section className="bg-secondary pt-16 pb-28 md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
                        <div className="flex w-full max-w-3xl flex-col">
                            <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                            <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Chat to our friendly team</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We'd love to hear from you! Please get in touch.</p>
                        </div>

                        <ul className="grid grid-cols-1 gap-10 md:gap-8">
                            {[
                                {
                                    title: "Melbourne",
                                    subtitle: "100 Flinders Street, \nMelbourne VIC 3000 AU",
                                    icon: MarkerPin02,
                                },
                                {
                                    title: "Sydney",
                                    subtitle: "100 George Street, \nSydney NSW 2000 AU",
                                    icon: MarkerPin02,
                                },
                            ].map((item) => (
                                <li key={item.title} className="flex items-start gap-4">
                                    <item.icon className="size-6 pt-0.5 text-icon-fg-brand" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                        <p className="mt-1 text-md whitespace-pre text-tertiary md:whitespace-normal">{item.subtitle}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="-mt-16 pb-16 md:-mt-24 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <img
                        src="https://www.untitledui.com/marketing/smiling-girl-3.webp"
                        className="h-60 w-full object-cover shadow-3xl md:h-120 lg:h-140"
                        alt="Team discussing a topic"
                    />
                </div>
            </section>
        </div>
    );
};
