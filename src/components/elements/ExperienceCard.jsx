
export default function ExperienceCard({ company, side }) {
    return (
        <div className={`exp-card exp-card-${side} flex flex-col items-center justify-center border border-gray-300 shadow-md rounded-xl p-4 hover:shadow-2xl ${side === "left" ? "ml-auto text-end" : "mr-auto text-start"}`}>
            <div className={`${side === "left" ? "ml-auto" : "mr-auto"}`}>{company.startDate}</div>
            <a href={company.website} target="_blank" className={`text-blue-600 font-bold text-xl mt-2 ${side === "left" ? "ml-auto text-end" : "mr-auto text-start"}`}>{company.company}</a>
            <div className={`text-md font-bold text-sm mb-5 ${side === "left" ? "ml-auto text-end" : "mr-auto text-start"}`}>{company.position}</div>
            {company.summary && company.summary.map((point, index) => (
                <p key={index} className="text-sm mb-4">{point}</p>
            ))}
        </div>
    );
}