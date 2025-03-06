// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: process.env.NUXT_APP_BASE_URL || '/',
    },

    devtools: { enabled: true },

    extends: ['@nuxt/ui-pro'],

    modules: [
        '@nuxt/ui',
        '@pinia/nuxt',
        'nuxt-time',
        '@nuxt/image',
        '@nuxtjs/i18n',
        'nuxt-highcharts',
    ],

    tailwindcss: {
        configPath: 'tailwind.config.ts',
    },

    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', file: 'en-US.json', name: 'English' },
            { code: 'hy', iso: 'hy-AM', file: 'hy-AM.json', name: 'Հայերեն' },
            { code: 'ru', iso: 'ru-RU', file: 'ru-RU.json', name: 'Русский' },
        ],
        lazy: false,
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        vueI18n: './i18n.config.ts',
    },

    colorMode: {
        preference: 'light',
        fallback: 'light',
        globalName: '__NUXT_COLOR_MODE__',
    },

    compatibilityDate: '2025-02-07',
});
