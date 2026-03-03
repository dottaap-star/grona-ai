"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "@untitledui/icons";
import { motion } from "motion/react";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { YouTubeHeroVideo } from "./youtube-hero-video";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";


export const HeroSection = () => {
    const [typewriterPlaceholder, setTypewriterPlaceholder] = useState("");
    const fullPlaceholder = "https://yourwebsite.com";
    const typingSpeed = 100;
    const pauseDuration = 2000;

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let currentIndex = 0;
        let isDeleting = false;

        const typeNextChar = () => {
            if (!isDeleting && currentIndex < fullPlaceholder.length) {
                setTypewriterPlaceholder(fullPlaceholder.slice(0, currentIndex + 1));
                currentIndex++;
                timeoutId = setTimeout(typeNextChar, typingSpeed);
            } else if (!isDeleting && currentIndex === fullPlaceholder.length) {
                timeoutId = setTimeout(() => {
                    isDeleting = true;
                    typeNextChar();
                }, pauseDuration);
            } else if (isDeleting && currentIndex > 0) {
                currentIndex--;
                setTypewriterPlaceholder(fullPlaceholder.slice(0, currentIndex));
                timeoutId = setTimeout(typeNextChar, typingSpeed / 2);
            } else {
                isDeleting = false;
                timeoutId = setTimeout(typeNextChar, typingSpeed);
            }
        };

        typeNextChar();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [fullPlaceholder, typingSpeed, pauseDuration]);

    const normalizeUrl = (url: string): string => {
        const trimmed = url.trim();
        if (!trimmed) return "";
        const clean = trimmed.replace(/\/+$/, "");
        if (!clean.match(/^https?:\/\//i)) {
            return `https://${clean}`;
        }
        return clean;
    };

    return (
        <div className="relative bg-primary">
            {/* Animated shimmer background gradient */}
            <div className="absolute inset-0 -z-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
                    style={{
                        background: "linear-gradient(120deg, transparent, rgba(255, 49, 49, 0.12), rgba(255, 145, 77, 0.12), transparent)",
                        backgroundSize: "200% 200%",
                    }}
                    initial={{ backgroundPosition: "-100% -100%" }}
                    animate={{ backgroundPosition: "200% 200%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
                    style={{
                        background: "linear-gradient(60deg, transparent, rgba(255, 145, 77, 0.1), rgba(255, 49, 49, 0.1), transparent)",
                        backgroundSize: "200% 200%",
                    }}
                    initial={{ backgroundPosition: "200% 200%" }}
                    animate={{ backgroundPosition: "-100% -100%" }}
                    transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
                />
            </div>

            {/* Text + form: fills viewport, centered */}
            <div className="relative z-10 flex min-h-[60svh] md:min-h-[65svh] lg:min-h-[70svh] flex-col items-center justify-center px-4 md:px-8 py-16 md:py-0">
                <div className="mx-auto w-full max-w-4xl">
                    <div className="flex flex-col items-center text-center gap-8 md:gap-10">
                        <div className="flex flex-col items-center gap-2 md:gap-3">
                            <a href="/changelog" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                                <BadgeGroup className="hidden md:flex" size="lg" addonText="New" iconTrailing={ArrowRight} theme="modern" color="brand">
                                    Screenshot-to-chat is live now!
                                </BadgeGroup>
                                <BadgeGroup className="md:hidden" size="md" addonText="New" iconTrailing={ArrowRight} theme="modern" color="brand">
                                    Screenshot-to-chat is live!
                                </BadgeGroup>
                            </a>
                            <h1 className="text-[32px] font-semibold text-primary leading-tight md:text-[42px] lg:text-[52px] lg:leading-none">
                                From research to live A/B test. Just by chatting.
                            </h1>
                            <p className="text-lg text-tertiary md:text-xl lg:text-2xl max-w-2xl">
                                Paste your URL. Get competitor intel, AI-powered suggestions, and a live experiment on your site in minutes.
                            </p>
                        </div>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const url = formData.get("website-url") as string;
                                if (!url) return;
                                const normalizedUrl = normalizeUrl(url);
                                window.location.href = `https://app.grona.ai/try/edit/newCampaign?url=${encodeURIComponent(normalizedUrl)}`;
                            }}
                            className="w-full max-w-2xl"
                        >
                            <div className="rounded-2xl bg-secondary border-2 border-secondary_alt p-4 shadow-lg focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/10 transition-all duration-200">
                                <div className="flex items-center gap-2">
                                    <Input
                                        isRequired
                                        size="md"
                                        name="website-url"
                                        type="text"
                                        placeholder={typewriterPlaceholder}
                                        wrapperClassName="border-0 ring-0 bg-transparent p-0 flex-1 shadow-none"
                                        inputClassName="text-lg placeholder:text-tertiary py-2 pr-0"
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        iconTrailing={ArrowUpRight}
                                        className="[&>*[data-icon]]:text-white"
                                    />
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            {/* Hero video/image: top ~30% visible above the fold */}
            <div className="relative z-10 mx-auto w-full max-w-container px-4 md:px-8 pb-16 md:pb-24">
                <YouTubeHeroVideo />
            </div>
        </div>
    );
};
