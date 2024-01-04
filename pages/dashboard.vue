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

const filteredCategories = ref<string[]>([]);

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
}
</script>



<template>
    <div class="container my-5">
        <div class="text-center">
            <h1>Dashboard</h1>
            <p>Here you can manage your articles.</p>
        </div>
        <table class="table table-striped table-dark table-hover w-75 mx-auto">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Unpublish</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="article in articles">
                    <th scope="row">{{ article.id }}</th>
                    <td>{{ article.title }}</td>
                    <td>{{ article.created_at }}</td>
                    <td>{{ article.category.name }}</td>
                    <td>{{ article.tags.name }}</td>
                    <td>{{ article.published }}</td>
                    <td>{{ article.tags.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>