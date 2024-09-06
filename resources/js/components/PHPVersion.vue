<script setup>
defineProps({php_version: String})
</script>
<template>
    <div class="flex gap-x-2 border border-green-500 p-2">
        PHP Version: {{ php_version }}
    </div>
</template>
