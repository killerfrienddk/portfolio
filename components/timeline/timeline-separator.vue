<style scoped lang="scss">
.tl-item {
    padding-left: 16px !important;
    padding-bottom: 32px !important;
    padding-top: 52px !important;
    position: relative;

    & > hr {
        width: 150px;
        position: absolute;
        opacity: 1;
        top: 45%;
        transform: translateY(-50%);
        height: 2px;
        z-index: 1;
    }

    & > span {
        position: absolute;
        top: 44%;
        left: 28px;
        z-index: 2;
        transform: translateY(-50%);
        font-size: 14px;
        background-color: #262626;
        padding: 0 2px 0 2px;
    }
}
</style>

<template>
    <ul>
        <li class="tl-item">
            <span class="font-extralight text-yellow-600">{{ title }}</span>
            <hr/>
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    name: "timeline-separator",
    props: {
        title: {
            default: null,
        },
    }
}
</script>
