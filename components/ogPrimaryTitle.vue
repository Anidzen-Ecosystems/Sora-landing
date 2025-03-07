<script setup lang="ts">
const { t } = useI18n();

const links = [
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
    <div
        class="z-10 h-dvh w-dvw flex flex-col items-center justify-center absolute"
    >
        <ULandingSection
            :title="t('primary_title.title')"
            :description="t('primary_title.description')"
            :links="links"
            :features="features"
            align="left"
        >
            <section>
                <ULandingGrid>
                    <ULandingCard
                        class="col-span-6 row-span-2"
                        icon="i-heroicons-rocket-launch"
                        :title="t('og_features.feature_1.name')"
                        :description="t('og_features.feature_1.description')"
                    />
                    <ULandingCard
                        class="col-span-6 row-span-4"
                        icon="i-heroicons-trophy"
                        :title="t('og_features.feature_2.name')"
                        :description="t('og_features.feature_2.description')"
                    />
                    <ULandingCard
                        class="col-span-6 row-span-4"
                        icon="i-heroicons-language"
                        :title="t('og_features.feature_3.name')"
                        :description="t('og_features.feature_3.description')"
                    />
                    <ULandingCard
                        class="col-span-6 row-span-2"
                        icon="i-heroicons-banknotes"
                        :title="t('og_features.feature_4.name')"
                        :description="t('og_features.feature_4.description')"
                    />
                    <ULandingCard
                        class="col-span-6 row-span-2"
                        icon="i-heroicons-circle-stack"
                        :title="t('og_features.feature_5.name')"
                        :description="t('og_features.feature_5.description')"
                    />
                    <ULandingCard
                        class="col-span-6 row-span-4"
                        icon="i-heroicons-globe-asia-australia"
                        :title="t('og_features.feature_6.name')"
                        :description="t('og_features.feature_6.description')"
                    />
                </ULandingGrid>
            </section>
        </ULandingSection>
    </div>
</template>

<style scoped></style>
