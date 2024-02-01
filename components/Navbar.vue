
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
        <button class="toggle-button ms-auto" :class="{ 'active': showMenu }" aria-label="Toggle navigation"
            @click="showMenu = !showMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>
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
</template>


<style scoped>
.navbar {
    height: 60px;
    border-bottom: 1px solid #1E2D3D;
}

.nav-link, .navbar-brand {
    color: var(--text);
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

/* TOGGLE BUTTON */

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

/* END TOGGLE BUTTON */


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
    .toggle-button {
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