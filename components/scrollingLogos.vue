<template>
    <div
        class="marquee w-dvw mb-10 overflow-hidden relative grayscale opacity-50"
    >
        <UiMarquee
            :items="items"
            :item-width="200"
            :item-height="45"
            :duration="70"
            :items-count="10"
        />
    </div>
</template>

<script setup lang="ts">
const items = [
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
    {
        src: 'https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png',
        to: 'https://ota-ku.am',
        alt: 'ota-ku.am',
        width: 200,
    },
];
</script>
