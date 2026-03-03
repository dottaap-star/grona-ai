"use client";

import type { FC } from "react";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const BlobSubscribeCard = ({ icon, title, description }: { icon: FC<{ className?: string }>; title: string; description: string }) => (
    <Form
        onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            console.log("Form data:", data);
        }}
        className="flex flex-col gap-8 self-start rounded-2xl bg-secondary p-6 shadow-xs ring-1 ring-secondary ring-inset md:p-8"
    >
        <FeaturedIcon icon={icon} color="gray" theme="modern" size="xl" />
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-primary">{title}</h2>
                <p className="text-md text-tertiary">{description}</p>
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="md"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    hint={
                        <span>
                            Read about our{" "}
                            <a
                                href="#"
                                className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                privacy policy
                            </a>
                            .
                        </span>
                    }
                />
                <Button type="submit" size="xl">
                    Subscribe
                </Button>
            </div>
        </div>
    </Form>
);

export const BlogSubscribeCardLine = ({ icon, title, description }: { icon: FC<{ className?: string }>; title: string; description: string }) => (
    <Form onSubmit={(e) => e.preventDefault()} className="relative flex flex-col gap-8 rounded-b-2xl bg-secondary p-6 pb-10 md:p-8 md:pb-10">
        <div className="absolute top-0 left-0 h-1 w-full bg-border-brand"></div>
        <FeaturedIcon icon={icon} color="gray" theme="modern" size="xl" />
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-display-xs font-semibold text-primary">{title}</h2>
                <p className="text-md text-tertiary">{description}</p>
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="md"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    hint={
                        <span>
                            Read about our{" "}
                            <a
                                href="#"
                                className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                privacy policy
                            </a>
                            .
                        </span>
                    }
                />
                <Button type="submit" size="xl">
                    Subscribe
                </Button>
            </div>
        </div>
    </Form>
);
