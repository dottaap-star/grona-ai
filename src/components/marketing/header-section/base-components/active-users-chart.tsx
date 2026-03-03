"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import { CircleChart } from "./circle-chart";

export const ActiveUsersChart = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cx("relative flex items-center justify-center", props.className)}>
            <CircleChart className="h-full max-h-full w-full max-w-full" />

            <div className="absolute flex flex-col items-center text-center md:gap-0.5">
                <p className="text-xs font-medium text-tertiary md:text-sm">Active users</p>
                <p className="text-xl font-semibold text-primary md:text-display-xs lg:text-display-sm">1,000</p>
            </div>
        </div>
    );
};
