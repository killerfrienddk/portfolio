// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    modules: [
        'dayjs-nuxt',
        '@vesp/nuxt-fontawesome',
    ],
    components: [
        {path: '~/components', extensions: ['vue']},
        {path: '~/components/core', extensions: ['vue']},
        {path: '~/components/index', extensions: ['vue']},
        {path: '~/components/timeline', extensions: ['vue']},
    ],
    css: ['~/assets/styles/main.css'],
    dayjs: {
        plugins: ['relativeTime', 'utc', 'duration'],
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
        optimizeDeps: {
            include: [
                '@vue/devtools-core',
                '@vue/devtools-kit',
                'dayjs',
                'dayjs/plugin/relativeTime',
                'dayjs/plugin/updateLocale',
                'dayjs/plugin/duration',
                'dayjs/plugin/utc',
            ]
        }
    },
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true}
})
