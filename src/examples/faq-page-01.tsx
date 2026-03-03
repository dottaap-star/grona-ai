"use client";

import { SearchLg } from "@untitledui/icons";
import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";

const faqs = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
        icon: Heart,
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
        icon: SwitchHorizontal01,
    },
    {
        question: "What is your cancellation policy?",
        answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
        icon: SlashCircle01,
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
        icon: File05,
    },
    {
        question: "How does billing work?",
        answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
        icon: CreditCardRefresh,
    },
    {
        question: "How do I change my account email?",
        answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
        icon: Mail01,
    },
];

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
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

const HeaderCenteredSearch = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">FAQs</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Frequently asked questions</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Have questions? We're here to help.</p>

                    <div className="mt-8 w-full sm:mt-12 sm:w-80">
                        <Input size="md" type="search" aria-label="Search" placeholder="Search" icon={SearchLg} wrapperClassName="sm:py-0.5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQSimple01 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div>
                    <dl className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {faqs.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col items-center text-center">
                                    <FeaturedIcon color="gray" theme="modern" className="md:hidden" size="md" icon={item.icon} />
                                    <FeaturedIcon color="gray" theme="modern" className="hidden md:flex" size="lg" icon={item.icon} />

                                    <dt className="mt-4 text-lg font-semibold text-primary md:mt-5 md:text-xl">{item.question}</dt>
                                    <dd className="mt-1 text-md text-tertiary md:mt-2">{item.answer}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-secondary px-6 py-8 text-center md:mt-16 md:gap-8 md:px-8 md:py-8 md:pb-10">
                    <div className="flex items-end -space-x-4">
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80"
                            alt="Marco Kelly"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                            alt="Amelie Laurent"
                            size="xl"
                            className="z-10 ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/jaya-willis?fm=webp&q=80"
                            alt="Jaya Willis"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="xl">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

const CTAScreenMockup03 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:pt-24 md:pb-0">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        <span className="hidden md:inline">Start your 30-day free trial</span>
                        <span className="md:hidden">Start your free trial</span>
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-center">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 w-full max-w-container px-4 md:max-h-100 md:overflow-hidden md:px-8">
                <div className="size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[32px] md:p-1 md:ring-[2px]">
                    <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                        <div className="relative size-full overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[24px] md:ring-[2px]">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="size-full object-cover dark:hidden"
                                alt="Dashboard mockup showing application interface"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="size-full object-cover not-dark:hidden"
                                alt="Dashboard mockup showing application interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge02 = () => {
    return (
        <footer>
            <div className="bg-secondary_alt py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col items-start gap-6 md:w-80 md:gap-6">
                            <UntitledLogo className="h-8 w-min shrink-0" />
                            <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                            <RatingBadge className="origin-top-left scale-[0.85]" />
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
            <div className="bg-primary py-10 md:py-12">
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

const FAQPage01 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <HeaderCenteredSearch />

            <FAQSimple01 />

            <CTAScreenMockup03 />

            <FooterLarge02 />
        </div>
    );
};

export default FAQPage01;
