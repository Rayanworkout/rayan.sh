

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
            router.push('/dashboard')
        }
    } catch (error: any) {
        errorRef.value = error.message 
    }
}


</script>


<template>
    <div class="container my-5">
        <div class="text-center">
            <h1>Login</h1>
            <form @submit.prevent="login">
                <div class="form-group py-2 w-50 mx-auto">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Enter email">
                </div>
                <div class="form-group py-2 w-50 mx-auto">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Password">
                </div>
                <div class="py-2" style="color: rgb(253, 47, 47);">{{ errorRef }}</div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>