<script setup lang="ts">
const { t } = useI18n();
const { scrollToSection } = useScrollToSection();

const graphqlCode = `
query anime {
  anime(id: 48468) {
    id
    slug
    malUrl
    name
    synonyms
    images {
      jpg {
        imageUrl
      }
      webp {
        largeImageUrl
      }
    }
    genres
  }
}
`;
</script>

<template>
    <section id="overview" class="section mb-10">
        <UContainer>
            <div class="flex gap-5">
                <div class="w-1/2">
                    <div class="mb-5">
                        <h3 class="text-4xl font-semibold text-primary">
                            {{ t('overview.title') }}
                        </h3>
                        <p class="mt-2">
                            {{ t('overview.description') }}
                        </p>
                        <p class="mt-4">
                            Мы не коммерческий проект. Наша цель — предоставить открытый и бесплатный доступ к данным о любимых аниме для всех пользователей, а также дать разработчикам возможность интегрировать эти данные в свои проекты без коммерческой выгоды. Мы ориентированы на сообщество и стремимся сделать мир аниме более доступным.
                        </p>
                        <div class="mt-4 flex gap-3">
                            <UButton size="xl" icon="i-heroicons-key" @click="scrollToSection('#call-to-action')">
                                {{ t('overview.cta.buttonGetAPI') }}
                            </UButton>
                            <UButton size="xl" variant="soft" target="_blank" to="https://myanimelist.net">
                                {{ t('overview.cta.buttonMAL') }}
                            </UButton>
                        </div>
                    </div>
                </div>

                <div class="w-1/2">
                    <UiPrismCode
                        :code="graphqlCode"
                        language="graphql"
                        show-mac-header
                        show-copy-button
                    />
                </div>
            </div>
        </UContainer>
    </section>
</template>
