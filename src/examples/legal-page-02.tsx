"use client";

import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers },
];

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
                        New
                    </Badge>
                ),
            },
            { label: "Tutorials", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Releases", href: "#" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "About us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "News", href: "#" },
            { label: "Media kit", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
    {
        label: "Social",
        items: [
            { label: "Twitter", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "AngelList", href: "#" },
            { label: "Dribbble", href: "#" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Cookies", href: "#" },
            { label: "Licenses", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
];

const tabs = [
    { id: "legal", label: "Legal version" },
    { id: "simple", label: "Simple version" },
];

const HeaderCenteredTabs = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Privacy Policy</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">We care about your privacy</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our
                        website.
                    </p>
                    <div className="mt-8 self-stretch sm:self-center md:mt-12">
                        <Tabs>
                            <TabList type="button-border" size="md" items={tabs} className="w-full md:w-auto [&_[role=tab]]:flex-1" />
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

const CTASimpleCentered = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Start your free trial</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge02 = () => {
    return (
        <footer className="dark-mode">
            <div className="bg-primary py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col items-start gap-6 md:w-80 md:gap-6">
                            <UntitledLogo className="h-8 w-min shrink-0" />
                            <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                            <RatingBadge className="origin-top-left scale-[0.78]" />
                        </div>
                        <nav className="flex-1">
                            <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                                {footerNavList.slice(0, 5).map((category) => (
                                    <li key={category.label}>
                                        <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                        <ul className="mt-4 flex flex-col gap-3">
                                            {category.items.map((item) => (
                                                <li key={item.label}>
                                                    <Button color="link-gray" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                        {item.label}
                                                    </Button>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-secondary_alt py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row">
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
            </div>
        </footer>
    );
};

const LegalPage02 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <HeaderCenteredTabs />

            <ContentSectionRichText02 />

            <CTASimpleCentered />

            <FooterLarge02 />
        </div>
    );
};

export default LegalPage02;
