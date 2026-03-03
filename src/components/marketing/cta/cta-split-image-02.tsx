import { Button } from "@/components/base/buttons/button";

export const CTASplitImage02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="flex max-w-3xl flex-col items-start">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">
                        <span className="max-md:hidden">Join 4,000+ startups growing with Untitled</span>
                        <span className="md:hidden">Start your free trial</span>
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        <span className="md:hidden">Join over 4,000+ startups already growing with Untitled.</span>
                        <span className="max-md:hidden">Start your 30-day free trial today.</span>
                    </p>
                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <img className="h-70 w-full object-cover md:h-95 lg:h-148" src="https://www.untitledui.com/images/portraits/lana-steiner" alt="Lana Steiner" />
            </div>
        </section>
    );
};
