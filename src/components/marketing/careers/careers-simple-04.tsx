import { JobCardSimple, type JobCardSimpleProps } from "@/components/marketing/careers/base-components/job-card";

const jobs: JobCardSimpleProps[] = [
    {
        title: "Product Designer",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "blue",
        badgeText: "Design",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Engineering Manager",
        description: "We're looking for an experienced engineering manager to join our team.",
        href: "#",
        badgeColor: "pink",
        badgeText: "Software Development",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Customer Success Manager",
        description: "We're looking for a customer success manager to join our team.",
        href: "#",
        badgeColor: "success",
        badgeText: "Careers",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Account Executive",
        description: "We're looking for an account executive to join our team.",
        href: "#",
        badgeColor: "indigo",
        badgeText: "Sales",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "SEO Marketing Manager",
        description: "We're looking for an experienced SEO marketing manager to join our team.",
        href: "#",
        badgeColor: "orange",
        badgeText: "Marketing",
        location: "Remote",
        type: "Full-time",
    },
];

export const CareersSimple04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-3xl flex-col lg:mx-0">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Start doing work that matters</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16">
                    <ul className="flex w-full max-w-3xl flex-col gap-8 justify-self-center lg:max-w-none lg:py-6">
                        {jobs.slice(0, -1).map((job) => (
                            <li key={job.title}>
                                <JobCardSimple {...job} />
                            </li>
                        ))}
                    </ul>
                    <div className="h-60 md:h-110 md:flex-1 lg:relative lg:h-full">
                        <img
                            src="https://www.untitledui.com/marketing/woman-and-laptop.webp"
                            alt="Woman and laptop"
                            className="size-full object-cover lg:absolute lg:inset-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
