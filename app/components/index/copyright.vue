<style scoped lang="scss">
span {
    font-size: 12px;
}
</style>

<template>
    <panel-component v-show="copyrightDates != ''" padding="p-3">
        <div class="text-center">
            <span>CopyRight © {{copyrightDates}} {{$constants.fullName}} All Rights Reserved</span>
        </div>
    </panel-component>
</template>

<script setup lang="ts">
let copyrightDates = ref('');

function getCopyrightDates() {
    let dayjs = useDayjs();
    let year = dayjs().year();
    
    copyrightDates.value = year === 2023 ? "" : "2023-" + year;
}

onMounted(() => {
    getCopyrightDates();
});
</script>
