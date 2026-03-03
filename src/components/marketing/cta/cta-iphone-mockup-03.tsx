import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const CTAIPhoneMockup03 = () => {
    return (
        <section className="bg-primary pt-16 md:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="flex max-w-3xl flex-col items-start">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">Growth performance tracking made easy</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Start your 30-day free trial today.</p>
                    <div className="mt-8 flex w-full gap-3 md:mt-12">
                        <AppStoreButton size="lg" />
                        <GooglePlayButton size="lg" />
                    </div>
                </div>

                <div className="relative -mx-4 min-h-90 w-screen overflow-hidden bg-tertiary md:mx-0 md:min-h-128 md:w-full">
                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute top-14 left-[47%] w-full max-w-67 -translate-x-[60%] drop-shadow-iphone-mockup sm:top-28 md:max-w-78.5 lg:left-12 lg:translate-x-0"
                    />
                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute top-6 right-[47%] w-full max-w-67 translate-x-[60%] drop-shadow-iphone-mockup sm:top-12 md:max-w-78.5 lg:right-12 lg:translate-x-0"
                    />
                </div>
            </div>
        </section>
    );
};
