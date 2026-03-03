export const ContentSectionSimple02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our mission</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Transforming marketplaces</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
                    </p>
                    <div className="prose mt-10 hidden md:prose-lg md:block">
                        <hr />
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
                            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
                            aliquet sodales id est ac volutpat.
                        </p>
                        <p>
                            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
                            morbi eget ipsum. Sapien, dictum molestie sem tempor.
                        </p>
                    </div>
                </div>
                <div className="prose md:prose-lg">
                    <hr className="md:hidden md:[&+*]:mt-0!" />
                    <p>
                        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
                        rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa
                        erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.{" "}
                    </p>
                    <ul>
                        <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                        <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                        <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                    </ul>
                    <p>
                        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
                        molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam
                        nibh orci.
                    </p>
                </div>
            </div>
        </section>
    );
};
