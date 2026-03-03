"use client";

import { MarkerPin02 } from "@untitledui/icons";
import { Select } from "@/components/base/select/select";
import { JobCard01, type JobCard01Props } from "@/components/marketing/careers/base-components/job-card";

const jobs: JobCard01Props[] = [
    {
        title: "Product Designer",
        department: "Design",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "blue",
        badgeText: "Design",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Engineering Manager",
        department: "Software Development",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "pink",
        badgeText: "Software",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Customer Success Manager",
        department: "Customer Success",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "success",
        badgeText: "CX",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Account Executive",
        department: "Sales",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "indigo",
        badgeText: "Sales",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "SEO Marketing Manager",
        department: "Marketing",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "orange",
        badgeText: "Marketing",
        location: "Remote",
        type: "Full-time",
    },
];

const locations = [
    {
        id: "worldwide",
        label: "Worldwide",
        icon: MarkerPin02,
    },
    {
        id: "europe",
        label: "Europe",
        icon: MarkerPin02,
    },
    {
        id: "north-america",
        label: "North America",
        icon: MarkerPin02,
    },
    {
        id: "asia",
        label: "Asia",
        icon: MarkerPin02,
    },
    {
        id: "oceania",
        label: "Oceania",
        icon: MarkerPin02,
        disabled: true,
    },
];

export const CareersCard02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
                    <div className="flex max-w-3xl flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Join our team</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 md:gap-6">
                        <div>
                            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_240px] md:self-end">
                                <p className="hidden text-right text-md font-medium whitespace-nowrap text-tertiary md:block">Filter by location</p>
                                <Select
                                    aria-label="Filter by location"
                                    size="md"
                                    placeholderIcon={MarkerPin02}
                                    defaultSelectedKey="Worldwide"
                                    items={locations}
                                >
                                    {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                                </Select>
                            </div>
                        </div>

                        <ul className="flex flex-col gap-4 md:gap-6">
                            {jobs.map((job) => (
                                <li key={job.title}>
                                    <JobCard01 {...job} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
