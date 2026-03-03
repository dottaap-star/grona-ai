"use client";

import { Check, Copy01, Link01, Send01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { BlobSubscribeCard } from "@/components/marketing/blog/base-components/blog-subscribe-card";
import { useClipboard } from "@/hooks/use-clipboard";

export const ContentLargeImage03 = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-primary">
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="w-full max-w-3xl">
                    <BadgeGroup size="md" addonText="Leadership" color="brand" theme="light" className="pr-3" iconTrailing={null}>
                        8 min read
                    </BadgeGroup>

                    <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">Bill Walsh leadership lessons</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                </div>
                <div className="mt-16 w-full">
                    <img className="h-60 w-full object-cover md:h-160" src="https://www.untitledui.com/marketing/mountains.webp" alt="Mountains" />
                    <div className="mt-8 flex items-start justify-between gap-24">
                        <dl className="flex gap-12 md:gap-12">
                            <div>
                                <dt className="text-sm font-semibold text-brand-secondary">Written by</dt>
                                <dd className="mt-3 text-lg font-medium text-primary">Alec Whitten</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-semibold text-brand-secondary">Published on</dt>
                                <dd className="mt-3 text-lg font-medium text-primary">17 Jan 2025</dd>
                            </div>
                        </dl>

                        <div className="hidden gap-3 md:flex">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Copy01}>
                                {copied ? "Copied" : "Copy link"}
                            </Button>
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex max-w-180 flex-col justify-center gap-12 md:items-start lg:max-w-none lg:flex-row lg:gap-24">
                    <div className="prose max-w-180 md:prose-lg">
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
                            <img className="h-60 md:h-120" src="https://www.untitledui.com/marketing/people.webp" alt="People looking at a laptop" />
                            <figcaption>
                                <Link01 className="size-4 text-utility-gray-400" />
                                <span>
                                    Image courtesy of Moose Photos via{" "}
                                    <a
                                        href="https://www.pexels.com/photo/colleagues-looking-at-laptop-1036641/"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Pexels
                                    </a>
                                </span>
                            </figcaption>
                        </figure>

                        <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
                            dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit
                            erat nam nibh orci.
                        </p>

                        <figure>
                            <blockquote>
                                <p>
                                    In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have
                                    lost or never attained, living by voices we shall never hear.
                                </p>
                            </blockquote>
                            <figcaption className="not-prose mt-6 flex gap-3 text-md md:mt-8">
                                <img
                                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                    className="size-12 rounded-full object-cover"
                                    alt="Olivia Rhye"
                                />
                                <div>
                                    <p className="text-md font-semibold text-primary">Olivia Rhye</p>
                                    <cite className="text-md text-tertiary not-italic">Product Designer</cite>
                                </div>
                            </figcaption>
                        </figure>
                        <p className="max-lg:hidden">
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                            turpis mi{" "}
                            <a href="#" className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                                bibendum diam
                            </a>
                            . Tempor integer aliquam in vitae malesuada fringilla.
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
                            <img
                                className="h-60 md:h-120"
                                src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg&w=1280&h=853"
                                alt="Short coated tan dog"
                            />
                            <figcaption>
                                <Link01 className="size-4 text-utility-gray-400" />
                                <span>
                                    Image courtesy of Helena Lopes via{" "}
                                    <a
                                        href="https://www.pexels.com/photo/short-coated-tan-dog-2253275/"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Pexels
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
                    </div>
                    <div className="lg:max-w-sm lg:min-w-85">
                        <BlobSubscribeCard
                            icon={Send01}
                            title="Weekly newsletter"
                            description="No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
