import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";

const reviews = [
    {
        id: "review-01",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: {
            name: "Sienna Hewitt",
            title: "Project Manager, Warpspeed",
            imageUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
        },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
        },
    },
    {
        id: "review-02",
        quote: "Untitled has become an essential part of our design process. It speeds up our workflow and ensures every project starts with a solid foundation.",
        author: {
            name: "Caitlyn King",
            title: "COO, OdeaoLabs",
            imageUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/color/odeaolabs.svg",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/odeaolabs.svg",
        },
    },
    {
        id: "review-03",
        quote: "Every project starts with Untitled, and it's made a huge difference in our output. It's a game-changer for our design team.",
        author: {
            name: "Olly Schroeder",
            title: "Designer, Nietzsche",
            imageUrl: "https://www.untitledui.com/images/avatars/olly-schroeder?fm=webp&q=80",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/nietzsche.svg",
        },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/color/nietzsche.svg",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/nietzsche.svg",
        },
    },
    {
        id: "review-04",
        quote: "Using Untitled has streamlined our entire design process. It's an invaluable part of our studio!",
        author: {
            name: "Riley O'Moore",
            title: "Design Engineer, QuartzAI",
            imageUrl: "https://www.untitledui.com/images/avatars/riley-moore?fm=webp&q=80",
        },
        company: {
            name: "QuartzAI",
            imageUrl: "https://www.untitledui.com/logos/logotype/color/quartzai.svg",
            imageUrlDark: "https://www.untitledui.com/logos/logotype/white/quartzai.svg",
        },
    },
];

export const TestimonialSocialCards01 = () => {
    return (
        <div className="flex flex-col items-center gap-16 bg-primary py-16 lg:py-24">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h1 className="text-display-sm font-semibold text-primary lg:text-display-md">Our reviews</h1>
                <p className="text-lg text-tertiary lg:text-xl">Hear first-hand from our incredible community of customers.</p>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 px-4 lg:grid-cols-2 lg:gap-6 lg:px-8">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="flex flex-col gap-12 rounded-xl bg-primary_alt p-6 shadow-xs ring-1 ring-secondary lg:min-h-64 lg:justify-between lg:gap-0 lg:p-8"
                    >
                        <div className="flex flex-col items-start gap-3">
                            <img className="h-8 lg:hidden dark:hidden" src={review.company.imageUrl} alt={review.company.name} />
                            <img className="h-8 opacity-85 not-dark:hidden lg:hidden" src={review.company.imageUrlDark} alt={review.company.name} />
                            <blockquote className="text-lg font-medium text-primary lg:text-xl">{review.quote}</blockquote>
                        </div>
                        <div className="flex justify-between">
                            <AvatarLabelGroup
                                size="lg"
                                src={review.author.imageUrl}
                                alt={review.author.name}
                                title={
                                    <span className="relative flex items-center gap-1">
                                        {review.author.name}
                                        <VerifiedTick size="lg" />
                                    </span>
                                }
                                subtitle={review.author.title}
                            />
                            <img className="h-8 max-lg:hidden dark:hidden" src={review.company.imageUrl} alt={review.company.name} />
                            <img className="h-8 opacity-85 not-dark:hidden max-lg:hidden" src={review.company.imageUrlDark} alt={review.company.name} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
