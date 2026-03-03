"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";

export const FooterSmall04 = () => {
    return (
        <footer className="bg-primary py-12">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between gap-y-12 md:flex-row">
                    <UntitledLogo className="h-8 w-min shrink-0" />

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex w-full flex-col gap-4 sm:flex-row md:max-w-100"
                    >
                        <Input isRequired id="newsletters-email" name="email" type="email" placeholder="Enter your email" size="md" wrapperClassName="flex-1" />
                        <Button type="submit" size="lg">
                            Subscribe
                        </Button>
                    </Form>
                </div>

                <p className="mt-8 text-md text-quaternary md:mt-16 md:text-right">© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </footer>
    );
};
