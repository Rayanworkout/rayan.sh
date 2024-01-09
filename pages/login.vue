
<script setup lang="ts">

const email = ref('')
const password = ref('')
const errorRef = ref('')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const { signIn } = useAuth()

const login = async () => {
    try {

        // Check if password is not empty and

        if (password.value.length < 6) {
            errorRef.value = 'Password must be at least 6 characters long'

            setTimeout(() => {
                errorRef.value = ''
            }, 3000);

            return
        }

        // and if email has the right format
        if (!emailRegex.test(email.value)) {
            errorRef.value = 'Invalid email format'

            setTimeout(() => {
                errorRef.value = ''
            }, 3000);

            return
        }

        const response = await signIn('credentials', {

            email: email.value,
            password: password.value,

            // redirect to dashboard after login
            // callbackUrl: '/dashboard',

            // Don't redirect if an error occurs
            redirect: false

        });

        // @ts-expect-error
        // https://next-auth.js.org/getting-started/client#signin
        if (response.error) {
            // @ts-expect-error
            if (response.error === 'CredentialsSignin') {
                errorRef.value = 'Invalid credentials ...'

                setTimeout(() => {
                    errorRef.value = ''
                }, 3000);

            } else {
                errorRef.value = "An error occurred"

                setTimeout(() => {
                    errorRef.value = ''
                }, 3000);
            }
        } else {
            errorRef.value = ''
        }


    } catch (error: any) {
        if (error.status === 429) {
            errorRef.value = 'Too many requests, calm down ...'

            setTimeout(() => {
                errorRef.value = ''
            }, 3000);

            return
        }
        errorRef.value = "An error occurred"

        setTimeout(() => {
            errorRef.value = ''
        }, 3000);
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