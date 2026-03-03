import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const CTAIPhoneMockup01 = () => {
    return (
        <section className="overflow-hidden bg-primary pt-16 md:py-24">
            <div className="relative mx-auto grid w-full max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="z-20 flex max-w-3xl flex-col items-start">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">Growth performance tracking made easy</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Start your 30-day free trial today.</p>
                    <div className="mt-8 flex w-full gap-3 md:mt-12">
                        <AppStoreButton size="lg" />
                        <GooglePlayButton size="lg" />
                    </div>
                </div>

                <div className="relative min-h-90 md:min-h-100 md:w-full">
                    <svg className="absolute -bottom-24 left-1/2 -translate-x-1/2" width="532" height="416" viewBox="0 0 532 416" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M182.034 461.691C74.9901 428.768 1.32278 329.846 0.0121784 217.408C-1.15817 117.003 82.1936 43.2414 176.777 10.7273C260.07 -17.9056 346.327 12.9156 406.143 77.7959C484.913 163.236 571.343 274.645 512.702 375.097C449.003 484.212 302.448 498.727 182.034 461.691Z"
                            fill="currentColor"
                            className="text-bg-secondary"
                        />
                    </svg>

                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute top-0 right-1/2 w-full max-w-71 translate-x-1/2 drop-shadow-iphone-mockup md:max-w-78.5"
                    />
                </div>
            </div>
        </section>
    );
};
