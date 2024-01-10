
<script setup lang="ts">

defineProps(['showModal']);
defineEmits(['close']);

const categoryCreated = ref(false);
const tagCreated = ref(false);


const category = ref('');
const tag = ref('');

const handleCategoryClick = async (e: any) => {
    const { data: response, error: categoryError } = await useFetch('/api/v1/categories/create', {
        method: 'POST',
        body: JSON.stringify({
            name: category.value
        })
    });
    if (categoryError.value) {
        console.log(categoryError.value);
    } else {
        categoryCreated.value = true;
        category.value = '';
        setTimeout(() => {
            categoryCreated.value = false;
        }, 2000);
    }
}

const handleTagClick = async (e: any) => {
    const { data: response, error: tagError } = await useFetch('/api/v1/tags/create', {
        method: 'POST',
        body: JSON.stringify({
            name: tag.value
        })
    });
    if (tagError.value) {
        console.log(tagError.value);
    } else {
        tagCreated.value = true;
        tag.value = '';
        setTimeout(() => {
            tagCreated.value = false;
        }, 2000);
    }
}

</script>


<template>
    <dialog :open="showModal" class="animate__animated animate__fadeInUp">
        <div @click="$emit('close');" class="text-end" style="cursor: pointer;"><i class="bi bi-x-circle"></i></div>
        <h4>Add Category or Tag</h4>
        <input v-model="category" type="text" placeholder="Category" class="m-3"><i v-show="categoryCreated"
            class="bi bi-check-lg"></i>
        <div><a @click="handleCategoryClick">Add</a></div>
        <input v-model="tag" type="text" placeholder="Tag" class="my-4 mx-3"><i v-show="tagCreated"
            class="bi bi-check-lg"></i>
        <div><a @click="handleTagClick">Add</a></div>

    </dialog>
</template>

<style scoped>
dialog {
    position: fixed;
    top: 35%;
    left: 35%;
    transform: translate(-50%, -50%);
    background-color: var(--background);
    border-radius: 10px;
    padding: 1rem;
    width: 500px;
    height: 350px;
    border: 1px solid var(--primary);
}


input {
    outline: none;
    border: 1px solid var(--primary);
    border-radius: 10px;
    padding: 0.5rem;
    background-color: transparent;
    width: 400px;
}

input:focus {
    border: 1px solid var(--primary);
    box-shadow: 0 0 0 0.25rem rgb(0 123 255 / 25%);
}

input::placeholder {
    color: var(--text-color);
}

a {
    text-decoration: none;
    border: 1px solid var(--primary);
    border-radius: 10px;
    padding: 0.5rem;
    background-color: transparent;
    width: auto;
    color: var(--text-color);
    background-color: var(--background);
}

a:hover {
    cursor: pointer;
}



@media (max-width: 768px) {

    dialog {
        width: 300;
        left: 2%;
    }

    input {
        width: 200px;
    }

    a {
        width: 100px;
    }
}
</style>