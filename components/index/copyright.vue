<style scoped lang="scss">
span {
    font-size: 12px;
}
</style>

<template>
    <panel-component>
        <div class="text-center">
            <span>CopyRight © {{date}} Simon Hjorthøj All Rights Reserved</span>
        </div>
    </panel-component>
</template>

<script lang="ts">
export default {
    name: "copyright",
    data() {
        return {
            date: "",
        }
    },
    methods: {
        getDate() {
            let year = this.$moment().year();
            this.date = year === 2023 ? "" : "2023-" + year;
        }
    },
    async mounted() {
        this.getDate();
    },
}
</script>
