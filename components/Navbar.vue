
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
        <div class="container-fluid">
            <div class="w-100 mx-3 sm-content">
                <div class="navbar-nav">
                    <NuxtLink class="nav-link me-auto" aria-current="page" to="/">rayan.sh</NuxtLink>
                    <NuxtLink class="nav-link" to="/">_hello</NuxtLink>
                    <NuxtLink class="nav-link px-4" to="/about">_about-me</NuxtLink>
                    <NuxtLink class="nav-link">_projects</NuxtLink>
                    <NuxtLink class="nav-link px-4" to="/blog">_blog</NuxtLink>
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

.nav-link {
    color: var(--text);
}

.contact {
    margin-left: auto;
}

/* HOVERS */

.nav-link:hover, .contact:hover {
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
</style>