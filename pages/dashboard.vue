<script setup lang="ts">
// Types
import { type Article } from '~/types/article.type';
import { showToast } from '~/utils/frontend/showToast';
import { filterArticles } from '~/utils/frontend/filterArticles';


definePageMeta({
    title: 'Dashboard',
    description: 'Manage your articles',
    middleware: 'auth',
});

const search = ref('');

const allArticles = ref<Article[]>();
const filteredArticles = ref<Article[]>();

const state = reactive({
    showToast: false,
    message: '',
});

const { data: articles, error } = await useFetch('/api/blog/articles/all');


if (error.value) {
    console.log(error.value);
} else {
    allArticles.value = articles.value as any;
    filteredArticles.value = articles.value as unknown as Article[];
}


const router = useRouter();

const update = (id: number) => {
    router.push(`/blog/update/${id}`);
};

const publish = async (id: number) => {
    const { data: response } = await useFetch(`/api/blog/articles/publish/${id}`);
    showToast("Published", state, '/dashboard');
    setTimeout(() => {
        window.location.reload();
    }, 1500);
};

const unpublish = async (id: number) => {
    const { data: response } = await useFetch(`/api/blog/articles/unpublish/${id}`);
    showToast("Unpublished", state, '/dashboard');
    setTimeout(() => {
        window.location.reload();
    }, 1500);

};

const create = () => {
    router.push('/blog/new');
};

const remove = async (id: number) => {
    const confirm = window.confirm('Are you sure you want to delete this article?');
    if (!confirm) return;

    const { data: response, error } = await useFetch(`/api/blog/articles/${id}`,
        {
            method: 'DELETE',
        });

    if (error.value) {
        console.log(error.value);
    } else {
        showToast("Deleted", state, '/dashboard');
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
};


const filterInput = () => {
    filterArticles(search.value, filteredArticles, allArticles);
}


</script>



<template>
    <div class="main p-3">
        <Navbar />
        <div class="mytoast animate__animated animate__bounceInRight" v-show="state.showToast">{{ state.message }} <i
                class="bi bi-check-circle-fill"></i></div>
        <div class="text-center">
            <h1 class="py-4">Dashboard</h1>
            <div class="py-2 mx-auto new" @click="create">New</div>
        </div>
        <div class="text-end p-3">
            <input type="text" v-model="search" @input="filterInput" placeholder=" Search ...">
        </div>
        <table class="table table-hover table-responsive mx-auto text-center">
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
                <tr v-for="article in filteredArticles" :key="article.id">
                    <th scope="row">{{ article.id }}</th>
                    <td @click="update(article.id)" class="elem">{{ article.title }}</td>
                    <td @click="update(article.id)" class="elem">{{ article.createdAt }}</td>
                    <td @click="update(article.id)" class="elem">{{ article.category.name }}</td>
                    <td @click="update(article.id)" class="elem"><span v-for="(tag, index) in article.tags" :key="index">
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
table th {
    background-color: var(--primary);
    color: white;
}

table td {
    background-color: var(--background);
    color: white;
}

h1 {
    color: white;
}

input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    width: 15%;
    max-width: 500px;
    color: var(--background);
}

i {
    font-size: 1.2rem;
    color: var(--text);
    background-color: transparent;
}

.main {
    background-color: var(--background);
    min-height: 100vh;
}

.new {
    font-size: 1.2rem;
    color: var(--text);
    background-color: transparent;
    border: 1px solid var(--text);
    border-radius: 15px;
    width: 10%;
}

.new:hover {
    cursor: pointer;
    border: 1px solid white;
    border-radius: 15px;
    padding: 4px;
    color: white;
}

i:hover {
    cursor: pointer;
    color: var(--primary);
}

.elem:hover {
    color: var(--primary);
    cursor: pointer;
}

span {
    color: var(--text);
    background-color: transparent;
}

td,
th {
    vertical-align: middle;
}


@media (max-width: 768px) {
    .new {
        border: none;
    }

    input {
        width: 50%;
    }
}
</style>