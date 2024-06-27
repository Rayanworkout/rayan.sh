// Resume
import { Fragment } from "react";
import ExperienceCard from "../elements/ExperienceCard";
import Resume from "../../resume.json";


// Automatically add a direction to each experience based on modulo 2
// This way we can alternate the direction of the experience cards
const experiences = Resume.work.map((event, index) => {
    return {
        ...event,
        direction: index % 2 === 0 ? 'left' : 'right'
    };
});



const Circle = () => {
    return (
        <div className="rounded-full w-4 h-4 bg-blue-500 mx-auto"></div>
    )
}

export default function Experience() {
    return (
        <div className="flex flex-col gap-y-3 w-full my-4">
            <h2 className="text-4xl font-bold text-center pt-9 mt-10">Experience</h2>
            <Circle />
            <div className="mx-auto font-bold">{new Date().getFullYear()}</div>
            {experiences.map((event, index) => (
                <Fragment key={index}>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                        {event.direction === "left" ? (
                            <ExperienceCard company={event} side={"left"} />
                        ) : (<div></div>)
                        }

                        <div className="rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto"></div>

                        {event.direction === "right" ? (
                            <ExperienceCard company={event} side={"right"} />
                        ) : (<div></div>)
                        }

                    </div>

                    {index < Resume.work.length - 1 && <Circle />}
                </Fragment>
            ))}


            <Circle />

        </div>
    );
}