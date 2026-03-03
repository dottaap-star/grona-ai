import { Button } from "@/components/base/buttons/button";

export const ContentSectionSplitImage03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 items-center gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2">
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our studio</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">People first. Design later.</h2>
                    <div className="prose mt-8 md:prose-lg md:mt-12">
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam.
                        </p>
                        <p>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada.
                        </p>

                        <p>
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
                            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
                            congue convallis aliquet.
                        </p>
                        <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
                            dictum molestie sem tempor. Diam elit, orci, tincidunt aenean.{" "}
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
                        <Button color="secondary" size="xl">
                            Get in touch
                        </Button>
                        <Button size="xl">Our process</Button>
                    </div>
                </div>

                <div className="h-60 lg:h-163.5">
                    <img
                        src="https://www.untitledui.com/marketing/content-section-03.webp"
                        className="size-full object-cover"
                        alt="Abstract 3D holographic rectangles"
                    />
                </div>
            </div>
        </section>
    );
};
