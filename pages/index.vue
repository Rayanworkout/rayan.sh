

<script setup lang="ts">

const text = "Coming Soon ..."

const index = ref(0);
const progressBar = ref('0')
const showLink = ref(false)

const initialDelay = 500;  // Delay before typing starts
const delay = 200; // in milliseconds

const typewriter = ref('');

const typeWriter = () => {
    if (index.value < text.length) {
        typewriter.value += text.charAt(index.value);
        index.value++;
        setTimeout(typeWriter, delay);
    } else {
        showLink.value = true
    };
};


onMounted(() => {
    setTimeout(typeWriter, initialDelay);
    setInterval(() => progressBar.value = String(60), 100)
});

</script>





<template>
    <div class="bg-container">
        <Navbar />
        <div class="container py-5">

        </div>
    </div>
</template>


<style scoped>

.bg-container {
    background-color: var(--new-background);
    height: 100vh;
}


</style>