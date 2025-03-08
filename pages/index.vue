<script setup lang="ts">
const { t } = useI18n();

useHead({
    title: t('meta.index.title'),
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
