"use client";

import { CheckCircle, CreditCardRefresh, File05, Heart, Mail01, SearchLg, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

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

const HeaderCenteredSearch = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">FAQs</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Frequently asked questions</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Everything you need to know about the product and billing. Can't find the answer you're looking for?{" "}
                        <a
                            href="#"
                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Please chat to our friendly team
                        </a>
                        .
                    </p>

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
        <section className="bg-primary py-16 md:py-24">
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

const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
}) => {
    const { text, color, size, iconStyle = "contained" } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "contained" && (
                <div
                    className={cx(
                        "flex shrink-0 items-center justify-center rounded-full",
                        color === "success" ? "bg-success-secondary text-featured-icon-light-fg-success" : "bg-brand-primary text-featured-icon-light-fg-brand",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                >
                    <svg
                        width={size === "lg" ? 16 : size === "md" ? 15 : 13}
                        height={size === "lg" ? 14 : size === "md" ? 13 : 11}
                        viewBox="0 0 13 11"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            )}

            {iconStyle === "filled" && (
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-solid text-white">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1.5 4L4.5 7L10.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-fg-success-primary" : "text-fg-brand-primary",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                />
            )}

            <span
                className={cx(
                    "text-tertiary",
                    size === "lg" ? "pt-0.5 text-lg md:pt-0" : size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md",
                    iconStyle === "filled" && "text-brand-secondary",
                    props.textClassName,
                )}
            >
                {text}
            </span>
        </li>
    );
};

const CTAScreenMockup01 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
                <div className="flex w-full max-w-3xl flex-col">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">Join 4,000+ startups growing with Untitled</h1>
                    <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                        {["30-day free trial", "Personalized onboarding", "Access to all features"].map((feat) => (
                            <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                        ))}
                    </ul>
                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="relative mx-auto w-full lg:h-128">
                    <div className="top-0 left-0 w-full max-w-5xl rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px] lg:absolute lg:w-max">
                        <div className="rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                            <div className="relative overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[20.21px] md:ring-[1.68px]">
                                {/* Light mode image (hidden in dark mode) */}
                                <img
                                    alt="Dashboard mockup showing application interface"
                                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                    className="object-cover object-left-top dark:hidden"
                                />
                                {/* Dark mode image (hidden in light mode) */}
                                <img
                                    alt="Dashboard mockup showing application interface"
                                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                    className="object-cover object-left-top not-dark:hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge16 = () => {
    return (
        <footer className="bg-secondary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 md:items-center">
                    <UntitledLogo className="h-8 w-min shrink-0" />
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
                <div className="relative mt-12 flex flex-col justify-between gap-8 pt-8 md:mt-16 md:flex-row md:items-center">
                    <div className="absolute top-0 left-0 h-px w-full bg-border-secondary"></div>
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
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const FAQPage09 = () => {
    return (
        <div className="bg-primary">
            <Header className="bg-secondary" />

            <HeaderCenteredSearch />

            <FAQSimple01 />

            <SectionDivider />

            <CTAScreenMockup01 />

            <SectionDivider />

            <FooterLarge16 />
        </div>
    );
};

export default FAQPage09;
