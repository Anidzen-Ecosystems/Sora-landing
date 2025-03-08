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
        ></UButton>
        <UButton
            v-if="themePreference === 'dark'"
            @click="switchTheme"
            icon="i-heroicons-moon"
        ></UButton>
        <UButton
            v-if="themePreference === 'system'"
            @click="switchTheme"
            icon="i-heroicons-computer-desktop"
        ></UButton>
    </div>

</template>