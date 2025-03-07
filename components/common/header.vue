<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const localeRoute = useLocaleRoute();
const { t } = useI18n();

const links = ref([
    {
        label: t('menu.main'),
        to: '#main',
        active: false,
        id: 'main',
    },
    {
        label: t('menu.how_it_works'),
        to: '#how-it-works',
        active: false,
        id: 'how-it-works',
    },
    {
        label: t('menu.features'),
        to: '#features',
        active: false,
        id: 'features',
    },
    {
        label: t('menu.showcase'),
        to: '#showcase',
        active: false,
        id: 'showcase',
    },
    {
        label: t('menu.faq'),
        to: '#frequently-asked-questions',
        active: false,
        id: 'frequently-asked-questions',
    },
]);

const scrollPosition = ref(0);

const handleScroll = () => {
    scrollPosition.value = window.scrollY;
};

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            links.value = links.value.map(link => {
                if (link.id === entry.target.id) {
                    return { ...link, active: true };
                }
                return { ...link, active: false };
            });
        }
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

onBeforeUnmount(() => {
    observer.disconnect();
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div :class="{'scrolled-header': scrollPosition > 150}" class="transition-all fixed w-full z-50 mt-5">
        <UContainer>
            <UHeader :links="links" class="backdrop-blur-sm py-4 rounded-2xl" :ui="{wrapper: ''}" :class="{'u-header': scrollPosition > 150}">
                <template #logo>
                    <ULink :to="localeRoute('/')">
                        <div class="flex gap-2 items-center">
                            <NuxtImg
                                src="/icons/sora.svg"
                                class="transition-all w-12 h-12 pointer-events-none select-none"
                                :class="{'scrolled-logo': scrollPosition > 150}"
                            />
                            <div class="flex justify-center flex-col">
                                <h1 class="text-2xl font-bold uppercase">
                                    {{ t('site_name') }}.<span
                                    class="text-primary"
                                >QL</span>
                                </h1>
                                <span class="italic text-sm transition-all" :class="{'scrolled-name-span': scrollPosition > 150}">v. 1.0.0 beta</span>
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
