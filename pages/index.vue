

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
            <div class="hero my-5">
                <div class="head">
                    <div class="hello"><span>
                            Hi all, I am
                        </span>
                        <h1>Rayan<span class="cursor">_</span></h1>
                        <h2>> Backend developer</h2>
                    </div>
                    <div class="code my-5">
                        <div class="comments">
                            <p>
                                // This website showcases some of my work
                            </p>
                            <p>
                                // you can also check my projects on Github
                            </p>
                        </div>
                        <p class="github">
                            <span style="color: #4D5BCE;" class="const">const</span> <span
                                style="color: #43D9AD;">githubLink</span> <span class="text-white">=</span> <a
                                href="https://github.com/Rayanworkout" target="_blank"
                                class="link">"https://github.com/rayanworkout"</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.bg-container {
    background-color: var(--new-background);
    height: 110vh;
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

.link {
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


/* MEDIA QUERIES */


@media (max-width: 768px) {

    .comments p {
        font-size: 20px;
        padding-left: 1rem;
    }

    .hello h1,
    .cursor {
        font-size: 40px;
    }

    .hello h2 {
        font-size: 25px;
    }

    .github span {
        font-size: 13px;
    }

    .github a {
        font-size: 13px;
    
    }


}


/* END MEDIA QUERIES */
</style>