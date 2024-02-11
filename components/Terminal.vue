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
    "linux and self-hosted stuff. Mainly python and javascript."

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
            <div class="terminal-title mx-auto">Terminal</div>
            <div class="window-buttons">
                <a class="minimize-button">
                    <Icon name="ic:baseline-minimize" />
                </a>
                <a class="maximize-button">
                    <Icon name="ic:round-crop-square" />
                </a>
                <a class="close-button">
                    <Icon name="material-symbols:close" />
                </a>
            </div>
        </div>
        <div class="menu-bar">
            <ul>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Search</li>
                <li>Help</li>
            </ul>
        </div>
        <div class="terminal-body mb-3" id="terminal-body">
            <div class="about">
                <p class="text-white"><span style="color: rgb(221, 221, 50);">rayan</span>@<span
                        style="color: #00ff00;">home</span> <span class="ps1">~ </span>{{ whoamiTypewriter }}<span
                        v-show="showCursor" class="cursor">_</span></p>
                <p class="text-white">{{ typewriter }}</p>
                <p class="text-white"><span v-show="showWave" class="text-white"><span
                            style="color: rgb(221, 221, 50);">rayan</span>@<span style="color: #00ff00;">home</span>
                    </span> <span class="ps1" v-show="showWave">~</span> {{ catTypewriter }}<span v-show="showCatCursor"
                        class="cursor">_</span>
                </p>
                <div class="mail mb-3" v-show="showEmail" @click="copyToClipboard">reach me @
                    rayan13170@protonmail.com
                </div>
                <p class="text-white" v-show="showFinalps1"><span style="color: rgb(221, 221, 50);">rayan</span>@<span
                        style="color: #00ff00;">home</span> <span class="ps1">~ <span v-show="showClipBoard">email copied
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
    border-radius: 2px;
    overflow: hidden;
    background-color: #232c32;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: none;
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
    padding-left: 70px;
}


.terminal-body {
    overflow-y: scroll;
    padding: 15px;
    height: 300px;
}

.ps1 {
    color: #00ff00;
    vertical-align: middle;
}

/* Styling scrollbar for terminal body */
.terminal-body::-webkit-scrollbar {
    width: 8px;
}

.terminal-body::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 4px;
}

.menu-bar {
    color: white;
    padding: 5px;
}

.menu-bar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu-bar ul li {
    display: inline;
    margin-right: 10px;
    font-size: 0.75rem;
    cursor: pointer;
    color: white;
    padding: 5px;
}


.menu-bar ul li:hover {
    background-color: #535353;
}


.menu-bar ul li:last-child {
    margin-right: 0;
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


}</style>
