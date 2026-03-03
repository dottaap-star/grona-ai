import { Button } from "@/components/base/buttons/button";

export const TeamSectionImageCollage02 = () => {
    return (
        <section className="bg-primary py-16 lg:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 gap-16 overflow-hidden px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="flex max-w-3xl flex-col items-start">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Join our team</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We're just getting started</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                    </p>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl">
                            Read our principles
                        </Button>
                        <Button size="xl">We're hiring!</Button>
                    </div>
                </div>

                <div className="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 justify-self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4">
                    <img
                        src="https://www.untitledui.com/images/portraits/megan-sims"
                        className="size-full object-cover"
                        alt="Megan Sims"
                        style={{
                            gridArea: "7 / 5 / 13 / 9",
                        }}
                    />
                    <img
                        src="https://www.untitledui.com/images/portraits/nic-davidson"
                        className="size-full object-cover"
                        alt="Nic Davidson"
                        style={{
                            gridArea: "1 / 7 / 7 / 11",
                        }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Amelie Laurent"
                        style={{
                            gridArea: "3 / 3 / 7 / 7",
                        }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Lily-Rose Chedjou"
                        style={{
                            gridArea: "7 / 9 / 11 / 13",
                        }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/levi-rocha?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Levi Rocha"
                        style={{
                            gridArea: "7 / 1 / 12 / 5",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
