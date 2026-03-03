"use client";

import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const MetricsImageWithCards02 = () => {
    return (
        <section className="bg-primary">
            <div className="bg-brand-section pt-16 pb-[112px] md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full flex-col items-center text-center md:max-w-3xl">
                        <p className="text-sm font-semibold text-secondary_on-brand md:text-md">Launch faster</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary_on-brand md:text-display-md">Build something great</h2>
                        <p className="mt-4 text-lg text-secondary_on-brand md:mt-5 md:text-xl">Everything you need to build modern UI and great products.</p>
                        <div className="mt-8 flex w-full flex-col-reverse gap-3 md:mt-8 md:w-auto md:flex-row">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl" className="shadow-xs! ring-0">
                                Demo
                            </Button>
                            <Button size="xl"> Get started</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto -mt-16 max-w-container px-4 pb-16 md:-mt-24 md:px-8 md:pb-24">
                <dl className="relative grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:p-16 lg:grid-cols-3">
                    <img
                        alt="Workspace 2"
                        src="https://www.untitledui.com/marketing/workspace-2.webp"
                        className="absolute inset-0 z-0 size-full object-cover"
                    />

                    {[
                        {
                            title: "400+",
                            subtitle: "Projects completed",
                            description: "We've helped build over 400 projects with great companies.",
                        },
                        {
                            title: "600%",
                            subtitle: "Return on investment",
                            description: "We've helped build over 400 projects with great companies.",
                        },
                        {
                            title: "10k",
                            subtitle: "Global downloads",
                            description: "Our free UI kit has been downloaded over 10k times.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="z-10 rounded-2xl bg-alpha-white/80 p-6 text-center ring-1 ring-alpha-white/60 backdrop-blur-lg ring-inset">
                            <dd className="text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                            <dt className="mt-3 text-lg font-semibold text-primary">{item.subtitle}</dt>
                            <p className="mt-1 text-md text-tertiary">{item.description}</p>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};
