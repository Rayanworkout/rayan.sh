
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const text = "> Minimalist 26 years old self-taught developer driven by interests in Web Development, " +
    "Linux, and self-hosted stuff. Mainly Python and Javascript."

const index = ref(0);

const showEmail = ref(false)
const showGithub = ref(false)

const initialDelay = 1500;  // Delay before typing starts
const delay = 50; // in milliseconds

const typewriter = ref('');

const typeWriter = () => {
    if (index.value < text.length) {
        typewriter.value += text.charAt(index.value);
        index.value++;
        setTimeout(typeWriter, delay);
    } else {
        setTimeout(() => {
            showEmail.value = true
        }, 500);
        setTimeout(() => {
            showGithub.value = true
        }, 1000);
    }
};


onMounted(() => {
    setTimeout(typeWriter, initialDelay);
});
</script>


<template>
    <div class="bg-container px-1">
        <Navbar />
        <h1 class="text-center mt-5 pb-3">whoami<span class="cursor">__</span></h1>
        <div class="about mx-auto">
            <p>{{ typewriter }}</p>

            <div v-show="showEmail" class="infos animate__animated animate__fadeInUp"><i class="bi bi-envelope px-2"></i><a
                    href="mailto:rayan13170@protonmail.com" class="mail">rayan13170@protonmail.com</a></div>
            <div v-show="showGithub" class="infos animate__animated animate__fadeInUp"><a
                    href="https://github.com/Rayanworkout" target="_blank"><i class="bi bi-github px-2"></i>Rayanworkout</a>
            </div>
        </div>
        <div>
            <NuxtLink @click="$router.go(-1)" class="btn my-btn mx-auto animate__animated animate__fadeInUp"
                v-show="showGithub">Back
            </NuxtLink>
        </div>

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