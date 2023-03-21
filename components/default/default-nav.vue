<style scoped lang="scss">
nav {
    background-color: #262626;
}

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
    }
}
</style>

<template>
    <nav class="flex justify-between mt-6 p-8 py-2">
        <!--            <button class="px-4">
                    <font-awesome-icon class="text-white" size="lg" icon="fa-solid fa-bars"/>
                </button>-->
        <h1 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-red-500">{{$const.fullName}}</h1>
        <ul class="text-white float-right font-semibold">
            <li><nuxt-link to="#about">About</nuxt-link></li>
            <li><nuxt-link to="#resume">Resume</nuxt-link></li>
            <li><nuxt-link to="#portfolio">Portfolio</nuxt-link></li>
            <li><nuxt-link to="#contact">Contact</nuxt-link></li>
        </ul>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "default-nav",
    data() {
        return {}
    },
    methods: {},
})
</script>
