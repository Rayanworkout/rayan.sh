<script setup>

    import DesktopIndex from './components/desktopIndex.component.vue';
    import MobileIndex from './components/mobileIndex.component.vue';

    document.title = 'Home';

 

</script>

<template>
    <div class="bg-container">
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
        background-color: var(--background);
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