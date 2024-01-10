

<template>
    <NavbarArticle />
    <div class="my-container">
        <div class="text-center py-3">
            <h1>404</h1>
            <h4>Could not find this page <span class="cursor">_</span></h4>
            <div class="img py-3">
                <img src="/img/404.jpg" alt="compass in hand">
            </div>
            <div>
                <NuxtLink to="/" class="btn my-btn mx-auto">Home</NuxtLink>
            </div>
        </div>
    </div>
</template>


<style scoped>
.my-container {
    background-color: var(--background);
    height: 100vh;
}

.img img {
    width: 500px;
    border-radius: 10px;
}

.my-btn {

    display: flex;
    justify-content: center;
    align-items: center;
    border-color: var(--text);
    text-decoration: none;
    color: var(--text-color);
    padding: 8px;
    width: 72px;
    transition: 1s;
    border-radius: 10px;
}

.my-btn:hover {
    transform: scale(1.05);
    border-color: var(--primary);
    cursor: pointer;
}
</style>