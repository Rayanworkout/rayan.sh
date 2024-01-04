<script setup lang="ts">
import { likeArticleApi } from '~/utils/likeArticle';
// Types
import { type Article } from '~/types/article.type'

// Utils
import MarkdownIt from 'markdown-it';
import mdHighlight from 'markdown-it-highlightjs';

const route = useRoute();

const articleId = route.params.id;

const error = ref(false);

const article: any = reactive({
  title: '',
  creation_date: '',
  tags: '',
  likes: 0,
  content: '',

});

const renderedHtml = ref(''); // Ref to store the rendered HTML

const { data: response } = await useFetch(`/api/v1/articles/${articleId}`);

// Using ? to check if the value is not null or undefined
const success = (response.value as { success?: boolean })?.success;

if (success) {
  article.value = (response.value as any).data as Article;

  const md = new MarkdownIt().use(mdHighlight);
  renderedHtml.value = md.render(article.value.content);
} else {
  error.value = true;
};


const likeArticle = () => {
  likeArticleApi(String(articleId), article.value.likes);
  article.value.likes++;
}
</script>


<template>
  <section class="my-5 py-3">
    <div class="container">
      <div class="article-container mx-auto">

        <div class="pb-5 text-center">
          <h1>{{ article.value.title }}</h1>
          <div>
            <small>{{ article.value.created_at }}</small>
          </div>
          <div class="mt-3 tags w-75 mx-auto">
            <!-- <span v-for="tag in article.value.tags" :key="tag"> -->
            <SmallArticleTag :tag="article.value.tags.name" />
            <!-- </span> -->
          </div>
          <div class="mt-3 article-likes mx-auto">
            <div @click="likeArticle"><i class="bi bi-heart icon"></i></div>
            <div v-if="article.value.likes > 1">{{ article.value.likes }}</div>
          </div>
        </div>
        <transition name="fade">
          <div v-if="!error" class="article-content" v-html="renderedHtml">
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>


<style scoped>
.article-container {
  width: 75%;
}

.article-likes {
  width: 10%;
}

.article-likes i {
  font-size: larger;
}

.article-likes i:hover,
.article-likes div:hover {
  cursor: pointer;
  color: var(--primary);
}

.tags {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .article-container {
    width: 90%;
  }
}
</style>