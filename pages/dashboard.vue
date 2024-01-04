<script setup lang="ts">
// Types
import { type Article } from '~/types/article.type';

definePageMeta({
    title: 'Dashboard',
    description: 'Manage your articles',
    middleware: 'auth',
});

const state = ref({
    error: false,
});

const response = await useFetch('/api/v1/articles/all');
const success = response.data.value?.success;

// Handle articles with correct typings
// This variable contains all articles
// Before filtering
let articles: Article[] | undefined;

if (success) {
    // Check if response data is an array of articles
    if (Array.isArray(response.data.value?.data)) {
        articles = response.data.value?.data as Article[];
    } else {
        // Handle the case where data is a string or undefined
        console.error('Unexpected data type received:', typeof response.data.value?.data);
    }
} else {
    state.value.error = true;
};


const publish = (articleId: number) => {
    $fetch(`/api/v1/articles/update/${articleId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            published: true,
        }),
    });
};

const unpublish = (articleId: number) => {
    $fetch(`/api/v1/articles/update/${articleId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            published: false,
        }),
    });
};

const update = (articleId: number) => {
    console.log('update')
};

</script>



<template>
    <div class="container my-5">
        <div class="text-center">
            <h1>Dashboard</h1>
            <p>Here you can manage your articles.</p>
        </div>
        <table class="table table-striped table-dark table-hover table-responsive mx-auto text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Published</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="article in articles" :key="article.id">
                    <th scope="row">{{ article.id }}</th>
                    <td @click="update(article.id)">{{ article.title }}</td>
                    <td>{{ article.created_at }}</td>
                    <td>{{ article.category.name }}</td>
                    <td>{{ article.tags.name }}</td>
                    <td v-if="article.published" @click="unpublish(article.id)"><i class="bi bi-check-lg"></i></td>
                    <td v-else @click="publish(article.id)"><i class="bi bi-x-lg"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<style scoped>
i {
    font-size: 1.2rem;
    color: var(--text);
    background-color: transparent;
}
</style>