<script setup lang="ts">
const { t } = useI18n();

const items = [
    {
        label: t('faq.data_source.label'),
        icon: 'i-heroicons-trophy',
        defaultOpen: true,
        content: t('faq.data_source.content'),
    },
    {
        label: t('faq.multi_language_support.label'),
        icon: 'i-heroicons-code-bracket',
        content: t('faq.multi_language_support.content'),
    },
    {
        label: t('faq.scalability.label'),
        icon: 'i-heroicons-rocket-launch',
        content: t('faq.scalability.content'),
    },
    {
        label: t('faq.rate_limit.label'),
        icon: 'i-heroicons-clock',
        content: t('faq.rate_limit.content'),
    },
    {
        label: t('faq.rate_limit_info.label'),
        icon: 'i-heroicons-key',
        content: t('faq.rate_limit_info.content'),
    },
    {
        label: t('faq.tech_stack.label'),
        icon: 'i-heroicons-command-line',
        content: t('faq.tech_stack.content'),
    },
];
</script>

<template>
    <section id="frequently-asked-questions" class="section py-10 sm:py-10">
        <UContainer v-if="items.length">
            <UPageHeader
                class="mb-5"
                :title="t('faq.title')"
                :description="t('faq.description')"
            />
            <ULandingFAQ
                :items="items"
                color="primary"
                variant="soft"
                size="xl"
            />
        </UContainer>
    </section>
</template>
