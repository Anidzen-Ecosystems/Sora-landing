// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: process.env.NUXT_APP_BASE_URL || '/',
    },

    runtimeConfig: {
        public: {
            appVersion: process.env.APP_VERSION || '1.0.0',
            appSupportEmail: process.env.APP_SUPPORT_EMAIL || 'noreply.anidzen@gmail.com',
        },
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
            { code: 'ja', iso: 'ja-JP', file: 'ja-JP.json', name: '日本語' },
            { code: 'ru', iso: 'ru-RU', file: 'ru-RU.json', name: 'Русский' },
        ],
        lazy: false,
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        vueI18n: './i18n.config.ts',
    },

    colorMode: {
        preference: 'system',
        fallback: 'dark',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classSuffix: '-mode',
        storage: 'localStorage',
        storageKey: 'sora-ql-color-mode',
    },

    compatibilityDate: '2025-02-07',
});
