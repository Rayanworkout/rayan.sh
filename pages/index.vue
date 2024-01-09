

<template>
    <div class="bg-container">
        <NavbarIndex />
        <div class="container py-5">
            <NuxtLink to="/" class="navbar-brand title">Rayan.sh</NuxtLink>
            <h1 class="text-center">Coming Soon ...</h1>
        </div>
    </div>
</template>


<style scoped>

h1 {
    background-color: transparent;
    padding-top: 80px;
    font-size: 70px;
    font-weight: 500;
}
.title {
    font-size: 3rem;
    font-weight: 600;
    color: var(--text);
    background-color: transparent;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
}

.bg-container {
    width: 100%;
    height: 100vh;
    background-image: url('/img/checks.jpg');
    background-size: cover;
    background-position: center;
}


@media (max-width: 768px) {
    h1 {
        background-color: transparent;
        padding-top: 80px;
        font-size: 50px;
        font-weight: 500;
    }
}
</style>