// Resume
import Resume from "../../resume.json";

// Components
import Navbar from "../elements/Navbar";
import Slider from "../elements/Slider";

export default function Header() {


    return (
        <section className="bg-blue lg:h-screen relative overflow-hidden">
            <Navbar />

            {/* Icons in Background */}
            <div className="absolute inset-0 flex items-center justify-center bg-icons">
                {Resume.skills_logos && Resume.skills_logos.map((tech, index) => (
                    <div key={index} className="absolute bg-icon"
                        style={{
                            left: tech.left,
                            top: tech.top,
                        }}
                    >
                        <img src={`/images/skills/${tech.name}.svg`} alt={tech.name} className="h-auto" width={tech.size} />
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
                    <a href="https://github.com/Rayanworkout" target="_blank" className="text-white github-logo"><img src="/images/github.svg" alt="github logo" className="w-12 mx-auto" /></a>
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
