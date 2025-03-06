<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <section id="about-us" class="section mb-10">
        <UContainer>
            <div class="flex gap-5">
                <div class="w-1/2">
                    <div>
                        <h3 class="text-4xl font-semibold text-primary">
                            {{ t('about_us.title') }}
                        </h3>
                        <p class="text-lg">{{ t('about_us.subtitle') }}</p>
                        <div class="mt-2">
                            <p>{{ t('about_us.mission') }}</p>
                            <p class="mt-4">{{ t('about_us.values') }}</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div
                        class="relative flex items-center justify-center h-[400px]"
                    >
                        <NuxtImg
                            src="/icons/anidzen.svg"
                            class="w-[350px] absolute top-[-50px] left-[80px] animate-float"
                            style="--float-distance: 5px; --float-duration: 8s"
                        />
                        <NuxtImg
                            src="/icons/sora-1024.png"
                            class="w-[350px] absolute bottom-0 right-[40px] animate-float"
                            style="--float-distance: 10px; --float-duration: 7s"
                        />
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
