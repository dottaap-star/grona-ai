import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

const pins = [
    {
        location: "Seattle, USA",
        address: "911 E Pike Street, Capitol Hill, Seattle, WA 98122",
        flag: "https://www.untitledui.com/images/flags/US.svg",
        position: {
            x: 130,
            y: 157,
        },
    },
    {
        location: "San Francisco, USA",
        address: "2201 Valencia Street, Mission District, San Francisco, CA 94110",
        flag: "https://www.untitledui.com/images/flags/US.svg",
        position: {
            x: 158,
            y: 204,
        },
    },
    {
        location: "London, GB",
        address: "85 Redchurch Street, Shoreditch, London E2 7DJ",
        flag: "https://www.untitledui.com/images/flags/GB.svg",
        position: {
            x: 521,
            y: 97,
        },
    },
    {
        location: "Berlin, DE",
        address: "17 Weserstraße, Neukölln, 12045 Berlin",
        flag: "https://www.untitledui.com/images/flags/DE.svg",
        position: {
            x: 581,
            y: 73,
        },
    },
    {
        location: "Rome, IT",
        address: "12 Via del Pigneto, Pigneto, 00176 Roma RM",
        flag: "https://www.untitledui.com/images/flags/IT.svg",
        position: {
            x: 513,
            y: 176,
        },
    },
    {
        location: "Mumbai, IN",
        address: "21 Pali Hill Road, Bandra West, Mumbai, Maharashtra 400050",
        flag: "https://www.untitledui.com/images/flags/IN.svg",
        position: {
            x: 678,
            y: 224,
        },
    },
    {
        location: "Tokyo, JP",
        address: "3-15-7 Jingumae, Shibuya-ku, Tokyo 150-0001",
        flag: "https://www.untitledui.com/images/flags/JP.svg",
        position: {
            x: 843,
            y: 199,
        },
    },
    {
        location: "Melbourne, AUS",
        address: "100 Smith Street Collingwood VIC 3066 AU",
        flag: "https://www.untitledui.com/images/flags/AU.svg",
        position: {
            x: 885,
            y: 406,
        },
    },
    {
        location: "Auckland, NZ",
        address: "42 Ponsonby Road, Ponsonby, Auckland 1011",
        flag: "https://www.untitledui.com/images/flags/NZ.svg",
        position: {
            x: 958,
            y: 424,
        },
    },
];

export const ContactMap02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">We'd love to hear from you</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">We have offices and teams all around the world.</p>
                </div>

                <div className="mt-16 flex flex-col gap-16 md:mt-24">
                    {/* World map */}
                    <svg className="mx-auto hidden w-full max-w-5xl overflow-visible lg:block" height="488" viewBox="0 0 1025 483" fill="none">
                        <image width="100%" x="0" y="0" href="https://www.untitledui.com/marketing/world-map-light-mode.svg" className="dark:hidden" />
                        <image width="100%" x="0" y="0" href="https://www.untitledui.com/marketing/world-map-dark-mode.svg" className="not-dark:hidden" />

                        <foreignObject width="100%" height="100%" x="0" y="0" className="overflow-visible">
                            {pins.map((pin, index) => (
                                <div
                                    key={pin.location}
                                    className="fixed"
                                    style={{
                                        left: pin.position.x,
                                        top: pin.position.y,
                                    }}
                                >
                                    <div className="group relative">
                                        <div
                                            className={cx(
                                                "pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-[calc(100%-4px)] scale-95 opacity-0 transition duration-150 ease-in will-change-transform",
                                                "group-hover:pointer-events-auto group-hover:-translate-y-full group-hover:scale-100 group-hover:opacity-100 group-hover:ease-out",
                                                "group-focus-within:pointer-events-auto group-focus-within:-translate-y-full group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:ease-out",
                                            )}
                                        >
                                            <div
                                                id={`vector-map-pin-${index}`}
                                                className="relative flex w-max max-w-45 flex-col items-center rounded-lg bg-primary px-4 py-3 text-center shadow-lg ring-1 ring-secondary_alt"
                                            >
                                                <img aria-hidden="true" src={pin.flag} alt={pin.location} className="size-5 max-w-none rounded-full" />
                                                <p className="mt-2 text-xs font-semibold text-primary">{pin.location}</p>
                                                <p className="mt-1 text-xs text-tertiary">{pin.address}</p>
                                            </div>
                                        </div>

                                        <button
                                            aria-label={`View ${pin.location}`}
                                            aria-describedby={`vector-map-pin-${index}`}
                                            className="flex size-10 cursor-pointer items-center justify-center overflow-visible outline-hidden"
                                        >
                                            <span className="absolute size-10 rounded-full bg-fg-brand-secondary/10 transition duration-150 ease-linear group-focus-within:scale-[1.15] group-hover:scale-[1.15]" />
                                            <span className="absolute size-6 rounded-full bg-fg-brand-secondary/20 transition duration-150 ease-linear group-focus-within:scale-[1.15] group-hover:scale-[1.15]" />
                                            <span className="absolute size-2 rounded-full bg-fg-brand-secondary" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </foreignObject>
                    </svg>

                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Support",
                                subtitle: "Our friendly team is here to help.",
                                cta: "support@untitledui.com",
                                href: "mailto:support@untitledui.com",
                            },
                            {
                                title: "Sales",
                                subtitle: "Questions or queries? Get in touch!",
                                cta: "sales@untitledui.com",
                                href: "mailto:sales@untitledui.com",
                            },
                            {
                                title: "Phone",
                                subtitle: "Mon-Fri from 8am to 5pm.",
                                cta: "+1 (555) 000-0000",
                                href: "tel:+1 (555) 000-0000",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col items-center text-center">
                                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
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
