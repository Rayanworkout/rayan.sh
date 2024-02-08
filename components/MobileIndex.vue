
<template>
    <div class="hello"><span>
            Hi all, I am
        </span>
        <h1>Rayan<span class="cursor">_</span></h1>
        <h2>> Backend developer</h2>
    </div>
    <div class="code my-5">
        <p>
            // this website showcases my projects<br>
            // they are visible on GitHub as well<br>
            // you can also check out my blog articles
        </p>
        <div class="github">
            <span style="color: #4D5BCE;" class="const">const </span>
            <span style="color: #43D9AD;">github</span> <span class="text-white">= </span>
            <a href="https://github.com/Rayanworkout" target="_blank" class="link">"<span
                    class="https">https://</span>github.com/rayanworkout"</a>
        </div>
        <div class="blog my-1">
            <span style="color: #4D5BCE;" class="const">const </span>
            <span style="color: #43D9AD;">blog</span> <span class="text-white">= </span>
            <a href="https://rayan.sh/blog" class="link">"<span class="https">https://</span>rayan.sh/blog"</a>
        </div>
        <div class="blog my-1">
            <span style="color: #4D5BCE;" class="const">const </span>
            <span style="color: #43D9AD;">projects</span> <span class="text-white">= </span>
            <a href="https://rayan.sh/blog" class="link">"<span class="https">https://</span>rayan.sh/projects"</a>
        </div>
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
    color: var(--primary);
}

.hello, .code {
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

    .hello h1,
    .cursor {
        font-size: 40px;
    }

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