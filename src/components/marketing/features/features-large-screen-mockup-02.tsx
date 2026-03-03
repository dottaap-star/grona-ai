export const FeaturesLargeScreenMockup02 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-0">
            <div className="bg-secondary pt-16 pb-28 md:pt-24 md:pb-40">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>

                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Cutting-edge features for advanced analytics</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000
                            startups.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto -mt-17 w-full max-w-container px-4 pt-1 md:-mt-26 md:overflow-hidden md:px-8 md:pt-2">
                <div className="flex flex-col md:items-start">
                    <div className="flex h-full w-full items-center justify-center md:max-h-105 md:w-full md:items-start lg:max-h-140">
                        {/* Light mode image (hidden in dark mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                            className="size-full rounded object-cover ring-4 ring-screen-mockup-border md:rounded-xl md:ring-8 dark:hidden"
                        />
                        {/* Dark mode image (hidden in light mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                            className="size-full rounded object-cover ring-4 ring-screen-mockup-border not-dark:hidden md:rounded-xl md:ring-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
