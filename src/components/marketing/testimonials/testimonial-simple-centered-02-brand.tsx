import { Avatar } from "@/components/base/avatar/avatar";

export const TestimonialSimpleCentered02Brand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <figure className="flex w-full shrink-0 snap-start flex-col gap-8 text-center">
                    <img
                        alt="Wildcrafted"
                        src="https://www.untitledui.com/logos/logotype/white/wildcrafted.svg"
                        className="h-10 opacity-85"
                        aria-hidden="true"
                    />
                    <blockquote className="text-display-sm font-medium text-balance text-primary_on-brand md:text-display-lg">
                        We've been using Untitled to kick start every new project and can't imagine working without it.
                    </blockquote>
                    <figcaption className="flex justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <Avatar src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80" alt="Amelie Laurent" size="2xl" />
                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-semibold text-primary_on-brand">Amélie Laurent</p>
                                <cite className="text-md text-tertiary_on-brand not-italic">Product Manager, Wildcrafted</cite>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};
