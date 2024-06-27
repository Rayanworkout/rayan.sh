
export default function SkillCard({ skill }) {
    return (
        <div className="skill-card max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4 border border-gray-300">
            <div className="flex items-center">
                <div className="w-1/3 flex justify-center">
                    <img src={`/images/skills/${skill.logo}.svg`} alt={skill.logo} className="h-16 w-16 object-contain" />
                </div>
                <div className="w-2/3 pl-4">
                    <div className="font-bold text-md mb-2">{skill.name}</div>
                    {skill.description && skill.description.map((desc, index) => (
                     <li key={index} className="text-gray-700 text-sm mb-2">{desc}</li>
                    ))}
                </div>
            </div>
        </div>
    );
};
