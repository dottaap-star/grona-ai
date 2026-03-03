"use client";

import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Badge } from "@/components/base/badges/badges";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

export const ContentAlternative02 = () => {
    return (
        <div className="overflow-hidden bg-primary">
            <div className="mx-auto w-full max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="max-w-3xl">
                    <div className="text-sm font-semibold text-brand-secondary md:text-md">Published 13 Jan 2025</div>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">A conversation with Maker & Co.</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Maker & Co. are one of our favorite upcoming interior design studios. We caught up with Jules and Mia at their brand new studio to chat
                        about all things design.
                    </p>
                </div>

                <Carousel.Root
                    opts={{
                        align: "start",
                    }}
                    className="mt-12 md:mt-16"
                >
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:pr-8 lg:gap-8">
                        {[
                            {
                                alt: "Image provided by Unsplash.com",
                                imgUrl: "https://www.untitledui.com/marketing/content-carousel-01.webp",
                            },
                            {
                                alt: "Image provided by Unsplash.com",
                                imgUrl: "https://www.untitledui.com/marketing/content-carousel-02.webp",
                            },
                            {
                                alt: "Image provided by Unsplash.com",
                                imgUrl: "https://images.unsplash.com/photo-1609081144289-eacc3108cd03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                            },
                            {
                                alt: "Image provided by Unsplash.com",
                                imgUrl: "https://images.unsplash.com/photo-1656356594220-7bec7673307f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80",
                            },
                            {
                                alt: "Image provided by Unsplash.com",
                                imgUrl: "https://images.unsplash.com/photo-1648536474453-2b9e03f0238c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                            },
                        ].map((item) => (
                            <Carousel.Item key={item.imgUrl} className="basis-auto">
                                <img
                                    alt={item.alt}
                                    src={item.imgUrl}
                                    className="size-auto max-h-90 max-w-90 cursor-grab object-contain lg:max-h-180 lg:max-w-180"
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>

                    <div className="mt-8 flex gap-4 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
            </div>

            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto max-w-prose md:max-w-180">
                    <div className="mx-auto prose md:prose-lg">
                        <h2>Introduction</h2>
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat
                            sapien varius id.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
                            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
                            aliquet sodales id est ac volutpat.
                        </p>

                        <figure>
                            <img alt="People" className="h-110 md:h-240" src="https://www.untitledui.com/marketing/people.webp" />
                            <figcaption>
                                <span>
                                    Image courtesy of Alex Lvrs via{" "}
                                    <a
                                        href="https://unsplash.com/photos/2zDw14yCYqk"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Unsplash
                                    </a>
                                </span>
                            </figcaption>
                        </figure>

                        <figure>
                            <blockquote>
                                <p>
                                    In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have
                                    lost or never attained, living by voices we shall never hear.
                                </p>
                            </blockquote>
                            <figcaption className="not-prose mt-6 flex gap-3 text-md md:mt-8">
                                <img
                                    alt="Olivia Rhye"
                                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                    className="size-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-md font-semibold text-primary">Olivia Rhye</p>
                                    <cite className="text-md text-tertiary not-italic">Product Designer</cite>
                                </div>
                            </figcaption>
                        </figure>

                        <p>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                        </p>

                        <p>
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
                            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
                            congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
                            id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                        </p>
                        <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
                            dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit
                            erat nam nibh orci.
                        </p>

                        <h3>Software and tools</h3>

                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat
                            sapien varius id.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
                            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
                            aliquet sodales id est ac volutpat.
                        </p>

                        <h3>Other resources</h3>

                        <p>
                            Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
                            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit
                            dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                        </p>
                        <ol>
                            <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                            <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                            <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                        </ol>
                        <figure>
                            <img alt="Two people" className="h-60 md:h-120" src="https://www.untitledui.com/marketing/two-people-5.webp" />
                            <figcaption>
                                <span>
                                    Image courtesy of Leon via{" "}
                                    <a
                                        href="https://unsplash.com/photos/bzqU01v-G54"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Unsplash
                                    </a>
                                </span>
                            </figcaption>
                        </figure>

                        <p>
                            Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in
                            non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis
                            suspendisse at.
                        </p>

                        <p>
                            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
                            Aliquam tellus lorem sed ac. Montes, sed mattis suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie
                            pellentesque. Arcu ultricies sed mauris vestibulum.
                        </p>

                        <div className="not-prose my-8 rounded-2xl bg-secondary px-5 py-6 text-lg text-tertiary md:my-12 md:p-8 [&>p+p]:mt-4.5">
                            <h2 className="mb-4 text-display-xs font-semibold text-primary">Conclusion</h2>
                            <p>
                                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo
                                nisl, blandit elit sagittis. Quisque consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                            </p>
                            <p>
                                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis
                                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                            </p>
                            <p>
                                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
                                id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et,
                                nunc tortor.
                            </p>
                        </div>
                    </div>

                    <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row">
                        <div className="flex items-center gap-3">
                            <img
                                alt="Rene Wells"
                                src="https://www.untitledui.com/images/avatars/rene-wells?fm=webp&q=80"
                                className="size-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-md font-semibold text-primary">Rene Wells</p>
                                <p className="text-md text-tertiary">Content Writer</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Badge color="brand" size="md">
                                Design
                            </Badge>
                            <Badge color="indigo" size="md">
                                Architecture
                            </Badge>
                            <Badge color="pink" size="md">
                                Interviews
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
