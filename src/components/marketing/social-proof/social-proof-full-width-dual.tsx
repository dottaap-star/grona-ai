export const SocialProofFullWidthDual = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-md font-medium text-tertiary">Join 4,000+ companies already growing</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-y-6">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="Ephemeral" src="https://www.untitledui.com/logos/logotype/color/ephemeral.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Wildcrafted" src="https://www.untitledui.com/logos/logotype/color/wildcrafted.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Codecraft" src="https://www.untitledui.com/logos/logotype/color/codecraft.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Convergence" src="https://www.untitledui.com/logos/logotype/color/convergence.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Imgcompress" src="https://www.untitledui.com/logos/logotype/color/imgcompress.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Epicurious" src="https://www.untitledui.com/logos/logotype/color/epicurious.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Watchtower" src="https://www.untitledui.com/logos/logotype/color/watchtower.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Renaissance" src="https://www.untitledui.com/logos/logotype/color/renaissance.svg" className="h-9 md:h-12 dark:hidden" />
                        <img
                            alt="Contrastai"
                            src="https://www.untitledui.com/logos/logotype/color/contrastai.svg"
                            className="hidden h-9 md:inline-flex md:h-12 dark:hidden"
                        />
                        <img
                            alt="Nietzsche"
                            src="https://www.untitledui.com/logos/logotype/color/nietzsche.svg"
                            className="hidden h-9 md:inline-flex md:h-12 dark:hidden"
                        />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="Ephemeral"
                            src="https://www.untitledui.com/logos/logotype/white/ephemeral.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Wildcrafted"
                            src="https://www.untitledui.com/logos/logotype/white/wildcrafted.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Codecraft"
                            src="https://www.untitledui.com/logos/logotype/white/codecraft.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Convergence"
                            src="https://www.untitledui.com/logos/logotype/white/convergence.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Imgcompress"
                            src="https://www.untitledui.com/logos/logotype/white/imgcompress.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Epicurious"
                            src="https://www.untitledui.com/logos/logotype/white/epicurious.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Watchtower"
                            src="https://www.untitledui.com/logos/logotype/white/watchtower.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Renaissance"
                            src="https://www.untitledui.com/logos/logotype/white/renaissance.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Contrastai"
                            src="https://www.untitledui.com/logos/logotype/white/contrastai.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-12"
                        />
                        <img
                            alt="Nietzsche"
                            src="https://www.untitledui.com/logos/logotype/white/nietzsche.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
