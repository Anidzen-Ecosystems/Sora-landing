<script setup lang="ts">
const colorMode = useColorMode();
const themePreference = ref<string>('');

onMounted(() => {
    themePreference.value = colorMode.preference;
});

const switchTheme = () => {
    if (colorMode.preference === 'light') {
        colorMode.preference = 'dark';
    } else if (colorMode.preference === 'dark') {
        colorMode.preference = 'system';
    } else {
        colorMode.preference = 'light';
    }

    themePreference.value = colorMode.preference;
};
</script>

<template>
    <div>
        <UButton
            v-if="themePreference === 'light'"
            @click="switchTheme"
            icon="i-heroicons-sun"
            variant="soft"
            label="light"
        ></UButton>
        <UButton
            v-if="themePreference === 'dark'"
            @click="switchTheme"
            icon="i-heroicons-moon"
            variant="soft"
            label="dark"
        ></UButton>
        <UButton
            v-if="themePreference === 'system'"
            @click="switchTheme"
            icon="i-heroicons-computer-desktop"
            variant="soft"
            label="system"
        ></UButton>

        <UButton
            @click="switchTheme"

            variant="soft"
            label="system"
        ></UButton>

        <UIcon name="i-heroicons-computer-desktop"/>
        <UIcon name="i-heroicons-moon"/>
        <UIcon name="i-heroicons-sun"/>
    </div>
</template>
