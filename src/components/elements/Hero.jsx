// Resume
import Resume from "../../resume.json";

export default function Hero() {
    return (
        <div className="hero-text mt-8">
            <p>
                I'm a
            </p>
            <h1 className="font-bold text-white lg-name">{Resume.basics.label.replace(',', ' / ')}</h1>
            <h2 className="font-bold text-white">
                {Resume.basics.location.city}, {Resume.basics.location.country}
            </h2>
        </div>
    )
}
