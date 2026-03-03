import { Button } from "@/components/base/buttons/button";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const CTASplitImage01 = () => {
    return (
        <section className="grid grid-cols-1 gap-y-12 bg-primary py-16 lg:grid-cols-2 lg:items-center lg:py-0">
            <div className="flex w-full lg:justify-end lg:py-24">
                <div className="flex max-w-3xl flex-col items-start px-4 md:px-8 lg:max-w-(--breakpoint-sm)">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">
                        Join 4,000+ startups growing with Untitled
                    </h2>

                    <ul className="mt-8 flex flex-col gap-4 md:gap-5 md:pl-4">
                        {["30-day free trial", "Personalized onboarding", "Access to all features"].map((feat) => (
                            <CheckItemText key={feat} size="md" iconStyle="contained" color="primary" text={feat} />
                        ))}
                    </ul>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>

            <div className="h-70 w-full md:h-95 lg:h-180">
                <img
                    alt="Abstract image representing growth"
                    className="size-full object-cover px-4 md:px-8 lg:px-0"
                    src="https://www.untitledui.com/marketing/split-image-01.webp"
                />
            </div>
        </section>
    );
};
