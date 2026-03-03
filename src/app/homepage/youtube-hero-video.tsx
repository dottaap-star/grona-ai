"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "@untitledui/icons";

export const YouTubeHeroVideo = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        setIsVideoPlaying(true);
        setTimeout(() => {
            videoRef.current?.play();
        }, 0);
    };

    return (
        <div className="group relative w-full rounded-2xl border border-secondary shadow-lg p-3 md:p-4 bg-secondary">
            {isVideoPlaying ? (
                <div className="overflow-hidden rounded-xl">
                    <video
                        ref={videoRef}
                        loop
                        playsInline
                        className="block h-auto"
                        style={{ margin: "-6px", width: "calc(100% + 12px)", maxWidth: "none" }}
                        src="/assets/images/homepage/Demo.mp4"
                    />
                </div>
            ) : (
                <>
                    <button
                        type="button"
                        onClick={handlePlay}
                        className="block w-full cursor-pointer overflow-hidden rounded-xl"
                    >
                        <Image
                            src="/assets/images/homepage/Homepage_hero.png"
                            alt="Grona platform showing competitive research and A/B testing"
                            width={1920}
                            height={1080}
                            className="block h-auto w-full"
                        />
                    </button>
                    {/* Frost overlay on outer container */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-black/15 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl backdrop-blur-[6px]" style={{ maskImage: "linear-gradient(to top, black 0%, transparent 60%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 60%)" }} />
                    {/* Play button + label */}
                    <button
                        type="button"
                        onClick={handlePlay}
                        className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-3"
                    >
                        <div className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/15 shadow-2xl backdrop-blur-lg transition-transform duration-300 group-hover:scale-110 md:size-20">
                            <Play className="size-7 fill-white text-white md:size-9" />
                        </div>
                        <span className="text-sm font-medium text-white/90 drop-shadow-md md:text-base">Watch how it works</span>
                    </button>
                </>
            )}
        </div>
    );
};
