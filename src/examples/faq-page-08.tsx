"use client";

import { type ComponentProps, type FC, type ReactNode, useState } from "react";
import {
    ChartBreakoutSquare,
    CreditCardRefresh,
    File05,
    Heart,
    Mail01,
    MessageChatCircle,
    MessageSmileCircle,
    SearchLg,
    SlashCircle01,
    SwitchHorizontal01,
    Zap,
} from "@untitledui/icons";
import { motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";

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

const HeaderSpaceBetweenSearch = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-3 text-sm font-semibold text-secondary_on-brand md:text-md">Support</div>
                <div className="grid grid-cols-[minmax(auto,768px)] gap-x-16 lg:grid-cols-[1fr_480px]">
                    <h1 className="text-display-md font-semibold text-primary_on-brand md:text-display-lg">Top questions about Untitled</h1>

                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl lg:mt-3 lg:h-0">
                        Need something cleared up? Here are our most frequently asked questions.
                    </p>

                    <div className="mt-8 w-full sm:mt-8 sm:w-80">
                        <Input size="md" type="search" aria-label="Search" placeholder="Search" icon={SearchLg} wrapperClassName="sm:py-0.5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

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

export const FAQAccordion04 = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    <div className="flex w-full max-w-3xl flex-col lg:max-w-xl">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Support</span>

                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">FAQs</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5">
                            Everything you need to know about the product and billing. Can't find the answer you're looking for? Please{" "}
                            <a
                                href="#"
                                className="rounded-xs underline underline-offset-4 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                chat to our friendly team
                            </a>
                            .
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.question}
                                className={cx(
                                    "rounded-2xl bg-transparent p-5 transition duration-300 ease-in-out md:p-6",
                                    openQuestions.has(index) && "bg-secondary",
                                )}
                            >
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:flex-row md:gap-4"
                                    >
                                        <span className="flex-1 text-md font-semibold text-primary">{faq.question}</span>

                                        <span aria-hidden="true" className="flex size-6 items-center text-fg-quaternary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line
                                                    className={cx(
                                                        "origin-center rotate-0 transition duration-150 ease-out",
                                                        openQuestions.has(index) && "-rotate-90",
                                                    )}
                                                    x1="12"
                                                    y1="8"
                                                    x2="12"
                                                    y2="16"
                                                ></line>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <motion.div
                                    className="overflow-hidden"
                                    initial={false}
                                    animate={{ height: openQuestions.has(index) ? "auto" : 0, opacity: openQuestions.has(index) ? 1 : 0 }}
                                    transition={{ type: "spring", damping: 24, stiffness: 240, bounce: 0.4 }}
                                >
                                    <div className="pt-1 pr-8 md:pr-12">
                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CardVerticalBrand = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-brand-section px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary_on-brand xl:text-display-md">
                        <span className="hidden md:inline">Start your 30-day free trial</span>
                        <span className="md:hidden">Start your free trial</span>
                    </h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 lg:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-center">
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

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

interface FeatureTextIcon extends TextCentered {
    icon: FC<{ className?: string }>;
}

