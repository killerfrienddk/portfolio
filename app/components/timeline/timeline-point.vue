<style scoped lang="scss">
.tl-item {
    position: relative;
    border-left: white 1px solid;
    padding-left: 30px;
    height: 70px;

&:last-child { 
    height: 50px;
}
    
    &::before {
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
    
    &-title {
        position: absolute;
        top: -10px;
    }

    &-detail {
        position: absolute;
        top: 18px;
        color: #d7d7d7;
        font-size: 12px
    }
}
</style>

<template>
    <li class="tl-item">
        <strong class="tl-item-title">{{title}}</strong>
        <div class="tl-item-detail">
            <div v-if="dateMoment">
                <span>{{ formatDate(startDate) }} - </span>
                <span v-if="endDate == null">Present</span>
                <span v-else>{{ formatDate(endDate) }}</span>
                <span class="mx-2">·</span>
                <span>{{ formatDuration(startDate, endDate) }}</span>
            </div>
            <div v-else><span>{{startDate}} - {{endDate}}</span></div>
            <div class="clear-both"></div>
            <span>{{detail}}</span>
        </div>
        <br>
    </li>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

type MaybeDate = string | Date | null | undefined;

defineProps<{
    title?: string | null;
    detail?: string | null;
    dateMoment?: boolean | null;
    startDate?: MaybeDate;
    endDate?: MaybeDate;
}>();

function formatDate(date: MaybeDate) {
    if (!date) return '';
    return dayjs(date).format('MMM YYYY');
}

function formatDuration(startDate: MaybeDate, endDate: MaybeDate) {
    if (!startDate) return '';

    const start = dayjs(startDate);
    const rawEnd = endDate ? dayjs(endDate) : dayjs();
    const inclusiveEnd = rawEnd.add(1, 'month');

    let totalMonths = inclusiveEnd.diff(start, 'month');
    if (totalMonths < 0) totalMonths = 0;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) return `${months} mos`;
    let result = `${years} yr${years > 1 ? 's' : ''}`;
    if (months !== 0) result += ` ${months} mos`;
    return result;
}
</script>