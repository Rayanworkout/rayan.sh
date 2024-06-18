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
        "ansible",

    ];

    const technologies2 = [

        // Frameworks/Libraries
        "django",
        "vuejs",
        "react",
        "fastapi",


        // DevOps/CI/CD Tools
        "git",
        "jenkins",

        // Databases
        "mongodb",
        "postgresql"
    ];


</script>


<template>
    <div class="slider-container">
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
    </div>

</template>


<style scoped>
    .slider-container {
        overflow: hidden;
        width: 90vh;
    }

    .scroll-wrapper {
        display: flex;
        white-space: nowrap;
        animation: scroll 40s linear infinite;
    }

    .scroll-wrapper2 {
        display: flex;
        white-space: nowrap;
        animation: scroll2 40s linear infinite;
    }

    @keyframes scroll {
        0% {
            transform: translateX(-300px);
        }

        50% {
            transform: translateX(150px);
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
        transition: transform 0.3s ease;
    }

    .svg-icon:hover {
        cursor: pointer;
        transform: scale(1.1);
    }


    @media (max-width: 768px) {

        .slider-container {
            width: 50vh;
        }

        .scroll-wrapper {
            animation: scroll 30s linear infinite;
        }

        .scroll-wrapper2 {
            animation: scroll2 30s linear infinite;
        }

        .svg-icon {
            width: 50px;
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
                transform: translateX(300px);
            }

            50% {
                transform: translateX(-200px);
            }

            100% {
                transform: translateX(300px);
            }
        }
    }
</style>