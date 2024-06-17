<script setup>

    const technologies1 = [

        // Programming Languages
        "python",
        "rust",
        "javascript",
        "bash",

        // DevOps/CI/CD Tools
        "linux",
        "docker",
        "github-actions",
        "apache",

    ];

    const technologies2 = [

        // Frameworks/Libraries
        "django",
        "vuejs",
        "react",
        "fastapi",


        // DevOps/CI/CD Tools
        "git",

        // Databases
        "mongodb",
        "postgresql"
    ];



</script>


<template>
    <div class="scroll-wrapper">
        <div v-for="tech in technologies1" :key="tech" class="svg-container">
            <img :src="`/img/skills/${tech}.svg`" :alt="tech" class="svg-icon" />
        </div>
    </div>
    <div class="scroll-wrapper2">
        <div v-for="tech in technologies2" :key="tech" class="svg-container">
            <img :src="`/img/skills/${tech}.svg`" :alt="tech" class="svg-icon" />
        </div>
    </div>

</template>


<style scoped>
    .scroll-wrapper {
        display: flex;
        white-space: nowrap;
        animation: scroll 20s linear infinite;
    }

    .scroll-wrapper2 {
        display: flex;
        white-space: nowrap;
        animation: scroll2 20s linear infinite;
    }

    @keyframes scroll {
        0% {
            transform: translateX(-300px);
        }

        50% {
            transform: translateX(100px);
        }

        100% {
            transform: translateX(-300px);
        }
    }

    @keyframes scroll2 {
        0% {
            transform: translateX(400px);
        }

        50% {
            transform: translateX(-150px);
        }

        100% {
            transform: translateX(400px);
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