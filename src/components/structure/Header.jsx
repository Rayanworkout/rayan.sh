// Resume
import Resume from "../../resume.json";

// Components
import Navbar from "../elements/Navbar";
import Slider from "../elements/Slider";

const copyToClipboard = () => {
    navigator.clipboard.writeText(Resume.basics.email)
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
};

export default function Header() {

    const technologies = [
        { name: "git", left: "14%", top: "87%" },
        { name: "linux", left: "65%", top: "34%" },
        { name: "docker", left: "26%", top: "35%" },
        { name: "javascript", left: "2%", top: "38%" },
        { name: "rust", left: "88%", top: "63%" },
        { name: "python", left: "79%", top: "21%" },
        { name: "bash", left: "37%", top: "82%" },
        { name: "django", left: "67%", top: "82%" },
        { name: "vuejs", left: "20%", top: "16%" },
        { name: "react", left: "50%", top: "86%" },
        { name: "fastapi", left: "50%", top: "7%" },
    ];



    return (
        <section className="bg-blue lg:h-screen relative overflow-hidden">
            <Navbar />

            {/* Icons in Background */}
            <div className="absolute inset-0 flex items-center justify-center bg-icons">
                {technologies && technologies.map((tech, index) => (
                    <div key={index} className="absolute"
                        style={{
                            left: tech.left,
                            top: tech.top,
                        }}
                    >
                        <img src={`/images/skills/${tech.name}.svg`} alt={tech.name} className="w-[100px] h-auto" />
                    </div>
                ))}

            </div>

            {/* Content */}
            <div className="header-container my-10 flex justify-center relative z-10">
                <div className="text-white text-center">
                    <p className="lg:mb-4 sm:mb-2 mt-5">Welcome to my website, I'm a</p>
                    <h1 className="font-bold text-white text-2xl md:text-4xl mb-4">
                        {Resume.basics.label.replace(',', ' / ')}
                    </h1>
                    <a href="https://github.com/Rayanworkout" target="_blank" className="text-white text-5xl"><i className="bi bi-github"></i></a>
                </div>
            </div>

            {/* About Section */}
            <div className="lg:w-4/5 p-5 mx-auto relative z-10">
                <div className="lg:text-xl text-white" dangerouslySetInnerHTML={{ __html: Resume.basics.summary }}></div>
            </div>

            {/* Slider */}
            <Slider />
        </section>
    );

}
