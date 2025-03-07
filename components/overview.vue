<script setup lang="ts">
const { t } = useI18n();
const { scrollToSection } = useScrollToSection();

import { GET_ANIME_QUERY } from '~/graphql/getAnimeQueryOne';

const graphqlCode = GET_ANIME_QUERY;

const items = [
    { label: t('cta.button_text'), size: 'xl', variant: 'soft' },
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
</script>
<template>
    <section id="overview" class="section">
        <UContainer>
            <ULandingSection
                :title="t('overview.title')"
                :description="t('overview.description')"
                :links="items"
                align="left"
                :ui="{ wrapper: 'py-10 sm:py-10' }"
            >
                <UiCodeBlock
                    :code="graphqlCode"
                    language="graphql"
                    background-color="#212121"
                    show-mac-header
                    show-copy-button
                />
            </ULandingSection>
        </UContainer>
    </section>
</template>
