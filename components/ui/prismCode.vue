<script setup lang="ts">
import Prism from 'prismjs';
import Clipboard from 'clipboard';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-graphql';

const toast = useToast();

const props = defineProps<{
    code: string;
    language?: string;
    showMacHeader?: boolean;
    showCopyButton?: boolean;
}>();

const highlightedCode = ref('');
let clipboard: Clipboard | null = null;

const highlight = () => {
    if (props.code) {
        highlightedCode.value = Prism.highlight(
            props.code,
            Prism.languages[props.language || 'javascript'],
            props.language || 'javascript',
        );
    }
};

const initClipboard = () => {
    clipboard = new Clipboard('.copy-button', {
        text: () => props.code,
    });

    clipboard.on('success', () => {
        toast.add({ title: 'Код скопирован!' });
    });

    clipboard.on('error', () => {
        toast.add({ title: 'Не удалось скопировать код.' });
    });
};

watch(() => props.code, highlight, { immediate: true });
onMounted(() => {
    highlight();
    if (props.showCopyButton) {
        initClipboard();
    }
});
onUnmounted(() => {
    if (clipboard) {
        clipboard.destroy();
    }
});
</script>

<template>
    <div class="mac-window">
        <div v-if="showMacHeader" class="mac-window-header">
            <span class="mac-window-dot red"></span>
            <span class="mac-window-dot yellow"></span>
            <span class="mac-window-dot green"></span>
        </div>
        <UTooltip
            v-if="showCopyButton"
            text="copy"
            class="absolute right-0 mt-2 mr-2"
        >
            <UButton
                color="blue"
                icon="i-heroicons-clipboard-document-list"
                variant="soft"
                class="copy-button"
            />
        </UTooltip>
        <pre
            class="rounded-lg p-4 overflow-auto"
            :class="`language-${props.language || 'javascript'}`"
        >
      <code v-html="highlightedCode"></code>
    </pre>
    </div>
</template>

<style scoped>
.mac-window {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
}

.mac-window-header {
    display: flex;
    align-items: center;
    background-color: #e8e8e8;
    padding: 0.5rem;
}

.mac-window-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 0.5rem;
}

.red {
    background-color: #ff5f56;
}

.yellow {
    background-color: #ffbd2e;
}

.green {
    background-color: #27c93f;
}

pre {
    background-color: #212a3b;
    color: #a9b7c6;
    border-radius: 0 0 10px 10px;
    margin: 0;
}
</style>
