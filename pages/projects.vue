
<script setup lang="ts">

</script>


<template>
    <div class="bg-container px-1">
        <Navbar />
        <h1 class="text-center mt-5">ls projects/<span class="cursor">__</span></h1>


    </div>
</template>

<style scoped>
.bg-container {
    background-color: var(--new-background);
    width: 100%;
    min-height: 1000px;
}


.about {
    width: 60%;
    text-align: center;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 0.5rem;
    transition: all 0.2s ease-in-out;
    /* background-color: rgba(0, 0, 0, 0.55); */
}

p,
.infos,
.infos a,
.infos i {
    background-color: transparent;
    color: white;

}

h1 {
    color: white;
}

.infos {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.infos a {
    text-decoration: none;
    color: var(--text-color);
}

.infos a:hover {
    color: var(--primary);
}

.infos i {
    font-size: 1.3rem;
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


@media (max-width: 768px) {
    .about {
        width: 100%;
    }

    .mail {
        font-size: 0.85rem;
    }

    .infos i {
        font-size: 1.2rem;
    }
}
</style>