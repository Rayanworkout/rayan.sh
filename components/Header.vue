
<template>
    <section class="header mx-1">
        <header class="py-4 mx-auto">
            <div class="text-center">
                <img src="/img/monkey.png" alt="">
                <p class="my-2"> > Here you can find some Dev / DevOps related small tutorials and useful config files with
                    detailed comments, <span> enjoy !</span>
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

img {
    width: 160px;
    height: 160px;
    border-radius: 100px;
}

span {
    color: #4D5BCE;
}


@media (max-width: 768px) {
    header {
        max-width: 100%;
    }
}
</style>