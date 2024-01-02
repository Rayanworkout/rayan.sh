
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

definePageMeta({
  key: route => route.fullPath
});

const text = "Minimalist 26 years old self-taught developer driven by interests in Web Development, " +
    "Linux, and self-hosted stuff. Mainly Python and Javascript."

const index = ref(0);

const initialDelay = 1500;  // Delay before typing starts
const delay = 50; // in milliseconds

const typewriter = ref('');


const typeWriter = () => {
    if (index.value < text.length) {
        typewriter.value += text.charAt(index.value);
        index.value++;
        setTimeout(typeWriter, delay);
    }
};


onMounted(() => {
    setTimeout(typeWriter, initialDelay);
});

const showCursor = computed(() => index.value < text.length);

</script>


<template>
    <div class="container">
        <h1 class="text-center mt-5 pt-5 pb-3">About Me<span class="cursor">__</span></h1>
        <div class="about mx-auto">
            <p>{{ typewriter }} <span v-show="showCursor" class="cursor">_</span></p>

            <div class="infos"><i class="bi bi-envelope px-2"></i><a href="mailto:rayan13170@protonmail.com"
                    class="mail">rayan13170@protonmail.com</a></div>
            <div class="infos"><a href="https://github.com/Rayanworkout" target="_blank"><i
                        class="bi bi-github px-2"></i>Rayanworkout</a>
            </div>
        </div>
        <div>
            <Transition name="back">
                <NuxtLink to="/" class="btn my-btn mx-auto" v-show="!showCursor">Back</NuxtLink>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.about {
    width: 60%;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease-in-out;
}

.about:hover {
    transform: scale(1.02);
    border-color: var(--primary);
    cursor: pointer;
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
    color: var(--text-color);
    padding: 0.5rem;
    width: 60px;
    transition: 1s;
    border-radius: 10px;
}

.my-btn:hover {
    transform: scale(1.05);
    border-color: var(--primary);
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