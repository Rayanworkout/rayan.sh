import Resume from "../../resume.json";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container text-center flex flex-col items-center mx-auto">
                <img
                    width="180px"
                    height="180px"
                    src={`/images/${Resume.basics.picture}`}
                    alt={Resume.basics.name}
                    className="rounded-full my-5"
                />
                <div className="about-text text-white">
                    <p className="font-bold text-2xl pb-4">
                        {Resume.basics.x_title}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: Resume.basics.summary }}>
                    </div>
                </div>
            </div>

        </section>
    )
}