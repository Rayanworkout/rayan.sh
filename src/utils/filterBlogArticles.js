export const filterArticles = async (input, filteredList, fullList) => {
    // Filter data that is already fetched
    // User can search for keywords in title and description
    if (input.length > 0) {
        filteredList.value = fullList.value?.filter((article) => {
            return article.title.toLowerCase().includes(input.toLowerCase()) ||
                article.description.toLowerCase().includes(input.toLowerCase());
        });
    } else {
        filteredList.value = fullList.value;
    }
};
