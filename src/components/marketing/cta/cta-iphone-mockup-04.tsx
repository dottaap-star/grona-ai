import { AppStoreButton as AppStoreButtonOutline, GooglePlayButton as GooglePlayButtonOutline } from "@/components/base/buttons/app-store-buttons-outline";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";

export const CTAIPhoneMockup04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="relative grid grid-cols-1 overflow-hidden rounded-2xl bg-brand-section md:rounded-3xl md:shadow-xl lg:min-h-120 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-1 flex-col px-6 pt-10 pb-12 sm:p-12 lg:p-16">
                        <h2 className="text-display-sm font-semibold text-white xl:text-display-md">Start your free trial</h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 lg:text-xl">Personal performance tracking made easy.</p>
                        <div className="mt-8 flex w-full gap-3 md:mt-12">
                            <AppStoreButtonOutline size="lg" className="dark-mode" />
                            <GooglePlayButtonOutline size="lg" className="dark-mode" />
                        </div>
                    </div>

                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="top-10 right-16 max-h-70 w-full max-w-67 justify-self-center drop-shadow-iphone-mockup lg:absolute lg:max-h-none lg:max-w-78.5"
                    />

                    {/*  Notifications List */}
                    <ul className="absolute bottom-10 left-1/2 hidden -translate-x-2 flex-col gap-3 lg:flex" aria-hidden="true">
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
                </div>
            </div>
        </section>
    );
};
