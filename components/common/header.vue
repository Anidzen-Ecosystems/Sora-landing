<script setup lang="ts">
const localeRoute = useLocaleRoute();
const { t } = useI18n();
import type { ContentNavigationItem } from '@nuxt/content';

// let menuItems = [
//     { label: t('menu.main'), to: '#main', isButton: true },
//     { label: t('menu.overview'), to: '#overview', isButton: true },
//     { label: t('menu.how_it_works'), to: '#how-it-works', isButton: true },
//     { label: t('menu.about_us'), to: '#about-us', isButton: true },
//     { label: t('menu.showcase'), to: '#showcase', isButton: true },
//     { label: t('menu.faq'), to: '#frequently-asked-questions', isButton: true },
// ];

// watch(activeSection, (newSection) => {
//     console.log('Active section changed to:', newSection);
// });

const links = [
    {
        label: t('menu.main'),
        to: '#main',
    },
    {
        label: t('menu.overview'),
        to: '#overview',
    },
    {
        label: t('menu.how_it_works'),
        to: '#how-it-works',
    },
    {
        label: t('menu.about_us'),
        to: '#about-us',
    },
    {
        label: t('menu.showcase'),
        to: '#showcase',
    },
    {
        label: t('menu.faq'),
        to: '#frequently-asked-questions',
    },
];
</script>

<template>
    <div class="fixed w-full z-50 mt-5">
        <UContainer>
            <UHeader
                :links="links"
                class="transition-all duration-300 backdrop-blur py-4 px-5 border-primary border-2 rounded-2xl overflow-hidden border-opacity-10 hover:border-opacity-50"
            >
                <template #logo>
                    <ULink :to="localeRoute('/')">
                        <div class="flex gap-2 items-center">
                            <NuxtImg
                                src="/icons/sora.svg"
                                class="w-12 pointer-events-none select-none"
                            />
                            <div class="flex justify-center flex-col">
                                <h1 class="text-2xl font-bold uppercase">
                                    {{ t('site_name') }}.<span
                                        class="text-primary"
                                        >QL</span
                                    >
                                </h1>
                                <span class="italic text-sm">v. 1.0.0 beta</span>
                            </div>
                        </div>
                    </ULink>
                </template>

                <template #right>
                    <!--                        <UButton @click="scrollToSection('#call-to-action')"-->
                    <!--                            >Получить API-ключ</UButton-->
                    <!--                        >-->
                    <UColorModeButton />
                </template>
            </UHeader>
        </UContainer>
    </div>
</template>
