import { Button } from "@/components/base/buttons/button";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const CTAScreenMockup02 = () => {
    return (
        <section className="overflow-hidden bg-primary pt-16 md:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
                <div className="flex w-full max-w-3xl flex-col">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">Join 4,000+ startups growing with Untitled</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Start your 30-day free trial today.</p>
                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="relative mx-auto min-h-90 md:min-h-100 lg:mx-0 lg:min-h-142">
                    {/* Light mode image (hidden in dark mode) */}
                    <img
                        className="aspect-3/2 h-auto w-full max-w-5xl rounded object-cover shadow-3xl ring-4 ring-screen-mockup-border max-md:hidden md:ml-24 md:h-90 md:w-auto md:rounded-xl lg:absolute lg:inset-0 lg:left-24 lg:ml-0 lg:h-128 dark:hidden"
                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                        alt="Dashboard mockup showing application interface"
                    />
                    {/* Dark mode image (hidden in light mode) */}
                    <img
                        className="aspect-3/2 h-auto w-full max-w-5xl rounded object-cover shadow-3xl ring-4 ring-screen-mockup-border not-dark:hidden max-md:hidden md:ml-24 md:h-90 md:w-auto md:rounded-xl lg:absolute lg:inset-0 lg:left-24 lg:ml-0 lg:h-128"
                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                        alt="Dashboard mockup showing application interface"
                    />

                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute left-1/2 max-w-71 -translate-x-1/2 md:top-12 md:left-0 md:max-w-45 md:translate-x-0 lg:top-18 lg:max-w-61"
                    />
                </div>
            </div>
        </section>
    );
};
