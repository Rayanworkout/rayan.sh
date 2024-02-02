
<template>
    <section class="header mx-1">
        <header class="py-4 mx-auto">
            <div class="text-center">
                <img src="/img/monkey.png" alt="">
                <p class="my-2">> Some Dev / DevOps related small tutorials and useful config files with detailed comments.
                </p>
            </div>
        </header>
    </section>
</template>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30%;
}

p {
    color: #6474ee;
}

img {
    width: 160px;
    height: 160px;
    border-radius: 100px;
}


@media (max-width: 768px) {
    header {
        max-width: 100%;
    }
}
</style>