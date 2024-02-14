
<script setup lang="ts">
import { type Article } from '~/types/article.type'
import { handleCategoryClicked } from '~/utils/frontend/categoryFilter';
import { filterArticles } from '~/utils/frontend/filterArticles';



definePageMeta({
    title: 'Blog',
    description: 'Blog page of rayan.sh, enjoy !',
    url: 'https://rayan.sh/blog',
    type: 'website',
    site_name: 'rayan.sh',
    locale: 'en',
    image: 'https://rayan.sh/img/monkey.png',
    image_alt: 'programming monkey',
    keywords: 'rayan, rayanworkout, blog, tutorial, rayan.sh, rayan sh, rayanworkout.com, rayanworkout.dev, programming tutorials, portfolio, blog, projects, github, rayanworkout github, rayanworkout blog, rayanworkout projects, rayanworkout dev',
    viewport: 'width=device-width, initial-scale=1.0',

});

useHead({
    title: 'Blog',
    meta: [
        {
            name: 'description',
            content: 'Blog page of rayan.sh, enjoy !',
        },
        {
            name: 'keywords',
            content: 'rayan, rayanworkout, blog, tutorial, rayan.sh, rayan sh, rayanworkout.com, rayanworkout.dev, programming tutorials, portfolio, blog, projects, github, rayanworkout github, rayanworkout blog, rayanworkout projects, rayanworkout dev',
        },
    ],
});



const allArticles = ref<Article[]>();
const filteredArticles = ref();
const filteredCategories = ref([]);

const state = reactive({
    error: false,
    loading: true,
});

const { data: articles, error } = await useFetch('/api/blog/articles/feed');


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
    background-color: var(--background);
    width: 100%;
    min-height: 1000px;
}
</style>