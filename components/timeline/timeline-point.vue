<style scoped lang="scss">
.tl-item {
    position: relative;
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
                <span>{{getDates(startDate)}} - </span>
                <span v-if="endDate == null">Present</span>
                <span v-else>{{getDates(endDate)}}</span>
                · <span>{{getDatesCustom(startDate, endDate)}}</span>
            </div>
            <div v-else><span>{{startDate}} - {{endDate}}</span></div>
            <div class="clear-both"></div>
            <span>{{detail}}</span>
        </div>
    </li>
</template>

<script lang="ts">
export default {
    name: "timeline-point",
    props: {
        title: {
            default: null,
        },
        detail: {
            default: null,
        },
        dateMoment:{
            default: false,
        },
        startDate: {
            default: null,
        },
        endDate: {
            default: null,
        },
    },
    methods: {
        getDates(date) {
            return this.$moment(date).format("MMM YYYY");
        },
        getDatesCustom(startDate, endDate) {
            const newStartDate = this.$moment(startDate);
            console.log(this.$moment(endDate || this.$moment()))
            const newEndDate = this.$moment(endDate || this.$moment()).add(1, 'month').endOf('month');
            console.log(newEndDate)
            const duration = this.$moment.duration(newEndDate.diff(newStartDate));

            const years = duration.years();
            const months = duration.months();

            return years + ' yr ' + months + ' mos'
        },
    }
}
</script>
