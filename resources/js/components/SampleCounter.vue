<script setup>
import { ref } from 'vue'

const counter = ref(0)
setInterval(() => {
    counter.value++
}, Math.floor(Math.random() * 1000))
</script>
<template>
    <div class="flex gap-x-2 border border-green-500 p-2">
        <dt class="font-bold text-gray-200">Inductor Sample Counter:</dt>
        <dd>{{ counter }}</dd>
    </div>
</template>
