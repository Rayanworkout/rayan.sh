<script setup lang="ts">
// Types
import { type Article } from '~/types/article.type'

// Utils
import MarkdownIt from 'markdown-it';
import mdHighlight from 'markdown-it-highlightjs';

const route = useRoute();

const articleId = route.params.id;

const errorRef = ref(false);

const makeBounce = ref(false);

const article: any = reactive({
  title: '',
  creation_date: '',
  tags: '',
  likes: 0,
  content: '',

});


const { data: fetchedArticle, error } = await useFetch(`/api/v1/articles/${articleId}`);


if (error.value) {
  console.log(error.value);
  errorRef.value = true;
} else {

  article.value = fetchedArticle.value;
  const md = new MarkdownIt().use(mdHighlight);
  article.value.content = md.render((fetchedArticle.value as Article).content);

}



const likeArticle = async () => {
  try {
    const { data, error } = await useFetch(`/api/v1/articles/like/${articleId}`, {
      method: 'POST',
    });

    if (error.value) {
      console.log("Could not like article");
      console.log(error);
    } else {
      article.value.likes++;
      makeBounce.value = true;

      setTimeout(() => {
        makeBounce.value = false;
      }, 200);
    }


  } catch (error) {
    console.log(error);
  }
};



</script>


<template>
  <Navbar />
  <section class="my-5 py-3">
    <div class="container">
      <div class="article-container mx-auto">
        <div class="pb-5 text-center">
          <h1>{{ article.value.title }}</h1>
          <div>
            <small>{{ article.value.created_at }}</small>
          </div>
          <div class="mt-3 tags w-75 mx-auto">
            <span v-for="tag in article.value.tags" :key="tag">
              <SmallArticleTag :tag="tag.name" />
            </span>
          </div>
          <div class="mt-3 article-likes mx-auto">
            <div @click="likeArticle" :class="{ 'bounce': makeBounce }"><i class="bi bi-heart icon"></i></div>
            <div v-if="article.value.likes > 1">{{ article.value.likes }}</div>
          </div>
        </div>
        <transition name="fade">
          <div v-if="!error" class="article-content" v-html="article.value.content">
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>


<style scoped>
.bounce {
  animation: bounce 0.4s ease;
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}

nav {
  color: black;
}

section {
  background-color: var(--background);
  min-height: 1000px;

}

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