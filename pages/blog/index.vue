
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
        <div class="overlay">
            <Navbar />
            <Header />
            <SmallSearchInput @inputUpdate="filterInput" />
            <CategoriesFilter @categoryClicked="handleCategoryFilter" :clickedCategories="filteredCategories" />
            <ArticlesGrid :articles="filteredArticles" :state="state" />
        </div>
    </div>
</template>



<style scoped>
.bg-container {
    background-image: url('/img/city.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    width: 100%;
    min-height: 1000px;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.55);
  min-height: 1000px;
}
</style>