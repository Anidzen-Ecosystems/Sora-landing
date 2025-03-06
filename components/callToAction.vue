<script setup lang="ts">
const { t } = useI18n();


const links = computed(() => [
    { label: t('cta.button_text'), size: 'xl', variant: 'soft' },
]);
</script>

<template>
    <section id="call-to-action" class="section mb-10">
        <UContainer>
            <ULandingCTA :title="t('cta.title')" :description="t('cta.description')" :links="links"/>
        </UContainer>
    </section>
</template>
