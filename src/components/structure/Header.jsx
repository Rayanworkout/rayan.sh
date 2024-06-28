// Resume
import Resume from "../../resume.json";

// Components
import Hero from "../elements/Hero";
import Navbar from "../elements/Navbar";

const copyToClipboard = () => {
    navigator.clipboard.writeText(Resume.basics.email)
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
};

export default function Header() {

    return (
        <section className="bg-image">
            <Navbar />
            <div className="hero">
                <Hero />
                <a href={`mailto:${Resume.basics.email}`} className="cta text-center" onClick={copyToClipboard}>Contact Me</a>
            </div>
        </section>

    )
}