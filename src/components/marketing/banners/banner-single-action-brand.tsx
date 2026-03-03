"use client";

import { Stars02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const BannerSingleActionBrand = () => {
    return (
        <div className="relative mx-2 mb-4 flex flex-col gap-4 rounded-xl border-t border-brand_alt bg-brand-section_subtle p-4 shadow-lg md:m-0 md:flex-row md:items-center md:gap-3 md:border-t-0 md:border-b md:p-3">
            <div className="flex flex-1 flex-col gap-4 md:w-0 md:flex-row md:items-center">
                <FeaturedIcon icon={Stars02} color="brand" theme="dark" size="lg" />

                <div className="flex flex-col gap-0.5 overflow-hidden lg:flex-row lg:gap-1.5">
                    <p className="text-md font-semibold text-primary_on-brand md:truncate">We've just announced our Series A!</p>
                    <p className="text-md text-tertiary_on-brand md:truncate">Read about it from our CEO.</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 md:flex-row">
                <Button href="#" color="secondary" size="lg" className="shadow-xs! ring-0">
                    Read update
                </Button>
                <div className="absolute top-2 right-2 flex shrink-0 items-center justify-center md:static">
                    <CloseButton size="md" theme="dark" label="Dismiss" />
                </div>
            </div>
        </div>
    );
};
