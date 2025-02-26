<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const items = computed(() => [
    {
        label: t('faq.data_source.label'),
        icon: 'i-heroicons-trophy',
        defaultOpen: true,
        content: t('faq.data_source.content'),
    },
    {
        label: t('faq.language_support.label'),
        icon: 'i-heroicons-language',
        content: t('faq.language_support.content'),
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
]);
</script>


<template>
    <UContainer v-if="items.length">
        <UAccordion
            color="primary"
            variant="soft"
            size="xl"
            :items="items" />
    </UContainer>
</template>

