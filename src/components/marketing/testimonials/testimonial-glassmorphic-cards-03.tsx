"use client";

import { ArrowDown } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { StarIcon } from "@/components/foundations/rating-stars";

const reviews = [
    {
        author: "Alisa Hester",
        imageUrl: "https://www.untitledui.com/images/portraits/alisa-hester",
        cite: "PM, Hourglass",
        industry: "Web Design Agency",
    },
    {
        author: "Rich Wilson",
        imageUrl: "https://www.untitledui.com/images/portraits/rich-wilson",
        cite: "COO, Command+R",
        industry: "Web Development Agency",
    },
    {
        quote: "Untitled has saved us thousands of hours.",
        author: "Annie Stanley",
        imageUrl: "https://www.untitledui.com/images/portraits/annie-stanley",
        cite: "Designer, Catalog",
        industry: "UX Agency",
    },
    {
        author: "Johnny Bell",
        imageUrl: "https://www.untitledui.com/images/portraits/johnny-bell",
        cite: "PM, Sisyphus",
        industry: "Machine Learning",
    },
    {
        author: "Mia Ward",
        imageUrl: "https://www.untitledui.com/images/portraits/mia-ward",
        cite: "Fullstack Dev, Quotient",
        industry: "Performance Marketing",
    },
    {
        author: "Archie Young",
        imageUrl: "https://www.untitledui.com/images/portraits/archie-young",
        cite: "Marketing, Layers",
        industry: "Machine Learning",
    },
];

export const TestimonialGlassmorphicCards03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-12 px-4 md:gap-16 md:px-8">
                <div className="flex flex-col justify-between gap-8 lg:flex-row">
                    <div className="flex max-w-3xl flex-col gap-4 md:gap-5">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Don't just take our word for it</h2>
                        <p className="text-lg text-tertiary md:text-xl">Hear from some of our amazing customers who are building faster.</p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start">
                        <Button color="secondary" size="xl">
                            Our customers
                        </Button>
                        <Button size="xl">Create account</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-[repeat(3,minmax(0,384px))]">
                        {reviews.map((review) => (
                            <li key={review.author} className="h-100 md:h-120">
                                <img src={review.imageUrl} className="size-full object-cover" alt="Olivia Rhye" />

                                <div className="relative">
                                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-black/0 p-3 pt-16 md:p-4 lg:pt-24">
                                        <div className="flex flex-col gap-6 rounded-xl bg-alpha-white/30 px-4 py-6 ring-1 ring-alpha-white/30 backdrop-blur-md ring-inset md:gap-6 md:rounded-2xl md:p-5 md:px-5">
                                            {review.quote && <q className="text-xl font-semibold text-balance text-white">{review.quote}</q>}

                                            <div className="flex flex-col gap-1.5 md:gap-2">
                                                <div className="flex flex-col gap-4">
                                                    <div aria-hidden="true" className="flex gap-1">
                                                        <StarIcon className="text-fg-white" />
                                                        <StarIcon className="text-fg-white" />
                                                        <StarIcon className="text-fg-white" />
                                                        <StarIcon className="text-fg-white" />
                                                        <StarIcon className="text-fg-white" />
                                                    </div>

                                                    <p className="text-xl font-semibold text-white md:text-display-xs">{review.author}</p>
                                                </div>

                                                <div className="flex flex-col gap-0.5">
                                                    <p className="text-md font-semibold text-white">{review.cite}</p>
                                                    <p className="text-sm font-medium text-white">{review.industry}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <Button color="secondary" size="xl" className="self-center sm:hidden" iconLeading={ArrowDown}>
                        Load more
                    </Button>
                </div>
            </div>
        </section>
    );
};
