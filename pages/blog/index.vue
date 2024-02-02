
<script setup lang="ts">
import { type Article } from '~/types/article.type'
import { handleCategoryClicked } from '~/utils/frontend/categoryFilter';
import { filterArticles } from '~/utils/frontend/filterArticles';

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

const handleCategoryFilter = (category: string) => {
    handleCategoryClicked(
        category,
        filteredCategories,
        allArticles,
        filteredArticles
    );
};

const filterInput = (value: string) => {
    filterArticles(value, filteredArticles, allArticles);
}

</script>

<template>
    <div class="bg-container">
        <Navbar />
        <Header />
        <SmallSearchInput @inputUpdate="filterInput" />
        <CategoriesFilter @categoryClicked="handleCategoryFilter" :clickedCategories="filteredCategories" />
        <ArticlesGrid :articles="filteredArticles" :state="state" />
    </div>
</template>



<style scoped>
.bg-container {
    background-color: var(--new-background);
    width: 100%;
    min-height: 1000px;
}
</style>