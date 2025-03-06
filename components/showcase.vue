<script setup lang="ts">
import CodeBlock from '~/components/ui/codeBlock.vue';

const { t } = useI18n();

const projects = [
    {
        nameKey: 'showcase.projects.ota_ku_am.name',
        descriptionKey: 'showcase.projects.ota_ku_am.description',
        image: '/images/projects/ota-ku-am.png',
        githubLink: 'https://github.com/KU-OTA-KU/Ota-ku-frontend',
        website: 'https://ota-ku.am/',
    },
];
</script>

<template>
    <section id="showcase" class="section">
        <UContainer>
            <UPageHeader
                class="mb-5"
                :title="t('showcase.title')"
                :description="t('showcase.description')"
                :ui="{
                    container: 'lg:justify-center',
                    description: 'text-center',
                }"
            />

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <UCard
                    v-for="project in projects"
                    :key="project.nameKey"
                    :ui="{ body: { padding: 'p-0 sm:p-0' } }"
                    class="rounded-lg overflow-hidden cursor-pointer"
                >
                    <ULink :to="project.website" target="_blank">
                        <div class="w-full min-h-64 overflow-hidden">
                            <NuxtImg
                                :src="project.image"
                                alt="Project Image"
                                class="w-full min-h-64 object-cover hover:scale-105 hover:blur-0 transition-all blur-sm"
                            />
                        </div>
                    </ULink>
                    <div class="px-5 py-6">
                        <h4 class="text-xl font-semibold mb-2">
                            {{ t(project.nameKey) }}
                        </h4>
                        <p class="text-gray-600 mb-4">
                            {{ t(project.descriptionKey) }}
                        </p>
                        <div v-if="project.githubLink">
                            <UButton
                                :to="project.githubLink"
                                variant="soft"
                                target="_blank"
                                >{{ t('showcase.view_on_github') }}</UButton
                            >
                        </div>
                        <div v-if="project.websiteLink">
                            <UButton
                                :to="project.websiteLink"
                                variant="soft"
                                target="_blank"
                                >{{ t('showcase.view_project') }}</UButton
                            >
                        </div>
                    </div>
                </UCard>
            </div>
        </UContainer>
    </section>
</template>
