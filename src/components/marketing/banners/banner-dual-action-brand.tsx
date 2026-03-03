"use client";

import { Flag05 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const BannerDualActionBrand = () => {
    return (
        <div className="relative mx-2 mb-4 flex flex-col gap-4 rounded-xl border-t border-brand_alt bg-brand-section_subtle p-4 shadow-lg md:m-0 md:flex-row md:items-center md:gap-3 md:border-t-0 md:border-b md:p-3">
            <div className="flex flex-1 flex-col gap-4 md:w-0 md:flex-row md:items-center">
                <FeaturedIcon className="hidden md:flex" icon={Flag05} color="brand" theme="dark" size="lg" />

                <div className="flex flex-col gap-0.5 overflow-hidden lg:flex-row lg:gap-1.5">
                    <p className="pr-8 text-md font-semibold text-primary_on-brand md:truncate md:pr-0">
                        We use third-party cookies in order to personalise your experience
                    </p>
                    <p className="text-md text-tertiary_on-brand md:truncate">
                        Read our{" "}
                        <a
                            href="#"
                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Cookie Policy
                        </a>
                        .
                    </p>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex w-full flex-col-reverse gap-3 md:flex-row">
                    <Button color="secondary" size="lg" className="shadow-xs! ring-0">
                        Decline
                    </Button>
                    <Button color="primary" size="lg">
                        Allow
                    </Button>
                </div>
                <div className="absolute top-2 right-2 flex shrink-0 items-center justify-center md:static">
                    <CloseButton size="md" theme="dark" label="Dismiss" />
                </div>
            </div>
        </div>
    );
};
