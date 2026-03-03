export const FeaturesLargeScreenMockup01 = () => {
    return (
        <section className="bg-primary py-16 md:pt-24 md:pb-0">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Cutting-edge features for advanced analytics</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </div>
            <div className="mx-auto mt-12 w-full max-w-container px-4 md:mt-16 md:max-h-105 md:overflow-hidden md:px-8 lg:max-h-140">
                <div className="size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[32px] md:p-1 md:ring-[2px]">
                    <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                        <div className="relative size-full overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[24px] md:ring-[2px]">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="size-full object-cover dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="size-full object-cover not-dark:hidden"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
