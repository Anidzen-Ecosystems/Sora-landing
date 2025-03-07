<script setup lang="ts">
const colorMode = useColorMode();
const { locale, t } = useI18n();

const color = computed(() =>
    colorMode.value === 'dark' ? '#18181b' : 'white',
);

const commonKeywords = '';

const keywords = {
    en: '',
    hy: '',
    ru: '',
    ja: '',
};

const currentKeywords = computed(() => keywords[locale.value] || keywords.en);

useHead({
    title: t('meta.index.title'),
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'theme-color', name: 'theme-color', content: color },
        {
            name: 'keywords',
            content: commonKeywords + ' ' + currentKeywords.value,
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: t('meta.index.description')},
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: t('meta.index.title') },
        { property: 'og:description', content: t('meta.index.description') },
        { property: 'og:locale', content: locale.value },
        { property: 'og:image', content: 'https://anidzen-ecosystems.github.io/Sora-landing' + '/images/og-images/og-image-' + locale.value + '.png'},
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
    ],
    htmlAttrs: {
        lang: locale.value,
    },
});
</script>

<template>
    <NuxtLoadingIndicator color="blue" />

    <UMain>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UMain>

    <UModals />
    <UNotifications />
</template>

<style>
body {
    overflow-x: hidden;
}

::-webkit-scrollbar {
    @apply w-2;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: rgb(var(--color-primary-400));
    cursor: pointer;
}

::-webkit-scrollbar-thumb:hover {
    background-color: rgb(var(--color-primary-500));
}
</style>
