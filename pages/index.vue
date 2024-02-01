

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
            <!-- gradients -->
            <div class="css-blurry-gradient-blue"></div>
            <div class="css-blurry-gradient-green"></div>
            <div class="hero">
                <div class="row">
                    <div class="col-md-6 head">
                        <span>
                            Hi all, I am
                        </span>
                        <h1>Rayan</h1>
                        <h2>> Backend Developer</h2>
                    </div>
                    <div class="col-md-6">Hello 2</div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.bg-container {
    background-color: var(--new-background);
    height: 100vh;
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

.css-blurry-gradient-blue {
    position: fixed;
    bottom: 25%;
    right: 5%;
    width: 300px;
    height: 300px;
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
    right: 30%;
    width: 300px;
    height: 300px;
    border-radius: 0% 50% 0% 50%;
    filter: blur(70px);
    background: radial-gradient(circle at 50% 50%, rgba(67, 217, 173, 1), rgba(76, 0, 255, 0));
    opacity: 0.5;
    z-index: 10;
}
</style>