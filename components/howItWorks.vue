<script setup lang="ts">
const { t } = useI18n();

const steps = [
    {
        icon: "🟣",
        titleKey: "how_it_works.step1.title",
        descriptionKey: "how_it_works.step1.description",
    },
    {
        icon: "🟡",
        titleKey: "how_it_works.step2.title",
        descriptionKey: "how_it_works.step2.description",
    },
    {
        icon: "🔵",
        titleKey: "how_it_works.step3.title",
        descriptionKey: "how_it_works.step3.description",
    },
    {
        icon: "🟠",
        titleKey: "how_it_works.step4.title",
        descriptionKey: "how_it_works.step4.description",
    },
    {
        icon: "🟢",
        titleKey: "how_it_works.step5.title",
        descriptionKey: "how_it_works.step5.description",
    },
    {
        icon: "🔴",
        titleKey: "how_it_works.step6.title",
        descriptionKey: "how_it_works.step6.description",
    },
];
</script>

<template>
    <section class="py-16 mb-10">
        <UContainer>
            <div class="text-center mb-12">
                <h3 class="text-4xl font-semibold text-primary">{{ t('how_it_works.title') }}</h3>
                <p class="text-lg">{{ t('how_it_works.subtitle') }}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="step in steps"
                    :key="step.titleKey"
                    class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center text-center"
                >
                    <span class="text-5xl">{{ step.icon }}</span>
                    <h3 class="text-xl font-semibold mt-4">{{ t(step.titleKey) }}</h3>
                    <p class="text-gray-600 mt-2">{{ t(step.descriptionKey) }}</p>
                </div>
            </div>
        </UContainer>
    </section>
</template>
