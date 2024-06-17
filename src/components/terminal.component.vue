<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import { getCurrentDateTime } from "../utils/getCurrentDatetime";

    const whoami = "cat ./about.txt";

    const whoamiIndex = ref(0);

    const whoamiTypewriter = ref('');

    const writeWhoami = () => {
        if (whoamiIndex.value < whoami.length) {
            whoamiTypewriter.value += whoami.charAt(whoamiIndex.value);
            whoamiIndex.value++;
            setTimeout(writeWhoami, 200);
        }
    };


    const text = "minimalist 26 years old self-taught developer driven by interests in web development, " +
        "linux and devops. Mainly python and javascript."

    const index = ref(0);

    const initialDelay = 3500;  // Delay before typing starts
    const delay = 80; // in milliseconds

    const typewriter = ref('');

    const showCursor = ref(true);

    const typeWriter = () => {
        if (index.value === 0) {
            showCursor.value = false;
        }

        if (index.value < text.length) {
            typewriter.value += text.charAt(index.value);
            index.value++;
            setTimeout(typeWriter, delay);
        }
    };


    const showEmail = ref(false);
    const showWave = ref(false);
    const showCatCursor = ref(false);
    const showClipBoard = ref(false);
    const showFinalps1 = ref(false);

    const catCommand = 'echo -n "reach me @ " && cat ./email.txt'

    const catTypewriter = ref('');

    const catIndex = ref(0);

    const typeCat = () => {
        if (catIndex.value === 0) {
            showWave.value = true;
            setTimeout(() => {
                showCatCursor.value = true;
            }, 1000);

        }
        if (catIndex.value < catCommand.length) {
            catTypewriter.value += catCommand.charAt(catIndex.value);
            catIndex.value++;
            setTimeout(typeCat, 200);
        } else {
            setTimeout(() => {
                showCatCursor.value = false;
                showEmail.value = true;
                showFinalps1.value = true;
            }, 500);
        }
    };



    const copyToClipboard = () => {
        const textToCopy = "rayan13170@protonmail.com";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                showClipBoard.value = true;
                setTimeout(() => {
                    showClipBoard.value = false;
                }, 4000);
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }
    const date = getCurrentDateTime();

    onMounted(() => {
        setTimeout(writeWhoami, initialDelay - 1500);
        setTimeout(typeWriter, initialDelay + 2000);
        setTimeout(typeCat, initialDelay + 13500);

    });
</script>


<template>
    <div class="my-5 terminal animate__animated animate__fadeInUp">
        <a href="https://github.com/Rayanworkout" class="link github-logo" target="_blank"><svg
                xmlns="http://www.w3.org/2000/svg" width="35" height="50" fill="currentColor" class="bi bi-github"
                viewBox="0 0 16 16">
                <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg></a>
        <div class="terminal-header">
            <div class="window-buttons">
                <a class="close-button">
                    <i class="bi bi-circle-fill"></i>
                </a>
                <a class="minimize-button">
                    <i class="bi bi-circle-fill"></i>
                </a>
                <a class="maximize-button">
                    <i class="bi bi-circle-fill"></i>
                </a>
            </div>
            <div class="terminal-title mx-auto">
                <i class="bi bi-folder-fill"></i> rayan <span class="home">- rayan@home - ~ -zsh</span>
            </div>
        </div>
        <div class="terminal-body mb-3">
            <div class="about">
                <p class="last-login">Last login on {{ date }} on console</p>

                <p class="text-white"><i class="bi bi-arrow-right-short"></i> <span class="ps1">~ </span>{{
                    whoamiTypewriter
                    }}<span v-show="showCursor" class="cursor">_</span></p>
                <p class="text-white">{{ typewriter }}
                </p>
                <p class="text-white"><i class="bi bi-arrow-right-short" v-show="showWave"></i> <span class="ps1"
                        v-show="showWave">~ </span> {{ catTypewriter
                    }}<span v-show="showCatCursor" class="cursor">_</span>
                </p>
                <div class="mail mb-3" v-show="showEmail" @click="copyToClipboard">reach me @
                    rayan13170@protonmail.com
                </div>
                <p class="text-white" v-show="showFinalps1"><i class="bi bi-arrow-right-short"></i> <span class="ps1">~
                        <span v-show="showClipBoard">email copied
                            clipboard, see you soon !</span></span><span class="cursor">_</span></p>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .terminal {
        width: 90%;
        max-width: 800px;
        margin: 40px auto;
        border: 1px solid #b8b8b8;
        border-radius: 15px;
        background-color: #202124;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        padding: 4px;
    }

    .terminal-header {
        border-bottom: 1px solid #b8b8b8;
    }

    .terminal-body,
    .terminal-title {
        font-family: 'JetBrains Mono', monospace;
    }

    p i {
        vertical-align: middle;
        color: #00ff00;
    }

    .terminal-body p,
    .terminal-body div,
    .terminal-body p span {
        font-size: 0.85rem;
    }

    .terminal-title i,
    .ps1 {
        color: #55a7ff;
        vertical-align: middle;
    }

    .terminal-header {
        display: flex;
    }

    .window-buttons {
        display: flex;
        justify-content: space-between;
        padding: 0 3px;
    }

    p {
        margin-bottom: 15px;
    }

    .window-buttons a {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        cursor: pointer;
        padding: 5px;
        border-radius: 80px;
    }

    .window-buttons a i {
        font-size: 0.8rem;
    }

    .close-button i {
        color: #EF6351;
    }

    .minimize-button i {
        color: #FFD460;
    }

    .maximize-button i {
        color: #00B05B;
    }

    .minimize-button:hover,
    .maximize-button:hover,
    .close-button:hover {
        background-color: #353535;
    }

    .terminal-title,
    .home {
        color: white;
        padding: 5px;
        font-size: 0.9rem;
        padding-right: 50px;
    }


    .terminal-body {
        overflow-y: scroll;
        padding: 5px;
        height: 300px;
    }


    /* Styling scrollbar for terminal body */
    .terminal-body::-webkit-scrollbar {
        width: 8px;
    }

    .terminal-body::-webkit-scrollbar-thumb {
        background-color: #666;
        border-radius: 4px;
    }

    .github-logo {
        position: absolute;
        right: 45px;
        top: -34px;
    }

    .github-logo svg {
        fill: white;
    }

    .github-logo svg:hover {
        fill: var(--primary-blue);
    }

    .github-logo::after {
        content: "Github";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.7rem;
        color: white;
    }

    


    /* ABOUT  */
    .about {
        margin-bottom: 0.5rem;
        transition: all 0.2s ease-in-out;
    }


    h1 {
        color: white;
    }

    .mail:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    p,
    p span,
    .mail {
        font-size: 0.9rem;
        text-decoration: none;
        color: white;
    }


    @media (max-width: 768px) {
        /* ABOUT */

        .about {
            width: 100%;
        }

        .mail {
            font-size: 0.85rem;
        }

        .home {
            display: none;
        }

        .terminal-title,
        .window-buttons a,
        .about p,
        span {
            font-size: 0.8rem;
        }

        .window-buttons a i {
            font-size: 0.7rem;
        }

        .terminal-header {
            padding: 0 3px;
        }

        .terminal-title {
            padding-right: 70px;
        }

        .terminal-title i,
        .last-login i {
            font-size: 0.85rem;
        }

        .terminal {
            width: 100%;
        }


    }
</style>