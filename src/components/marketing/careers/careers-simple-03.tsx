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

export const CareersSimple03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-3xl flex-col lg:mx-0">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Open positions</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We're looking for talented people</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We're a 100% remote team spread all across the world. Join us!</p>
                </div>
                <div className="mt-12 md:mt-16">
                    <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-x-16 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-12">
                        {jobs.map((job) => (
                            <li key={job.title}>
                                <JobCardSimple {...job} />
                            </li>
                        ))}
                        <li>
                            <JobCardSimple
                                {...{
                                    title: "UX Researcher",
                                    description: "We're looking for a senior user researcher to join our team.",
                                    department: "Design",
                                    href: "#",
                                    badgeColor: "blue",
                                    badgeText: "Design",
                                    location: "Remote",
                                    type: "Full-time",
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
