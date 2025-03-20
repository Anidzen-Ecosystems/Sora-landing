<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => {
    const activeSection =
        scrollPosition.value <= 10
            ? 'main'
            : activeHeadings.value.find(id =>
            ['main', 'how-it-works', 'features', 'showcase', 'frequently-asked-questions'].includes(id)
        ) || 'main';

    return [
        {
            label: t('menu.main'),
            to: '#main',
            i18n: 'main',
            active: activeSection === 'main',
            id: 'main',
        },
        {
            label: t('menu.how_it_works'),
            to: '#how-it-works',
            i18n: 'how_it_works',
            active: activeSection === 'how-it-works',
            id: 'how-it-works',
        },
        {
            label: t('menu.features'),
            to: '#features',
            i18n: 'features',
            active: activeSection === 'features',
            id: 'features',
        },
        {
            label: t('menu.showcase'),
            to: '#showcase',
            i18n: 'showcase',
            active: activeSection === 'showcase',
            id: 'showcase',
        },
        {
            label: t('menu.faq'),
            to: '#frequently-asked-questions',
            i18n: 'faq',
            active: activeSection === 'frequently-asked-questions',
            id: 'frequently-asked-questions',
        },
    ];
});

nuxtApp.hooks.hookOnce('page:finish', () => {
    updateHeadings([
        document.querySelector('#main'),
        document.querySelector('#how-it-works'),
        document.querySelector('#features'),
        document.querySelector('#showcase'),
        document.querySelector('#frequently-asked-questions')
    ].filter(Boolean) as Element[])
})

watch(
    () => locale.value,
    () => {
        nextTick(() => {
            updateHeadings([
                document.querySelector('#main'),
                document.querySelector('#how-it-works'),
                document.querySelector('#features'),
                document.querySelector('#showcase'),
                document.querySelector('#frequently-asked-questions')
            ].filter(Boolean) as Element[]);
        });
    }
)

const scrollPosition = ref(0);

const handleScroll = () => {
    scrollPosition.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div
        :class="{ 'scrolled-header': scrollPosition > 150 }"
        class="transition-all fixed w-full z-50 mt-5"
    >
        <UContainer>
            <UHeader
                :links="links"
                class="backdrop-blur-sm py-4 rounded-2xl"
                :ui="{ wrapper: '' }"
                :class="{ 'u-header': scrollPosition > 150 }"
            >
                <template #logo>
                    <div @click="localeRoute('/')">
                        <div class="flex gap-2 items-center">
                            <NuxtImg
                                src="/icons/sora.svg"
                                class="transition-all w-12 h-12 pointer-events-none select-none"
                                :class="{
                                    'scrolled-logo': scrollPosition > 150,
                                }"
                            />
                            <div class="hidden sm:flex justify-center flex-col">
                                <h1 class="text-2xl font-bold uppercase">
                                    {{ t('site_name') }}.<span
                                        class="text-primary"
                                        >QL</span
                                    >
                                </h1>
                                <span
                                    class="italic text-xs transition-all"
                                    :class="{
                                        'scrolled-name-span':
                                            scrollPosition > 150,
                                    }"
                                    >v. {{ config.public.appVersion }}</span
                                >
                            </div>
                        </div>
                    </div>
                </template>

                <template #right>
                    <UiLanguageSelect />
                    <UiColorModeButton />
                </template>
            </UHeader>
        </UContainer>
    </div>
</template>

<style scoped>
.scrolled-header {
    @apply mt-0;
}

.u-header {
    border-radius: 0 0 1rem 1rem;
    border-bottom-width: 2px !important;
    @apply py-2;
}

.scrolled-logo {
    @apply w-10 h-10;
}

.scrolled-name-span {
    @apply hidden;
}
</style>
