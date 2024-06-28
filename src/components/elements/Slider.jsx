

export default function Slider() {
    const technologies = [
        // Programming Languages
        "python",
        "rust",
        "javascript",
        "bash",

        // DevOps/CI/CD Tools
        "git",
        "jenkins",
        "linux",
        "docker",
        "github-actions",
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

    return (<>
        <div class="slider-container">
            <div class="scroll-wrapper">
                {technologies && technologies.map((tech, index) => (
                    <div key={index} class="svg-container">
                        <img src={`/images/skills/${tech}.svg`} alt={tech} class="svg-icon" />
                    </div>
                ))}
            </div>
        </div>
    </>)



}