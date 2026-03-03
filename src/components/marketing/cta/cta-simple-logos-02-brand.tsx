import { Button } from "@/components/base/buttons/button";

export const CTASimpleLogos02Brand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col">
                        <div className="max-w-3xl">
                            <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">
                                Join over 4,000+ startups growing with Untitled
                            </h2>
                            <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Start your 30-day free trial today.</p>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 self-stretch sm:flex-row sm:self-start md:mt-12 lg:flex-row-reverse">
                            <Button size="xl">Get started</Button>
                            <Button color="secondary" size="xl" className="shadow-xs! ring-0">
                                Learn more
                            </Button>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-y-6 lg:mt-0">
                        <img src="https://www.untitledui.com/logos/logotype/white/ephemeral.svg" alt="Ephemeral Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/wildcrafted.svg" alt="Wildcrafted Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/codecraft.svg" alt="Codecraft Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/convergence.svg" alt="Convergence Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/imgcompress.svg" alt="Imgcompress Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/epicurious.svg" alt="Epicurious Logo" className="h-9 opacity-85 md:h-10" />
                        <img
                            src="https://www.untitledui.com/logos/logotype/white/watchtower.svg"
                            alt="Watchtower Logo"
                            className="hidden h-9 opacity-85 md:block md:h-10"
                        />
                        <img
                            src="https://www.untitledui.com/logos/logotype/white/renaissance.svg"
                            alt="Renaissance Logo"
                            className="hidden h-9 opacity-85 md:block md:h-10"
                        />
                        <img
                            src="https://www.untitledui.com/logos/logotype/white/contrastai.svg"
                            alt="Contrastai Logo"
                            className="hidden h-9 opacity-85 md:block md:h-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
