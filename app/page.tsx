import BlueShape from "./BlueShape.svg";
import OrangeShape from "./OrangeShape.svg";
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
            <button className="bg-blue-600 border-black border-2 rounded-md inline px-5 py-4 uppercase text-white">
                Learn More
            </button>
        ),
    },
    {
        role: "I founded this",
        logo: <Image src={StratosLogo} alt="Stratos Logo" height={40} />,
        description:
            "The spatial data analytics and AI platform trusted in production, at scale, from the original creators of Apache Sedona.",
        button: (
            <button className="border-4 border-[#C88502] rounded-lg inline bg-[#2D1B1B] px-5 py-4 text-white">
                Learn More
            </button>
        ),
    },
];

function Project({ role, logo, description, button }: ProjectInfo) {
    return (
        <div className="p-6 flex flex-col gap-2 border-4 border-black bg-[#EAEADF]">
            <h2 className="uppercase">{role}</h2>
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
                <div className="inline-flex gap-3 border-4 border-black p-2 flex-wrap bg-[#EAEADF] w-full lg:w-auto">
                    <h1 className="text-4xl lg:text-6xl whitespace-nowrap">
                        Clay McGinnis
                    </h1>
                    <p className="text-lg min-w-[200px] max-w-[400px]">
                        I’m a <strong>software developer and maker</strong> with
                        a passion for user experience
                    </p>
                </div>
            </div>
            <ul className="flex gap-5 flex-wrap pb-10 lg:pb-0">
                {projects.map((project) => (
                    <li
                        key={project.description}
                        className="flex-1 min-w-[300px]"
                    >
                        <Project {...project} />
                    </li>
                ))}
            </ul>
            <ScrollTopButton />
            {/* <Image
                src={BlueShape}
                alt="Blue Shape"
                className="absolute -z-40 -left-8 pointer-events-none"
            />
            <Image
                src={OrangeShape}
                alt="Orange Shape"
                className="absolute -z-50 left-96 top-60 pointer-events-none"
            />
            <Image
                src={OrangeShape}
                alt="Orange Shape"
                className="absolute -z-30 opacity-60 left-96 top-60 pointer-events-none"
            /> */}
        </main>
    );
}
