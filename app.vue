<template>
    <div>
        <div v-if="$route.path !== '/'">
            <Navbar />
        </div>
        <NuxtPage />
    </div>
</template>


