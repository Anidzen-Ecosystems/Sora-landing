<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <div class="z-20 h-dvh w-dvw flex flex-col items-center justify-center">
        <h1 class="text-6xl max-w-4xl text-center font-bold text-primary">
            {{ t('primary_title.title') }}
        </h1>
        <h2 class="text-3xl max-w-6xl text-center">
            {{ t('primary_title.subtitle') }}
        </h2>
        <h6 class="text-center mt-2 text-gray-700">
            {{ t('primary_title.footer.top') }}
            <UButton
                to="https://myanimelist.net"
                target="_blank"
                variant="link"
                :padded="false"
                >MyAnimeList.net</UButton
            >
            {{ t('primary_title.footer.bottom') }}
        </h6>
        <div class="flex gap-4 mt-4">
            <UButton size="xl" to="#">{{
                t('primary_title.docsButton')
            }}</UButton>
            <UButton size="xl" variant="soft" to="#">{{
                t('primary_title.playgroundButton')
            }}</UButton>
        </div>
    </div>
</template>

<style scoped></style>
