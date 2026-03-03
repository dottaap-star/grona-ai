import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

type Variant = "split" | "dashboard" | "chat" | "website";

interface BrowserMockupProps {
    /** Which skeleton layout to show inside the browser frame */
    variant?: Variant;
    /** Optional custom content to render instead of a skeleton variant */
    children?: ReactNode;
    /** Aspect ratio of the content area (default varies by variant) */
    aspectRatio?: string;
    className?: string;
}

// ---------------------------------------------------------------------------
// Skeleton content variants
// ---------------------------------------------------------------------------

/** Chat left + site preview right (the Grona product view) */
const SplitSkeleton = () => (
    <div className="flex size-full">
        <div className="w-2/5 border-r border-secondary bg-primary p-4 flex flex-col gap-3">
            <div className="h-2.5 w-3/4 rounded-full bg-secondary_alt" />
            <div className="h-2.5 w-1/2 rounded-full bg-secondary_alt" />
            <div className="mt-1 rounded-xl bg-brand/8 p-3 flex flex-col gap-2">
                <div className="h-2 w-full rounded-full bg-brand/25" />
                <div className="h-2 w-4/5 rounded-full bg-brand/25" />
                <div className="h-2 w-3/5 rounded-full bg-brand/25" />
            </div>
            <div className="h-2.5 w-full rounded-full bg-secondary_alt" />
            <div className="h-2.5 w-2/3 rounded-full bg-secondary_alt" />
            <div className="mt-auto h-9 rounded-lg bg-secondary_alt" />
        </div>
        <div className="flex-1 bg-secondary_alt/40 p-4 flex flex-col gap-3">
            <div className="h-8 w-full rounded-lg bg-secondary" />
            <div className="h-2.5 w-5/6 rounded-full bg-secondary" />
            <div className="h-2.5 w-2/3 rounded-full bg-secondary" />
            <div className="mt-2 flex-1 rounded-xl bg-secondary ring-2 ring-brand/20" />
        </div>
    </div>
);

/** Dashboard with sidebar + cards/chart area */
const DashboardSkeleton = () => (
    <div className="flex size-full">
        {/* Sidebar */}
        <div className="hidden w-1/5 border-r border-secondary bg-primary p-3 sm:flex flex-col gap-2.5">
            <div className="h-5 w-3/4 rounded bg-secondary_alt" />
            <div className="mt-3 h-2.5 w-full rounded-full bg-secondary_alt" />
            <div className="h-2.5 w-4/5 rounded-full bg-secondary_alt" />
            <div className="h-2.5 w-3/5 rounded-full bg-brand/20" />
            <div className="h-2.5 w-4/5 rounded-full bg-secondary_alt" />
            <div className="mt-auto h-2.5 w-2/3 rounded-full bg-secondary_alt" />
        </div>
        {/* Main area */}
        <div className="flex-1 bg-primary p-4 flex flex-col gap-3">
            {/* Top metric cards */}
            <div className="flex gap-3">
                <div className="flex-1 rounded-lg bg-secondary p-3 flex flex-col gap-1.5">
                    <div className="h-2 w-1/2 rounded-full bg-secondary_alt" />
                    <div className="h-4 w-2/3 rounded bg-secondary_alt" />
                </div>
                <div className="flex-1 rounded-lg bg-secondary p-3 flex flex-col gap-1.5">
                    <div className="h-2 w-1/2 rounded-full bg-secondary_alt" />
                    <div className="h-4 w-2/3 rounded bg-secondary_alt" />
                </div>
                <div className="hidden flex-1 rounded-lg bg-secondary p-3 sm:flex flex-col gap-1.5">
                    <div className="h-2 w-1/2 rounded-full bg-secondary_alt" />
                    <div className="h-4 w-2/3 rounded bg-secondary_alt" />
                </div>
            </div>
            {/* Chart area */}
            <div className="flex-1 rounded-xl bg-secondary p-3 flex flex-col justify-end gap-1">
                <div className="flex items-end gap-1.5 h-full">
                    <div className="flex-1 rounded-t bg-secondary_alt" style={{ height: "40%" }} />
                    <div className="flex-1 rounded-t bg-secondary_alt" style={{ height: "65%" }} />
                    <div className="flex-1 rounded-t bg-brand/20" style={{ height: "85%" }} />
                    <div className="flex-1 rounded-t bg-secondary_alt" style={{ height: "55%" }} />
                    <div className="flex-1 rounded-t bg-secondary_alt" style={{ height: "70%" }} />
                    <div className="flex-1 rounded-t bg-secondary_alt" style={{ height: "45%" }} />
                    <div className="flex-1 rounded-t bg-brand/20" style={{ height: "90%" }} />
                    <div className="flex-1 rounded-t bg-secondary_alt" style={{ height: "60%" }} />
                </div>
            </div>
        </div>
    </div>
);

