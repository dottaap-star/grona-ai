import { Badge } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";


export const ContactFeaturesTabsMap01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge color="gray" size="lg" className="hidden md:flex">
                        Stores
                    </Badge>
                    <Badge color="gray" size="md" className="md:hidden">
                        Stores
                    </Badge>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Our locations</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Say hello to our friendly team at one of these locations.</p>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-20">
                    <iframe
                        title="Our address"
                        src="https://snazzymaps.com/embed/451894"
                        className="h-60 w-full border-none md:h-120"
                        data-chromatic="ignore"
                    />

                    <ul className="grid grid-cols-1 gap-y-10 md:grid-cols-3">
                        {[
                            {
                                title: "Melbourne",
                                subtitle: "100 Flinders Street\nMelbourne VIC 3000 AU",
                            },
                            {
                                title: "Sydney",
                                subtitle: "100 George Street\nSydney NSW 2000 AU",
                            },
                            {
                                title: "Byron Bay",
                                subtitle: "100 Jonson Street\nByron Bay NSW 2481 AU",
                            },
                        ].map((item, index) => (
                            <li
                                key={item.title}
                                className={cx(
                                    "flex flex-1 cursor-pointer flex-col items-center border-t-4 pt-5 text-center transition duration-100 ease-linear hover:border-brand md:px-4",
                                    index === 0 ? "border-brand" : "border-tertiary",
                                )}
                            >
                                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                <p className="mt-1 text-md whitespace-pre text-tertiary">{item.subtitle}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
