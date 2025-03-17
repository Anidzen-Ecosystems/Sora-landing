<script setup lang="ts">
const localeRoute = useLocaleRoute();
const { t } = useI18n();
const config = useRuntimeConfig();

const currentYear = computed(() => new Date().getFullYear());

const sections = computed(() => [
    {
        title: t('footer.sections.other.title'),
        links: [
            {
                text: t('footer.sections.other.my_anime_list'),
                href: '/my-anime-list',
            },
        ],
    },
    {
        title: t('footer.sections.document.title'),
        links: [
            {
                text: t('footer.sections.document.privacy_policy'),
                href: '/documents/privacy-policy',
            },
            {
                text: t('footer.sections.document.terms_of_use'),
                href: '/documents/terms-of-service',
            },
            {
                text: t('footer.sections.document.user_agreement'),
                href: '/documents/user-agreement',
            },
        ],
    },
]);
</script>

<template>
    <UCard #footer as="footer" class="">
        <UContainer>
            <div class="md:flex md:justify-between md:gap-5">
                <div class="mb-6 md:mb-0">
                    <NuxtLink
                        to="https://github.com/Anidzen-Ecosystems"
                        class="flex items-center"
                    >
                        <NuxtImg
                            src="/icons/anidzen.svg"
                            class="w-10 filter select-none"
                        />
                        <span class="ml-2 uppercase font-medium text-primary">
                            Anidzen
                        </span>
                        <UIcon
                            name="i-heroicons-x-mark"
                            class="text-3xl font-bold px-5 select-none"
                        ></UIcon>
                        <NuxtImg
                            src="/icons/sora.svg"
                            class="w-10 filter select-none"
                        />
                        <span class="ml-2 uppercase font-medium text-primary">
                            Sora.ql
                        </span>
                    </NuxtLink>
                    <p class="mt-2 md:max-w-xl">
                        {{ t('footer.rights_reserved') }}
                    </p>
                </div>
                <div
                    class="mb-4 lg:mb-0 grid gap-5 sm:gap-4 grid-cols-2 xl:grid-cols-2"
                >
                    <div v-for="section in sections" :key="section.title">
                        <h3 class="mb-2 font-medium text-primary text-xl">
                            {{ section.title }}
                        </h3>
                        <ul class="flex flex-col gap-1">
                            <li v-for="link in section.links" :key="link.href">
                                <UButton
                                    variant="link"
                                    class="text-black dark:text-white font-normal text-base"
                                    :padded="false"
                                    :to="localeRoute(link.href)"
                                    :aria-label="link.text"
                                >
                                    {{ link.text }}
                                </UButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr
                class="border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-4 lg:mb-2"
            />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="flex gap-2 justify-between sm:justify-left">
                    <span class="text-primary">© 2024-{{ currentYear }}</span>
                    {{ t('footer.copyright') }}
                </span>
                <div
                    class="hidden sm:flex sm:justify-center gap-3 items-center"
                >
                    {{ t('footer.made_with_love') }} 💖

                    <span class="italic text-xs">{{
                        config.public.appVersion
                    }}</span>
                </div>
            </div>
        </UContainer>
    </UCard>
</template>
