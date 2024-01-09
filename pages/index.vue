

<script setup lang="ts">

const text = "Coming Soon ..."

const index = ref(0);
const progressBar = ref('0')

const initialDelay = 500;  // Delay before typing starts
const delay = 200; // in milliseconds

const typewriter = ref('');

const typeWriter = () => {
    if (index.value < text.length) {
        typewriter.value += text.charAt(index.value);
        index.value++;
        setTimeout(typeWriter, delay);

        setInterval(() => {
            progressBar.value = String(index.value / text.length * 60)
        }, 100);
    };
};

onMounted(() => {
    setTimeout(typeWriter, initialDelay);
});

</script>





<template>
    <div class="bg-container">
        <NavbarIndex />
        <div class="container py-5">
            <NuxtLink to="/" class="navbar-brand title">Rayan.sh<span class="cursor">__</span></NuxtLink>
            <h1 class="text-center">{{ typewriter }}</h1>
            <div class="progress" :style="{ '--progress': `${progressBar}%` }">
                <div class="bar"></div>
            </div>
            <div class="cta">
                <NuxtLink to="/blog" class="cta">Check my blog <i class="bi bi-box-arrow-up-right"></i>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<style scoped>
body {
    background: black;
}

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

.cta,
.cta i {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    background-color: transparent;
    text-decoration: none;
    padding: 5px;
}

.cta:hover,
.cta i:hover {
    color: var(--primary);
    background-color: transparent;
    text-decoration: none;
    padding: 5px;
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



/* Progress bar  */

.progress {
    /* --progress: 60%; */

    width: 30%;
    height: 40px;
    margin: 4em auto;
    border: 1px solid #fff;
    padding: 8px 10px;
    box-shadow: 0 0 10px #aaa;
}

.progress .bar {
    width: var(--progress);
    height: 100%;
    background: linear-gradient(#86bbe4, #6096c3, #86bbe4);

    background-repeat: repeat;
    box-shadow: 0 0 10px 0px rgb(0, 0, 0);
    animation:
        shine 4s ease-in infinite,
        end 1s ease-out 1 7s;
    transition: width 3s ease 3s;
}

@property --progress {
    syntax: "<length>";
    initial-value: 0%;
    inherits: true;
}

@keyframes shine {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: 0 50px;
    }
}



@media (max-width: 768px) {
    h1 {
        background-color: transparent;
        padding-top: 50px;
        font-size: 50px;
        font-weight: 500;
    }

    .progress {
        width: 90%;
        height: 30px;
    }
}
</style>