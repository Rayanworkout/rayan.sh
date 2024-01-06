<script setup lang="ts">

let allCategories: string[][] | undefined;


// Fetch categories
const { data: categories, error: error } = await useFetch('/api/v1/categories/all');

if (error.value) {
    console.log(error.value);
} else {
    const list = categories.value;

    if (Array.isArray(list)) {
        // Get the categories names
        const listNames = list.map((category) => category.name);
        listNames.unshift('ALL');
        // Split the categories in 4 columns
        allCategories = splitElements(listNames);
    }
}

// Define the emits list, here when a category is clicked
defineEmits(["categoryClicked"]);
defineProps(["clickedCategories"]);


</script>


<template>
    <ul v-for="categoriesList in allCategories" :key="categoriesList[0]"
        class="list-inline list-unstyled d-flex justify-content-center pt-2 category-list">
        <div v-for="category in categoriesList">
            <SmallArticleCategory :category="category" class="category"
                :class="{ active: clickedCategories.includes(category) }" @click="$emit('categoryClicked', category);" />
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