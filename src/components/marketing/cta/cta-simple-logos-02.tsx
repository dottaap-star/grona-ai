import { Button } from "@/components/base/buttons/button";

export const CTASimpleLogos02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col">
                        <div className="max-w-3xl">
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Join over 4,000+ startups growing with Untitled</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Start your 30-day free trial today.</p>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 self-stretch sm:flex-row sm:self-start md:mt-12 lg:flex-row-reverse">
                            <Button size="xl">Get started</Button>
                            <Button color="secondary" size="xl">
                                Learn more
                            </Button>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-y-6 lg:mt-0">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="Ephemeral" src="https://www.untitledui.com/logos/logotype/color/ephemeral.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Wildcrafted" src="https://www.untitledui.com/logos/logotype/color/wildcrafted.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Codecraft" src="https://www.untitledui.com/logos/logotype/color/codecraft.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Convergence" src="https://www.untitledui.com/logos/logotype/color/convergence.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Imgcompress" src="https://www.untitledui.com/logos/logotype/color/imgcompress.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Epicurious" src="https://www.untitledui.com/logos/logotype/color/epicurious.svg" className="h-9 md:h-10 dark:hidden" />
                        <img
                            alt="Watchtower"
                            src="https://www.untitledui.com/logos/logotype/color/watchtower.svg"
                            className="h-9 max-md:hidden md:h-10 dark:hidden"
                        />
                        <img
                            alt="Renaissance"
                            src="https://www.untitledui.com/logos/logotype/color/renaissance.svg"
                            className="h-9 max-md:hidden md:h-10 dark:hidden"
                        />
                        <img
                            alt="Contrastai"
                            src="https://www.untitledui.com/logos/logotype/color/contrastai.svg"
                            className="h-9 max-md:hidden md:h-10 dark:hidden"
                        />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="Ephemeral"
                            src="https://www.untitledui.com/logos/logotype/white/ephemeral.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Wildcrafted"
                            src="https://www.untitledui.com/logos/logotype/white/wildcrafted.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Codecraft"
                            src="https://www.untitledui.com/logos/logotype/white/codecraft.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Convergence"
                            src="https://www.untitledui.com/logos/logotype/white/convergence.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Imgcompress"
                            src="https://www.untitledui.com/logos/logotype/white/imgcompress.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Epicurious"
                            src="https://www.untitledui.com/logos/logotype/white/epicurious.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Watchtower"
                            src="https://www.untitledui.com/logos/logotype/white/watchtower.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10"
                        />
                        <img
                            alt="Renaissance"
                            src="https://www.untitledui.com/logos/logotype/white/renaissance.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10"
                        />
                        <img
                            alt="Contrastai"
                            src="https://www.untitledui.com/logos/logotype/white/contrastai.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
