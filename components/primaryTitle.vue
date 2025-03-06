<script setup lang="ts">
const { t } = useI18n();
import { GET_ANIME_QUERY } from '~/graphql/getAnimeAll';

const graphqlCode = GET_ANIME_QUERY;

const links = [
    { label: t('cta.button_text'), size: 'xl', variant: 'soft' },
    { label: t('primary_title.playgroundButton'), size: 'xl', variant: 'soft' },
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
        icon: "i-heroicons-rocket-launch"
    },
    {
        name: t('primary_title.features.feature_2.name'),
        description: t('primary_title.features.feature_2.description'),
        icon: "i-heroicons-trophy"
    },
];
</script>

<template>
    <div class="z-10 h-dvh w-dvw flex flex-col items-center justify-center absolute">
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
<!--        <h6 class="text-center mt-2 text-gray-700">-->
<!--            {{ t('primary_title.footer.top') }}-->
<!--            <UButton-->
<!--                to="https://myanimelist.net"-->
<!--                target="_blank"-->
<!--                variant="link"-->
<!--                :padded="false"-->
<!--                >MyAnimeList.net</UButton-->
<!--            >-->
<!--            {{ t('primary_title.footer.bottom') }}-->
<!--        </h6>-->
<!--        <div class="flex gap-4 mt-4">-->
<!--            <UButton disabled size="xl" to="#">{{-->
<!--                t('primary_title.docsButton')-->
<!--            }}</UButton>-->
<!--            <UButton size="xl" variant="soft" to="#">{{-->
<!--                t('primary_title.playgroundButton')-->
<!--            }}</UButton>-->
<!--        </div>-->
    </div>
</template>

<style scoped></style>
