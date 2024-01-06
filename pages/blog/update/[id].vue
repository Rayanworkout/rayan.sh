<script setup lang="ts">

const route = useRoute();

const articleId = route.params.id;

const errorRef = ref(false);

const article: any = ref();

const allTags: any = ref();
const clickedTags = ref<string[]>([]);

const allCategories: any = ref();
const selectedCategory = ref('');


const { data: fetchedArticle, error } = await useFetch(`/api/v1/articles/${articleId}`);
const { data: tags, error: tagsError } = await useFetch(`/api/v1/tags/all`);
const { data: fetchedCategories, error: categoriesError } = await useFetch('/api/v1/categories/all');


if (error.value || tagsError.value || categoriesError.value) {
  console.log(error.value);
  errorRef.value = true;
} else {
  article.value = fetchedArticle.value;
  allTags.value = tags.value?.map((tag: { name: any; }) => tag.name);
  allTags.value = splitElements(allTags.value);
  clickedTags.value = article.value.tags.map((tag: { name: any; }) => tag.name);
  allCategories.value = fetchedCategories.value;
  selectedCategory.value = article.value.category.id;
}


const clickTag = (tag: string) => {
  if (!clickedTags.value.includes(tag)) {
    clickedTags.value.push(tag);
  } else {
    const index = clickedTags.value.indexOf(tag);
    if (index > -1) {
      clickedTags.value.splice(index, 1);
    }
  }
}


const sendArticle = async () => {
  const { data, error } = await useFetch(`/api/v1/articles/${articleId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: article.value.title,
      description: article.value.description,
      content: article.value.content,
      categoryId: parseInt(selectedCategory.value),
      tags: clickedTags.value
    })
  });

  if (error.value) {
    console.log(error);
  } else {
    article.value = data.value;
  }
}

const updateSelectedCategory = (e: any) => {
  selectedCategory.value = e.target.value;
}


</script>


<template>
  <section class="my-5 py-3">
    <div class="container">
      <div class="text-center">
        <form class="mx-auto" @submit.prevent="sendArticle">
          <h1 class="my-3">Update</h1>
          <div v-show="article.created" class="success">Article created !</div>
          <div class="form-group py-3 mx-auto">
            <input type="text" placeholder="Title" v-model="article.title">
          </div>
          <div class="form-group py-3 mx-auto">
            <input type="text" placeholder="Description" v-model="article.description">
          </div>
          <div class="form-group py-3 mx-auto">
            <div class="category">
              <label for="selectCategory">Category</label>
            </div>
            <select @input="updateSelectedCategory" id="selectCategory" :value="selectedCategory">

              <option v-for="category in allCategories" :key="category.name" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="form-group py-3">
            <ul v-for="list in allTags" :key="list[0]">
              <li v-for="tag in list" :key="tag" class="tag">
                <SmallArticleTag :tag="tag" @click="clickTag(tag)" :class="{ active: clickedTags.includes(tag) }" />
              </li>
            </ul>
          </div>
          <div class="form-group py-3 mx-auto">
            <textarea type="text" rows="10" v-model="article.content" />
          </div>
          <button class="mb-3">OK</button>
        </form>
      </div>
    </div>
  </section>
</template>


<style scoped>

.category {
  display: flex;
  justify-content: center;
  align-items: center;
}
select {
  outline: none;
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 0.5rem;
  background-color: transparent;
  width: 450px;
}

ul {
  list-style: none;
}


li {
  display: inline-block;
  margin-right: 10px;
}

input,
textarea {
  outline: none;
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 0.5rem;
  background-color: transparent;
  width: 450px;
}

input:focus,
textarea:focus {
  border: 1px solid var(--primary);
  box-shadow: 0 0 0 0.25rem rgb(0 123 255 / 25%);
}

input::placeholder,
textarea::placeholder {
  color: var(--text-color);
}

.tag {
  width: fit-content;
}
</style>