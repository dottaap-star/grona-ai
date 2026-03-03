"use client";

import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroScreenMockup02 = () => {
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

            <section className="relative overflow-hidden py-16 md:py-24">
                <div className="mx-auto grid max-w-container grid-cols-1 items-center justify-items-center gap-16 px-4 md:px-8 lg:grid-cols-2 lg:justify-items-start lg:gap-16">
                    <div className="flex max-w-3xl flex-col items-center text-center lg:items-start lg:text-left">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Beautiful analytics to grow smarter
                        </h1>
                        <p className="mt-4 max-w-lg text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.{" "}
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                        <div className="mt-16 hidden flex-col gap-6 lg:flex">
                            <p className="text-md font-medium text-tertiary">Trusted by 4,000+ companies</p>
                            <div className="flex flex-wrap justify-start gap-4">
                                {/* Light mode images (hidden in dark mode) */}
                                <img
                                    alt="Odeaolabs"
                                    src="https://www.untitledui.com/logos/logotype/color/odeaolabs.svg"
                                    className="h-10 object-contain dark:hidden"
                                />
                                <img
                                    alt="Kintsugi"
                                    src="https://www.untitledui.com/logos/logotype/color/kintsugi.svg"
                                    className="h-10 object-contain dark:hidden"
                                />
                                <img
                                    alt="Stackedlab"
                                    src="https://www.untitledui.com/logos/logotype/color/stackedlab.svg"
                                    className="h-10 object-contain dark:hidden"
                                />
                                <img
                                    alt="Magnolia"
                                    src="https://www.untitledui.com/logos/logotype/color/magnolia.svg"
                                    className="h-10 object-contain dark:hidden"
                                />
                                <img
                                    alt="Warpspeed"
                                    src="https://www.untitledui.com/logos/logotype/color/warpspeed.svg"
                                    className="h-10 object-contain dark:hidden"
                                />
                                <img
                                    alt="Sisyphus"
                                    src="https://www.untitledui.com/logos/logotype/color/sisyphus.svg"
                                    className="h-10 object-contain dark:hidden"
                                />

                                {/* Dark mode images (hidden in light mode) */}
                                <img
                                    alt="Odeaolabs"
                                    src="https://www.untitledui.com/logos/logotype/white/odeaolabs.svg"
                                    className="h-10 object-contain opacity-85 not-dark:hidden"
                                />
                                <img
                                    alt="Kintsugi"
                                    src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg"
                                    className="h-10 object-contain opacity-85 not-dark:hidden"
                                />
                                <img
                                    alt="Stackedlab"
                                    src="https://www.untitledui.com/logos/logotype/white/stackedlab.svg"
                                    className="h-10 object-contain opacity-85 not-dark:hidden"
                                />
                                <img
                                    alt="Magnolia"
                                    src="https://www.untitledui.com/logos/logotype/white/magnolia.svg"
                                    className="h-10 object-contain opacity-85 not-dark:hidden"
                                />
                                <img
                                    alt="Warpspeed"
                                    src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg"
                                    className="h-10 object-contain opacity-85 not-dark:hidden"
                                />
                                <img
                                    alt="Sisyphus"
                                    src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg"
                                    className="h-10 object-contain opacity-85 not-dark:hidden"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:h-full lg:min-h-149.5">
                        {/* Light mode image (hidden in dark mode) */}
                        <img
                            alt="Macbook Pro Screen Mockup"
                            className="inset-0 w-full max-w-none object-cover md:h-90 md:w-auto lg:absolute lg:h-full lg:object-left dark:hidden"
                            src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-light.webp"
                        />
                        {/* Dark mode image (hidden in light mode) */}
                        <img
                            alt="Macbook Pro Screen Mockup"
                            className="inset-0 w-full max-w-none object-cover not-dark:hidden md:h-90 md:w-auto lg:absolute lg:h-full lg:object-left"
                            src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-dark.webp"
                        />
                    </div>

                    <div className="flex max-w-3xl flex-col gap-8 lg:hidden">
                        <p className="text-center text-md font-medium text-tertiary">Trusted by 4,000+ companies</p>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                            {/* Light mode images (hidden in dark mode) */}
                            <img
                                alt="Odeaolabs"
                                src="https://www.untitledui.com/logos/logotype/color/odeaolabs.svg"
                                className="h-9 object-contain dark:hidden"
                            />
                            <img alt="Kintsugi" src="https://www.untitledui.com/logos/logotype/color/kintsugi.svg" className="h-9 object-contain dark:hidden" />
                            <img
                                alt="Stackedlab"
                                src="https://www.untitledui.com/logos/logotype/color/stackedlab.svg"
                                className="h-9 object-contain dark:hidden"
                            />
                            <img alt="Magnolia" src="https://www.untitledui.com/logos/logotype/color/magnolia.svg" className="h-9 object-contain dark:hidden" />
                            <img
                                alt="Warpspeed"
                                src="https://www.untitledui.com/logos/logotype/color/warpspeed.svg"
                                className="h-9 object-contain dark:hidden"
                            />
                            <img alt="Sisyphus" src="https://www.untitledui.com/logos/logotype/color/sisyphus.svg" className="h-9 object-contain dark:hidden" />

                            {/* Dark mode images (hidden in light mode) */}
                            <img
                                alt="Odeaolabs"
                                src="https://www.untitledui.com/logos/logotype/white/odeaolabs.svg"
                                className="h-9 object-contain opacity-85 not-dark:hidden"
                            />
                            <img
                                alt="Kintsugi"
                                src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg"
                                className="h-9 object-contain opacity-85 not-dark:hidden"
                            />
                            <img
                                alt="Stackedlab"
                                src="https://www.untitledui.com/logos/logotype/white/stackedlab.svg"
                                className="h-9 object-contain opacity-85 not-dark:hidden"
                            />
                            <img
                                alt="Magnolia"
                                src="https://www.untitledui.com/logos/logotype/white/magnolia.svg"
                                className="h-9 object-contain opacity-85 not-dark:hidden"
                            />
                            <img
                                alt="Warpspeed"
                                src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg"
                                className="h-9 object-contain opacity-85 not-dark:hidden"
                            />
                            <img
                                alt="Sisyphus"
                                src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg"
                                className="h-9 object-contain opacity-85 not-dark:hidden"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
