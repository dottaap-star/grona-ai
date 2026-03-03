export const HeaderSpaceBetweenBrand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-3 text-sm font-semibold text-secondary_on-brand md:text-md">About us</div>
                <div className="flex flex-col gap-x-16 lg:flex-row">
                    <h1 className="flex-1 text-display-md font-semibold text-primary_on-brand md:text-display-lg">About the company</h1>

                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl lg:mt-3 lg:max-w-120">
                        Learn more about the company and the world-class team behind Untitled.
                    </p>
                </div>
            </div>
        </section>
    );
};
