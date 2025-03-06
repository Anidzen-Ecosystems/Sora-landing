<script setup lang="ts">
const rows = 15;
const cols = 30;
const numBlocks = 5;
const spawnInterval = 3000;
const fallInterval = 1000;

const grid = ref<number[][]>(
    Array.from({ length: rows }, () => Array(cols).fill(0)),
);
const activeBlocks = ref<{ x: number; y: number }[]>([]);

const spawnBlocks = () => {
    activeBlocks.value = [
        ...activeBlocks.value,
        ...Array.from({ length: numBlocks }, () => ({
            x: Math.floor(Math.random() * cols),
            y: 0,
        })),
    ];
};

const moveBlocksDown = () => {
    if (!activeBlocks.value.length) return;

    activeBlocks.value = activeBlocks.value
        .map(({ x, y }) => {
            if (y + 1 < rows && grid.value[y + 1][x] === 0) {
                return { x, y: y + 1 };
            } else {
                grid.value[y][x] = 1;
                return null;
            }
        })
        .filter(Boolean) as { x: number; y: number }[];
};

onMounted(() => {
    spawnBlocks();
    setInterval(() => {
        spawnBlocks();
    }, spawnInterval);

    setInterval(moveBlocksDown, fallInterval);
});
</script>

<template>
    <div class="absolute">
        <div class="tetris">
            <div
                v-for="(row, rowIndex) in grid"
                :key="rowIndex"
                class="row -z-0"
            >
                <div
                    v-for="(cell, colIndex) in row"
                    :key="colIndex"
                    class="cell border-[0.1px] border-primary border-opacity-10"
                    :class="{
                        filled:
                            cell === 1 ||
                            activeBlocks.some(
                                (block) =>
                                    block.x === colIndex &&
                                    block.y === rowIndex,
                            ),
                    }"
                ></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tetris {
    overflow: hidden;
    width: 100dvw;
    height: 100dvh;
    display: grid;
    grid-template-rows: repeat(30, 1fr);
}

.row {
    display: grid;
    grid-template-columns: repeat(30, 1fr);
}

.cell {
    aspect-ratio: 1;
    transition: all 0.2s;
}

.filled {
    opacity: 0.5;
    background-color: rgb(var(--color-primary-400));

    &:hover {
        opacity: 1;
        cursor: grab;
    }
}
</style>
