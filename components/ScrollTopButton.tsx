export default function ScrollTopButton() {
    return (
        <a
            className="flex flex-col justify-center items-center md:hidden"
            href="#"
        >
            {/* Arrow pointing up */}
            <span className="text-center">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 15l7-7 7 7"
                    ></path>
                </svg>
            </span>
            <span className="text-center">Back to top</span>
        </a>
    );
}
