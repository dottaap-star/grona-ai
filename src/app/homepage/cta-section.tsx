import { Button } from "@/components/base/buttons/button";

export const CTASection = () => {
    return (
        <section className="relative z-0 bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center gap-8 rounded-2xl bg-secondary px-6 py-10 text-center lg:p-16">
                    <div className="flex max-w-2xl flex-col items-center">
                        <h2 className="text-display-sm font-semibold text-primary">Your website is leaving money on the table</h2>
                        <p className="mt-4 text-lg text-tertiary lg:text-xl">
                            Find out how much. Start free, no credit card required.
                        </p>
                    </div>
                    <Button size="xl" href="https://app.grona.ai/signup">
                        Start Free
                    </Button>
                </div>
            </div>
        </section>
    );
};
