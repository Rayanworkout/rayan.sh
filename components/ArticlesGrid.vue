<script setup lang="ts">

defineProps(['articles', 'state'])

</script>

<template>
    <div class="container py-4">
        <div v-if="!state.error && articles && articles.length == 0" class="text-center">No article at the moment
            <span class="cursor">_</span>
        </div>
        <div v-if="state.error" class="text-center">Error while fetching the articles ...</div>
        <div v-else>
            <div v-for="article in articles" :key="article.id">
                <SmallArticleInGrid :article="article" />
            </div>
        </div>
    </div>
</template>