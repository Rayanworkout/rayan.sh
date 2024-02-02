
<script setup lang="ts">
import { showToast } from '~/utils/frontend/showToast';

const email = ref('')
const password = ref('')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const state = reactive({
    error: false,
    showToast: false,
    message: '',
    errorMessage: '',
});


const { signIn } = useAuth()

const login = async () => {
    try {

        // Check if password is not empty

        if (password.value.length < 6) {
            state.errorMessage = 'Password must be at least 6 characters long'

            setTimeout(() => {
                state.errorMessage = ''
            }, 3000);

            return
        }

        // and if email has the right format
        if (!emailRegex.test(email.value)) {
            state.errorMessage = 'Invalid email format'

            setTimeout(() => {
                state.errorMessage = ''
            }, 3000);

            return
        }

        state.errorMessage = 'invalid credentials ...'

        setTimeout(() => {
            state.errorMessage = ''
        }, 3000);
        return

        // @ts-expect-error
        // https://sidebase.io/nuxt-auth/v0.6/application-side/custom-sign-in-page#optional-custom-error-handling
        const { error } = await signIn('credentials', {

            email: email.value,
            password: password.value,

            // Don't redirect and handle
            // errors / success myself
            redirect: false

        });

        if (error) {
            if (error === 'CredentialsSignin') {
                state.errorMessage = 'Invalid credentials ...'

                setTimeout(() => {
                    state.errorMessage = ''
                }, 3000);

            } else {
                state.errorMessage = "An error occurred"

                setTimeout(() => {
                    state.errorMessage = ''
                }, 3000);
            }
        } else {
            // Success
            showToast('Logged in', state, '/dashboard')
        }


    } catch (error: any) {
        if (error.status === 429) {
            state.errorMessage = 'Too many requests, calm down ...'

            setTimeout(() => {
                state.errorMessage = ''
            }, 3000);

            return
        }
        state.errorMessage = "An error occurred"

        setTimeout(() => {
            state.errorMessage = ''
        }, 3000);
    }
};


const githubLogin = async () => {
    try {
        // @ts-expect-error
        // https://sidebase.io/nuxt-auth/v0.6/application-side/custom-sign-in-page#optional-custom-error-handling
        const { error } = await signIn('github', {

            callbackUrl: '/dashboard',

        });

    } catch (error: any) {
        if (error.status === 429) {
            state.errorMessage = 'Too many requests, calm down ...'

            setTimeout(() => {
                state.errorMessage = ''
            }, 3000);

            return
        }
        state.errorMessage = "An error occurred"

        setTimeout(() => {
            state.errorMessage = ''
        }, 3000);
    }
};

</script>


<template>
    <div class="bg-container">
        <Navbar />
        <div class="text-center form-container mx-auto">
            <form class="mx-auto" @submit.prevent="login">
                <h1 class="my-3">Login<span class="cursor">__</span></h1>
                <div class="mytoast animate__animated animate__bounceInRight" v-show="state.showToast">{{
                    state.message }} <i class="bi bi-check-circle-fill"></i></div>
                <div class="form-group py-3 mx-auto">
                    <input type="email" v-model="email" placeholder="Enter email">
                </div>
                <div class="form-group py-3 mx-auto">
                    <input type="password" v-model="password" placeholder="Password">
                </div>
                <div class="error mx-auto" style="color: rgb(253, 47, 47);">{{
                    state.errorMessage }}</div>
                <button v-show="emailRegex.test(email) && password.length > 4" @click="login" class="login mb-3"><i
                        class="bi bi-unlock"></i></button>
            </form>
            <div>or</div>
            <div class="github">
                <button @click="githubLogin" class="login"><i class="bi bi-github"></i> Sign in with GitHub</button>
            </div>

        </div>
    </div>
</template>


<style scoped>
.bg-container {
    background-color: var(--new-background);

    width: 100%;
    min-height: 1000px;
}

h1 {
    color: white;
}

.error {
    width: 60%;
}

input {
    outline: none;
    border: 1px solid var(--text);
    border-radius: 10px;
    padding: 0.5rem;
    background-color: transparent;
    width: 270px;
}


input:focus {
    border: 1px solid white;
}

input::placeholder {
    color: var(--text-color);
}

.form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 2rem;
    padding-top: 100px;
    background-color: var(--background-color);
    width: 70%;
    transition: all 0.3s ease-in-out;
}

.login i,
i {
    font-size: 30px;
    transition: 0.2s ease-in-out;
}

.login {
    border: none;
    outline: none;
    text-decoration: none;
    color: var(--text-color);
    background-color: transparent;
}

.login:hover,
i:hover {
    color: white;
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