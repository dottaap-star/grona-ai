"use client";

import { useRef, useState } from "react";
import {
    Button as AriaButton,
    Dialog as AriaDialog,
    DialogTrigger as AriaDialogTrigger,
    Popover as AriaPopover,
} from "react-aria-components";
import { ChevronDown } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { GronaLogo } from "@/components/foundations/logo/grona-logo";
import { cx } from "@/utils/cx";
import { headerNav, isDropdown, type HeaderDropdown } from "@/lib/navigation";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

const APP = "https://app.grona.ai";

// ─── Desktop Dropdown ─────────────────────────────────────────────

const DesktopDropdown = ({ item }: { item: HeaderDropdown }) => {
    const [open, setOpen] = useState(false);
    const timeout = useRef<ReturnType<typeof setTimeout>>(null);

    const show = () => {
        if (timeout.current) clearTimeout(timeout.current);
        setOpen(true);
    };
    const hide = () => {
        timeout.current = setTimeout(() => setOpen(false), 150);
    };

    return (
        <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
            <button
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-tertiary transition-colors hover:text-primary"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                {item.label}
                <ChevronDown className={cx("size-4 transition-transform", open && "rotate-180")} />
            </button>

            {open && (
                <div className="absolute top-full left-0 z-50 pt-2">
                    <nav className="w-max rounded-2xl bg-primary p-2 shadow-lg ring-1 ring-secondary_alt">
                        <div className={cx("grid gap-px", item.groups.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
                            {item.groups.map((group) => (
                                <div key={group.label}>
                                    <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-quaternary">
                                        {group.label}
                                    </p>
                                    <ul className="flex flex-col gap-0.5">
                                        {group.items.map((link) => (
                                            <li key={link.href}>
                                                <NavMenuItemLink
                                                    href={link.href}
                                                    icon={link.icon}
                                                    title={link.label}
                                                    subtitle={link.description}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
};

// ─── Mobile Menu ──────────────────────────────────────────────────

const MobileMenuDropdown = ({ item }: { item: HeaderDropdown }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                type="button"
                className="flex w-full items-center justify-between py-2 text-md font-semibold text-tertiary"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                {item.label}
                <ChevronDown className={cx("size-4 transition-transform", open && "rotate-180")} />
            </button>
            {open && (
                <div className="flex flex-col gap-1 pb-2 pl-2">
                    {item.groups.map((group) => (
                        <div key={group.label}>
                            <p className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-quaternary">
                                {group.label}
                            </p>
                            {group.items.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block rounded-lg px-2 py-2 text-sm font-medium text-secondary hover:bg-primary_hover"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const MobileMenu = () => (
    <div className="flex flex-col gap-1 px-4 py-6">
        {headerNav.map((item) =>
            isDropdown(item) ? (
                <MobileMenuDropdown key={item.label} item={item} />
            ) : (
                <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-md font-semibold text-tertiary"
                >
                    {item.label}
                </a>
            ),
        )}
        <div className="my-2 h-px bg-secondary" />
        <Button color="link-gray" size="lg" href={`${APP}/login`}>
            Log in
        </Button>
        <Button color="primary" size="lg" href={`${APP}/signup`}>
            Start Free
        </Button>
    </div>
);

// ─── Header ───────────────────────────────────────────────────────

interface HeaderProps {
    isFloating?: boolean;
    className?: string;
}

export const HeaderWithNavigation = ({ isFloating, className }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <header
            ref={headerRef}
            className={cx(
                "sticky top-0 z-50 flex h-18 w-full items-center justify-center md:h-20",
                isFloating && "h-16 md:h-19 md:pt-4",
                "max-md:has-aria-expanded:bg-primary",
                className,
            )}
        >
            <div className="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
                <div
                    className={cx(
                        "flex w-full items-center justify-between gap-4 transition-shadow duration-300",
                        isFloating &&
                            "bg-primary/80 ring-secondary_alt backdrop-blur-lg backdrop-saturate-150 md:rounded-2xl md:bg-primary md:py-3 md:pr-3 md:pl-4 md:shadow-lg md:ring-1 md:hover:shadow-xl",
                    )}
                >
                    <div className="flex items-center gap-8">
                        <a
                            aria-label="Go to homepage"
                            href="/"
                            className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <GronaLogo />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center gap-6 md:flex">
                            {headerNav.map((item) =>
                                isDropdown(item) ? (
                                    <DesktopDropdown key={item.label} item={item} />
                                ) : (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="text-sm font-semibold text-tertiary transition-colors hover:text-primary"
                                    >
                                        {item.label}
                                    </a>
                                ),
                            )}
                        </nav>
                    </div>

                    {/* Desktop buttons */}
                    <div className={cx("flex items-center max-md:hidden", isFloating ? "gap-3" : "gap-3")}>
                        <Button color="link-gray" size={isFloating ? "md" : "lg"} href={`${APP}/login`}>
                            Log in
                        </Button>
                        <Button color="primary" size={isFloating ? "md" : "lg"} href={`${APP}/signup`}>
                            Start Free
                        </Button>
                    </div>

                    {/* Mobile menu trigger */}
                    <AriaDialogTrigger>
                        <AriaButton
                            aria-label="Toggle navigation menu"
                            className={({ isFocusVisible, isHovered }) =>
                                cx(
                                    "group ml-auto cursor-pointer rounded-lg p-2 md:hidden",
                                    isHovered && "bg-primary_hover",
                                    isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                )
                            }
                        >
                            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    className="hidden text-secondary group-aria-expanded:block"
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="text-secondary group-aria-expanded:hidden"
                                    d="M3 12H21M3 6H21M3 18H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </AriaButton>
                        <AriaPopover
                            triggerRef={headerRef}
                            className="h-calc(100%-72px) scrollbar-hide w-full overflow-y-auto shadow-lg md:hidden"
                            offset={0}
                            crossOffset={20}
                            containerPadding={0}
                            placement="bottom left"
                        >
                            <AriaDialog className="outline-hidden">
                                <div className="w-full bg-primary shadow-lg">
                                    <MobileMenu />
                                </div>
                            </AriaDialog>
                        </AriaPopover>
                    </AriaDialogTrigger>
                </div>
            </div>
        </header>
    );
};
