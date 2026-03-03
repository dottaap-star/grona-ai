import { Button } from "@/components/base/buttons/button";

export const CTASimpleLogos01Brand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-start lg:grid-cols-[1fr_max-content] lg:gap-x-8">
                    <div className="max-w-3xl">
                        <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">Start your 30-day free trial</h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    </div>

                    <div className="mt-8 flex flex-col-reverse justify-start gap-3 sm:flex-row lg:mt-0">
                        <Button color="secondary" size="xl" className="shadow-xs! ring-0">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>

                    <div className="mt-12 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-4 md:justify-start">
                        <img src="https://www.untitledui.com/logos/logotype/white/odeaolabs.svg" alt="Odeaolabs Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg" alt="Kintsugi Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/stackedlab.svg" alt="Stackedlab Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/magnolia.svg" alt="Magnolia Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg" alt="Warpspeed Logo" className="h-9 opacity-85 md:h-10" />
                        <img src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg" alt="Sisyphus Logo" className="h-9 opacity-85 md:h-10" />
                        <img
                            src="https://www.untitledui.com/logos/logotype/white/catalog.svg"
                            alt="Catalog Logo"
                            className="hidden h-9 opacity-85 md:block md:h-10"
                        />
                        <img
                            src="https://www.untitledui.com/logos/logotype/white/pictelai.svg"
                            alt="Pictelai Logo"
                            className="hidden h-9 opacity-85 md:block md:h-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
