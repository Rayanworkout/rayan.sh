
import { type ArticleInGridType } from '~/types/article.type';


export const handleInput = (

    input: string,

    filteredArticles: Ref<ArticleInGridType[] | undefined>,

    articles: any

) => {
    // Allowing the user to search for articles by title
    if (articles) {
        if (input.length < 2) {
            filteredArticles.value = articles;
            return;
        }
        filteredArticles.value = articles.filter((article: { title: string; description: string; }) => {
            // filter either by title or by description content
            const searchTerm = input.toLowerCase();
            const inTitle = article.title.toLowerCase().includes(searchTerm);
            const inContent = article.description.toLowerCase().includes(searchTerm);

            return inTitle || inContent;
        });
    }
};