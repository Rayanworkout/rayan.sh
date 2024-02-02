
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
    <nav class="navbar navbar-expand-lg">
        <NuxtLink to="/" class="navbar-brand mx-4">rayan.sh</NuxtLink>
        <div class="ms-auto mx-3" :class="{ 'active': showMenu }" aria-label="Toggle navigation"
            @click="showMenu = !showMenu">
            <div class="x-icon"><i v-show="showMenu" class="bi bi-x-lg icon"></i></div>
            <div class="hamburger-icon"><i v-show="!showMenu" class="bi bi-list icon"></i></div>
        </div>
        <div v-show="showMenu" class="w-100 text-end mx-3 sm-content">
            <NuxtLink class="nav-link mt-4" to="/" :class="{ 'current': $route.path === '/' }">_hello</NuxtLink>
            <div class="custom-border-bottom"></div>
            <NuxtLink class="nav-link" to="/about" :class="{ 'current': $route.path === '/about' }">_about-me
            </NuxtLink>
            <div class="custom-border-bottom"></div>
            <NuxtLink class="nav-link" to="#">_projects</NuxtLink>
            <div class="custom-border-bottom"></div>
            <NuxtLink class="nav-link" to="/blog" :class="{ 'current': $route.path === '/blog' }">_blog
            </NuxtLink>
            <div class="custom-border-bottom"></div>
            <a class="nav-link" href="mailto:rayan13170@protonmail.com">_contact-me</a>
            <div class="custom-border-bottom"></div>
        </div>
        <div class="container-fluid">
            <div class="w-100 mx-3 lg-content">
                <div class="navbar-nav">
                    <NuxtLink class="nav-link me-auto" aria-current="page" to="/">rayan.sh</NuxtLink>
                    <NuxtLink class="nav-link" to="/" :class="{ 'current': $route.path === '/' }">_hello</NuxtLink>
                    <NuxtLink class="nav-link px-4" to="/about" :class="{ 'current': $route.path === '/about' }">_about-me
                    </NuxtLink>
                    <NuxtLink class="nav-link" to="#">_projects</NuxtLink>
                    <NuxtLink class="nav-link px-4" to="/blog" :class="{ 'current': $route.path === '/blog' }">_blog
                    </NuxtLink>
                    <a class="nav-link contact" href="mailto:rayan13170@protonmail.com">_contact-me</a>
                </div>
            </div>
        </div>
    </nav>
    <!-- Overlay -->
    <div v-show="showMenu" class="overlay"></div>
</template>


<style scoped>
.overlay {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 22, 39, 0.95);
    z-index: 999;
}

.icon {
    font-size: 1.8rem;
    color: var(--text);
    background-color: transparent;
}

.navbar {
    height: 60px;
    border-bottom: 1px solid #1E2D3D;
}

.nav-link,
.navbar-brand {
    color: #90a2b6;
}

.contact {
    margin-left: auto;
}


/* SMALL CONTENT */

.sm-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    z-index: 1000;
}

.custom-border-bottom {
    width: 100%;
    border-bottom: 1px solid #1E2D3D;
}


/* END SMALL CONTENT */

/* HOVERS */

.nav-link:hover,
.contact:hover {
    background-color: #1e2d3d74;
    color: white;
}


/* END HOVERS */


/* MEDIA QUERIES */

@media (max-width: 1000px) {
    .lg-content {
        display: none;
    }

    .current {
        color: white;
    }
}

@media (min-width: 1000px) {

    .x-icon,
    .hamburger-icon {
        display: none;
    }

    .sm-content {
        display: none;
    }

    .navbar-brand {
        display: none;
    }

    .current {
        border-bottom: 2px solid var(--accent);
        color: white;
    }
}


/* END MEDIA QUERIES */
</style>