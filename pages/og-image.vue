<script setup lang="ts">
import OgPrimaryTitle from '~/components/ogPrimaryTitle.vue';

definePageMeta({
    layout: false,
});
</script>
<template>
    <section class="w-dvh h-dvh overflow-hidden">
        <div class="relative">
            <OgPrimaryTitle />
            <section class="relative">
                <NuxtImg
                    class="w-full"
                    src="/images/og-images/textures/falling-blocks-og-background.png"
                />
            </section>
        </div>
        <div class="gradient-overlay top-0"></div>
        <div class="gradient-overlay bottom-0 rotate-180"></div>
    </section>
</template>

<style scoped>
.light {
    .gradient-overlay {
        position: absolute;
        left: 0;
        width: 100%;
        height: 20%;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 1) 25%,
            rgba(255, 255, 255, 0) 40%
        );
    }
}

.dark {
    .gradient-overlay {
        position: absolute;
        left: 0;
        width: 100%;
        height: 20%;
        background: linear-gradient(
            to bottom,
            rgb(23, 23, 23) 70%,
            rgba(23, 23, 23, 0) 100%
        );
    }
}
</style>
