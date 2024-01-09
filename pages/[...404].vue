

<template>
    <div class="container py-5 my-5">
        <div class="text-center">
            <h1>404</h1>
            <h4>Could not find this page <span class="cursor">_</span></h4>
            <div>
                <Transition name="back">
                    <NuxtLink to="/" class="btn my-btn mx-auto">Home</NuxtLink>
                </Transition>
            </div>
        </div>
    </div>
</template>


<style scoped>

.container {
    background-color: var(--background);
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