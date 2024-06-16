<script setup>
    import MacTerminal from './macTerminal.component.vue';
</script>

<template>
    <div class="hello"><span>
            Hi all, I am
        </span>
        <h1>Rayan<span class="cursor">_</span></h1>
        <h2>> Backend developer</h2>
        <h2>> Devops engineer</h2>
    </div>
    <div>
        <MacTerminal />
    </div>
</template>


<style scoped>
    h1 {
        font-size: 58px;
        line-height: 1;
        color: #E5E9F0;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    h2 {
        font-size: 32px;
        line-height: 1;
        color: white;
    }

    .hello,
    .code {
        margin-left: 20px;
    }

    .link,
    .link span {
        color: #E99287;
        text-decoration-line: underline;
        text-underline-offset: 4px;
    }

    /* MEDIA QUERIES */

    @media (max-width: 768px) {

        .hello h2 {
            font-size: 25px;
        }

        .https {
            display: none;
        }

        .github span,
        .github a,
        .blog span,
        .blog a {
            font-size: 18px;
        }


    }


    /* END MEDIA QUERIES */
</style>