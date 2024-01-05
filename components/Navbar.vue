
<script setup lang="ts">

const userLoggedIn = ref(false);

const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();


if (user.value) {
    userLoggedIn.value = true;
} else {
    userLoggedIn.value = false;
};


const logout = async () => {
    try {
        const { error } = await client.auth.signOut();
        if (error) throw error;
        router.push('/');
        location.reload();


    } catch (error: any) {
        console.error(error.message);
    }
};


</script>



<template>
    <nav class="navbar border-bottom">
        <div class="container-fluid">
            <div class="d-flex justify-content-start mx-2">
                <NuxtLink to="/" class="navbar-brand mr-auto">Rayan.sh</NuxtLink>

            </div>
            <div class="d-flex justify-content-end mx-3">
                <NuxtLink v-if="$route.path !== '/about'" to="/about" class="about">About</NuxtLink>
                <NuxtLink v-if="$route.path !== '/login' && !userLoggedIn" to="/login" class="about">Login</NuxtLink>
                <NuxtLink v-if="userLoggedIn" @click="logout" class="about" key="key">Logout</NuxtLink>
                <NuxtLink v-if="userLoggedIn" to="/dashboard" class="about" key="key">Dashboard</NuxtLink>
                
            </div>
        </div>
    </nav>
</template>
  


<style scoped>
.navbar {
    background-color: var(--background-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-brand {
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s ease-in-out;
}

.about {
    text-decoration: none;
    color: var(--text-color);
    transition: 0.3s ease-in-out;
    margin: 0 1rem;
}

.navbar-brand:hover {
    color: var(--primary);

}

.about:hover {
    color: var(--primary);
    transform: scale(1.05);
    cursor: pointer;
}


@media (max-width: 768px) {
    .navbar-brand {
        font-size: 1rem;
    }

    .about {
        font-size: 0.8rem;
        margin: 0 0.2rem;
    }
}


</style>