
<script setup lang="ts">

// Types
import { type ArticleInGridType } from '~/types/article.type';

// Utils
// Function to apply filters to articles
// By modyfing the filteredArticles variable
import { handleInput } from '~/utils/inputFilter';


// Initialize reactive variables
const filteredArticles = ref<ArticleInGridType[] | undefined>([])

const state = ref({
    error: false,
});

const response = await useFetch('/api/v1/articles/all');
const success = response.data.value?.success;

// Handle articles with correct typings
// This variable contains all articles
// Before filtering
let articles: ArticleInGridType[] | undefined;

const filteredCategories = ref<string[]>([]);

if (success) {
    // Check if response data is an array of articles
    if (Array.isArray(response.data.value?.data)) {
        articles = response.data.value?.data as ArticleInGridType[];
        filteredArticles.value = articles;
    } else {
        // Handle the case where data is a string or undefined
        console.error('Unexpected data type received:', typeof response.data.value?.data);
    }
} else {
    state.value.error = true;
}

const filterInput = (input: string) => {
    handleInput(input, filteredArticles, articles);
}

const handleCategoryFilter = (category: string) => {
    handleCategoryClicked(
        category,
        filteredCategories,
        articles,
        filteredArticles
    );
}


</script>



<template>
    <Header />
    <SmallSearchInput @inputUpdate="filterInput" />
    <CategoriesFilter @categoryClicked="handleCategoryFilter" :clickedCategories="filteredCategories"/>
    <ArticlesGrid :articles="filteredArticles" :state="state" />
</template>