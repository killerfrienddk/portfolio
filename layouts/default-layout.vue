<template>
    <div class="min-h-screen">
        <div class="container mx-auto w-[60rem]">
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
