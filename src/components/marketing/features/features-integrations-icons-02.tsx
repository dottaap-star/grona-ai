import { Button } from "@/components/base/buttons/button";

const integrations = [
    { alt: "notion", src: "https://www.untitledui.com/logos/integrations/notion.svg" },
    { alt: "slack", src: "https://www.untitledui.com/logos/integrations/slack.svg" },
    { alt: "google_drive", src: "https://www.untitledui.com/logos/integrations/google_drive.svg" },
    { alt: "intercom", src: "https://www.untitledui.com/logos/integrations/intercom.svg" },
    { alt: "jira", src: "https://www.untitledui.com/logos/integrations/jira.svg" },
    { alt: "dropbox", src: "https://www.untitledui.com/logos/integrations/dropbox.svg" },
    { alt: "stripe", src: "https://www.untitledui.com/logos/integrations/stripe.svg" },
    { alt: "zapier", src: "https://www.untitledui.com/logos/integrations/zapier.svg" },
    { alt: "figma", src: "https://www.untitledui.com/logos/integrations/figma.svg" },
    { alt: "confluence", src: "https://www.untitledui.com/logos/integrations/confluence.svg" },
    { alt: "mailchimp", src: "https://www.untitledui.com/logos/integrations/mailchimp.svg" },
    { alt: "zendesk", src: "https://www.untitledui.com/logos/integrations/zendesk.svg" },
    { alt: "google calendar", src: "https://www.untitledui.com/logos/integrations/g-calendar.svg" },
    { alt: "whatsapp", src: "https://www.untitledui.com/logos/integrations/whatsapp.svg" },
    { alt: "discord", src: "https://www.untitledui.com/logos/integrations/discord.svg" },
    { alt: "bitbucket", src: "https://www.untitledui.com/logos/integrations/bitbucket.svg" },
];

export const FeaturesIntegrationsIcons02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center gap-12 md:gap-16">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Integrations</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Get more value from your tools</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Connect your tools, connect your teams. With over 200 apps already available in our directory, your team's favorite tools are just a
                            click away.
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 self-center px-3 lg:grid-cols-8 lg:gap-8 lg:px-14">
                        {integrations.map(({ alt, src }) => (
                            <span
                                key={src + alt}
                                className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl"
                            >
                                <img alt={alt} src={src} className="size-16 md:size-20" />
                            </span>
                        ))}
                    </div>
                    <Button size="xl">All integrations</Button>
                </div>
            </div>
        </section>
    );
};
