"use client";

import { PlayCircle } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

export const FeaturesIntegrationsIcons01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                    <div className="flex max-w-3xl flex-col items-start">
                        <Badge size="md" type="pill-color" color="brand" className="inline-flex md:hidden">
                            Integrations
                        </Badge>
                        <Badge size="lg" type="pill-color" color="brand" className="hidden md:inline-flex">
                            Integrations
                        </Badge>

                        <h2 className="mt-4 text-display-sm font-semibold text-primary md:mt-3 md:text-display-md">Get more value from your tools</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favorite tools are just a
                            click away.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 self-stretch sm:flex-row sm:self-start md:mt-8 lg:flex-row-reverse">
                            <Button className="justify-center" size="xl">
                                All integrations
                            </Button>
                            <Button className="justify-center" color="secondary" size="xl" iconLeading={PlayCircle}>
                                Demo
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 self-center px-3 md:gap-8 lg:px-14">
                        <div className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="notion" src="https://www.untitledui.com/logos/integrations/notion.svg" className="size-16 md:size-20" />
                        </div>
                        <div className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="slack" src="https://www.untitledui.com/logos/integrations/slack.svg" className="size-16 md:size-20" />
                        </div>
                        <div className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="google_drive" src="https://www.untitledui.com/logos/integrations/google_drive.svg" className="size-16 md:size-20" />
                        </div>
                        <div className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="intercom" src="https://www.untitledui.com/logos/integrations/intercom.svg" className="size-16 md:size-20" />
                        </div>
                        <div className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="jira" src="https://www.untitledui.com/logos/integrations/jira.svg" className="size-16 md:size-20" />
                        </div>
                        <div className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="dropbox" src="https://www.untitledui.com/logos/integrations/dropbox.svg" className="size-16 md:size-20" />
                        </div>
                        <div className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="stripe" src="https://www.untitledui.com/logos/integrations/stripe.svg" className="size-16 md:size-20" />
                        </div>
                        <div className="flex size-[68px] shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-[88px] md:rounded-xl">
                            <img alt="zapier" src="https://www.untitledui.com/logos/integrations/zapier.svg" className="size-16 md:size-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
