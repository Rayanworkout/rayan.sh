

export const filterArticles = async (input: string, filteredList: Ref<any>, fullList: Ref<any>) => {
    // Filter data that is already fetched
    // User can search for keywords in title and description
    if (input.length > 0) {
        filteredList.value = fullList.value?.filter((article: any) => {
            return article.title.toLowerCase().includes(input.toLowerCase()) ||
                article.description.toLowerCase().includes(input.toLowerCase());
        });
    } else {
        filteredList.value = fullList.value;
    }
};