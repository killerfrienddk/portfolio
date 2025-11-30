<template>
    <div>
        <about/>
        <resume/>
        <skills/>
        <portfolio/>
        <copyright/>
        <div class="w-full mt-7"></div>
    </div>
</template>

<script lang="ts">
import About from "~/components/index/about.vue";
import Resume from "~/components/index/resume.vue";
import Skills from "~/components/index/skills.vue";
import Portfolio from "~/components/index/portfolio.vue";
import Copyright from "~/components/index/copyright.vue";

export default {
    name: "index",
    components: {About, Resume, Skills, Portfolio, Copyright},
    layout: "default-layout",
}
</script>
