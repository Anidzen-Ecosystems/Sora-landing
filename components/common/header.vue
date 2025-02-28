<script setup lang="ts">
const localeRoute = useLocaleRoute();
const { scrollToSection, activeSection } = useScrollToSection();
const { t, locale } = useI18n();

let menuItems = [
    { label: t('menu.main'), to: '#main', isButton: true },
    { label: t('menu.faq'), to: '#frequently-asked-questions', isButton: true },
    { label: t('menu.contact_us'), to: '#contact_us', isButton: true },
];

watch(
    () => locale.value,
    () => {
        menuItems = [
            { label: t('menu.main'), to: '/' },
            { label: t('menu.contact_us'), to: '#contact_us', isButton: true },
        ];
    },
);

// Наблюдатель для activeSection
watch(activeSection, (newSection) => {
    console.log('Active section changed to:', newSection);
    // Здесь можно добавить дополнительные действия, если необходимо.
});
</script>

<template>
    <div class="fixed w-full z-50 mt-5">
        <UContainer>
            <header
                class="transition-all duration-300 backdrop-blur py-4 px-5 border-primary border-2 rounded-2xl overflow-hidden border-opacity-10 hover:border-opacity-50"
            >
                <div class="flex justify-between items-center">
                    <div>
                        <ULink :to="localeRoute('/')">
                            <div class="flex gap-2 items-center">
                                <NuxtImg src="/icons/sora.svg" class="w-14" />
                                <div>
                                    <h1 class="text-2xl font-bold uppercase">
                                        {{ t('site_name') }}.<span
                                            class="text-primary"
                                            >QL</span
                                        >
                                    </h1>
                                    <p
                                        class="text-xs text-gray-500 dark:text-gray-400"
                                    >
                                        1.0.0
                                    </p>
                                </div>
                            </div>
                        </ULink>
                    </div>
                    <nav class="flex gap-4 items-center">
                        <template v-for="item in menuItems" :key="item.label">
                            <div v-if="!item.isButton">
                                <ULink
                                    :to="localeRoute(item.to)"
                                    :class="{
                                        'text-primary':
                                            activeSection === item.to,
                                    }"
                                    class="transition-colors"
                                    inactive-class="text-gray-700"
                                    active-class="text-primary"
                                    @click="setActiveSection(item.to)"
                                >
                                    {{ item.label }}
                                </ULink>
                            </div>
                            <div v-else>
                                <ULink
                                    @click="scrollToSection(item.to)"
                                    :class="{
                                        'text-primary':
                                            activeSection === item.to,
                                    }"
                                    inactive-class="text-gray-700"
                                    active-class="text-primary"
                                >
                                    {{ item.label }}
                                </ULink>
                            </div>
                        </template>
                    </nav>
                </div>
            </header>
        </UContainer>
    </div>
</template>
