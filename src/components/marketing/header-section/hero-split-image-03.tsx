"use client";

import { Fragment } from "react";
import { FileIcon } from "@untitledui/file-icons";
import { CheckCircle, PlayCircle, Trash01, UploadCloud02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { FlowPattern } from "./base-components/flow-pattern";

export const HeroSplitImage03 = () => {
    return (
        <Fragment>
            <Header className="bg-primary" />
            <section className="overflow-hidden bg-primary py-16 md:pb-24">
                <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-8">
                    <div className="flex max-w-3xl flex-col items-start lg:pr-8">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">People who care about your growth</h1>
                        <p className="mt-4 max-w-lg text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                                Demo
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                    </div>

                    <div className="relative lg:h-full lg:min-h-160">
                        {/* Accessory elements. Feel free to replace them with static images */}
                        <div className="absolute bottom-9 -left-18 z-10 hidden w-92 flex-col gap-3 select-none lg:flex">
                            <div className="relative rounded-xl bg-alpha-white/90 p-4 ring ring-secondary_alt backdrop-blur-lg">
                                <div className="relative flex grow items-start justify-start gap-3">
                                    <FileIcon type="mp3" theme="light" className="size-10 dark:hidden" />
                                    <FileIcon type="mp3" theme="dark" className="size-10 not-dark:hidden" />
                                    <div className="flex flex-1 flex-col items-start justify-start gap-1">
                                        <div className="pr-8">
                                            <p className="text-sm font-medium text-secondary">My Podcast – Episode 1.mp3</p>
                                            <div className="mt-0.5 flex items-center gap-2">
                                                <p className="text-sm text-tertiary">20 MB of 20 MB</p>
                                                <hr className="h-3 w-px rounded-t-full rounded-b-full border-none bg-border-primary" />
                                                <div className="flex items-center gap-1">
                                                    <CheckCircle className="size-4 text-fg-success-primary" />
                                                    <p className="text-sm font-medium text-success-primary">Complete</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start gap-3 self-stretch">
                                            <div className="relative h-2 flex-1 rounded bg-quaternary">
                                                <div className="size-full rounded bg-fg-brand-primary"></div>
                                            </div>
                                            <p className="text-sm font-medium text-secondary">100%</p>
                                        </div>
                                    </div>

                                    <Trash01 className="absolute -top-0.5 -right-0.5 size-4 text-fg-quaternary" />
                                </div>
                            </div>
                            <div className="relative rounded-xl bg-alpha-white/90 p-4 ring ring-secondary_alt backdrop-blur-lg">
                                <div className="relative flex grow items-start justify-start gap-3">
                                    <FileIcon type="mp3" theme="light" className="size-10 dark:hidden" />
                                    <FileIcon type="mp3" theme="dark" className="size-10 not-dark:hidden" />
                                    <div className="flex flex-1 flex-col items-start justify-start gap-1">
                                        <div className="pr-8">
                                            <p className="text-sm font-medium text-secondary">My Podcast – Episode 2.mp3</p>
                                            <div className="mt-0.5 flex items-center gap-2">
                                                <p className="text-sm text-tertiary">16 MB of 20 MB</p>
                                                <hr className="h-3 w-px rounded-t-full rounded-b-full border-none bg-border-primary" />
                                                <div className="flex items-center gap-1">
                                                    <UploadCloud02 className="size-4 text-fg-quaternary" />
                                                    <p className="text-sm font-medium text-quaternary">Uploading...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start gap-3 self-stretch">
                                            <div className="relative h-2 flex-1 rounded bg-quaternary">
                                                <div className="h-full w-[80%] rounded bg-fg-brand-primary"></div>
                                            </div>
                                            <p className="text-sm font-medium text-secondary">80%</p>
                                        </div>
                                    </div>

                                    <Trash01 className="absolute -top-0.5 -right-0.5 size-4 text-fg-quaternary" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-6 right-5 z-10 translate-x-1/2 md:-top-10">
                            <FlowPattern />
                        </div>

                        <img
                            className="inset-0 h-70 w-full rounded-tl-[64px] object-cover md:h-110 md:rounded-tl-[92px] lg:absolute lg:h-full lg:rounded-tl-[160px]"
                            src="https://www.untitledui.com/marketing/man-and-laptop.webp"
                            alt="Man and Laptop"
                        />
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
