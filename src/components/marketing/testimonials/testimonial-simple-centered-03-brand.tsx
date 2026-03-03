"use client";

import { useState } from "react";
import { Collection as AriaCollection, Tab as AriaTab, TabList as AriaTabList, TabPanel as AriaTabPanel, Tabs as AriaTabs } from "react-aria-components";

const reviews = [
    {
        id: "review-01",
        company: "3Portals",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/white/3portals.svg",
        message: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: {
            name: "Kelly Williams",
            role: "Head of Design",
            avatarUrl: "https://www.untitledui.com/images/avatars/kelly-williams?fm=webp&q=80",
        },
    },
    {
        id: "review-02",
        company: "Warpspeed",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
        message: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: {
            name: "Candice Wu",
            role: "Product Manager",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        },
    },
    {
        id: "review-03",
        company: "GlobalBank",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/white/globalbank.svg",
        message: "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
        author: {
            name: "Ammar Foley",
            role: "UX Designer",
            avatarUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80",
        },
    },
    {
        id: "review-04",
        company: "Ikigai Labs",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/white/ikigailabs.svg",
        message: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: {
            name: "Olivia Rhye",
            role: "Head of Product",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
    },
    {
        id: "review-05",
        company: "Eightball",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/white/eightball.svg",
        message: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: {
            name: "Alisa Hester",
            role: "Head of Product",
            avatarUrl: "https://www.untitledui.com/images/avatars/alisa-hester?fm=webp&q=80",
        },
    },
];

export const TestimonialSimpleCentered03Brand = () => {
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(2);

    return (
        <AriaTabs
            selectedKey={reviews[selectedReviewIndex].id}
            onSelectionChange={(value) => setSelectedReviewIndex(reviews.findIndex((review) => review.id === value))}
        >
            <section className="bg-brand-section py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="relative flex flex-col items-center gap-10 overflow-hidden md:gap-12">
                        <AriaCollection items={reviews}>
                            {(review) => (
                                <AriaTabPanel className="flex flex-col gap-8 text-center">
                                    <blockquote className="text-display-sm font-medium text-balance text-primary_on-brand md:text-display-md lg:text-display-lg">
                                        {review.message}
                                    </blockquote>
                                    <figcaption className="flex justify-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <img
                                                alt={review.author.name}
                                                src={review.author.avatarUrl}
                                                className="size-16 rounded-full object-cover"
                                                aria-hidden="true"
                                            />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-lg font-semibold text-primary_on-brand">{review.author.name}</p>
                                                <cite className="text-md text-tertiary_on-brand not-italic">
                                                    {review.author.role}, {review.company}
                                                </cite>
                                            </div>
                                        </div>
                                    </figcaption>
                                </AriaTabPanel>
                            )}
                        </AriaCollection>

                        <AriaTabList className="hidden grid-cols-5 justify-items-center gap-8 md:grid" items={reviews}>
                            {(review) => (
                                <AriaTab>
                                    <img src={review.companyLogoUrl} className="h-12 opacity-85" alt={review.company} />
                                </AriaTab>
                            )}
                        </AriaTabList>

                        <div className="flex w-full items-center justify-between md:hidden">
                            <button
                                aria-label="See previous review"
                                className="md:hidden"
                                onClick={() => setSelectedReviewIndex(selectedReviewIndex == 0 ? reviews.length - 1 : selectedReviewIndex - 1)}
                            >
                                <svg aria-hidden="true" className="h-5 w-10 text-fg-brand-secondary" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <img src={reviews[selectedReviewIndex].companyLogoUrl} className="h-10 object-contain" alt={reviews[selectedReviewIndex].company} />

                            <button
                                aria-label="See next review"
                                className="md:hidden"
                                onClick={() => setSelectedReviewIndex(selectedReviewIndex == reviews.length - 1 ? 0 : selectedReviewIndex + 1)}
                            >
                                <svg aria-hidden="true" className="h-5 w-10 rotate-180 text-fg-brand-secondary" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </AriaTabs>
    );
};
