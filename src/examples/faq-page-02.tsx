"use client";

import { CreditCardRefresh, File05, Heart, Mail01, SearchLg, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { StarIcon } from "@/components/foundations/rating-stars";
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
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Ask us anything</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Need something cleared up? Here are our most frequently asked questions.</p>

                    <div className="mt-8 w-full sm:mt-12 sm:w-80">
                        <Input size="md" type="search" aria-label="Search" placeholder="Search" icon={SearchLg} wrapperClassName="sm:py-0.5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQSimple02 = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div>
                    <dl className="grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {faqs.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col">
                                    <FeaturedIcon color="gray" theme="modern" className="md:hidden" size="md" icon={item.icon} />
                                    <FeaturedIcon color="gray" theme="modern" className="hidden md:flex" size="lg" icon={item.icon} />

                                    <dt className="mt-4 text-lg font-semibold text-primary md:mt-5 md:text-xl">{item.question}</dt>
                                    <dd className="mt-1 text-md text-tertiary md:mt-2">{item.answer}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-secondary px-5 py-8 md:mt-16 md:flex-row md:gap-8 md:p-8">
                    <div className="w-full max-w-3xl">
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="xl">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

const TeamSectionImageCollage02 = () => {
    return (
        <section className="bg-primary py-16 lg:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 gap-16 overflow-hidden px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="flex max-w-3xl flex-col items-start">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Get to know us</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We're just getting started</h2>
                    <div className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        <p>
                            Untitled is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team
                            all around the world.
                        </p>

                        <p className="mt-5">
                            Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do you best work. Read
                            more about
                        </p>
                    </div>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl">
                            Read our principles
                        </Button>
                        <Button size="xl">We're hiring!</Button>
                    </div>
                </div>

                <div className="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 justify-self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4">
                    <img
                        src="https://www.untitledui.com/images/portraits/megan-sims"
                        className="size-full object-cover"
                        alt="Megan Sims"
                        style={{ gridArea: "7 / 5 / 13 / 9" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/portraits/nic-davidson"
                        className="size-full object-cover"
                        alt="Nic Davidson"
                        style={{ gridArea: "1 / 7 / 7 / 11" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Amelie Laurent"
                        style={{ gridArea: "3 / 3 / 7 / 7" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Lily-Rose Chedjou"
                        style={{ gridArea: "7 / 9 / 11 / 13" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/levi-rocha?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Levi Rocha"
                        style={{ gridArea: "7 / 1 / 12 / 5" }}
                    />
                </div>
            </div>
        </section>
    );
};

const NewsletterCTASimpleCentered = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Sign up for our newsletter</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Be the first to know about releases and industry news and insights.</p>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[360px_max-content] sm:gap-0 sm:self-center"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            wrapperClassName="py-0.5 md:max-w-[345px]"
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
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

const reviews = [
    {
        id: "review-01",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: { name: "Sienna Hewitt", username: "@siennahewitt", imageUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80" },
    },
    {
        id: "review-02",
        quote: "From concept to completion, Untitled helps us deliver outstanding designs faster than ever.",
        author: { name: "Kari Rasmussen", username: "@itskari", imageUrl: "https://www.untitledui.com/images/avatars/kari-rasmussen?fm=webp&q=80" },
    },
    {
        id: "review-03",
        quote: "Every project starts with Untitled which has 10x'd our output. It saves us time while keeping the quality top-notch.",
        author: { name: "Amélie Laurent", username: "@alaurent_", imageUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80" },
    },
    {
        id: "review-04",
        quote: "Untitled has quickly become our go-to resource for every design project. The results are consistently amazing.",
        author: { name: "Aliah Lane", username: "@aliah_ux", imageUrl: "https://www.untitledui.com/images/avatars/aliah-lane?fm=webp&q=80" },
    },
    {
        id: "review-05",
        quote: "Untitled offers exactly what we need to get started quickly. It's helped us cut down on design time significantly!",
        author: { name: "Eduard Franz", username: "@eduardfranz", imageUrl: "https://www.untitledui.com/images/avatars/eduard-franz?fm=webp&q=80" },
    },
    {
        id: "review-06",
        quote: "Untitled offers everything we need to get started on UI projects quickly. We go from zero to one, insanely fast.",
        author: { name: "Lily-Rose Chedjou", username: "@lilyrose", imageUrl: "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80" },
    },
];

const TestimonialSocialCards02 = () => {
    return (
        <div className="flex flex-col items-center gap-16 bg-primary py-16 lg:py-24">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h1 className="text-display-sm font-semibold text-primary lg:text-display-md">Wall of love</h1>
                <p className="text-lg text-tertiary lg:text-xl">Hear first-hand from our incredible community of customers.</p>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 px-4 lg:grid-cols-3 lg:gap-6 lg:px-8">
                {reviews.map((review) => (
                    <div key={review.id} className="flex flex-col items-start gap-8 rounded-xl bg-secondary p-6 lg:justify-between lg:p-8">
                        <div className="flex flex-col items-start gap-4">
                            <div aria-hidden="true" className="flex gap-1">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <blockquote className="text-md font-medium text-primary">{review.quote}</blockquote>
                        </div>
                        <a href="#" className="group flex outline-hidden">
                            <AvatarLabelGroup
                                size="lg"
                                src={review.author.imageUrl}
                                alt={review.author.name}
                                title={
                                    <span className="relative flex items-center gap-1">
                                        {review.author.name}
                                        <VerifiedTick size="lg" />
                                    </span>
                                }
                                subtitle={<span className="underline decoration-1 underline-offset-4">{review.author.username}</span>}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FooterLarge05 = () => {
    return (
        <footer className="dark-mode bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between gap-8 border-secondary md:flex-row md:border-b md:pb-16">
                    <div className="flex flex-col gap-2">
                        <p id="newsletter-label" className="text-lg font-semibold text-primary md:text-xl">
                            Join our newsletter
                        </p>
                        <p id="newsletter-hint" className="text-md text-tertiary">
                            We'll send you a nice letter once per week. No spam.
                        </p>
                    </div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="w-full sm:w-100"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Input
                                isRequired
                                aria-labelledby="newsletter-label"
                                aria-describedby="newsletter-hint"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                size="md"
                                wrapperClassName="flex-1"
                            />
                            <Button type="submit" size="lg">
                                Subscribe
                            </Button>
                        </div>
                    </Form>
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

const FAQPage02 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderCenteredSearch />

            <FAQSimple02 />

            <TeamSectionImageCollage02 />

            <NewsletterCTASimpleCentered />

            <TestimonialSocialCards02 />

            <FooterLarge05 />
        </div>
    );
};

export default FAQPage02;
