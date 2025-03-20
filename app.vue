<script setup lang="ts">
const colorMode = useColorMode();
const { locale, t } = useI18n();

const color = computed(() =>
    colorMode.value === 'dark' ? '#18181b' : 'white',
);

const commonKeywords = 'sora.ql API graphql myanimelist';

const keywords = {
    en: 'anime API, GraphQL API, MyAnimeList supported, anime metadata, sora.ql',
    hy: 'անիմե API, GraphQL API, MyAnimeList աջակցությամբ, անիմե մետատվյալներ, sora.ql',
    ja: 'アニメAPI, GraphQL API, MyAnimeList サポート, アニメメタデータ, sora.ql',
    ru: 'аниме API, GraphQL API, при поддержке MyAnimeList, аниме метаданные, sora.ql',
};

const currentKeywords = computed(() => keywords[locale.value] || keywords.en);

useHead({
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'theme-color', name: 'theme-color', content: color },
        {
            name: 'keywords',
            content: commonKeywords + ' ' + currentKeywords.value,
        },
        { name: 'robots', content: 'index, follow' },
        {
            name: 'canonical',
            content: 'https://sora-ql.anidzen.com/' + locale.value,
        },
        {
            property: 'image',
            content:
                'https://sora-ql.anidzen.com' +
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
                'https://sora-ql.anidzen.com/images/og-images/og-image-' +
                locale.value +
                '.png',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: t('meta.index.title') },
        { property: 'og:description', content: t('meta.index.description') },
        { property: 'og:locale', content: locale.value },
        {
            property: 'og:url',
            content:
                'https://sora-ql.anidzen.com' +
                '/' +
                (locale.value === 'en' ? '' : '/' + locale.value),
        },
        {
            property: 'og:image',
            content:
                'https://sora-ql.anidzen.com' +
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

    <CommonTestShowModal/>

    <UModals />
    <UNotifications />
</template>