const FeatureTextFeaturedIconTopLeft = ({ icon, title, subtitle, footer }: FeatureTextIcon) => (
    <div className="flex max-w-sm flex-col gap-4">
        <FeaturedIcon icon={icon} size="lg" color="gray" theme="modern" className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color="gray" theme="modern" className="inline-flex md:hidden" />

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const TwistedArrow = () => {
    return (
        <svg className="text-fg-brand-secondary" width="284" height="245" viewBox="0 0 284 245" fill="none">
            <path
                d="M202.457 235.722C201.789 237.238 202.477 239.009 203.993 239.677C205.509 240.345 207.28 239.657 207.948 238.141L202.457 235.722ZM114.216 118.445L111.679 120.046L111.68 120.047L114.216 118.445ZM198.838 97.3764L195.875 96.9101L195.875 96.9105L198.838 97.3764ZM45.7884 41.7411C44.3586 42.5784 43.8783 44.4161 44.7156 45.8459C45.5528 47.2756 47.3906 47.7559 48.8204 46.9187L45.7884 41.7411ZM224.343 232.831C225.845 232.13 226.494 230.345 225.793 228.844C225.092 227.342 223.307 226.693 221.805 227.394L224.343 232.831ZM204.547 238.761L202.013 240.366C202.82 241.641 204.449 242.118 205.816 241.48L204.547 238.761ZM195.557 219.766C194.53 218.466 192.644 218.244 191.343 219.271C190.043 220.298 189.821 222.184 190.848 223.485L195.557 219.766ZM205.202 236.931C207.948 238.141 207.948 238.14 207.949 238.138C207.949 238.137 207.95 238.135 207.951 238.133C207.953 238.13 207.955 238.124 207.958 238.118C207.963 238.105 207.971 238.087 207.982 238.063C208.002 238.016 208.032 237.948 208.07 237.859C208.146 237.682 208.256 237.422 208.397 237.083C208.678 236.407 209.082 235.418 209.576 234.147C210.565 231.607 211.921 227.941 213.399 223.409C216.353 214.356 219.811 201.804 221.804 187.851C225.765 160.126 224.063 125.919 199.816 103.158L195.709 107.533C217.734 128.207 219.752 159.792 215.864 187.002C213.934 200.516 210.576 212.717 207.695 221.549C206.256 225.96 204.939 229.52 203.985 231.97C203.508 233.195 203.122 234.142 202.857 234.778C202.725 235.096 202.623 235.337 202.555 235.495C202.521 235.575 202.496 235.633 202.479 235.671C202.471 235.69 202.465 235.704 202.461 235.713C202.459 235.717 202.458 235.72 202.457 235.721C202.457 235.722 202.457 235.722 202.457 235.723C202.457 235.722 202.457 235.722 205.202 236.931ZM199.816 103.158C175.931 80.7374 150.296 77.9786 132.262 84.2273C123.313 87.3281 116.132 92.6964 112.149 99.091C108.114 105.571 107.361 113.204 111.679 120.046L116.753 116.844C113.88 112.292 114.191 107.162 117.242 102.263C120.347 97.2783 126.275 92.6518 134.226 89.8967C149.993 84.4336 173.323 86.5183 195.709 107.533L199.816 103.158ZM111.68 120.047C115.769 126.522 123.096 131.278 131.524 134.122C140 136.983 149.902 138.024 159.565 136.808C178.931 134.37 197.894 122.698 201.802 97.8423L195.875 96.9105C192.497 118.396 176.343 128.648 158.816 130.855C150.032 131.96 141.043 131.003 133.443 128.437C125.794 125.856 119.857 121.758 116.753 116.843L111.68 120.047ZM201.802 97.8427C203.804 85.1198 198.77 72.7939 189.552 62.262C180.337 51.7328 166.772 42.7703 151.066 36.545C119.696 24.1108 78.9842 22.3017 45.7884 41.7411L48.8204 46.9187C80.0391 28.637 118.74 30.186 148.855 42.1228C163.892 48.0829 176.588 56.5591 185.037 66.2135C193.484 75.8652 197.518 86.4678 195.875 96.9101L201.802 97.8427ZM221.805 227.394L203.278 236.043L205.816 241.48L224.343 232.831L221.805 227.394ZM204.547 238.761C207.082 237.156 207.082 237.156 207.082 237.156C207.081 237.156 207.081 237.156 207.081 237.155C207.081 237.155 207.08 237.154 207.08 237.153C207.079 237.151 207.077 237.149 207.075 237.145C207.071 237.139 207.064 237.128 207.056 237.115C207.039 237.088 207.013 237.048 206.98 236.996C206.914 236.892 206.818 236.74 206.694 236.545C206.446 236.155 206.089 235.594 205.653 234.912C204.782 233.548 203.593 231.696 202.326 229.743C199.836 225.909 196.91 221.481 195.557 219.766L190.848 223.485C191.986 224.926 194.733 229.066 197.293 233.01C198.55 234.947 199.731 236.787 200.597 238.143C201.03 238.821 201.384 239.377 201.63 239.764C201.753 239.957 201.849 240.108 201.914 240.211C201.946 240.262 201.971 240.301 201.988 240.327C201.996 240.34 202.002 240.35 202.007 240.357C202.009 240.36 202.01 240.362 202.011 240.364C202.012 240.365 202.012 240.365 202.012 240.366C202.012 240.366 202.013 240.366 202.013 240.366C202.013 240.366 202.013 240.366 204.547 238.761Z"
                fill="currentColor"
            />
        </svg>
    );
};

const FeaturesIconsAndImage01 = () => {
    return (
        <section className="overflow-hidden bg-primary pb-16 md:pb-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Overflowing with useful features</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-y-12">
                        {[
                            {
                                title: "Share team inboxes",
                                subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                                icon: MessageChatCircle,
                            },
                            {
                                title: "Deliver instant answers",
                                subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                                icon: Zap,
                            },
                            {
                                title: "Manage your team with reports",
                                subtitle:
                                    "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                                icon: ChartBreakoutSquare,
                            },
                            {
                                title: "Connect with customers",
                                subtitle:
                                    "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
                                icon: MessageSmileCircle,
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopLeft icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </ul>

                    <div className="relative -ml-4 w-screen md:ml-0 md:w-full lg:h-140">
                        <div className="absolute -top-[141px] left-28 z-10 max-lg:hidden">
                            <TwistedArrow />
                        </div>
                        <div className="-mx-4 flex items-center justify-center overflow-hidden bg-tertiary px-0 py-6 md:rounded-3xl lg:absolute lg:mr-9.5 lg:-ml-0 lg:h-140 lg:w-[50vw] lg:justify-start lg:rounded-r-none lg:py-14 lg:pr-0 lg:pl-10">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-light.webp"
                                alt="MacBook Pro displaying dashboard interface with analytics and data visualization"
                                className="h-full object-contain lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-dark.webp"
                                alt="MacBook Pro displaying dashboard interface with analytics and data visualization"
                                className="h-full object-contain not-dark:hidden lg:max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: <span className="ml-1 rounded-md bg-white/10 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-white/30 ring-inset">New</span>,
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

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
];

const FooterLarge10Brand = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between border-b border-brand_alt pb-8 md:pb-16 lg:flex-row">
                    <div className="max-w-3xl">
                        <h2 className="text-display-xs font-semibold text-primary_on-brand md:text-display-sm">Start your 30-day free trial</h2>
                        <p className="mt-2 text-md text-tertiary_on-brand md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    </div>

                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0">
                        <Button color="secondary" size="xl" className="shadow-xs! ring-0">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 xl:flex-row">
                    <div className="flex flex-col gap-6 md:w-80 md:gap-8">
                        <UntitledLogo className="dark-mode" />
                        <p className="text-md text-tertiary_on-brand">Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <nav className="flex-1">
                        <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                            {footerNavList.slice(0, 5).map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-quaternary_on-brand">{category.label}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label}>
                                                <Button
                                                    className="gap-1 text-footer-button-fg hover:text-footer-button-fg_hover"
                                                    color="link-color"
                                                    size="lg"
                                                    href={item.href}
                                                    iconTrailing={item.badge}
                                                >
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

                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row">
                    <p className="text-md text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex rounded-xs text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
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

const FAQPage08 = () => {
    return (
        <div className="bg-primary">
            <HeaderPrimaryDark />

            <HeaderSpaceBetweenSearch />

            <FAQAccordion04 />

            <CardVerticalBrand />

            <FeaturesIconsAndImage01 />

            <FooterLarge10Brand />
        </div>
    );
};

export default FAQPage08;
