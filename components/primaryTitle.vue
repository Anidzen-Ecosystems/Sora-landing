<script setup lang="ts">
const { t } = useI18n();
import { GET_ANIME_QUERY } from '~/graphql/getAnimeAll';

const graphqlCode = GET_ANIME_QUERY;

const links = [
    { label: t('cta.button_text'), size: 'xl', variant: 'soft', disabled: true },
    { label: t('primary_title.playgroundButton'), size: 'xl', variant: 'soft', disabled: true },
    {
        label: t('cta.my_anime_list'),
        variant: 'link',
        color: 'gray',
        size: 'md',
        trailingIcon: 'i-heroicons-arrow-right-20-solid',
        to: 'https://myanimelist.net',
        target: '_blank',
    },
];

const features = [
    {
        name: t('primary_title.features.feature_1.name'),
        description: t('primary_title.features.feature_1.description'),
        icon: 'i-heroicons-rocket-launch',
    },
    {
        name: t('primary_title.features.feature_2.name'),
        description: t('primary_title.features.feature_2.description'),
        icon: 'i-heroicons-trophy',
    },
];
</script>

<template>
    <section
        class="z-20 lg:h-dvh pt-10 md:pt-0 w-dvw flex flex-col items-center justify-center"
    >
        <ULandingSection
            :title="t('primary_title.title')"
            :description="t('primary_title.description')"
            :links="links"
            :features="features"
            align="left"
        >
            <UiCodeBlock
                :code="graphqlCode"
                language="graphql"
                background-color="#212121"
                show-mac-header
                show-copy-button
            />
        </ULandingSection>
    </section>
</template>

<style scoped></style>
