import { Button } from "@/components/base/buttons/button";

export const CTASplitImage04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col overflow-hidden rounded-2xl bg-brand-section shadow-xl md:flex-row md:items-center md:rounded-3xl">
                    <div className="flex flex-1 flex-col px-6 pt-10 pb-12 lg:p-16">
                        <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">Give us a shot</h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                            <Button color="secondary" size="xl">
                                Learn more
                            </Button>
                            <Button size="xl">Get started</Button>
                        </div>
                    </div>

                    <img alt="Girl 2" src="https://www.untitledui.com/marketing/girl-2.webp" className="h-70 w-full object-cover md:h-100 md:w-95 lg:w-120" />
                </div>
            </div>
        </section>
    );
};
