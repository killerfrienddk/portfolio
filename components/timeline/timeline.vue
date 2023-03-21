<style scoped lang="scss">
.tl-container {
    font-family: "Roboto", sans-serif;
    margin: auto;
    display: block;
    position: relative;
}

.tl-container ul.tl {
    padding: 0;
    width: 100%;
}

.tl-container ul.tl li {
    list-style: none;
    border-left: 1px solid white;
    padding: 0 0 70px 30px;
    position: relative;

    &:last-child {
        padding: 0 0 50px 30px;
    }
}

.tl-container ul.tl li::before {
    position: absolute;
    left: -6px;
    top: -5px;
    content: " ";
    border-radius: 500%;
    background: white;
    height: 11px;
    width: 11px;
    transition: all 500ms ease-in-out;
}

.tl-container ul.tl li:hover::before {
    border-color: #258CC7;
    transition: all 1000ms ease-in-out;
}

ul.tl li .item-title {
}

ul.tl li ::v-deep .item-detail {
    color: #d7d7d7;
    font-size: 12px;
}
</style>

<template>
    <div>
        <div class="tl-container">
            <ul class="tl">
                <slot/>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "timeline",
}
</script>
