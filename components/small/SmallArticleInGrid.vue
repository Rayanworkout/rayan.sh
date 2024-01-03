
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

                        <small>{{ article.created_at }}</small>
                        <div class="category"><small>{{ article.category.name }}</small></div>
                        <div v-if="article.likes > 1"><small><i class="bi bi-heart icon"></i> {{ article.likes }}</small>
                        </div>

                    </div>
                </div>

                <div class="col-md-6 text-center pb-3 d-flex justify-content-center align-items-center">
                    <!-- <span v-for="tag in article.tags" :key="tag._id"> -->
                    <SmallArticleTag :tag="article.tags.name" />
                    <!-- </span>  -->
                </div>

            </div>
            <p>{{ article.description }}</p>
        </div>
    </NuxtLink>
</template>
  

<style scoped>
.article {
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease-in-out;
    width: 60%;
    overflow: hidden;
}

h4 {
    transition: all 0.3s ease-in-out;
}

h4:hover {
    color: var(--primary);
    width: fit-content;
    cursor: pointer;
}

.article:hover {
    transform: scale(1.02);
    border-color: var(--primary);
    cursor: pointer;
}

.article-link {
    text-decoration: none;
    color: inherit;
}

.category small {
    color: var(--primary);
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