/** Chat interface skeleton */
const ChatSkeleton = () => (
    <div className="flex size-full flex-col bg-primary p-4 gap-3">
        {/* Incoming message */}
        <div className="flex gap-2 max-w-[70%]">
            <div className="size-6 shrink-0 rounded-full bg-secondary_alt" />
            <div className="flex flex-col gap-1.5">
                <div className="rounded-xl rounded-tl-sm bg-secondary p-3 flex flex-col gap-1.5">
                    <div className="h-2 w-40 rounded-full bg-secondary_alt" />
                    <div className="h-2 w-32 rounded-full bg-secondary_alt" />
                </div>
            </div>
        </div>
        {/* Outgoing message */}
        <div className="flex gap-2 max-w-[70%] self-end">
            <div className="rounded-xl rounded-tr-sm bg-brand/10 p-3 flex flex-col gap-1.5">
                <div className="h-2 w-36 rounded-full bg-brand/25" />
                <div className="h-2 w-28 rounded-full bg-brand/25" />
            </div>
        </div>
        {/* Incoming with suggestion cards */}
        <div className="flex gap-2 max-w-[80%]">
            <div className="size-6 shrink-0 rounded-full bg-secondary_alt" />
            <div className="flex flex-col gap-2">
                <div className="rounded-xl rounded-tl-sm bg-secondary p-3 flex flex-col gap-1.5">
                    <div className="h-2 w-48 rounded-full bg-secondary_alt" />
                    <div className="h-2 w-36 rounded-full bg-secondary_alt" />
                </div>
                <div className="flex gap-2">
                    <div className="rounded-lg bg-secondary px-3 py-2">
                        <div className="h-2 w-16 rounded-full bg-secondary_alt" />
                    </div>
                    <div className="rounded-lg bg-secondary px-3 py-2">
                        <div className="h-2 w-20 rounded-full bg-secondary_alt" />
                    </div>
                </div>
            </div>
        </div>
        {/* Input bar */}
        <div className="mt-auto h-10 rounded-lg bg-secondary flex items-center px-3 gap-2">
            <div className="h-2.5 flex-1 rounded-full bg-secondary_alt" />
            <div className="size-6 rounded bg-brand/20" />
        </div>
    </div>
);

/** Simple website skeleton */
const WebsiteSkeleton = () => (
    <div className="flex size-full flex-col bg-primary">
        {/* Nav bar */}
        <div className="flex items-center justify-between border-b border-secondary px-4 py-2.5">
            <div className="h-4 w-20 rounded bg-secondary_alt" />
            <div className="flex gap-3">
                <div className="h-2.5 w-12 rounded-full bg-secondary_alt" />
                <div className="h-2.5 w-12 rounded-full bg-secondary_alt" />
                <div className="h-2.5 w-12 rounded-full bg-secondary_alt" />
            </div>
        </div>
        {/* Hero */}
        <div className="flex flex-col items-center gap-3 px-4 py-6">
            <div className="h-5 w-3/5 rounded bg-secondary_alt" />
            <div className="h-2.5 w-2/5 rounded-full bg-secondary_alt" />
            <div className="mt-2 h-8 w-28 rounded-lg bg-brand/20" />
        </div>
        {/* Content cards */}
        <div className="flex-1 px-4 pb-4">
            <div className="flex gap-3 h-full">
                <div className="flex-1 rounded-lg bg-secondary p-3 flex flex-col gap-2">
                    <div className="h-16 rounded bg-secondary_alt" />
                    <div className="h-2 w-3/4 rounded-full bg-secondary_alt" />
                    <div className="h-2 w-1/2 rounded-full bg-secondary_alt" />
                </div>
                <div className="hidden flex-1 rounded-lg bg-secondary p-3 sm:flex flex-col gap-2">
                    <div className="h-16 rounded bg-secondary_alt" />
                    <div className="h-2 w-3/4 rounded-full bg-secondary_alt" />
                    <div className="h-2 w-1/2 rounded-full bg-secondary_alt" />
                </div>
                <div className="hidden flex-1 rounded-lg bg-secondary p-3 lg:flex flex-col gap-2">
                    <div className="h-16 rounded bg-secondary_alt" />
                    <div className="h-2 w-3/4 rounded-full bg-secondary_alt" />
                    <div className="h-2 w-1/2 rounded-full bg-secondary_alt" />
                </div>
            </div>
        </div>
    </div>
);

// ---------------------------------------------------------------------------
// Default aspect ratios per variant
// ---------------------------------------------------------------------------

const defaultAspectRatios: Record<Variant, string> = {
    split: "16/7",
    dashboard: "16/9",
    chat: "9/14",
    website: "16/10",
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const BrowserMockup = ({
    variant = "split",
    children,
    aspectRatio,
    className,
}: BrowserMockupProps) => {
    const ratio = aspectRatio ?? defaultAspectRatios[variant];

    const skeletons: Record<Variant, ReactNode> = {
        split: <SplitSkeleton />,
        dashboard: <DashboardSkeleton />,
        chat: <ChatSkeleton />,
        website: <WebsiteSkeleton />,
    };

    return (
        <div className={cx("rounded-xl overflow-hidden shadow-2xl border border-secondary_alt bg-secondary", className)}>
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary_alt border-b border-secondary">
                <div className="size-2.5 rounded-full bg-error-300 opacity-60" />
                <div className="size-2.5 rounded-full bg-warning-300 opacity-60" />
                <div className="size-2.5 rounded-full bg-success-300 opacity-60" />
                <div className="ml-3 h-5 w-52 rounded-full bg-tertiary/15" />
            </div>
            {/* Content area */}
            <div style={{ aspectRatio: ratio }}>
                {children ?? skeletons[variant]}
            </div>
        </div>
    );
};
