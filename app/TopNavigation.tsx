import ClayLogo from "./clay-logo.svg";
import Image from "next/image";

const navigation = [
    {
        name: "Resume",
        href: "https://github.com/ClayMav/resume/blob/main/resume.pdf",
    },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/claymav/" },
    { name: "Github", href: "https://github.com/ClayMav" },
] as const;

export default function TopNavigation() {
    return (
        <nav className="flex flex-row justify-between items-center">
            <ul className="flex flex-row justify-between items-center">
                <li className="text-2xl mr-4">
                    <Image
                        src={ClayLogo}
                        alt="Clay Logo"
                        height={42}
                        width={42}
                    />
                </li>
                {navigation.map((item) => (
                    <li key={item.name} className="ml-4">
                        <a
                            href={item.href}
                            className="text-black hover:underline uppercase"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
