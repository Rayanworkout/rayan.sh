import Resume from "../../resume.json";
import SkillCard from "../elements/SkillCard";



export default function Skills() {
    return (
        <div className="container mx-auto" id="skills" style={{ backgroundColor: "var(--background-color)" }}>
            <h2 className="text-4xl font-bold text-center pt-12">Skills</h2>
            <div className="flex flex-wrap justify-center">
                {Resume.skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    )
}