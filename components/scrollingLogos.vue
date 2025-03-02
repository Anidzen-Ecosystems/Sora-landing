<template>
    <div class="marquee">
        <ul class="marquee-content">
            <li v-for="(item, index) in items" :key="index">
                <i :class="item.icon"></i>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const items = ref([
    { icon: 'fab fa-github' },
    { icon: 'fab fa-codepen' },
    { icon: 'fab fa-free-code-camp' },
    { icon: 'fab fa-dev' },
    { icon: 'fab fa-react' },
    { icon: 'fab fa-vuejs' },
    { icon: 'fab fa-angular' },
    { icon: 'fab fa-node' },
    { icon: 'fab fa-wordpress' },
    { icon: 'fab fa-aws' },
    { icon: 'fab fa-docker' },
    { icon: 'fab fa-android' },
]);

onMounted(() => {
    const root = document.documentElement;
    const marqueeContent = document.querySelector(
        '.marquee-content',
    ) as HTMLElement;

    if (marqueeContent) {
        const marqueeElementsDisplayed = getComputedStyle(
            root,
        ).getPropertyValue('--marquee-elements-displayed');
        root.style.setProperty(
            '--marquee-elements',
            marqueeContent.children.length.toString(),
        );

        for (let i = 0; i < parseInt(marqueeElementsDisplayed); i++) {
            marqueeContent.appendChild(
                marqueeContent.children[i].cloneNode(true),
            );
        }
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Montserrat', sans-serif;
    background-color: #eee;
    color: #111;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

:root {
    --marquee-width: 80vw;
    --marquee-height: 20vh;
    --marquee-elements-displayed: 5;
    --marquee-element-width: calc(
        var(--marquee-width) / var(--marquee-elements-displayed)
    );
    --marquee-animation-duration: calc(var(--marquee-elements) * 3s);
}

.marquee {
    width: var(--marquee-width);
    height: var(--marquee-height);
    background-color: #111;
    color: #eee;
    overflow: hidden;
    position: relative;
}

.marquee:before,
.marquee:after {
    position: absolute;
    top: 0;
    width: 10rem;
    height: 100%;
    content: '';
    z-index: 1;
}
.marquee:before {
    left: 0;
    background: linear-gradient(to right, #111 0%, transparent 100%);
}
.marquee:after {
    right: 0;
    background: linear-gradient(to left, #111 0%, transparent 100%);
}

.marquee-content {
    list-style: none;
    height: 100%;
    display: flex;
    animation: scrolling var(--marquee-animation-duration) linear infinite;
}

@keyframes scrolling {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(
            calc(-1 * var(--marquee-element-width) * var(--marquee-elements))
        );
    }
}

.marquee-content li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: var(--marquee-element-width);
    max-height: 100%;
    font-size: calc(var(--marquee-height) * 3 / 4); /* Высота шрифта */
    white-space: nowrap;
}

.marquee-content li i {
    font-size: 2rem;
    color: #eee;
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
