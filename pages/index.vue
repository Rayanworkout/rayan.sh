
import type DesktopIndexVue from '~/components/DesktopIndex.vue';



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