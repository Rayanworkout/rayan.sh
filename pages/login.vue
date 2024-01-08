

<script setup lang="ts">

definePageMeta({
    title: 'Login',
    description: 'Login to your account',
    middleware: 'guest',
});


const email = ref('')
const password = ref('')
const errorRef = ref('')

const userLoggedIn = ref(false);

const { signIn } = useAuth()

const login = async () => {
    try {
        await signIn('credentials', {

            email: email.value,
            password: password.value

        });

    } catch (error: any) {
        console.log(error.message)
        errorRef.value = error.message
    }
};


</script>


<template>
    <div class="container my-5">
        <div class="text-center">
            <form class="mx-auto" @submit.prevent="login">
                <h1 class="my-3">Login</h1>
                <div class="form-group py-3 mx-auto">
                    <input type="email" v-model="email" placeholder="Enter email">
                </div>
                <div class="form-group py-3 mx-auto">
                    <input type="password" v-model="password" placeholder="Password">
                </div>
                <div class="py-1 error" style="color: rgb(253, 47, 47);">{{ errorRef }}</div>
                <button v-show="!userLoggedIn" @click="login" class="login mb-3"><i
                        class="bi bi-box-arrow-in-right"></i></button>
                <div v-show="userLoggedIn"><i class="bi bi-person-check-fill"></i></div>
            </form>
        </div>
    </div>
</template>


<style scoped>
input {
    outline: none;
    border: 1px solid var(--primary);
    border-radius: 10px;
    padding: 0.5rem;
    background-color: transparent;
}

input:focus {
    border: 1px solid var(--primary);
    box-shadow: 0 0 0 0.25rem rgb(0 123 255 / 25%);
}

input::placeholder {
    color: var(--text-color);
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--primary);
    border-radius: 10px;
    padding: 2rem;
    background-color: var(--background-color);
    width: 70%;
    transition: all 0.3s ease-in-out;
}

form input {
    width: 100%;

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

    input {
        width: 100%;
    }
}
</style>