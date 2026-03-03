"use client";

import { ZapFast } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const ContentSectionSimple01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
                    <div className="max-w-3xl lg:col-span-1">
                        <FeaturedIcon className="hidden md:flex" size="xl" icon={ZapFast} theme="light" color="brand" />
                        <FeaturedIcon className="md:hidden" size="lg" icon={ZapFast} theme="light" color="brand" />

                        <h2 className="mt-5 text-display-sm font-semibold text-primary md:text-display-md">Beautiful analytics to grow smarter</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
                        </p>
                    </div>

                    <div className="prose md:prose-lg">
                        <p>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                        </p>
                        <h2>How we can help</h2>
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat
                            sapien varius id.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
                            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
                            aliquet sodales id est ac volutpat.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
