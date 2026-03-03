import { ArrowRight, Globe02, MessageChatCircle, Rocket01, SearchRefraction } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const steps = [
    {
        number: "1",
        title: "Paste your URL",
        description: "Enter any website URL. Grona renders it live in a split-screen editor.",
        icon: Globe02,
    },
    {
        number: "2",
        title: "Research your market",
        description: "Ask the AI about competitors, traffic data, heatmaps, and conversion insights. Get answers in seconds.",
        icon: SearchRefraction,
    },
    {
        number: "3",
        title: "Chat to edit",
        description: "Describe changes in plain English. Grona edits your site live. No code needed.",
        icon: MessageChatCircle,
    },
    {
        number: "4",
        title: "Deploy and measure",
        description: "Launch an A/B test with one click. Track results in real time.",
        icon: Rocket01,
    },
];

export const HowItWorksSection = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">How it works</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                        From URL to live A/B test in minutes
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col items-center text-center">
                            <FeaturedIcon icon={step.icon} size="lg" color="brand" theme="light" />
                            <span className="mt-4 text-sm font-semibold text-brand-secondary">Step {step.number}</span>
                            <h3 className="mt-2 text-lg font-semibold text-primary">{step.title}</h3>
                            <p className="mt-2 text-md text-tertiary">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/how-it-works"
                        className="inline-flex items-center gap-2 text-md font-semibold text-brand-secondary transition-colors hover:text-brand-secondary_hover"
                    >
                        See the full walkthrough
                        <ArrowRight className="size-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};
