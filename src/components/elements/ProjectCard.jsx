
export default function ProjectCard({ project }) {


    return (
        <div className="rounded shadow-lg">
            <img className="w-full" src={`/images/projects/${project.image}.jpg`} alt={project.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.name}</div>
                <p className="text-gray-700 text-base">
                    {project.description}
                </p>
                <p>
                    {project.keywords.map((keyword, idx) => (
                        <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                            {keyword}
                        </span>
                    ))}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href={project.link} target="_blank" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Direct Link
                </a>
                <a href={project.githubLink} target="_blank" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded">
                    Source Code & Docs
                </a>


            </div>
        </div>
    );
}