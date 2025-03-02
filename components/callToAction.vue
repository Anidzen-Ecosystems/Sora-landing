<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <section class="bg-primary text-white py-16 mt-5">
        <UContainer>
            <div class="text-center mb-5">
                <h2 class="text-4xl font-semibold mb-2">
                    {{ t('cta.title') }}
                </h2>
                <p class="text-lg">
                    {{ t('cta.description') }}
                </p>
            </div>
            <div class="flex justify-center gap-6">
                <UButton to="/" size="xl" variant="soft">
                    {{ t('cta.button_text') }}
                </UButton>
            </div>
            <p class="text-lg text-center mt-5 text-sm italic">
                {{ t('cta.info_text') }}
                <UButton
                    to="https://MyAnimeList.net"
                    :padded="false"
                    variant="link"
                    class="text-white"
                    mode="_blank"
                >
                    {{ t('cta.my_anime_list') }}
                </UButton>
                {{ t('cta.description_italic') }}
            </p>
        </UContainer>
    </section>
</template>
