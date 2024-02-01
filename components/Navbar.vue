
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
            <div class="w-100 text-end mx-3 sm-content">
                <div class="navbar-nav">
                    <a class="nav-link main" aria-current="page" href="#">rayan.sh</a>
                    <a class="nav-link" href="#">_hello</a>
                    <a class="nav-link px-4" href="#">_about-me</a>
                    <a class="nav-link">_projects</a>
                    <a class="nav-link px-4">_blog</a>
                    <a class="nav-link contact" href="#">_contact-me</a>
                </div>

            </div>
        </div>
    </nav>
</template>


<style scoped>

.navbar {
    height: 49px;
    border-bottom: 1px solid #1E2D3D;
}

.nav-link {
    color: var(--text);
}

.main {
    margin-right: 45px;
}

.contact {
    margin-left: auto;
}

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