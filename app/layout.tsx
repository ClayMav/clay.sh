import TopNavigation from "./TopNavigation";
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Clay McGinnis",
    description: "The portfolio of Clay McGinnis",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="min-h-screen h-full overflow-x-hidden max-w-screen w-screen"
        >
            <body className="bg-[#EAEADF] w-full min-h-full font-sans p-10 z-0 flex flex-col">
                <TopNavigation />
                {children}
            </body>
        </html>
    );
}
