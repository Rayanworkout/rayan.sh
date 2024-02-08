

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
    <div class="bg-container">
        <Navbar />
        <div class="container py-5">
            <!-- gradients -->
            <div class="css-blurry-gradient-blue"></div>
            <div class="css-blurry-gradient-green"></div>
            <div class="hero my-5">
                <div class="head">
                    <div class="hello"><span>
                            Hi all, I am
                        </span>
                        <h1>Rayan<span class="cursor">_</span></h1>
                        <h2>> Backend developer</h2>
                    </div>
                    <div class="code my-5">
                        <p>
                            // this website showcases my projects<br>
                            // they are visible on GitHub as well<br>
                            // you can also check out my blog articles
                        </p>
                        <div class="github">
                            <span style="color: #4D5BCE;" class="const">const </span>
                            <span style="color: #43D9AD;">github</span> <span class="text-white">= </span>
                            <a href="https://github.com/Rayanworkout" target="_blank" class="link">"<span
                                    class="https">https://</span>github.com/rayanworkout"</a>
                        </div>
                        <div class="blog my-1">
                            <span style="color: #4D5BCE;" class="const">const </span>
                            <span style="color: #43D9AD;">blog</span> <span class="text-white">= </span>
                            <a href="https://rayan.sh/blog" class="link">"<span
                                    class="https">https://</span>rayan.sh/blog"</a>
                        </div>
                        <div class="blog my-1">
                            <span style="color: #4D5BCE;" class="const">const </span>
                            <span style="color: #43D9AD;">projects</span> <span class="text-white">= </span>
                            <a href="https://rayan.sh/blog" class="link">"<span
                                    class="https">https://</span>rayan.sh/projects"</a>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="text-center mt-5 pb-3">whoami<span class="cursor">__</span></h1>
            <div class="about mx-auto">
                <p>{{ typewriter }}</p>

                <div v-show="showEmail" class="infos animate__animated animate__fadeInUp"><i
                        class="bi bi-envelope px-2"></i><a href="mailto:rayan13170@protonmail.com"
                        class="mail">rayan13170@protonmail.com</a></div>
                <div v-show="showGithub" class="infos animate__animated animate__fadeInUp"><a
                        href="https://github.com/Rayanworkout" target="_blank"><i
                            class="bi bi-github px-2"></i>Rayanworkout</a>
                </div>
            </div>
            <div>
                <NuxtLink @click="$router.go(-1)" class="btn my-btn mx-auto animate__animated animate__fadeInUp"
                    v-show="showGithub">Back
                </NuxtLink>
            </div>

        </div>
    </div>
</template>


<style scoped>
.bg-container {
    background-color: var(--new-background);
}

.head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


h1 {
    font-size: 58px;
    line-height: 1;
    color: #E5E9F0;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.head span {
    font-size: 18px;
    line-height: 1;
    color: #E5E9F0;
}

.head h2 {
    font-size: 32px;
    line-height: 1;
    color: var(--primary);
}

.link,
.link span {
    color: #E99287;
    text-decoration-line: underline;
    text-underline-offset: 4px;
}

.css-blurry-gradient-blue {
    position: fixed;
    bottom: 25%;
    right: 5%;
    width: 200px;
    height: 200px;
    border-radius: 0% 0% 50% 50%;
    rotate: 10deg;
    filter: blur(70px);
    background: radial-gradient(circle at 50% 50%, rgba(77, 91, 206, 1), rgba(76, 0, 255, 0));
    opacity: 0.5;
    z-index: 10;
}

.css-blurry-gradient-green {
    position: absolute;
    top: 20%;
    right: 20%;
    width: 200px;
    height: 200px;
    border-radius: 0% 50% 0% 50%;
    filter: blur(70px);
    background: radial-gradient(circle at 50% 50%, rgba(67, 217, 173, 1), rgba(76, 0, 255, 0));
    opacity: 0.5;
    z-index: 10;
}


/* ABOUT  */
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


/* MEDIA QUERIES */


@media (max-width: 768px) {

    .hello h1,
    .cursor {
        font-size: 40px;
    }

    .hello h2 {
        font-size: 25px;
    }

    .https {
        display: none;
    }

    .github span,
    .github a,
    .blog span,
    .blog a {
        font-size: 16px;
    }

    /* ABOUT */

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


/* END MEDIA QUERIES */</style>