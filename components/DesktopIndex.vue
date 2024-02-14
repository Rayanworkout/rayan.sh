

<script setup lang="ts">

const showMacTerminal = ref(true);

</script>

<template>
    <div class="row">
        <div class="col-md-4">
            <div class="head">
                <div class="hello"><span style="font-size: 18px;">
                        Hi all, I am
                    </span>
                    <h1>Rayan<span class="cursor">_</span></h1>
                    <h2>> Backend developer</h2>
                </div>
                <div class="code my-5">
                    <p>
                        // this website showcases my projects<br>
                        // they are visible on GitHub as well<br>
                        // you can also check out my blog
                    </p>
                    <div class="github">
                        <span style="color: #6d5ae7;" class="const">const </span>
                        <span style="color: #43D9AD;">github</span> <span class="text-white">= </span>
                        <a href="https://github.com/Rayanworkout" target="_blank" class="link">"github.com/rayanworkout"</a>
                    </div>
                    <div class="blog my-1">
                        <span style="color: #6d5ae7;" class="const">const </span>
                        <span style="color: #43D9AD;">blog</span> <span class="text-white">= </span>
                        <a href="https://rayan.sh/blog" class="link">"rayan.sh/blog"</a>
                    </div>
                    <div class="blog my-1">
                        <span style="color: #6d5ae7;" class="const">const </span>
                        <span style="color: #43D9AD;">projects</span> <span class="text-white">= </span>
                        <a href="https://rayan.sh/projects" class="link">"rayan.sh/projects"</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <MacTerminal @change="showMacTerminal = !showMacTerminal" v-show="showMacTerminal"/>
            <LinuxTerminal v-if="!showMacTerminal" />
        </div>
    </div>
</template>


<style scoped>
.head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


h1 {
    font-size: 55px;
    line-height: 1;
    color: #E5E9F0;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.head span,
.head a {
    font-size: 17px;
    line-height: 1;
}

.head h2 {
    font-size: 32px;
    line-height: 1;
    color: var(--primary);
}

.link,
.link span {
    color: #E99287;
    text-decoration-line: underline;
    text-underline-offset: 4px;
}

p,
.hello span {
    color: #c8c8c8b9;
    font-family: 'JetBrains Mono', 'monospace';
}

.change-terminal {
    color: #E5E9F0;
}

.github span,
.github a,
.blog span,
.blog a {
    font-family: 'JetBrains Mono', 'monospace';
}

/* MEDIA QUERIES */


@media (max-width: 768px) {

    .hello h1,
    .cursor {
        font-size: 40px;
    }

    .hello h2 {
        font-size: 25px;
    }

    .github span,
    .github a,
    .blog span,
    .blog a {
        font-size: 16px;
    }

}


/* END MEDIA QUERIES */
</style>