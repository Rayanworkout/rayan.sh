<script setup lang="ts">

const route = useRoute();

const articleId = route.params.id;

const errorRef = ref(false);

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

}


</script>


<template>
  <section class="my-5 py-3">
    <div class="container">
      <div class="article-container mx-auto">

        
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