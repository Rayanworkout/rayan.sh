
import { type Ref } from "vue";
import { type ArticleInGridType as Article } from '~/types/article.type'

const filterArticles = (

    filteredCategories: string[],

    articles: Article[] | undefined,

    filteredArticles: Ref<Article[]>) => {

    if (articles) {
        // I filter articles based on the categories clicked
        filteredArticles.value = articles.filter((article) => {
            // Check if the article's category is included in the filtered categories array
            return filteredCategories.includes(article.category.name);
        });
    };
};


export const handleCategoryClicked = (
    category: string,

    filteredCategories: Ref<string[]>,

    articles: Article[],

    filteredArticles: Ref<Article[] | undefined>) => {

    // The category prop passed is the category clicked as string

    // I check if I have articles to filter
    // If not, I return
    if (!filteredArticles) return;

    // I get the categories clicked with this event handler
    // Then I filter articles and I pass them as props
    if (category === "ALL") {
        // If click on "ALL" category, I reset the list of clicked categories
        // And I return all articles
        filteredCategories.value = [];
        filteredArticles.value = articles;
        return;


        // If the clicked category is already in the list of clicked categories
    } else if (filteredCategories.value.includes(category)) {
        // I remove this category from the list
        filteredCategories.value = filteredCategories.value.filter((cat) => cat !== category);

    } else {
        // Using spread operator to add the new category to the list
        // Instead of using push() which is not reactive and would not trigger a re-render (watcher)
        filteredCategories.value = [...filteredCategories.value, category];
    }


    // And finally I filter articles
    filterArticles(filteredCategories.value, articles, filteredArticles as Ref<Article[]>);

}