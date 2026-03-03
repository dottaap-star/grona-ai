"use client";

import type { ComponentProps } from "react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
];

const tabs = [
    { id: "legal", label: "Legal version" },
    { id: "simple", label: "Simple version" },
];

const HeaderPrimaryDark = (props: ComponentProps<typeof Header>) => {
    return (
        <Header
            {...props}
            className={cx(
                "bg-brand-section [&_nav>ul>li>a]:text-secondary_on-brand [&_nav>ul>li>a]:hover:text-secondary_on-brand [&_nav>ul>li>button]:text-secondary_on-brand [&_nav>ul>li>button]:hover:text-secondary_on-brand [&_nav>ul>li>button>svg]:text-fg-brand-secondary_alt [&_svg_path.fill-fg-primary]:fill-fg-white",
                props.className,
            )}
        />
    );
};

const HeaderCenteredTabs = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-secondary_on-brand md:text-md">Current as of 20 Jan 2025</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary_on-brand md:text-display-lg">Cookie Policy</h1>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">
                        We use some cookies to help improve your experience on this website. Here's some more info about what we do with information we collect.
                    </p>

                    <div className="mt-8 self-stretch sm:self-center md:mt-12">
                        <Tabs>
                            <TabList
                                type="button-gray"
                                size="md"
                                items={tabs}
                                className="w-full md:w-auto [&_[role=tab]]:flex-1 [&_[role=tab]]:text-secondary_on-brand [&_[role=tab]]:hover:bg-white/10 [&_[role=tab]]:selected:bg-brand-primary_alt [&_[role=tab]]:selected:text-brand-secondary"
                            />
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContentSectionRichText02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto prose md:prose-lg md:max-w-180">
                    <p>
                        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
                        varius id.
                    </p>
                    <p>
                        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
                        fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
                        sodales id est ac volutpat.
                    </p>

                    <h2>What information do we collect?</h2>

                    <p>
                        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                        turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                    </p>

                    <p>
                        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim
                        adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
                        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus,
                        eget nunc lectus in tellus, pharetra, porttitor.
                    </p>
                    <p>
                        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
                        molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam
                        nibh orci.
                    </p>

                    <h2>How do we use your information?</h2>

                    <p>
                        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                        turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                    </p>

                    <p>
                        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim
                        adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
                        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus,
                        eget nunc lectus in tellus, pharetra, porttitor.
                    </p>
                    <p>
                        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
                        molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam
                        nibh orci.
                    </p>

                    <h3>Do we use cookies and other tracking technologies?</h3>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h3>How long do we keep your information?</h3>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h3>How do we keep your information safe?</h3>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h2>What are your privacy rights?</h2>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h3>How can you contact us about this policy?</h3>

                    <p>
                        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
                        rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa
                        erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                    </p>

                    <ol>
                        <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                        <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                        <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

const CTACardHorizontalBrand = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-brand-section px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary_on-brand">
                            <span className="hidden md:inline">Start your 30-day free trial</span>
                            <span className="md:hidden">Start your free trial</span>
                        </h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand lg:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    </div>
                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl" className="shadow-xs! ring-0">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge07 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                            <UntitledLogo className="h-8 w-min shrink-0" />
                            <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                        </div>
                        <nav>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                                {[
                                    { title: "Overview", href: "#" },
                                    { title: "Features", href: "#" },
                                    { title: "Pricing", href: "#" },
                                    { title: "Careers", href: "#" },
                                    { title: "Help", href: "#" },
                                    { title: "Privacy", href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button color="link-gray" size="lg" href={item.href}>
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-md font-medium text-brand-secondary">Get the app</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 lg:flex-col">
                            <AppStoreButton href="#" className="w-[135px]" />
                            <GooglePlayButton href="#" className="w-[135px]" />
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon size={24} aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const LegalPage05 = () => {
    return (
        <div className="bg-primary">
            <HeaderPrimaryDark />

            <HeaderCenteredTabs />

            <ContentSectionRichText02 />

            <SectionDivider />

            <CTACardHorizontalBrand />

            <SectionDivider />

            <FooterLarge07 />
        </div>
    );
};

export default LegalPage05;
