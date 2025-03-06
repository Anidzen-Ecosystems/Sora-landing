<script setup lang="ts">
const { t } = useI18n();

const items = computed(() => [
    { label: t('cta.button_text'), size: 'xl', variant: 'soft'},
    { label: t('cta.my_anime_list'), variant: 'link', color: 'gray', size: 'md', trailingIcon: 'i-heroicons-arrow-right-20-solid', to: 'https://myanimelist.net', target: '_blank' }
]);
</script>

<template>
    <section id="call-to-action" class="section mb-10">
        <UContainer>
            <ULandingCTA :title="t('cta.title')" :description="t('cta.description')" :items="items"/>
        </UContainer>
    </section>
</template>
