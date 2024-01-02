
<script setup lang="ts">

defineProps<{ category: string }>()

</script>


<template>
    <a href="#" class="category">{{ category }}</a>
</template>


<style scoped>
.category {
    font-size: 0.7em;
    font-weight: 600;
    border: 1px solid var(--text);
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
    color: var(--text);
    margin: 5px;
}


.category:hover {
    color: var(--primary);
    border-color: var(--primary);
    cursor: pointer;
}

.category.active {
    color: var(--primary);
    border-color: var(--primary);
    cursor: pointer;
}


</style>