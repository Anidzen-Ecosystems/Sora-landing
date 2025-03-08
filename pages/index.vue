<script setup lang="ts">
const { t } = useI18n();

useHead({
    title: t('meta.index.title'),
    meta: [
        { name: 'description', content: t('meta.index.description') },
    ]
});
</script>

<template>
    <PrimaryHeader />
    <!--    <overview/>-->
    <HowItWorks />
    <Features />
    <Showcase />
    <FrequentlyAskedQuestions />
    <CallToAction />
</template>
