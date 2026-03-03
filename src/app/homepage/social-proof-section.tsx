"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// ─── Animated Counter ────────────────────────────────────────────────

function useCountUp(target: number, duration = 2000) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const start = performance.now();

                    const tick = (now: number) => {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setValue(Math.round(eased * target));
                        if (progress < 1) requestAnimationFrame(tick);
                    };

                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.5 },
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return { value, ref };
}

// ─── Data ────────────────────────────────────────────────────────────

const stats = [
    { target: 1200, suffix: "+", label: "Experiments run" },
    { target: 12, suffix: "+", label: "Industries" },
    { target: 23, suffix: "%", label: "Avg conversion lift" },
];

// ─── Section ─────────────────────────────────────────────────────────

export const SocialProofSection = () => {
    return (
        <section className="bg-primary py-8 md:py-12">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <dl className="flex w-full flex-col justify-center gap-8 md:flex-row md:gap-4 md:self-center">
                    {stats.map((stat, index) => (
                        <Fragment key={stat.label}>
                            {index !== 0 && <div className="hidden border-l border-secondary md:block" />}
                            <StatItem {...stat} />
                        </Fragment>
                    ))}
                </dl>
            </div>
        </section>
    );
};

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
    const { value, ref } = useCountUp(target);

    return (
        <div className="flex flex-1 flex-col-reverse gap-3 text-center">
            <dt className="text-lg font-semibold text-primary">{label}</dt>
            <dd ref={ref} className="text-display-lg font-semibold tabular-nums text-brand-tertiary_alt md:text-display-xl">
                {value.toLocaleString()}
                {suffix}
            </dd>
        </div>
    );
}
