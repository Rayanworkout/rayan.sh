

<script setup lang="ts">

const client = useSupabaseClient();
const router = useRouter()

const email = ref('')
const password = ref('')
const errorRef = ref('')

const login = async () => {
    try {
        const { error } = await client.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });

        if (error) {
            errorRef.value = error.message
            throw error
        } else {
            location.reload()
            router.push('/dashboard')

        }
    } catch (error: any) {
        errorRef.value = error.message
        setTimeout(() => {
            errorRef.value = ''
        }, 3000)
    }
}


</script>


<template>
    <div class="container my-5">
        <div class="text-center">
            <form class="w-50 mx-auto" @submit.prevent="login">
                <h1 class="my-3">Login</h1>

                <div class="form-group py-3 w-50 mx-auto">
                    <label class="pb-2">Email</label>
                    <input type="email" v-model="email" placeholder="Enter email">
                </div>
                <div class="form-group py-3 w-50 mx-auto">
                    <label class="pb-2">Password</label>
                    <input type="password" v-model="password" placeholder="Password">
                </div>
                    <div class="py-2 error" style="color: rgb(253, 47, 47);">{{ errorRef }}</div>
                <button @click="login" class="login mb-3"><i class="bi bi-box-arrow-in-right"></i></button>
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
}

.login i {
    font-size: larger;
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
</style>