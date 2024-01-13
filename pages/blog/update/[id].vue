<script setup lang="ts">


definePageMeta({
  title: 'update',
  description: 'update an articles',
  middleware: 'auth',
});


import { splitElements } from '~/utils/frontend/splitElements';
import { showToast } from '~/utils/frontend/showToast';

const route = useRoute();

// Initialize the variables
// Some will contain full lists and others selected / filtered elements
const articleId = route.params.id;
const article: any = ref();

const allTags: any = ref();
const clickedTags = ref<string[]>([]);

const allCategories: any = ref();
const selectedCategory = ref('');

// Initialize the state for the toast and the error
const state = reactive({
  showToast: false,
  message: '',
  error: false,
});

// Fetch data from the API
const { data: fetchedArticle, error } = await useFetch(`/api/v1/articles/${articleId}`);
const { data: tags, error: tagsError } = await useFetch(`/api/v1/tags/all`);
const { data: fetchedCategories, error: categoriesError } = await useFetch('/api/v1/categories/all');


// If data is ok, I update the variables
if (error.value || tagsError.value || categoriesError.value) {
  console.log(error.value);
  state.error = true;
} else {
  article.value = fetchedArticle.value;
  allTags.value = tags.value?.map((tag: { name: any; }) => tag.name);

  // Split by lines of 4 if there are too much tags
  allTags.value = splitElements(allTags.value);

  // Displaying names instead of ids
  clickedTags.value = article.value.tags.map((tag: { name: any; }) => tag.name);
  allCategories.value = fetchedCategories.value;
  selectedCategory.value = article.value.category.id;
}


// And then the functions

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
    showToast('Article updated !', state, '/dashboard');
  }
}

const updateSelectedCategory = (e: any) => {
  selectedCategory.value = e.target.value;
}


</script>


<template>
  <NavbarArticle />
  <section class="main">
    <div class="container">
      <div class="mytoast animate__animated animate__bounceInRight" v-show="state.showToast">{{ state.message }} <i
          class="bi bi-check-circle-fill"></i></div>
      <div class="text-center">
        <form class="mx-auto" @submit.prevent="sendArticle">
          <h1>Update</h1>
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
          <button v-show="!state.showToast" class="save">Save</button>
        </form>
      </div>
    </div>
  </section>
</template>


<style scoped>
.main {
  background-color: var(--background);
  width: auto;
  min-height: 100vh;
}

button {
  background-color: transparent;
  border: 1px solid var(--primary);
  border-radius: 15px;
  padding: 0.5rem 1rem;
  outline: none;
  color: var(--primary);
  font-size: 1rem;
}

button:hover {
  cursor: pointer;
  background-color: var(--primary);
  color: var(--background);
}

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
  background-color: var(--background);
  width: 450px;
}

ul {
  list-style: none;
}


li {
  display: inline-block;
  margin-right: 10px;
}

.save {
  position: fixed;
  top: 100px;
  right: 0;
  margin: 1rem;
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