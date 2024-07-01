


export default function Articles() {
    const articles = [
        {
            title: "How to build a website with React and Tailwind CSS",
            description: "Learn how to build a website with React and Tailwind CSS",
            link: "https://www.example.com",
            image: "react-tailwind"
        },
        {
            title: "How to build a website with Vue and Tailwind CSS",
            description: "Learn how to build a website with Vue and Tailwind CSS",
            link: "https://www.example.com",
            image: "vue-tailwind"
        },
        {
            title: "How to build a website with Angular and Tailwind CSS",
            description: "Learn how to build a website with Angular and Tailwind CSS",
            link: "https://www.example.com",
            image: "angular-tailwind"
        },
    ]
    return (
        <div className="slider-container">
            <div className="scroll-wrapper">
                {articles && articles.map((tech, index) => (
                   {/* articles  */}

                   
                ))}
            </div>
        </div>
    )
}