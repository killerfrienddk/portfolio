<style scoped lang="scss">
h1 {
    line-height: 40px;
}

ul {
    & > li {
        float: left;
        line-height: 40px;
        padding-right: 8px;
        padding-left: 8px;
        font-size: 12px;
        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }

        > a {
            font-size: 14px;
        }
    }
}
</style>

<template>
    <nav class="flex flex-col bg-[#262626] sm:flex-row justify-between mt-6 px-7 py-2">
        <h1 class="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-600 to-red-500">{{$constants.fullName}}</h1>
        <ul class="text-white float-right font-semibold">
            <li><nuxt-link to="/#about">About</nuxt-link></li>
            <li><nuxt-link to="/#resume">Resume</nuxt-link></li>
            <li><nuxt-link to="/#portfolio">Portfolio</nuxt-link></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
const { $constants } = useNuxtApp();
</script>
