<template>
    <div class="marquee w-dvw mb-10 overflow-hidden relative">
        <ul class="marquee-content" ref="marqueeContent">
            <li
                v-for="(image, index) in images"
                :key="index"
                class="opacity-20 brightness-0 grayscale hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all hover:cursor-pointer"
            >
                <NuxtLink :to="image.to" target="_blank">
                    <img class="w-40" :src="image.src" :alt="image.alt" />
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const images = [
    {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    },
    {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    },
    {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    },
    {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    }, {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    },
    {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    }, {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    },
    {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    }, {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    },
    {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    }, {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    },
    {
        src: "https://raw.githubusercontent.com/KU-OTA-KU/Design-assets/refs/heads/main/new/ota-ku-red.png",
        to: "https://ota-ku.am",
        alt: "ota-ku.am"
    },
]

onMounted(() => {
    const root = document.documentElement
    const marqueeContent = document.querySelector("ul.marquee-content") as HTMLElement
    if (!marqueeContent) return

    const marqueeElementsDisplayed = parseInt(
        getComputedStyle(root).getPropertyValue("--marquee-elements-displayed")
    )

    root.style.setProperty("--marquee-elements", marqueeContent.children.length.toString())

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
    }
})
</script>


<style>
:root {
    --marquee-width: 80vw;
    --marquee-height: 20vh;
    --marquee-elements-displayed: 7;
    --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
    --marquee-animation-duration: calc(var(--marquee-elements) * 5s);
}

.marquee-content {
    list-style: none;
    height: 100%;
    display: flex;
    gap: 20px;
    animation: scrolling var(--marquee-animation-duration) linear infinite;
}

@keyframes scrolling {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements)));
    }
}

.marquee-content li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: var(--marquee-element-width);
    max-height: 100%;
    font-size: calc(var(--marquee-height) * 3 / 4);
    white-space: nowrap;
}

.marquee-content li img {
    width: 100%;
}

@media (max-width: 600px) {
    html {
        font-size: 12px;
    }
    :root {
        --marquee-width: 100vw;
        --marquee-height: 16vh;
        --marquee-elements-displayed: 3;
    }
    .marquee:before,
    .marquee:after {
        width: 5rem;
    }
}
</style>
