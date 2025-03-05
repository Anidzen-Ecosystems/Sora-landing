<script setup lang="ts">
</script>

<template>
    <section id="main" class="section w-dvh h-dvh overflow-hidden">
        <div class="relative">
            <PrimaryTitle />
            <UiFallingBlocks />
        </div>
        <div class="gradient-overlay top-0"></div>
        <div class="gradient-overlay bottom-0 rotate-180"></div>
    </section>
</template>

<style scoped>
.gradient-overlay {
    position: absolute;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 25%,
        rgba(255, 255, 255, 0) 100%
    );
}
</style>
