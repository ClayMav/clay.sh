"use client";

import Image from "next/image";
import React from "react";

const navigation = [
    {
        name: "Resume",
        href: "https://github.com/ClayMav/resume/blob/main/resume.pdf",
    },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/claymav/" },
    { name: "Github", href: "https://github.com/ClayMav" },
] as const;

export default function TopNavigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    return (
        <header>
            <nav className="flex flex-row items-center justify-between">
                <div className="flex">
                    <div className="mr-8">
                        <a href="/">
                            <Image
                                src="/clay-logo.svg"
                                alt="Clay Logo"
                                height={42}
                                width={42}
                                className="min-w-[42px] min-h-[42px]"
                            />
                        </a>
                    </div>
                    <div className="hidden md:flex flex-row items-center gap-4">
                        {navigation.map((item) => (
                            <a
                                href={item.href}
                                key={item.name}
                                className="text-black hover:underline uppercase"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            <div
                className={mobileMenuOpen ? "block" : "hidden"}
                role="dialog"
                aria-modal="true"
            >
                {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                <div className="fixed inset-0 z-10"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/">
                            <Image
                                src="/clay-logo.svg"
                                alt="Clay Logo"
                                height={42}
                                width={42}
                                className="min-w-[42px] min-h-[42px]"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        href={item.href}
                                        key={item.name}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
