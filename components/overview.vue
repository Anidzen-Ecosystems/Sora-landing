<script setup lang="ts">
const { t } = useI18n();
const { scrollToSection } = useScrollToSection();

import
 { GET_ANIME_QUERY } from '~/graphql/getAnimeQueryOne';

const graphqlCode = GET_ANIME_QUERY;
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
                            {{ t ('overview.no-commerce')}}
                        </p>
                        <div class="mt-4 flex gap-3">
                            <UButton
                                size="xl"
                                icon="i-heroicons-key"
                                @click="scrollToSection('#call-to-action')"
                            >
                                {{ t('overview.cta.buttonGetAPI') }}
                            </UButton>
                            <UButton
                                size="xl"
                                variant="soft"
                                target="_blank"
                                to="https://myanimelist.net"
                            >
                                {{ t('overview.cta.buttonMAL') }}
                            </UButton>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <UiCodeBlock
                        :code="graphqlCode"
                        language="graphql"
                        background-color="#212a3b"
                        show-mac-header
                        show-copy-button
                    />
                </div>
            </div>
        </UContainer>
    </section>
</template>
