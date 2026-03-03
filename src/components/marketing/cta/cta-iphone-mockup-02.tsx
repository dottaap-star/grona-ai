import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const CTAIPhoneMockup02 = () => {
    return (
        <section className="bg-primary pt-16 md:py-24">
            <div className="relative mx-auto grid w-full max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="z-20 flex max-w-3xl flex-col items-start">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">Growth performance tracking made easy</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Start your 30-day free trial today.</p>
                    <div className="mt-8 flex w-full gap-3 md:mt-12">
                        <AppStoreButton size="lg" />
                        <GooglePlayButton size="lg" />
                    </div>
                </div>

                {/*  Notifications List */}
                <ul className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-12 flex-col gap-3 lg:flex" aria-hidden="true">
                    <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                        <img
                            alt="Olivia Rhye"
                            src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                            className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                        />
                        <div>
                            <p className="text-sm text-tertiary">
                                <span className="font-medium text-brand-secondary">Olivia Rhye</span> followed you!
                            </p>
                            <p className="text-sm text-tertiary">@oliviarhye</p>
                        </div>
                    </li>
                    <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                        <img
                            alt="Candice Wu"
                            src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                            className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                        />
                        <div>
                            <p className="text-sm text-tertiary">
                                <span className="font-medium text-brand-secondary">Candice Wu</span> and 2 other gave you kudos on{" "}
                                <span className="font-medium text-brand-secondary">Clubhouse 101</span> post
                            </p>
                        </div>
                    </li>
                    <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-75 backdrop-blur-lg">
                        <img
                            alt="Phoenix Baker"
                            src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                            className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                        />
                        <div>
                            <p className="text-sm text-tertiary">
                                <span className="font-medium text-brand-secondary">Phoenix Baker</span> joined your team{" "}
                                <span className="font-medium text-brand-secondary">Melbourne Startups Growth</span>
                            </p>
                        </div>
                    </li>
                    <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-50 backdrop-blur-lg">
                        <img
                            alt="Lana Steiner"
                            src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                            className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                        />
                        <div>
                            <p className="text-sm text-tertiary">
                                <span className="font-medium text-brand-secondary">Lana Steiner</span> just launched{" "}
                                <span className="font-medium text-brand-secondary">The 10k users challenge</span>
                            </p>
                        </div>
                    </li>
                </ul>

                <div className="relative -mx-4 min-h-90 w-screen overflow-hidden bg-tertiary md:mx-0 md:min-h-140 md:w-full">
                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute top-6 right-1/2 w-full max-w-71 translate-x-1/2 drop-shadow-iphone-mockup sm:top-16 md:max-w-79 lg:right-12 lg:translate-x-0"
                    />
                </div>
            </div>
        </section>
    );
};
