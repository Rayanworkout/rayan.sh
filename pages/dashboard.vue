<script setup lang="ts">
// Types
import { type ArticleInGridType } from '~/types/article.type';

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
let articles: ArticleInGridType[] | undefined;

const filteredCategories = ref<string[]>([]);

if (success) {
    // Check if response data is an array of articles
    if (Array.isArray(response.data.value?.data)) {
        articles = response.data.value?.data as ArticleInGridType[];
    } else {
        // Handle the case where data is a string or undefined
        console.error('Unexpected data type received:', typeof response.data.value?.data);
    }
} else {
    state.value.error = true;
}

const router = useRouter();
const client = useSupabaseClient();


const logout = async () => {
    try {
        const { error } = await client.auth.signOut();
        if (error) throw error;
        router.push('/');
    } catch (error: any) {
        console.error(error.message);
    }
}

</script>



<template>
    <div class="container my-5">
        <div class="text-center">
            <h1>Dashboard</h1>
            <button class="btn btn-primary" @click="logout">Logout</button>
            <p>Here you can manage your articles.</p>
        </div>
        <ArticlesGrid :articles="articles" :state="state" />
    </div>
</template>