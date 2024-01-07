<script setup lang="ts">
import { splitElements } from '~/utils/frontend/splitElements';
import { showToast } from '~/utils/frontend/showToast';

// This page is only accessible for logged in users
definePageMeta({
  title: 'Creation Page',
  description: 'Write an articles',
  middleware: 'auth',
});

const state = reactive({
  showToast: false,
  message: '',
  error: false,
});

// First I initialize the variables
const categories = ref();
const tagsList = ref();
const selectedCategory = ref('');
const clickedTags = ref<string[]>([]);

const newArticle = ref({
  title: '',
  description: '',
  content: '',
  category: '',
  tags: [''],
});

// Then I fetch data from the API
const { data: fetchedCategories } = await useFetch('/api/v1/categories/all');
const { data: fetchedTags } = await useFetch('/api/v1/tags/all');
if (fetchedCategories) {
  categories.value = fetchedCategories.value;
}
if (fetchedTags) {
  tagsList.value = fetchedTags.value?.map((tag: { name: any; }) => tag.name);
  tagsList.value = splitElements(tagsList.value);
}

// Then I define the functions used to update the page
const updateSelectedCategory = (e: any) => {
  selectedCategory.value = e.target.value;
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

const saveOk = computed(() => {
  return newArticle.value.title !== '' && newArticle.value.description !== '' && newArticle.value.content !== ''; 
});


const publish = async (e: any) => {

  const category = selectedCategory.value;
  const tags = clickedTags.value;

  // Other fields are already binded to the newArticle variable
  // with v-model in the template
  newArticle.value.category = category
  newArticle.value.tags = tags

  const { data, error } = await useFetch('/api/v1/articles/create', {
    method: 'POST',
    body: JSON.stringify(newArticle.value),
  });

  if (!error.value) {
    // Success
    showToast("Article created", state, '/dashboard');
  } else {
    // Error
    console.log(error.value);
    state.error = true;
  }
}

</script>



<template>
  <div class="container my-5">
    <div class="text-center">
      <form class="mx-auto" @submit.prevent="publish">
        <h1 class="pt-3">New Article</h1>
        <div class="d-flex justify-content-end">
          <button v-show="!state.showToast" :disabled="!saveOk" class="login">Save</button>
        </div>
        <div class="mytoast animate__animated animate__bounceInRight" v-show="state.showToast">{{ state.message }} <i
            class="bi bi-check-circle-fill"></i></div>
        <div class="mytoast animate__animated animate__bounceInRight" v-show="state.error">An error occured <i
            class="bi bi-x-circle-fill"></i></div>
        <div class="form-group py-3 mx-auto">
          <input type="text" placeholder="Title" v-model="newArticle.title">
        </div>
        <div class="form-group py-3 mx-auto">
          <input type="text" placeholder="Description" v-model="newArticle.description">
        </div>
        <div class="form-group py-3 mx-auto">
          <div class="category">
            <label for="selectCategory">Category</label><i class="bi bi-plus"></i><br>
          </div>
          <select @input="updateSelectedCategory" id="selectCategory">

            <option v-for="category in categories" :key="category.name" :value="category.name">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="form-group py-3 mx-auto">
          <ul v-for="list in tagsList" :key="list[0]">
            <li v-for="tag in list">
              <SmallArticleTag :tag="tag" @click="clickTag(tag)" :class="{ active: clickedTags.includes(tag) }" />
            </li>
          </ul>
        </div>
        <div class="form-group py-3 mx-auto">
          <textarea type="text" rows="10" v-model="newArticle.content" />
        </div>
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
  /* position: fixed; */
  margin: 1rem;
  border: 1px solid var(--primary);
  border-radius: 15px;
  padding: 0.5rem 1rem;
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
