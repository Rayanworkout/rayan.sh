<script setup lang="ts">
import ArticleCategory from './small/SmallArticleCategory.vue'
import { type Article } from '~/types/article.type'

let allCategories: string[][] | undefined;

// Same thing for categories
const splitCategories = (categories: string[] | string | undefined) => {
    if (categories) {
        const result: string[][] = [];
        for (let i = 0; i < categories.length; i += 4) {
            result.push(Array.isArray(categories) ? categories.slice(i, i + 4) : [categories]);
        }
        return result;
    }
};


// Define the type for the response data structure
interface IResponse {
    data: {
        value: {
            success: boolean;
            data: Article["category"][];
        }
    }
}


// Fetch categories
const categories = await useFetch('/api/v1/categories/all') as unknown as IResponse;
const success = categories.data.value?.success;


if (success) {
    const list: Article["category"][] | undefined = categories.data.value?.data;

    if (Array.isArray(list)) {
        // Get the categories names
        const listNames = list.map((category) => category.name);
        listNames.unshift('ALL');
        // Split the categories in 4 columns
        allCategories = splitCategories(listNames);
    }
}


// Define the emits list, here when a category is clicked
defineEmits(["categoryClicked"]);
defineProps(["clickedCategories"]);


</script>


<template>
    <ul v-for="categoriesList in allCategories" :key="categoriesList[0]"
        class="list-inline list-unstyled d-flex justify-content-center pt-3 category-list">
        <div v-for="category in categoriesList">
            <ArticleCategory :category="category" class="category" :class="{ active: clickedCategories.includes(category) }"
            @click="$emit('categoryClicked', category);" />
        </div>
    </ul>
</template>

<style scoped>
.category-list {
    margin: 0;
    padding: 0;
}

.category {
    font-size: 0.9em;
}

@media (max-width: 768px) {

    .category {
        font-size: 0.65em;
    }
}
</style>