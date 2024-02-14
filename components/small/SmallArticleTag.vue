
<script setup lang="ts">

defineProps<{ tag: string }>()

</script>


<template>
    <div class="tag">{{ tag }}</div>
</template>


<style scoped>
.tag {
    font-family: 'JetBrains Mono', 'monospace';
    font-size: 0.7em;
    font-weight: 600;
    border: 1px solid var(--text);
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    margin: 5px;
    width: fit-content;
}

.tag.active {
    background-color: var(--primary);
    color: var(--background);
}


.tag:hover {
    border-color: white;
    cursor: pointer;
}
</style>