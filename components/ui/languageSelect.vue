<script setup lang="ts">
const {locale, setLocale } = useI18n();

const languages = [
    { name: 'English', value: 'en' },
    { name: 'Հայերեն', value: 'hy' },
    { name: '日本語', value: 'ja' },
    { name: 'Русский', value: 'ru' },
];

const selectedLanguage = computed({
    get: () => locale.value as 'en' | 'hy' | 'ja' | 'ru',
    set: (newLocale: 'en' | 'hy' | 'ja' | 'ru') => {
        setLocale(newLocale);
    },
});
</script>

<template>
    <USelect v-model="selectedLanguage" :options="languages" option-attribute="name" />
</template>

<style scoped></style>
