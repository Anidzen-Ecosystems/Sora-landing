<script setup lang="ts">
const { t, locale, setLocale } = useI18n();

const languages = [
    {
        name: 'English',
        value: 'en',
    },
    {
        name: 'Հայերեն',
        value: 'hy',
    },
    {
        name: '日本語',
        value: 'ja',
    },
    {
        name: 'Русский',
        value: 'ru',
    },
];

const selectedLanguage = ref<'en' | 'hy' | 'ja' | 'ru'>(
    locale.value as 'en' | 'hy' | 'ja' | 'ru',
);

const setLocaleToggle = (localeCode: 'en' | 'hy' | 'ja' | 'ru') => {
    setLocale(localeCode);
};
</script>

<template>
    <USelect
        v-model="selectedLanguage"
        :options="languages"
        option-attribute="name"
        @change="setLocaleToggle"
    />
</template>

<style scoped></style>
