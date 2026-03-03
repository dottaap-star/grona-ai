import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";

export const FooterSmall02 = () => {
    return (
        <footer className="bg-primary py-12">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center justify-center md:justify-between lg:flex-row">
                    <UntitledLogo className="h-8 w-min shrink-0" />

                    <p className="mt-12 text-md text-quaternary lg:mt-0">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
