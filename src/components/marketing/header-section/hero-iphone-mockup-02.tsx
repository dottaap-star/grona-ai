import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Header } from "@/components/marketing/header-navigation/header";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const HeroIPhoneMockup02 = () => {
    return (
        <div className="relative overflow-hidden bg-secondary">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header />

            <section className="relative overflow-hidden pt-16 md:py-24">
                <div className="mx-auto flex max-w-container flex-col gap-16 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-16">
                    <div className="flex w-full max-w-3xl flex-1 flex-col">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            #1 paid ads tracking app for marketers
                        </h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Designed by marketers, for marketers. Untitled gives you the guidance, data and innovation you need to become a better
                            marketer.{" "}
                        </p>
                        <div className="mt-8 flex gap-3 md:mt-12">
                            <AppStoreButton size="lg" />
                            <GooglePlayButton size="lg" />
                        </div>
                    </div>

                    <div className="relative flex h-90 w-full items-start justify-center lg:h-142 lg:max-w-144 lg:flex-1 lg:items-center">
                        {/* Light mode image (hidden in dark mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                            className="absolute top-0 left-24 h-128 max-w-3xl rounded-[10px] object-cover shadow-3xl ring-4 ring-screen-mockup-border max-lg:hidden dark:hidden"
                        />
                        {/* Dark mode image (hidden in light mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                            className="absolute top-0 left-24 h-128 max-w-3xl rounded-[10px] object-cover shadow-3xl ring-4 ring-screen-mockup-border not-dark:hidden max-lg:hidden"
                        />

                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="top-18 left-0 h-[579px] w-71 drop-shadow-iphone-mockup lg:absolute lg:h-auto lg:w-61 lg:drop-shadow-none"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
