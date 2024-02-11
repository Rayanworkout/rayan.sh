
<script setup>

definePageMeta({
    title: 'Home',
    description: 'Home page of rayan.sh, welcome !',
    url: 'https://rayan.sh',
    type: 'website',
    site_name: 'rayan.sh',
    locale: 'en',
    image: 'https://rayan.sh/img/monkey.png',
    image_alt: 'programming monkey',
    keywords: 'rayan, rayanworkout, rayan.sh, rayan sh, rayanworkout.com, rayanworkout.dev, programming tutorials, portfolio, blog, projects, github, rayanworkout github, rayanworkout blog, rayanworkout projects, rayanworkout dev',
    viewport: 'width=device-width, initial-scale=1.0',

});


useHead({
    title: 'Home',
    meta: [
        {
            name: 'description',
            content: 'Home page of rayan.sh, welcome !',
        },
        {
            name: 'keywords',
            content: 'rayan, rayanworkout, rayan.sh, rayan sh, rayanworkout.com, rayanworkout.dev, programming tutorials, portfolio, blog, projects, github, rayanworkout github, rayanworkout blog, rayanworkout projects, rayanworkout dev',
        },
    ],
});

</script>


<template>
    <div class="bg-container">
        <Navbar />
        <div class="container py-5">
            <!-- gradient -->
            <div class="css-blurry-gradient-blue"></div>
            <div class="hero my-5">
                <div class="desktop">
                    <DesktopIndex />
                </div>
                <div class="mobile">
                    <MobileIndex />
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.bg-container {
    background-color: var(--new-background);
    min-height: 110vh;
}

@media (max-width: 768px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: block;
    }
}


@media (min-width: 768px) {
    .desktop {
        display: block;
    }

    .mobile {
        display: none;
    }
}
</style>