import ScrollTopButton from "./ScrollTopButton";
import StratosLogo from "./stratos-logo.png";
import WherobotsLogo from "./wherobots-logo.png";
import Image from "next/image";
import React from "react";

type ProjectInfo = {
    role: string;
    logo: React.ReactNode;
    description: string;
    button: React.ReactNode;
};
const projects: ProjectInfo[] = [
    {
        role: "I work here",
        logo: <Image src={WherobotsLogo} alt="Wherobots Logo" height={40} />,
        description:
            "The spatial data analytics and AI platform trusted in production, at scale, from the original creators of Apache Sedona.",
        button: (
            <a href="https://wherobots.com">
                <button
                    className="rounded-md inline px-5 py-4 uppercase text-white bg-gradient-to-l from-[#9e78f0] to-[#0957c3] hover:from-[#1b1b1b] hover:to-[#1b1b1b] border-2 hover:border-[#9e78f0] border-[#141414]"
                    style={{
                        textDecoration: "none",
                        letterSpacing: "-.16px",
                        fontFamily: '"Space Grotesk",sans-serif',
                    }}
                >
                    Learn More
                </button>
            </a>
        ),
    },
    {
        role: "I founded this",
        logo: <Image src={StratosLogo} alt="Stratos Logo" height={40} />,
        description:
            "The spatial data analytics and AI platform trusted in production, at scale, from the original creators of Apache Sedona.",
        button: (
            <a href="https://stratos.host">
                <button
                    className="rounded-md inline bg-[#2D1B1B] text-white border-double border-4 border-transparent transition-all bg-origin-border w-[181px] h-[3.5rem] hover:border-[6px]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgb(27, 29, 30), rgb(27, 29, 30)), radial-gradient(circle at left top, rgb(200, 133, 2), rgb(126, 0, 204))",
                        backgroundClip: "content-box,border-box",
                    }}
                >
                    Learn More
                </button>
            </a>
        ),
    },
];

function Project({ role, logo, description, button }: ProjectInfo) {
    return (
        <div className="p-6 flex flex-col gap-4 border-4 border-black bg-[#EAEADF]">
            <h2 className="uppercase text-sm font-bold">{role}</h2>
            <div>{logo}</div>
            <p>{description}</p>
            <div>{button}</div>
        </div>
    );
}
export default function Home() {
    return (
        <main className="flex-1 flex flex-col gap-5 lg:justify-center z-10 pt-20 pb-10 lg:py-0">
            <div className="w-full lg:w-auto">
                <div className="inline-flex gap-3 border-4 border-black p-2 flex-wrap bg-[#EAEADF] w-full md:w-auto">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl md:whitespace-nowrap">
                        Clay McGinnis
                    </h1>
                    <p className="md:text-lg max-w-[400px]">
                        I’m a <strong>software developer and maker</strong> with
                        a passion for user experience
                    </p>
                </div>
            </div>
            <ul className="flex gap-5 flex-wrap pb-10 lg:pb-0">
                {projects.map((project) => (
                    <li
                        key={project.role}
                        className="flex-1 min-w-full md:min-w-[400px]"
                    >
                        <Project {...project} />
                    </li>
                ))}
            </ul>
            <ScrollTopButton />
        </main>
    );
}
