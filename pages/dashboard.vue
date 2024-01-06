<script setup lang="ts">
// Types
import { type Article } from '~/types/article.type';

definePageMeta({
    title: 'Dashboard',
    description: 'Manage your articles',
    middleware: 'auth',
});

const allArticles = ref<Article[]>();

const state = reactive({
    error: false,
    showToaste: false,
    message: '',
});

const showMessage = (message: string) => {
    state.message = message;
    state.showToaste = true;
    console.log(message)
    setTimeout(() => {
        state.message = '';
        state.showToaste = false;
        window.location.reload();

    }, 1500);
};

const { data: articles, error } = await useFetch('/api/v1/articles/all');


if (error.value) {
    console.log(error.value);
    state.error = true;
} else {
    allArticles.value = articles.value as any;
}


const router = useRouter();

const update = (id: number) => {
    router.push(`/blog/update/${id}`);
    console.log(id);
};

const publish = async (id: number) => {
    const { data: response } = await useFetch(`/api/v1/articles/publish/${id}`);
    showMessage("Published");
};

const unpublish = async (id: number) => {
    const { data: response } = await useFetch(`/api/v1/articles/unpublish/${id}`);
    showMessage("Unpublished");
};

const create = () => {
    router.push('/blog/new');
};

const remove = async (id: number) => {
    const confirm = window.confirm('Are you sure you want to delete this article?');
    if (!confirm) return;

    const { data: response, error } = await useFetch(`/api/v1/articles/${id}`,
        {
            method: 'DELETE',
        });

    if (error.value) {
        console.log(error.value);
        state.error = true;
    } else {
        showMessage("Deleted");
    }
};


</script>



<template>
    <div class="container my-5">
        <div class="mytoast" v-show="state.showToaste">{{ state.message }} <i class="bi bi-check-circle-fill"></i></div>
        <div class="text-center">
            <h1>Dashboard</h1>
            <p>Here you can manage your articles.</p>
            <div class="py-2 my-4 mx-auto new" @click="create">New</div>
        </div>
        <table class="table table-striped table-dark table-hover table-responsive mx-auto text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Published</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="article in allArticles" :key="article.id">
                    <th scope="row">{{ article.id }}</th>
                    <td @click="update(article.id)" class="title">{{ article.title }}</td>
                    <td>{{ article.createdAt }}</td>
                    <td>{{ article.category.name }}</td>
                    <td><span v-for="(tag, index) in article.tags" :key="index">
                            {{ tag.name }}<template v-if="index !== article.tags.length - 1"><br></template>
                        </span></td>
                    <td v-if="article.published" @click="unpublish(article.id)"><i class="bi bi-check-lg"></i></td>
                    <td v-else @click="publish(article.id)"><i class="bi bi-x-lg"></i></td>
                    <td @click="remove(article.id)"><i class="bi bi-trash"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<style scoped>
i {
    font-size: 1.2rem;
    color: var(--text);
    background-color: transparent;
}

.new:hover {
    cursor: pointer;
    border: 1px solid var(--primary);
    border-radius: 15px;
    padding: 4px;
}

i:hover {
    cursor: pointer;
    color: var(--primary);
}

.title:hover {
    color: var(--primary);
    cursor: pointer;

}

.new {
    font-size: 1.2rem;
    color: var(--text);
    background-color: transparent;
    border: 1px solid var(--text);
    border-radius: 15px;
    width: 50%;
}

span {
    color: var(--text);
    background-color: transparent;
}

td,
th {
    vertical-align: middle;
}


.mytoast {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 100px;
    right: 50px;
    z-index: 999;
    background-color: var(--background);
    border: 1px solid var(--text);
    color: var(--text);
    padding: 12px;
    width: 200px;
    border-radius: 15px;
    font-size: 1.2rem;
    animation: toast 3s ease-in-out;
}

.mytoast i {
    margin-left: 10px;
}
</style>