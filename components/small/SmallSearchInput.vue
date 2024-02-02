

<script setup lang="ts">

const emit = defineEmits(['inputUpdate'])


const handleInput = (e: any) => {
    emit('inputUpdate', e.target.value)
}

</script>



<template>
    <div class="container">
        <div class="text-center">
            <input type="text" placeholder="Search ..." @keyup="handleInput">
        </div>
    </div>
</template>
  


<style scoped>
input {
    border: 1px solid var(--text);
    background-color: var(--new-background);

    border-radius: 5px;
    padding: 5px;
    width: 15%;
    max-width: 500px;
    color: white;
}

input::placeholder {
    color: var(--text);
}

input:focus {
    outline: none;
}

@media (max-width: 768px) {
    input {
        width: 50%;
    }
}
</style>