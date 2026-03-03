"use client";

import { CheckCircle } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

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
        label: "Use cases",
        items: [
            { label: "Startups", href: "#" },
            { label: "Enterprise", href: "#" },
            { label: "Government", href: "#" },
            { label: "SaaS centre", href: "#" },
            { label: "Marketplaces", href: "#" },
            { label: "Ecommerce", href: "#" },
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

const HeaderCenteredEmail = () => {
    return (
        <section className="dark-mode bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Current as of 20 Jan 2025</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Terms and conditions</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that
                        you are responsible for compliance with any applicable local laws.
                    </p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 flex w-full flex-col gap-4 sm:mt-12 sm:max-w-120 sm:flex-row"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            wrapperClassName="py-0.5"
                            hint={
                                <span>
                                    We care about your data in our{" "}
                                    <a
                                        href="#"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </span>
                            }
                        />
                        <Button type="submit" size="xl">
                            Get started
                        </Button>
                    </Form>
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

const CTASplitImage01 = ({ className }: { className?: string }) => {
    return (
        <section className={cx("grid grid-cols-1 gap-y-12 bg-primary py-16 lg:grid-cols-2 lg:items-center lg:py-0", className)}>
            <div className="flex w-full lg:justify-end lg:py-24">
                <div className="flex max-w-3xl flex-col items-start px-4 md:px-8 lg:max-w-(--breakpoint-sm)">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">
                        Join 4,000+ startups growing with Untitled
                    </h2>

                    <ul className="mt-8 flex flex-col gap-4 md:gap-5 md:pl-4">
                        {["30-day free trial", "Personalized onboarding", "Access to all features"].map((feat) => (
                            <CheckItemText key={feat} size="md" iconStyle="contained" color="primary" text={feat} />
                        ))}
                    </ul>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>

            <div className="h-70 w-full md:h-95 lg:h-180">
                <img alt="Split Image" className="size-full object-cover px-4 md:px-8 lg:px-0" src="https://www.untitledui.com/marketing/split-image-01.webp" />
            </div>
        </section>
    );
};

const CTASplitImage03 = ({ className }: { className?: string }) => {
    return (
        <section className={cx("bg-primary", className)}>
            <div className="bg-secondary pt-16 pb-[112px] md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Get started</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Start your 30-day free trial</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                        <div className="mt-8 flex w-full flex-col-reverse gap-3 md:w-auto md:flex-row">
                            <Button color="secondary" size="xl">
                                Learn more
                            </Button>
                            <Button size="xl"> Get started</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto -mt-16 max-w-container px-4 pb-16 md:-mt-24 md:px-8 md:pb-24">
                <img src="https://www.untitledui.com/marketing/workspace-2.webp" alt="Workspace" className="h-70 w-full object-cover md:h-129" />
            </div>
        </section>
    );
};

const FooterLarge09 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Let's get started on something great</h2>
                    <p className="mt-2 text-md text-tertiary md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-12 md:flex-row md:self-center">
                        <Button color="secondary" size="xl">
                            Chat to us
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <nav className="mt-12 md:mt-16">
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {footerNavList.map((category) => (
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
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-8 w-min" />
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const LegalPage04 = () => {
    return (
        <div className="bg-primary">
            <Header className="dark-mode bg-primary" />

            <HeaderCenteredEmail />

            <ContentSectionRichText02 />

            <CTASplitImage03 className="max-lg:hidden" />
            <CTASplitImage01 className="lg:hidden" />

            <SectionDivider />

            <FooterLarge09 />
        </div>
    );
};

export default LegalPage04;
