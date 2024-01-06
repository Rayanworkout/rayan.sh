
<script setup lang="ts">
import { type Article } from '~/types/article.type'
import { handleCategoryClicked } from '~/utils/frontend/categoryFilter';

const allArticles = ref<Article[]>();
const filteredArticles = ref();
const filteredCategories = ref([]);

const state = reactive({
    error: false,
    loading: true,
});

const { data: articles, error } = await useFetch('/api/v1/articles/feed');


if (error.value) {
    console.log(error.value);
    state.error = true;
} else {
    allArticles.value = articles.value as any;
    filteredArticles.value = articles.value;
    state.loading = false;
}

const filterInput = (input: string) => {
    // Filter data that is already fetched
    // User can search for keywords in title and description
    if (input.length > 0) {
        filteredArticles.value = allArticles.value?.filter((article: any) => {
            return article.title.toLowerCase().includes(input.toLowerCase()) ||
                article.description.toLowerCase().includes(input.toLowerCase());
        });
    } else {
        filteredArticles.value = allArticles.value;
    }
};

const handleCategoryFilter = (category: string) => {
    handleCategoryClicked(
        category,
        filteredCategories,
        allArticles,
        filteredArticles
    );
};

</script>

<template>
    <Header />
    <SmallSearchInput @inputUpdate="filterInput" />
    <CategoriesFilter @categoryClicked="handleCategoryFilter" :clickedCategories="filteredCategories" />
    <ArticlesGrid :articles="filteredArticles" :state="state" />
</template>