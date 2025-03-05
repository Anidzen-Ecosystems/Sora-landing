<script setup lang="ts">
import Prism from 'prismjs';
import Clipboard from 'clipboard';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-graphql.js';

const { t } = useI18n();
const toast = useToast();

const props = defineProps<{
    code: string;
    language?: string;
    showMacHeader?: boolean;
    showCopyButton?: boolean;
    backgroundColor?: string;
}>();

const isCopied = ref(false);
const highlightedCode = ref('');
let clipboard: Clipboard | null = null;

const highlight = () => {
    if (props.code) {
        const trimmedCode = props.code.trimEnd();

        highlightedCode.value = Prism.highlight(
            trimmedCode,
            Prism.languages[props.language || 'javascript'],
            props.language || 'javascript',
        );
    }
};

const copyCode = () => {
    if (!clipboard) {
        clipboard = new Clipboard('.copy-button', {
            text: () => props.code,
        });

        clipboard.on('success', () => {
            isCopied.value = true;
            toast.add({ title: t('common.copied') });

            setTimeout(() => {
                isCopied.value = false;
            }, 5000);
        });

        clipboard.on('error', () => {
            toast.add({ title: t('common.copy_failed') });
        });
    }
};

onMounted(() => {
    highlight();
});

onUnmounted(() => {
    clipboard?.destroy();
    clipboard = null;
});
</script>

<template>
    <div class="mac-window rounded-lg">
        <div v-if="showMacHeader" class="mac-window-header">
            <span class="mac-window-dot red"></span>
            <span class="mac-window-dot yellow"></span>
            <span class="mac-window-dot green"></span>
        </div>
        <UTooltip v-if="showCopyButton" :text="isCopied ? t('common.copied') : t('common.copy')" class="absolute right-0 mt-2 mr-2">
            <UButton
                color="blue"
                icon="i-heroicons-clipboard-document-list"
                variant="soft"
                class="copy-button"
                :disabled="isCopied"
                @click="copyCode"
                :aria-label="isCopied ? t('common.copied') : t('common.copy')"
            />
        </UTooltip>
        <pre class="py-4" :class="`language-${props.language}`"  :style="{ backgroundColor: props.backgroundColor || '#212a3b' }">
             <code v-text="props.code" v-if="!highlightedCode"></code>
             <code v-html="highlightedCode" v-else></code>
        </pre>
    </div>
</template>

<style scoped>
.mac-window {
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
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

.red { background-color: #ff5f56; }
.yellow { background-color: #ffbd2e; }
.green { background-color: #27c93f; }

pre {
    color: #a9b7c6;
    border-radius: 0 0 10px 10px;
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
}
</style>
