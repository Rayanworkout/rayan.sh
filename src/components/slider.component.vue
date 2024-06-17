<script setup>

const technologies = [
    // Programming Languages
    "python",
    "rust",
    "javascript",
    "bash",

    // Frameworks/Libraries
    "django",
    "vuejs",
    "react",
    "fastapi",

    // DevOps/CI/CD Tools
    "docker",
    "jenkins",
    "github-actions",
    "git",
    "apache",
    "linux",

    // Databases
    "mongodb",
    "postgresql"
];



</script>


<template>
    <div class="scroll-wrapper">
        <div v-for="tech in technologies" :key="tech" class="svg-container">
            <img :src="`/img/skills/${tech}.svg`" :alt="tech" class="svg-icon" />
        </div>
    </div>

</template>


<style scoped>
    .scroll-wrapper {
        display: flex;
        white-space: nowrap;
        animation: scroll 60s linear infinite;
    }

    @keyframes scroll {
        0% {
            transform: translateX(-470px);
        }

        50% {
            transform: translateX(calc(70px * 5));
        }

        100% {
            transform: translateX(-470px);
        }
    }



    /* SVG Icons */

    .svg-container {
        display: inline-block;
        margin: 10px;
    }

    .svg-icon {
        width: 65px;
        height: auto;
    }

    .svg-icon:hover {
        cursor: pointer;
    }


    @media (max-width: 768px) {

        .scroll-wrapper {
            animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
            0% {
                transform: translateX(-400px);
            }

            50% {
                transform: translateX(calc(450px));
            }

            100% {
                transform: translateX(-400px);
            }
        }
    }
</style>