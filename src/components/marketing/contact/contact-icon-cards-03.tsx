"use client";

import { MarkerPin02, MessageChatCircle, Phone } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const ContactIconCards03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge color="brand" size="lg" className="hidden md:flex">
                        Contact us
                    </Badge>
                    <Badge color="brand" size="md" className="md:hidden">
                        Contact us
                    </Badge>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">We'd love to hear from you</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Chat to our friendly team.</p>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-24">
                    <img
                        src="https://www.untitledui.com/marketing/smiling-girl-11.webp"
                        className="h-60 w-full object-cover md:h-100 lg:h-140"
                        alt="People discussion a topic"
                    />
                    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                        {[
                            {
                                title: "Chat to sales",
                                subtitle: "Speak to our friendly team.",
                                href: "mailto:sales@untitledui.com",
                                cta: "sales@untitledui.com",
                                icon: MessageChatCircle,
                            },
                            {
                                title: "Visit us",
                                subtitle: "Visit our office HQ.",
                                href: "https://goo.gl/maps/zTXmPKVdUvCQH9Wd6",
                                cta: "100 Smith Street\nCollingwood VIC 3066 AU",
                                icon: MarkerPin02,
                            },
                            {
                                title: "Call us",
                                subtitle: "Mon-Fri from 8am to 5pm.",
                                href: "tel:+1 (555) 000-0000",
                                cta: "+1 (555) 000-0000",
                                icon: Phone,
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex h-full flex-col items-start bg-secondary p-6">
                                <FeaturedIcon size="lg" icon={item.icon} color="brand" theme="dark" />

                                <h3 className="mt-12 text-lg font-semibold text-primary md:mt-16">{item.title}</h3>
                                <p className="mt-1 text-md text-tertiary">{item.subtitle}</p>
                                <Button color="link-color" size="lg" href={item.href} className="mt-4 whitespace-pre md:mt-5">
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
