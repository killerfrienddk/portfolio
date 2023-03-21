<style scoped lang="scss">

</style>

<template>
    <div>
        <about/>
        <resume/>
        <portfolio/>
        <contact/>
        <copyright/>
        <div class="w-full mt-10"></div>
    </div>
</template>

<script lang="ts">
import About from "~/components/index/about.vue";
import Resume from "~/components/index/resume.vue";
import Portfolio from "~/components/index/portfolio.vue";
import Contact from "~/components/index/contact.vue";
import Copyright from "~/components/index/copyright.vue";

export default {
    name: "index",
    components: {Copyright, Contact, Portfolio, Resume, About},
    layout: "default-layout",
}
</script>
