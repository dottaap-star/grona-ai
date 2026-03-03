"use client";

import { ArrowRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeatureTextIntegrationIconTopCentered } from "./base-components/feature-text";

const features = [
    {
        title: "Notion integration",
        subtitle: "Work faster and smarter by integrating directly with Notion, right in the app.",
        logo: "https://www.untitledui.com/logos/integrations/notion.svg",
    },
    {
        title: "Slack integration",
        subtitle: "Work faster and smarter by integrating directly with Slack, right in the app.",
        logo: "https://www.untitledui.com/logos/integrations/slack.svg",
    },
    {
        title: "Google Drive integration",
        subtitle: "Work faster and smarter by integrating directly with Google, right in the app.",
        logo: "https://www.untitledui.com/logos/integrations/google_drive.svg",
    },
    {
        title: "Intercom integration",
        subtitle: "Work faster and smarter by integrating directly with Intercom, right in the app.",
        logo: "https://www.untitledui.com/logos/integrations/intercom.svg",
    },
    {
        title: "Jira integration",
        subtitle: "Work faster and smarter by integrating directly with Jira, right in the app.",
        logo: "https://www.untitledui.com/logos/integrations/jira.svg",
    },
    {
        title: "Dropbox integration",
        subtitle: "Work faster and smarter by integrating directly with Dropbox, right in the app.",
        logo: "https://www.untitledui.com/logos/integrations/dropbox.svg",
    },
];

export const FeaturesIntegrationsIcons03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge size="md" type="pill-color" color="brand" className="inline-flex md:hidden">
                        Integrations
                    </Badge>
                    <Badge size="lg" type="pill-color" color="brand" className="hidden md:inline-flex">
                        Integrations
                    </Badge>

                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Get more value from your tools</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favorite tools are just a
                        click away.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="lg:grid-y-16 grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
                        {features.map((item) => (
                            <li key={item.title}>
                                <FeatureTextIntegrationIconTopCentered
                                    imgUrl={item.logo}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    footer={
                                        <Button color="link-color" size="lg" href="#" iconTrailing={ArrowRight}>
                                            View integration
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
