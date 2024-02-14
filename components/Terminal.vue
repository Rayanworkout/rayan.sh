<script setup lang="ts">

import { ref, onMounted } from 'vue';

const emit = defineEmits(['maximize'])

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


onMounted(() => {
    setTimeout(writeWhoami, initialDelay - 1500);
    setTimeout(typeWriter, initialDelay + 2000);
    setTimeout(typeCat, initialDelay + 13500);
});
</script>


<template>
    <div class="terminal">
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
                <i class="bi bi-folder-fill"></i> rayan - rayan@home - ~ -zsh
            </div>
        </div>
        <div class="terminal-body mb-3">
            <div class="about">
                <p class="last-login">Last login on 22/10/2023</p>
                <p class="text-white"><i class="bi bi-arrow-right-short"></i> <span class="ps1">~ </span>{{ whoamiTypewriter
                }}<span v-show="showCursor" class="cursor">_</span></p>
                <p class="text-white">{{ typewriter }}</p>
                <p class="text-white">{{ catTypewriter }}<span v-show="showCatCursor" class="cursor">_</span>
                </p>
                <div class="mail mb-3" v-show="showEmail" @click="copyToClipboard">reach me @
                    rayan13170@protonmail.com
                </div>
                <p class="text-white" v-show="showFinalps1"><span class="ps1">~ <span v-show="showClipBoard">email copied
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
    border: 1px solid #999;
    border-radius: 18px;
    overflow: hidden;
    background-color: #232c32;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: none;
    padding: 4px;
}

.terminal-body,
.terminal-title {
    font-family: 'JetBrains Mono', monospace;
}

p i {
    vertical-align: middle;
    color: #00ff00;
}

.terminal-body p {
    font-size: 0.8rem;
}

.terminal-title i, .ps1 {
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
.maximize-button:hover {
    background-color: #353535;
}

.close-button:hover {
    background-color: #ff5f56;
}

.terminal-title {
    color: white;
    padding: 5px;
    font-size: 0.9rem;
    padding-right: 100px;
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

    .infos i {
        font-size: 1.2rem;
    }

    .terminal-title,
    .window-buttons a,
    p,
    span {
        font-size: 0.8rem;
    }

    .terminal {
        width: 100%;
    }


}
</style>
