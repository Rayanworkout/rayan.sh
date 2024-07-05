import Resume from "../../resume.json";
import { useState } from "react";


const NavLink = ({ link, href }) => {
    return (
        <>
            <a href={`#${href}`} className="text-white text-xl flex justify-center items-center hover:border-b-2 text-nowrap">{link}</a>
        </>
    )
}


const NavLinks = () => {
    return (
        <>
            <NavLink link={"About Me"} href={"about"} />
            <NavLink link={"Skills"} href={"skills"} />
            <NavLink link={"Projects"} href={"projects"} />
            <NavLink link={"Articles"} href={"articles"} />
            <a href="https://github.com/Rayanworkout" target="_blank" className="text-white github-logo"><i className="bi bi-github"></i></a>
        </>
    )
};

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <header className="top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between p-8">
            <div>
                <a href="/" className="text-white text-2xl font-bold">{Resume.basics.name}</a>
            </div>
            <nav className="w-1/3">
                <div className="hidden justify-between md:flex gap-6">
                    <NavLinks />
                </div>
                <div className="md:hidden text-end">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none z-10"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col items-end mt-10 md:hidden gap-5 absolute top-10 right-9">
                    <NavLinks />
                </div>
            )}
        </header>
    )
}