export const ContactSimpleIcons04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    <div className="w-full max-w-90">
                        <div className="text-sm font-semibold text-brand-secondary md:text-md">Our locations</div>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Visit our stores</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Find us at these locations.</p>
                    </div>

                    <ul className="grid w-full grid-cols-1 gap-x-16 gap-y-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 md:gap-y-8 lg:grid-cols-2 lg:px-11">
                        {[
                            {
                                title: "Melbourne",
                                subtitle: "100 Flinders Street\nMelbourne VIC 3000 AU",
                            },
                            {
                                title: "Sydney",
                                subtitle: "100 George Street\nSydney NSW 2000 AU",
                            },
                            {
                                title: "Byron Bay",
                                subtitle: "100 Jonson Street\nByron Bay NSW 2481 AU",
                            },
                            {
                                title: "London",
                                subtitle: "100 Oxford Street\nLondon W1D 1LL UK",
                            },
                            {
                                title: "San Francisco",
                                subtitle: "100 Market Street\nSan Francisco, CA 94105 USA",
                            },
                            {
                                title: "Sweden",
                                subtitle: "Drottninggatan 100\n111 60 Stockholm SE",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex max-w-sm flex-col">
                                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                <p className="mt-1 text-md whitespace-pre text-tertiary">{item.subtitle}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
