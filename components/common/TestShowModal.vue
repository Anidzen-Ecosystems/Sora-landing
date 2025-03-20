<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();

const isOpen = ref(false);
const storageKey = 'hdie_beta_modal';
const email = config.public.appSupportEmail;

onMounted(() => {
    if (!localStorage.getItem(storageKey)) {
        setTimeout(() => {
            isOpen.value = true;
        }, 500);
    }
});

const closeModal = () => {
    isOpen.value = false;
};

const disableModal = () => {
    localStorage.setItem(storageKey, 'true');
    closeModal();
};
</script>

<template>
    <div>
        <UModal v-model="isOpen">
            <UCard>
                <template #header>
                    <h2 class="text-center text-2xl font-semibold">
                        ⚠{{ t('beta.modal.title') }}⚠
                    </h2>
                </template>
                <p>{{ t('beta.modal.description') }}</p>
                <p class="mt-4">
                    {{ t('beta.modal.contact_prompt') }}
                    <UButton
                        variant="link"
                        :padded="false"
                        class="text-base"
                        :to="`mailto:${email}`"
                    >
                        {{ email }}
                    </UButton>
                </p>
                <p class="mt-4">{{ t('beta.modal.thank_you') }}</p>
                <template #footer>
                    <div class="flex flex-col gap-2">
                        <UButton
                            block
                            @click="closeModal"
                            size="md"
                            class="text-base"
                        >
                            {{ t('beta.modal.success') }}
                        </UButton>
                        <UButton
                            block
                            variant="soft"
                            size="md"
                            @click="disableModal"
                            class="text-base"
                        >
                            {{ t('beta.modal.dont_show_again') }}
                        </UButton>
                    </div>
                </template>
            </UCard>
        </UModal>
    </div>
</template>

<style scoped>

</style>