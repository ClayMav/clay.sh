import BlueShape from "./BlueShape.svg";
import OrangeShape from "./OrangeShape.svg";
import TopNavigation from "./TopNavigation";
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
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
            <body className="bg-[#EAEADF] w-full min-h-full h-full font-sans z-0">
                <div className="w-full min-h-full p-4 md:p-10 flex flex-col">
                    <TopNavigation />
                    {children}
                </div>
                <div className="absolute w-full pointer-events-none top-0 bottom-0 left-0 right overflow-x-hidden">
                    <Image
                        src={BlueShape}
                        alt="Blue Shape"
                        className="absolute min-w-[600px] w-[60%] -z-40 left-[2%] top-[2%] pointer-events-none"
                    />
                    <Image
                        src={OrangeShape}
                        alt="Orange Shape"
                        className="absolute min-w-[700px] w-[70%] -z-50 left-[30%]  md:right-[2%] top-[28%] pointer-events-none"
                    />
                    <Image
                        src={OrangeShape}
                        alt="Orange Shape"
                        className="absolute min-w-[700px] w-[70%] -z-30 opacity-60 left-[30%] md:right-[2%] top-[28%] pointer-events-none"
                    />
                </div>
            </body>
        </html>
    );
}
