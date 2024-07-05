import Resume from '../../resume.json'

export default function Articles() {
    return (
        <div className="pb-10">
            <h1 id='articles' className="text-center text-4xl font-bold mt-10 mb-10">Articles</h1>
            <div className='articles-container mx-auto gap-4 flex-wrap'>
                {Resume.articles && Resume.articles.map((article, index) => (
                    <div key={index} className="card m-2 p-4 border border-gray-300 flex flex-col mx-auto">
                        <img src={`/images/articles/${article.image}.jpg`} alt={article.title} className="card-image mb-4 w-full h-auto object-cover" />
                        <div className="article-content flex flex-col flex-grow">
                            <h3 className="card-title text-xl font-semibold mb-2">{article.title}</h3>
                            <p className="card-description flex-grow mb-4">{article.description}</p>
                            <a href={article.link} target="_blank" className="card-button self-start mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Read</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
