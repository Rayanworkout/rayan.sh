

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
            <div className="scroll-wrapper flex my-4 gap-5">
                {technologies && technologies.map((tech, index) => (
                    <div key={index}>
                        <img src={`/images/skills/${tech}.svg`} alt={tech} className="m-10" width={100} />
                    </div>
                ))}
            </div>
        </div>
    )



}