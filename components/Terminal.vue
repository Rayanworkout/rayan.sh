<script setup lang="ts">

import { ref, onMounted } from 'vue';


const whoami = "whoami";

const whoamiIndex = ref(0);

const whoamiTypewriter = ref('');

const writeWhoami = () => {
    if (whoamiIndex.value < whoami.length) {
        whoamiTypewriter.value += whoami.charAt(whoamiIndex.value);
        whoamiIndex.value++;
        setTimeout(writeWhoami, 200);
    }
};


const text = "minimalist 26 years old self-taught developer driven by interests in Web Development, " +
    "Linux, and self-hosted stuff. Mainly Python and Javascript."

const index = ref(0);

const initialDelay = 5000;  // Delay before typing starts
const delay = 50; // in milliseconds

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

const catCommand = 'echo -n "reach me @ " && cat ./email.txt;'

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
        }, 1000);
    }
};



onMounted(() => {
    setTimeout(writeWhoami, initialDelay - 1500);
    setTimeout(typeWriter, initialDelay);
    setTimeout(typeCat, initialDelay + 7800);
});

</script>


<template>
    <div class="terminal">
        <div class="terminal-header text-center text-white">
            Terminal
        </div>
        <div class="terminal-body py-4 mb-4" id="terminal-body">
            <div class="about">
                <p class="text-white"><span style="color: rgb(221, 221, 50);">rayan</span>@<span
                        style="color: #43D9AD;">home</span> <span class="ps1">~ </span>{{ whoamiTypewriter }}<span
                        v-show="showCursor" class="cursor">_</span></p>
                <p class="text-white">{{ typewriter }}</p>
                <p class="text-white"><span v-show="showWave" class="text-white"><span
                            style="color: rgb(221, 221, 50);">rayan</span>@<span style="color: #43D9AD;">home</span>
                    </span> <span class="ps1" v-show="showWave">~</span> {{ catTypewriter }}<span v-show="showCatCursor"
                        class="cursor">_</span>
                </p>
                <div class="infos mb-4" v-show="showEmail"><a class="mail" href="#">reach me @ rayan13170@protonmail.com</a>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.terminal {
    width: 100%;
    max-width: 800px;
    margin: 40px auto;
    border: 1px solid #999;
    border-radius: 5px;
    overflow: hidden;
}

.terminal-header {
    background-color: #353535;
    padding: 5px;
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

/* ABOUT  */
.about {
    margin-bottom: 0.5rem;
    transition: all 0.2s ease-in-out;
}


h1 {
    color: white;
}

.infos a:hover {
    color: var(--primary);
}

.infos i {
    font-size: 1.3rem;
}

p,
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


}
</style>
