"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";
import { cx } from "@/utils/cx";

const studies = [
    {
        company: "Layers",
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects faster.",
        background: "bg-utility-brand-600",
        logo: "https://www.untitledui.com/logos/logotype/white/layers.svg",
        href: "#",
    },
    {
        company: "Sisyphus",
        quote: "We've been using Untitled to kick start every new project and can't work without it.",
        background: "bg-utility-success-600",
        logo: "https://www.untitledui.com/logos/logotype/white/sisyphus.svg",
        href: "#",
    },
    {
        company: "Capsule",
        quote: "Love the simplicity of the service and the prompt customer support.",
        background: "bg-utility-blue-600",
        logo: "https://www.untitledui.com/logos/logotype/white/capsule.svg",
        href: "#",
    },
    {
        company: "Catalog",
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects faster.",
        background: "bg-utility-indigo-600",
        logo: "https://www.untitledui.com/logos/logotype/white/catalog.svg",
        href: "#",
    },
];

export const TestimonialCaseStudyCards = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
                    <div className="flex max-w-3xl flex-col gap-4 md:gap-5">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">We've helped hundreds of global companies</h2>
                        <p className="text-lg text-tertiary md:text-xl">Case studies from some of our amazing customers who are building faster.</p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start">
                        <Button color="secondary" size="xl">
                            Our customers
                        </Button>
                        <Button size="xl">Create account</Button>
                    </div>
                </div>

                <Carousel.Root
                    className="mt-12 md:mt-16"
                    opts={{
                        align: "start",
                    }}
                >
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:gap-8 md:pr-8">
                        {studies.map((study) => (
                            <Carousel.Item
                                key={study.company}
                                className={cx(
                                    "relative flex h-118 max-w-76 shrink-0 cursor-grab items-end p-6 md:h-126 md:w-full md:max-w-sm md:p-5",
                                    study.background,
                                )}
                            >
                                <img src={study.logo} alt={study.company} className="absolute top-6 left-6 h-10 object-contain md:top-8 md:left-8 md:h-12" />

                                <div className="flex cursor-auto flex-col bg-alpha-white/30 px-4 py-5 ring-1 ring-alpha-white/30 backdrop-blur-md ring-inset md:p-5 md:px-6 md:py-8">
                                    <p className="text-display-xs font-semibold text-white">{study.company}</p>
                                    <q className="mt-3 text-lg font-medium text-balance text-white">{study.quote}</q>

                                    <Button
                                        color="link-gray"
                                        size="lg"
                                        href={study.href}
                                        className="mt-6 text-white"
                                        iconTrailing={<ArrowUpRight data-icon className="text-fg-white!" />}
                                    >
                                        Read case study
                                    </Button>
                                </div>
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
        </section>
    );
};
