<script setup lang="ts">
import mermaid from 'mermaid';
import { onMounted } from 'vue';
const { t } = useI18n();

onMounted(() => {
    mermaid.init(undefined, '.mermaid');
});
</script>

<template>
    <section id="how-it-works" class="section mb-10">
        <UContainer>
            <div class="flex gap-5">
                <div class="w-1/2">
                    <div class="mermaid">
                        graph TD; A[👤
                        {{ t('how_it_works.graphql.user_request') }}] -->|📩
                        {{ t('how_it_works.graphql.cache_check') }}| B[🌐
                        GraphQL API]; B -->|🛑
                        {{ t('how_it_works.graphql.cache_check') }}| D[⚡
                        Redis]; D -->|✅
                        {{ t('how_it_works.graphql.cache_found') }}| B; D -->|❌
                        {{ t('how_it_works.graphql.cache_miss') }}| E[🔍
                        Sora-парсер]; E -->|🛑
                        {{ t('how_it_works.graphql.cache_check') }}| D; D -->|✅
                        {{ t('how_it_works.graphql.cache_found') }}| E; E -->|💾
                        {{ t('how_it_works.graphql.database_check') }}| H[🗄️
                        MySQL / MongoDB]; H -->|✅
                        {{ t('how_it_works.graphql.database_found') }}| E; H
                        -->|❌ {{ t('how_it_works.graphql.database_miss') }}|
                        F[🌍 MyAnimeList API]; F -->|📨
                        {{ t('how_it_works.graphql.api_request') }}| G[🛠️
                        {{ t('how_it_works.graphql.data_processing') }}]; G
                        -->|💾 {{ t('how_it_works.graphql.save_data') }}| H & D;
                        G -->|🚀 {{ t('how_it_works.graphql.send_data') }}| E; E
                        -->|📤 {{ t('how_it_works.graphql.send_data') }}| B; B
                        -->|📤 {{ t('how_it_works.graphql.user_request') }}| A;
                    </div>
                </div>
                <div class="w-1/2">
                    <div>
                        <h3
                            class="text-right text-4xl font-semibold text-primary"
                        >
                            {{ t('how_it_works.title') }}
                        </h3>
                        <p class="text-right text-lg">
                            {{ t('how_it_works.subtitle') }}
                        </p>
                        <ul class="list-decimal ml-6 mt-5">
                            <li>{{ t('how_it_works.details.step_1') }}</li>
                            <li>{{ t('how_it_works.details.step_2') }}</li>
                            <li>{{ t('how_it_works.details.step_3') }}</li>
                            <li>{{ t('how_it_works.details.step_4') }}</li>
                            <li>{{ t('how_it_works.details.step_5') }}</li>
                            <li>{{ t('how_it_works.details.step_6') }}</li>
                            <li>{{ t('how_it_works.details.step_7') }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
