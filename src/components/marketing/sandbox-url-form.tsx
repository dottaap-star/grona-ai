"use client";

import { ArrowUpRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { cx } from "@/utils/cx";

const normalizeUrl = (url: string): string => {
    const trimmed = url.trim();
    if (!trimmed) return "";
    const clean = trimmed.replace(/\/+$/, "");
    if (!clean.match(/^https?:\/\//i)) return `https://${clean}`;
    return clean;
};

interface SandboxUrlFormProps {
    placeholder?: string;
    className?: string;
    variant?: "light" | "on-brand";
}

export const SandboxUrlForm = ({ placeholder = "Enter your website URL", className, variant = "light" }: SandboxUrlFormProps) => {
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const url = formData.get("website-url") as string;
                if (!url) return;
                window.location.href = `https://app.grona.ai/try/edit/newCampaign?url=${encodeURIComponent(normalizeUrl(url))}`;
            }}
            className={cx("w-full", className)}
        >
            <div
                className={cx(
                    "flex items-center gap-2 rounded-xl p-2",
                    variant === "on-brand" ? "bg-white/10" : "border border-secondary bg-secondary",
                )}
            >
                <Input
                    isRequired
                    size="md"
                    name="website-url"
                    type="text"
                    placeholder={placeholder}
                    wrapperClassName={cx(
                        "flex-1 border-0 ring-0 shadow-none rounded-lg",
                        variant === "on-brand" ? "bg-white/10" : "bg-transparent",
                    )}
                    inputClassName={
                        variant === "on-brand"
                            ? "text-primary_on-brand placeholder:text-tertiary_on-brand"
                            : undefined
                    }
                />
                <Button type="submit" size="lg" iconTrailing={ArrowUpRight} className="[&>*[data-icon]]:text-white" />
            </div>
        </Form>
    );
};
