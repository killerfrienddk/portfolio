<template>
    <div class="min-h-screen">
        <div class="container lg:w-[60rem] w-full mx-auto">
            <default-nav/>
            <main>
                <Nuxt/>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import DefaultNav from "~/components/default/default-nav.vue";

export default {
    name: "default-layout",
    components: {DefaultNav},
}
</script>
