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
        ></UButton>
        <UButton
            v-if="themePreference === 'dark'"
            @click="switchTheme"
            icon="i-heroicons-moon"
            variant="soft"
        ></UButton>
        <UButton
            v-if="themePreference === 'system'"
            @click="switchTheme"
            icon="i-heroicons-computer-desktop"
            variant="soft"
        ></UButton>

        <!-- это ставил тут потомучто у нукста есть баг иконок и данная версия nuxt ui больше  не подержовается -->
        <div class="hidden">
            <UIcon name="i-heroicons-computer-desktop" />
            <UIcon name="i-heroicons-moon" />
            <UIcon name="i-heroicons-sun" />
            <UIcon name="i-heroicons-sun" />
            <UIcon name="i-heroicons-x-mark-20-solid" />
        </div>
    </div>
</template>
