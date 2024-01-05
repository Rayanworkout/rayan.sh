<script setup lang="ts">
import { type Article } from '~/types/article.type';

// This page is only accessible for logged in users
definePageMeta({
  title: 'Creation Page',
  description: 'Write an articles',
  middleware: 'auth',
});

// First I initialize the variables
const categories = ref();
const tagsList = ref();
const selectedCategory = ref('');
const clickedTags = ref<Article["tags"]>([]);

// Then I fetch data from the API
const { data: fetchedCategories } = await useFetch('/api/v1/categories/all');
const { data: fetchedTags } = await useFetch('/api/v1/tags/all');
if (fetchedCategories) {
  categories.value = fetchedCategories.value;
}
if (fetchedTags) {
  tagsList.value = fetchedTags.value;
  tagsList.value = splitElements(tagsList.value);
}

// Then I define the functions used to update the page
const updateSelectedCategory = (e: any) => {
  selectedCategory.value = e.target.value;
}

const clickTag = (tag: { name: any; }) => {
  if (!clickedTags.value.includes(tag.name)) {
    clickedTags.value.push(tag.name);
  } else {
    const index = clickedTags.value.indexOf(tag.name);
    if (index > -1) {
      clickedTags.value.splice(index, 1);
    }
  }
}


const publish = async (e: any) => {
  console.log('publish')
}


</script>



<template>
  <div class="container my-5">
    <div class="text-center">
      <form class="mx-auto" @submit.prevent="publish">
        <h1 class="my-3">New Article</h1>
        <div class="form-group py-3 mx-auto">
          <input type="text" placeholder="Title">
        </div>
        <div class="form-group py-3 mx-auto">
          <input type="text" placeholder="Description">
        </div>
        <div class="form-group py-3 mx-auto">
          <label class="mb-2" for="selectCategory">Category</label><br>
          <select @input="updateSelectedCategory" id="selectCategory">
            <option v-for="category in categories" :key="category.name" :value="category.name">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="form-group py-3 mx-auto">

          <ul v-for="list in tagsList" :key="list[0]">
            <li v-for="tag in list">
              <SmallArticleTag :tag="tag.name" @click="clickTag(tag)" :class="{ active: clickedTags.includes(tag.name) }" />
            </li>
          </ul>
        </div>
        <div class="form-group py-3 mx-auto">
          <textarea type="text" placeholder="content" rows="10"/>
        </div>
        <button @click="publish" class="login mb-3"><i class="bi bi-send"></i></button>
      </form>
    </div>
  </div>
</template>


<style scoped>
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

select {
  outline: none;
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 0.5rem;
  background-color: transparent;
  width: 450px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary);
  border-radius: 10px;
  background-color: var(--background-color);
  transition: all 0.3s ease-in-out;
}

.login i,
i {
  font-size: 30px;
  color: var(--text-color);
  transition: 0.2s ease-in-out;
}

.login {
  border: none;
  outline: none;
  text-decoration: none;
  color: var(--text-color);
}

.login:hover {
  color: var(--primary);
  transform: scale(1.05);
}

form:hover {
  transform: scale(1.02);
  border-color: var(--primary);
  cursor: pointer;
}


@media (max-width: 768px) {
  form {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
  }
}
</style>
