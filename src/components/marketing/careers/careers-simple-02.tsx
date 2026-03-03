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

export const CareersSimple02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto grid max-w-3xl grid-cols-1 gap-12 md:gap-16 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Join our team</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-8">
                        {jobs.map((job) => (
                            <li key={job.title}>
                                <JobCardSimple {...job} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
