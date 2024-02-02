

<template>
    <div class="my-container">
        <Navbar />
        <div class="text-center main">
            <h1>404</h1>
            <h4>Could not find this page<span class="cursor">_</span></h4>
            <div>
                <NuxtLink to="/" class="btn my-btn mx-auto">Home</NuxtLink>
            </div>
        </div>
    </div>
</template>


<style scoped>
.my-container {
    background-color: var(--new-background);
    height: 100vh;
}

h1 {
    color: var(--primary)
}

.main {
    padding-top: 10rem;
    color: white;
}

.my-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    padding: 0.5rem;
    width: 60px;
    border-radius: 10px;
}

.my-btn:hover {
    border-color: var(--text);
    background-color: transparent;
    cursor: pointer;
}
</style>