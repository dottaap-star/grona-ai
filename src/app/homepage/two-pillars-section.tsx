import { ArrowRight, MessageChatCircle, SearchRefraction } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { BrowserMockup } from "@/components/shared-assets/browser-mockup";

export const TwoPillarsSection = () => {
    return (
        <section className="flex flex-col gap-12 overflow-hidden bg-secondary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Platform</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                        Research what to change. Then change it.
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Other tools make you choose between research and testing. Grona does both.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                {/* Grona Research */}
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={SearchRefraction} size="lg" color="brand" theme="light" />
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Grona Research</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Know what to change and why. Chat with AI to uncover exactly where your site is losing conversions.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="AI website analysis: structure, copy, CTAs, user journey" />
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="Projected heatmaps: AI-generated attention maps" />
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="Competitor intelligence: messaging, CTAs, and site structure" />
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="Traffic & audience data: visits, sources, geo, channels" />
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="Ad & social media intel: Google Ads, Facebook" />
                        </ul>
                    </div>

                    <div className="w-full flex-1 self-center overflow-hidden rounded-2xl border border-secondary shadow-lg">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-auto w-full"
                            src="/assets/images/homepage/Grona_research.mp4"
                        />
                    </div>
                </div>

                {/* Grona Optimize */}
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={MessageChatCircle} size="lg" color="brand" theme="light" />
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Grona Optimize</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Make the change, test it, measure it. Edit your live website through chat and deploy A/B tests without touching code.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="Chat + live rendered editor: split-screen interface" />
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="Natural language editing: describe changes in English" />
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="Screenshot-to-chat: circle what you want changed" />
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="Element selector: click any element to edit it" />
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="A/B/N testing with real-time tracking" />
                            <CheckItemText size="md" iconStyle="outlined" color="primary" text="One-snippet deployment: works with any CMS" />
                        </ul>
                    </div>

                    <div className="w-full flex-1 self-center">
                        <BrowserMockup variant="split" />
                    </div>
                </div>

                <div className="mt-12 text-center md:mt-16">
                    <a
                        href="/features"
                        className="inline-flex items-center gap-2 text-md font-semibold text-brand-secondary transition-colors hover:text-brand-secondary_hover"
                    >
                        See all features
                        <ArrowRight className="size-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};
