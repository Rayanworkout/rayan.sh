import Resume from '../../resume.json'


export default function Articles() {
    return (
        <div className="articles-slider-container mx-auto pb-10">
            <h1 id='articles' className="text-center text-4xl font-bold mt-20 mb-10">Articles</h1>
            <div className="scroll-wrapper">
                {Resume.articles && Resume.articles.map((article, index) => (
                    <div key={index} className="card m-2 border border-gray-300">
                        <img src={`/images/articles/${article.image}.jpg`} alt={article.title} className="card-image" />
                        <div className="article-content">
                            <h3 className="card-title">{article.title}</h3>
                            <p className="card-description">{article.description}</p>
                            <a href={article.link} target="_blank" className="card-button">Read</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}