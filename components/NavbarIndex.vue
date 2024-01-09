
<script setup lang="ts">

const { status, data, signOut } = useAuth();

const userLoggedIn = computed(() => status.value === 'authenticated' && data);


const logout = async () => {
    try {
        await signOut();
    } catch (error: any) {
        console.error(error.message);
    }
};

const showMenu = ref(false);

</script>



<template>
    <nav class="navbar navbar-expand-lg" :class="{'border-bottom': $route.path !== '/'}">
        <button class="toggle-button ms-auto" :class="{ 'active': showMenu }" aria-label="Toggle navigation"
            @click="showMenu = !showMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div v-show="showMenu" class="w-100 text-end mx-3 sm-content">
            <ul class="navbar-nav animate__animated animate__fadeInDown">
                <NuxtLink to="/blog" class="about nav-link" :class="{ 'current': $route.path === '/blog' }">Blog</NuxtLink>
                <NuxtLink to="/about" class="about nav-link" :class="{ 'current': $route.path === '/about' }">About
                </NuxtLink>
                <NuxtLink v-if="!userLoggedIn" to="/login" class="about nav-link"
                    :class="{ 'current': $route.path === '/login' }">Login
                </NuxtLink>
                <NuxtLink v-if="userLoggedIn" @click="logout" class="about nav-link">Logout</NuxtLink>
                <NuxtLink v-if="userLoggedIn" to="/dashboard" class="about nav-link">Dashboard</NuxtLink>
            </ul>
        </div>
        <div class="lg-content ms-auto mx-3">
            <ul class="navbar-nav animate__animated animate__fadeInDown">
                <NuxtLink to="/blog" class="about nav-link" :class="{ 'current': $route.path === '/blog' }">Blog</NuxtLink>
                <NuxtLink to="/about" class="about nav-link" :class="{ 'current': $route.path === '/about' }">About
                </NuxtLink>
                <NuxtLink v-if="!userLoggedIn" to="/login" class="about nav-link"
                    :class="{ 'current': $route.path === '/login' }">Login
                </NuxtLink>
                <NuxtLink v-if="userLoggedIn" to="/dashboard" class="about nav-link"
                    :class="{ 'current': $route.path === '/dashboard' }">Dashboard</NuxtLink>
                <NuxtLink v-if="userLoggedIn" @click="logout" class="about nav-link">Logout</NuxtLink>
            </ul>
        </div>
    </nav>
</template>
  


<style scoped>
ul, .sm-content, .lg-content {
    background-color: transparent;
}

.navbar {
    background-color: transparent;
}
.current {
    border-bottom: 1px solid var(--primary);
}

/* Navbar elements */
.nav-link {
    color: var(--text);
    font-size: 1.4rem;
}

.nav-link:hover {
    color: var(--primary);
    cursor: pointer;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: block;
    margin-left: 15px;
}   


.toggle-button {
    width: 60px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.toggle-button span {
    display: block;
    border-radius: 10px;
    width: 30px;
    height: 3px;
    margin: 7px;
    background-color: var(--text);
    transition: 0.7s all;
}

.toggle-button span:nth-of-type(1) {
    width: 30%;
}

.toggle-button span:nth-of-type(2) {
    width: 60%;
}

.toggle-button span:nth-of-type(3) {
    width: 30%;
}

.toggle-button.active span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotateZ(45deg) translate(8px, 6px);
}

.toggle-button.active span:nth-of-type(2) {
    transform-origin: top;
    transform: rotateZ(-45deg);
}

.toggle-button.active span:nth-of-type(3) {
    transform-origin: bottom;
    transform: translate(14px, -11px) rotateZ(45deg);
    width: 35%;
}

@media (max-width: 1000px) {
    .lg-content {
        display: none;
    }
}

@media (min-width: 1000px) {
    .toggle-button {
        display: none;
    }

    .sm-content {
        display: none;
    }
}
</style>