export const MetricsSplitImage02Brand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
                    <div className="flex flex-col gap-12 md:gap-16 md:pl-8 lg:self-center">
                        <div className="hidden flex-col md:flex">
                            <p className="text-sm font-semibold text-secondary_on-brand md:text-md">Build better, launch faster</p>
                            <h2 className="mt-3 text-display-sm font-semibold text-primary_on-brand md:text-display-md xl:text-display-lg">
                                Build great products, faster than ever
                            </h2>
                            <p className="mt-4 text-lg text-secondary_on-brand md:mt-5 md:hidden md:text-xl">
                                Everything you need to build modern UI and great products. I've done all the heavy lifting so you don't have to—the perfect
                                starting point for any project.
                            </p>
                        </div>
                        <div className="flex flex-col md:hidden">
                            <p className="text-sm font-semibold text-secondary_on-brand md:text-md">Launch faster</p>
                            <h2 className="mt-3 text-display-sm font-semibold text-primary_on-brand md:text-display-md xl:text-display-lg">
                                Build something great
                            </h2>
                            <p className="mt-4 text-lg text-secondary_on-brand md:mt-5 md:hidden md:text-xl">
                                Everything you need to build modern UI and great products. I've done all the heavy lifting so you don't have to—the perfect
                                starting point for any project.
                            </p>
                        </div>

                        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-12">
                            {[
                                {
                                    title: "400+",
                                    subtitle: "Projects completed",
                                    description: "We've helped build over 400 amazing projects.",
                                },
                                {
                                    title: "600%",
                                    subtitle: "Return on investment",
                                    description: "Our customers have reported an average of ~600% ROI.",
                                },
                                {
                                    title: "10k",
                                    subtitle: "Global downloads",
                                    description: "Our free UI kit has been downloaded over 10k times.",
                                },
                                {
                                    title: "200+",
                                    subtitle: "5-star reviews",
                                    description: "We're proud of our 5-star rating with over 200 reviews.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="flex flex-1 flex-col-reverse gap-3">
                                    <dt className="text-lg font-semibold text-secondary_on-brand">{item.subtitle}</dt>
                                    <dd className="text-display-lg font-semibold text-primary_on-brand md:text-display-xl">{item.title}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <img
                        alt="Colors Pattern"
                        src="https://www.untitledui.com/marketing/colors-pattern.webp"
                        className="h-70 w-full object-cover md:h-140 lg:order-first"
                    />
                </div>
            </div>
        </section>
    );
};
