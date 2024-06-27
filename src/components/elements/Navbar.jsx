import Resume from "../../resume.json";

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div>
                    <a href="/" className="text-white text-2xl font-bold basic-name">{Resume.basics.name}</a>
                </div>
                <div className="flex items-center justify-between">
                    <a href="#about" className="text-white font-bold nav-link">About Me</a>
                    <a href="#skills" className="text-white px-8 font-bold nav-link">Skills</a>
                    <a href="/contact" className="text-white font-bold nav-link last-nav-link">Articles</a>
                    <a href="https://github.com/Rayanworkout" target="_blank" className="text-white font-bold github-logo"><i className="bi bi-github"></i></a>

                </div>
            </nav>
        </header>
    )
}



