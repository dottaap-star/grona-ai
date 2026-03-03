import { Button } from "@/components/base/buttons/button";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const CTAScreenMockup01 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
                <div className="flex w-full max-w-3xl flex-col">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">Join 4,000+ startups growing with Untitled</h1>
                    <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                        {["30-day free trial", "Personalized onboarding", "Access to all features"].map((feat) => (
                            <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                        ))}
                    </ul>
                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="relative mx-auto w-full lg:h-128">
                    <div className="top-0 left-0 w-full max-w-5xl rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px] lg:absolute lg:w-max">
                        <div className="rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                            <div className="relative overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[20.21px] md:ring-[1.68px]">
                                {/* Light mode image (hidden in dark mode) */}
                                <img
                                    alt="Dashboard mockup showing application interface"
                                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                    className="object-cover object-left-top dark:hidden"
                                />
                                {/* Dark mode image (hidden in light mode) */}
                                <img
                                    alt="Dashboard mockup showing application interface"
                                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                    className="object-cover object-left-top not-dark:hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
