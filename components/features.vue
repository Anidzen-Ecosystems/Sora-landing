<script setup lang="ts">
const  { t } = useI18n();

</script>

<template>
    <section class="py-10 sm:py-10">
        <UContainer>
            <ULandingGrid>
                <ULandingCard
                    class="col-span-6 row-span-2"
                    icon="i-heroicons-rocket-launch"
                    :title="t('features.feature_1.name')"
                    :description="t('features.feature_1.description')"
                />
                <ULandingCard
                    class="col-span-6 row-span-4"
                    icon="i-heroicons-trophy"
                    :title="t('features.feature_2.name')"
                    :description="t('features.feature_2.description')"
                />
                <ULandingCard
                    class="col-span-6 row-span-4"
                    icon="i-heroicons-language"
                    :title="t('features.feature_3.name')"
                    :description="t('features.feature_3.description')"
                />
                <ULandingCard
                    class="col-span-6 row-span-2"
                    icon="i-heroicons-banknotes"
                    :title="t('features.feature_4.name')"
                    :description="t('features.feature_4.description')"
                />
                <ULandingCard
                    class="col-span-6 row-span-2"
                    icon="i-heroicons-circle-stack"
                    :title="t('features.feature_5.name')"
                    :description="t('features.feature_5.description')"
                />
                <ULandingCard
                    class="col-span-6 row-span-4"
                    icon="i-heroicons-globe-asia-australia"
                    :title="t('features.feature_6.name')"
                    :description="t('features.feature_6.description')"
                />
            </ULandingGrid>
        </UContainer>
    </section>
</template>

<style scoped></style>
