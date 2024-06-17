<script setup>

    const skills = [
        "docker",
        "fastapi",
        "git",
        "linux",
        "mongodb",
        "postgresql",
        "python",
    ]


</script>


<template>
    <div class="scroll-wrapper">
        <div v-for="skill in skills" :key="skill" class="svg-container">
            <img :src="`/img/skills/${skill}.svg`" :alt="skill" class="svg-icon" />
        </div>
    </div>

</template>


<style scoped>
    .scroll-wrapper {
        display: flex;
        white-space: nowrap;
        animation: scroll 40s linear infinite;
    }

    @keyframes scroll {
        0% {
            transform: translateX(-200px);
        }

        50% {
            transform: translateX(calc(200px));
        }

        100% {
            transform: translateX(-200px);
        }
    }



    /* SVG Icons */

    .svg-container {
        display: inline-block;
        margin: 10px;
    }

    .svg-icon {
        width: 50px;
        height: auto;
    }

    .svg-icon:hover {
        cursor: pointer;
    }


    @media (max-width: 768px) {

        .scroll-wrapper {
        animation: scroll 19s linear infinite;
    }

        @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        50% {
            transform: translateX(calc(150px));
        }

        100% {
            transform: translateX(0);
        }
    }
    }
</style>