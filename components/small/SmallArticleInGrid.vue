
<script setup lang="ts">
import { type Article } from '~/types/article.type'

defineProps<{ article: Article }>()

</script>


<template>
    <NuxtLink :to="`/blog/${article.id}`" class="article-link">
        <div class="article mx-auto">
            <div class="row mb-2 border-bottom">
                <div class="col-md-6">
                    <h4>{{ article.title }}</h4>
                    <div class="mb-2 date">
                        <small class="creation">{{ article.createdAt }}</small>
                        <div class="category"><small><i class="bi bi-arrow-right-short icon"></i>{{
                            article.category.name }}</small></div>
                        <div v-if="article.likes > 1"><small><i class="bi bi-heart icon"></i> {{ article.likes }}</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text-center pb-3 d-flex justify-content-center align-items-center">
                    <span v-for="tag in article.tags" :key="tag.name">
                        <SmallArticleTag :tag="tag.name" />
                    </span>
                </div>

            </div>
            <p>{{ article.description }}</p>
        </div>
    </NuxtLink>
</template>
  

<style scoped>
.article {
    border: 1px solid var(--text);
    border-radius: 7px;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 60%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.3);

}

h4 {
    color: white;
}

h4:hover {
    color: white;
    width: fit-content;
    cursor: pointer;
}

.article:hover {
    border-color: white;
    cursor: pointer;
}

.article-link {
    text-decoration: none;
    color: inherit;
}

.category small {
    font-weight: 600;
    color: #4D5BCE;
}

.icon {
    font-size: larger;
}


@media (max-width: 768px) {
    .article {
        width: 100%;
    }

    h4,
    .date {
        text-align: center;
    }
}
</style>