import { Button } from "@/components/base/buttons/button";

export const HeaderCenteredButtonsBrand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-secondary_on-brand md:text-md">Pricing</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary_on-brand md:text-display-lg">Plans that fit your scale</h1>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:mt-12 sm:flex-row sm:self-center">
                        <Button color="secondary" size="xl">
                            Chat to sales
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
