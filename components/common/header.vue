<script setup lang="ts">
const localeRoute = useLocaleRoute();
const { t } = useI18n();

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
            <UHeader :links="links" class="backdrop-blur-sm py-4 rounded-2xl">
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
                                <span class="italic text-sm"
                                    >v. 1.0.0 beta</span
                                >
                            </div>
                        </div>
                    </ULink>
                </template>

                <template #right>
                    <UColorModeButton />
                </template>
            </UHeader>
        </UContainer>
    </div>
</template>
