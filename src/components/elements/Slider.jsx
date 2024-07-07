

export default function Slider() {
    const technologies = [

        // DevOps/CI/CD Tools
        "git",
        "jenkins",
        "linux",
        "docker",

        // Programming Languages
        "python",
        "rust",
        "javascript",
        "bash",

        // DevOps/CI/CD Tools
        // "github-actions",
        "apache",
        "ansible",

        // Databases
        "mongodb",
        "postgresql",

        // Frameworks/Libraries
        "django",
        "vuejs",
        "react",
        "fastapi",
    ];

    return (
        <div className="slider-container">
            <div className="scroll-wrapper">
                {technologies && technologies.map((tech, index) => (
                    <div key={index} className="svg-container">
                        <img src={`/images/skills/${tech}.svg`} alt={tech} className="svg-icon" />
                    </div>
                ))}
            </div>
        </div>
    )



}