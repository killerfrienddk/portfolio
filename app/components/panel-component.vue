<template>
    <div :id="id" :class="[padding]" class="bg-[#262626] w-full mt-10">
        <slot/>
    </div>
</template>

<script setup lang="ts">
const { id, padding = "p-7" } = defineProps<{ id?: string, padding?: string }>()
</script>
