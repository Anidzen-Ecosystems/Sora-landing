<script setup lang="ts">
const colorMode = useColorMode();
const { locale, t } = useI18n();

const color = computed(() =>
    colorMode.value === 'dark' ? '#18181b' : 'white',
);

const commonKeywords = 'sora.ql API graphql myanimelist';

const keywords = {
    en: '',
    hy: '',
    ja: '',
    ru: '',
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
        { name: 'description', content: t('meta.index.description') },
        {
            name: 'canonical',
            content: 'https://sora-beta.anidzen.com/' + locale.value,
        },
        {
            property: 'image',
            content:
                'https://sora-beta.anidzen.com' +
                '/images/og-images/og-image-' +
                locale.value +
                '.png',
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: t('meta.index.title') },
        {
            property: 'twitter:description',
            content: t('meta.index.description'),
        },
        {
            property: 'twitter:image',
            content:
                'https://sora-beta.anidzen.com/images/og-images/og-image-' +
                locale.value +
                '.png',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: t('meta.index.title') },
        { property: 'og:description', content: t('meta.index.description') },
        { property: 'og:locale', content: locale.value },
        {
            property: 'og:url',
            content: 'https://sora-beta.anidzen.com' + '/' + locale.value,
        },
        {
            property: 'og:image',
            content:
                'https://sora-beta.anidzen.com' +
                '/images/og-images/og-image-' +
                locale.value +
                '.png',
        },
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
