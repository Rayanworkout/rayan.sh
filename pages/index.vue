
<script setup lang="ts">

// Types
import { type Article } from '~/types/article.type'

// Utils
// Function to apply filters to articles
// By modyfing the filteredArticles variable
import { handleInput } from '~/utils/inputFilter';

const filteredArticles = ref<Article[] | undefined>()
const filteredCategories = ref<string[]>([]);


const state = reactive({
    error: false,
});

// This variable contains all articles
// Before filtering
let articles: Article[];

const { data: response } = await useFetch('/api/v1/articles/all')

// Using ? to check if the value is not null or undefined
const success = response.value?.success

if (success) {
    let fetchedArticles = response.value?.data as unknown as Article[];
    if (fetchedArticles) {
        fetchedArticles = fetchedArticles.filter(article => article.published === true) as Article[];
        articles = fetchedArticles;
        filteredArticles.value = fetchedArticles;
    }
} else {
    state.error = true
};


const filterInput = (input: string) => {
    handleInput(input, filteredArticles, articles);
};

const handleCategoryFilter = (category: string) => {
    handleCategoryClicked(
        category,
        filteredCategories,
        articles,
        filteredArticles
    );
};

</script>



<template>
    <Header />
    <SmallSearchInput @inputUpdate="filterInput" />
    <CategoriesFilter @categoryClicked="handleCategoryFilter" :clickedCategories="filteredCategories"/>
    <ArticlesGrid :articles="filteredArticles" :state="state" />
</template>