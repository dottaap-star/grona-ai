const cards = [
    {
        name: "Wildcrafted",
        imageUrl: "https://www.untitledui.com/logos/logotype/white/wildcrafted.svg",
    },
    {
        name: "Magnolia",
        imageUrl: "https://www.untitledui.com/logos/logotype/white/magnolia.svg",
    },
    {
        name: "StackedLab",
        imageUrl: "https://www.untitledui.com/logos/logotype/white/stackedlab.svg",
    },
    {
        name: "Warpspeed",
        imageUrl: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
    },
    {
        name: "Clandestine",
        imageUrl: "https://www.untitledui.com/logos/logotype/white/clandestine.svg",
    },
    {
        name: "Shutterframe",
        imageUrl: "https://www.untitledui.com/logos/logotype/white/shutterframe.svg",
    },
    {
        name: "Powersurge",
        imageUrl: "https://www.untitledui.com/logos/logotype/white/powersurge.svg",
    },
    {
        name: "Leapyear",
        imageUrl: "https://www.untitledui.com/logos/logotype/white/leapyear.svg",
    },
];

export const SocialProofCardsBrand = () => {
    return (
        <section className="overflow-hidden bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-0 md:px-8">
                <div className="flex flex-col gap-8 lg:gap-10">
                    <p className="text-center text-md font-medium text-tertiary_on-brand">Trusted by 4,000+ companies</p>
                    <div className="flex w-max max-w-[855px] flex-wrap justify-center gap-3 self-center md:grid md:w-full md:max-w-none md:grid-cols-4 md:justify-normal md:gap-4 md:self-auto">
                        {cards.map((card) => (
                            <div
                                key={card.name}
                                className="flex h-28 w-50 items-center justify-center rounded-xl bg-brand-section_subtle px-6 py-10 last:hidden md:h-42 md:w-auto md:px-8 md:py-16 md:last:flex"
                            >
                                <img src={card.imageUrl} alt={card.name} className="h-8 opacity-85 md:h-10" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
