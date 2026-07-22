import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

export default defineNuxtPlugin(() => {
    dayjs.extend(duration)
})