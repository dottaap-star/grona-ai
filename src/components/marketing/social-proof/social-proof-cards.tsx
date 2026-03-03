const cards = [
    {
        name: "Wildcrafted",
        imageUrl: "https://www.untitledui.com/logos/logotype/badge-style/light/wildcrafted.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/badge-style/dark/wildcrafted.svg",
    },
    {
        name: "Magnolia",
        imageUrl: "https://www.untitledui.com/logos/logotype/badge-style/light/magnolia.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/badge-style/dark/magnolia.svg",
    },
    {
        name: "StackedLab",
        imageUrl: "https://www.untitledui.com/logos/logotype/badge-style/light/stack3d-lab.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/badge-style/dark/stack3d-lab.svg",
    },
    {
        name: "Warpspeed",
        imageUrl: "https://www.untitledui.com/logos/logotype/badge-style/light/warpspeed.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/badge-style/dark/warpspeed.svg",
    },
    {
        name: "Clandestine",
        imageUrl: "https://www.untitledui.com/logos/logotype/badge-style/light/clandestine.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/badge-style/dark/clandestine.svg",
    },
    {
        name: "Shutterframe",
        imageUrl: "https://www.untitledui.com/logos/logotype/badge-style/light/shutterframe.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/badge-style/dark/shutterframe.svg",
    },
    {
        name: "Powersurge",
        imageUrl: "https://www.untitledui.com/logos/logotype/badge-style/light/powersurge.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/badge-style/dark/powersurge.svg",
    },
    {
        name: "Leapyear",
        imageUrl: "https://www.untitledui.com/logos/logotype/badge-style/light/leapyear.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/badge-style/dark/leapyear.svg",
    },
];

export const SocialProofCards = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-0 md:px-8">
                <div className="flex flex-col gap-8 lg:gap-10">
                    <p className="text-center text-md font-medium text-tertiary">Trusted by 4,000+ companies</p>
                    <div className="flex w-max max-w-[855px] flex-wrap justify-center gap-3 self-center md:grid md:w-full md:max-w-none md:grid-cols-4 md:justify-normal md:gap-4 md:self-auto">
                        {cards.map((card) => (
                            <div
                                key={card.name}
                                className="flex h-28 w-50 items-center justify-center rounded-xl bg-secondary px-6 py-10 last:hidden md:h-42 md:w-auto md:px-8 md:py-16 md:last:flex"
                            >
                                {/* Light mode image (hidden in dark mode) */}
                                <img alt={card.name} src={card.imageUrl} className="h-8 md:h-10 dark:hidden" />
                                {/* Dark mode image (hidden in light mode) */}
                                <img alt={card.name} src={card.darkModeImageUrl} className="h-8 not-dark:hidden md:h-10" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
