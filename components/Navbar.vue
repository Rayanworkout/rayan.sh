

<template>
    <nav class="navbar border-bottom">
        <div class="container-fluid">
            <div class="d-flex justify-content-start mx-2">
                <NuxtLink to="/" class="navbar-brand mr-auto">Rayan.sh</NuxtLink>

            </div>
            <div class="d-flex justify-content-end mx-3">
                <NuxtLink to="/about" class="about">About</NuxtLink>
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
}

.navbar-brand:hover {
    color: var(--primary);

}

.about:hover {
    color: var(--primary);
    transform: scale(1.05);
}
</style>