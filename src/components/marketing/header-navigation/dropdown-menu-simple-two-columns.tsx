"use client";

import { BookClosed, BookOpen01, Codepen, Cube01, FileCode01, LayersThree01, LifeBuoy01, PlayCircle, Signal01, Stars02 } from "@untitledui/icons";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

const menuItemsSimpleTwoColumns = [
    {
        title: "Blog",
        shortSubtitle: "The latest industry news.",
        subtitle: "The latest industry new and guides curated by our expert team.",
        href: "/blog",
        Icon: BookClosed,
    },
    {
        title: "Customer stories",
        shortSubtitle: "Learn how our customers.",
        subtitle: "Learn how our customers are using Untitled UI to 10x their growth.",
        href: "/customer-stories",
        Icon: Stars02,
    },
    {
        title: "Video tutorials",
        shortSubtitle: "New features and techniques.",
        subtitle: "Get up and running on our newest features and in-depth guides.",
        href: "/tutorials",
        Icon: PlayCircle,
    },
    {
        title: "Documentation",
        shortSubtitle: "All the boring stuff.",
        subtitle: "In-depth articles on our tools and technologies to empower teams.",
        href: "/docs",
        Icon: FileCode01,
    },
    {
        title: "Help and Support",
        subtitle: "Need help with something? Our expert team is here to help 24/7.",
        href: "/help",
        Icon: LifeBuoy01,
    },
    {
        title: "API reference",
        subtitle: "In-depth reference doc and helpful guides for our dashboard API.",
        href: "/api",
        Icon: Codepen,
    },
    {
        title: "Setup 101",
        subtitle: "Get up and running as fast as possible with our 101 guide.",
        href: "/setup",
        Icon: Cube01,
    },
    {
        title: "Podcast",
        subtitle: "Interviews and discussion about the industry and the latest tech.",
        href: "/podcast",
        Icon: Signal01,
    },
    {
        title: "University",
        subtitle: "Master your craft with our free video courses and in-depth articles.",
        href: "/university",
        Icon: BookOpen01,
    },
    {
        title: "Changelog",
        subtitle: "Check out the latest updates and releases from our team.",
        href: "/changelog",
        Icon: LayersThree01,
    },
];

export const DropdownMenuSimpleTwoColumns = () => {
    return (
        <nav className="px-3 pb-2 md:max-w-160 md:p-0">
            <ul className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-secondary_alt md:grid-cols-2 md:p-2 md:shadow-lg">
                {menuItemsSimpleTwoColumns.map(({ title, subtitle, href, Icon }) => (
                    <li key={title + href}>
                        <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};
