export const ContentSectionSimple05 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-180">
                    <figure>
                        <blockquote>
                            <p className="text-center text-xl font-medium not-italic before:hidden after:hidden md:!text-display-xs">
                                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo
                                nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus.
                            </p>
                        </blockquote>
                        <figcaption className="not-prose mt-6 flex flex-col items-center justify-center text-center md:mt-8">
                            <img
                                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                className="w-h-10 h-10 rounded-full object-cover"
                                alt="Olivia Rhye"
                            />
                            <p className="mt-3 text-md font-semibold text-primary">Olivia Rhye</p>
                            <cite className="mt-0.5 text-md text-tertiary not-italic">Product Designer</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};
