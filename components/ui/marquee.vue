<template>
    <div
        class="marquee"
        :class="`marquee--${itemsCount}`"
        :style="marqueeStyle"
    >
        <NuxtImg
            v-for="(item, index) in items"
            :key="index"
            class="marquee__item"
            :src="item.src"
            :alt="item.alt"
            :width="itemWidth"
            :height="itemHeight"
            :style="itemStyle(index)"
        />
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
            validator(value) {
                return value.every((item) => item.src && item.alt);
            },
        },
        itemsCount: {
            type: Number,
            default: 8,
        },
        itemWidth: {
            type: Number,
            default: 100,
        },
        itemHeight: {
            type: Number,
            default: 100,
        },
        duration: {
            type: Number,
            default: 36,
        },
        maskSides: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        marqueeStyle() {
            return {
                '--marquee-items': this.itemsCount,
                '--marquee-item-width': `${this.itemWidth}px`,
                '--marquee-item-height': `${this.itemHeight}px`,
                '--marquee-duration': `${this.duration}s`,
                ...(this.maskSides
                    ? {
                          maskImage:
                              'linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0))',
                      }
                    : {}),
            };
        },
    },
    methods: {
        itemStyle(index) {
            return {
                '--marquee-item-index': index + 1,
            };
        },
    },
};
</script>

<style scoped>
.marquee {
    display: flex;
    block-size: var(--marquee-item-height);
    position: relative;
    overflow-x: hidden;
}

.marquee__item {
    --marquee-item-offset: max(
        calc(var(--marquee-item-width) * var(--marquee-items)),
        calc(100% + var(--marquee-item-width))
    );
    --marquee-delay: calc(
        var(--marquee-duration) / var(--marquee-items) *
            (var(--marquee-items) - var(--marquee-item-index)) * -1
    );

    position: absolute;
    inset-inline-start: var(--marquee-item-offset);
    transform: translateX(-50%);
    animation: go linear var(--marquee-duration) var(--marquee-delay, 0s)
        infinite;
}

@keyframes go {
    to {
        inset-inline-start: calc(var(--marquee-item-width) * -1);
    }
}

@media (prefers-reduced-motion) {
    .marquee__item {
        animation-play-state: paused;
    }
}
</style>
