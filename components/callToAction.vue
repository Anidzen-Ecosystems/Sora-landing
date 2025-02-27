<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <section class="bg-primary text-white py-16 mt-5">
        <UContainer>
            <div class="text-center mb-8">
                <h2 class="text-4xl font-semibold mb-2">{{ t('cta.title') }}</h2>
                <p class="text-lg">{{ t('cta.description') }}</p>
            </div>
            <div class="flex justify-center gap-6">
                <UButton to="/" size="xl" variant="soft">
                    {{ t('cta.start_using_api') }}
                </UButton>
                <UButton to="/" variant="soft" size="xl">
                    {{ t('cta.join_community') }}
                </UButton>
            </div>
        </UContainer>
    </section>
</template>
