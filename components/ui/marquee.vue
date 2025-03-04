<template>
    <div class="marquee w-dvw overflow-hidden relative" :style="marqueeStyles">
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
interface Image {
    src: string;
    alt: string;
    to: string;
}

const props = defineProps({
    images: {
        type: Array as () => Image[],
        required: true,
        validator(value: any) {
            return value.every((item: Image) => item.src && item.to && item.alt);
        }
    },
    elementsDisplayed: {
        type: Number,
        default: 7
    },
    marqueeWidth: {
        type: String,
        default: '80vw'
    },
    marqueeHeight: {
        type: String,
        default: '20vh'
    }
})

const marqueeStyles = computed(() => {
    const elementWidth = `calc(${props.marqueeWidth} / ${props.elementsDisplayed})`;
    const animationDuration = `calc(${props.elementsDisplayed} * 5s)`;

    return {
        '--marquee-width': props.marqueeWidth,
        '--marquee-height': props.marqueeHeight,
        '--marquee-elements-displayed': props.elementsDisplayed.toString(),
        '--marquee-element-width': elementWidth,
        '--marquee-animation-duration': animationDuration
    }
})

const marqueeContent = ref<HTMLElement | null>(null);

onMounted(() => {
    if (!marqueeContent.value) return;

    const root = document.documentElement;
    const content = marqueeContent.value;
    const marqueeElementsDisplayed = props.elementsDisplayed;

    root.style.setProperty('--marquee-elements', content.children.length.toString());

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        content.appendChild(content.children[i].cloneNode(true));
    }
})
</script>

<style scoped>
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
    .marquee:before,
    .marquee:after {
        width: 5rem;
    }
}
</style>
