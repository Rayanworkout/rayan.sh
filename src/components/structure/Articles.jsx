


export default function Articles() {
    const articles = [
        {
            title: "How to build a website with React and Tailwind CSS",
            description: "Learn how to build a website with React and Tailwind CSS",
            link: "https://www.example.com",
            image: "drug"
        },
        {
            title: "How to build a website with Vue and Tailwind CSS",
            description: "Learn how to build a website with Vue and Tailwind CSS",
            link: "https://www.example.com",
            image: "drug"
        },
        {
            title: "How to build a website with Angular and Tailwind CSS",
            description: "Learn how to build a website with Angular and Tailwind CSS",
            link: "https://www.example.com",
            image: "drug"
        },
    ]
    return (
        <div className="articles-slider-container">
            <div className="scroll-wrapper">
                {articles && articles.map((article, index) => (
                    <div key={index} className="article-card">
                        <img src={`/images/articles/${article.image}.jpg`} alt={article.title} />
                        <div className="article-content">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <a href={article.link} target="_blank" className="read-more">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}