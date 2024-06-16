
<template>
    <nav class="navbar navbar-expand">
        <div class="container-fluid d-flex justify-content-center">
            <div class="navbar-nav">
                <RouterLink class="nav-link" to="/" :class="{ 'current': $route.path === '/' }">Hello</RouterLink>
                <!-- <RouterLink class="nav-link mx-3" to="/projects" :class="{ 'current': $route.path === '/projects' }">
                    Projects
                </RouterLink> -->
            </div>
        </div>
    </nav>
</template>


<style scoped>

.navbar {
    height: 60px;
    border-bottom: 1px solid rgb(161, 161, 161);
}

.nav-link,
.navbar-brand {
    color: #90a2b6;
}

.current {
    border-bottom: 1px solid white;
    color: white;
}

/* HOVERS */

.nav-link:hover,
.contact:hover {
    background-color: #8f9ba874;
    color: white;
    cursor: pointer;
}

.nav-link:focus {
    color: white;
}


/* END HOVERS */

</style>