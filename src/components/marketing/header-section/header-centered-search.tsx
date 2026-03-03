"use client";

import { SearchLg } from "@untitledui/icons";
import { Input } from "@/components/base/input/input";

export const HeaderCenteredSearch = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Resources</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Support centre</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Get help and support or learn how to use the newest features in Untitled.</p>

                    <div className="mt-8 w-full sm:mt-12 sm:w-80">
                        <Input size="md" type="search" aria-label="Search" placeholder="Search" icon={SearchLg} wrapperClassName="sm:py-0.5" />
                    </div>
                </div>
            </div>
        </section>
    );
};
