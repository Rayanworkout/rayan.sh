
export default function ProjectCard({ project }) {
    return (
        <div className="rounded shadow-lg">
            <img className="w-full" src={project.image} alt={project.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">
                    {project.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href={project.link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Project
                </a>
            </div>
        </div>
    );
}