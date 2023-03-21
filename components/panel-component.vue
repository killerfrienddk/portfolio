<style scoped lang="scss">
    .panel {
        background-color: #262626;
    }
</style>

<template>
    <div :id="id" :class="[padding]" class="panel w-full mt-10">
        <slot/>
    </div>
</template>

<script lang="ts">
import {GUID} from "~/plugins/guid";

export default {
    name: "panel-component",
    props: {
        id: {
            default: new GUID().newGuid(),
        },
        padding: {
            default: "p-7",
        }
    }
}
</script>
