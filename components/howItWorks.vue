<script setup lang="ts">
import mermaid from 'mermaid';
const { t } = useI18n();

const features = [
    {
        description: t('how_it_works.details.step_1'),
    },
    {
        description: t('how_it_works.details.step_2'),
    },
    {
        description: t('how_it_works.details.step_3'),
    },
    {
        description: t('how_it_works.details.step_4'),
    },
    {
        description: t('how_it_works.details.step_5'),
    },
    {
        description: t('how_it_works.details.step_6'),
    },
    {
        description: t('how_it_works.details.step_7'),
    },
];

onMounted(() => {
    mermaid.init(undefined, '.mermaid');
});
</script>

<template>
    <section id="how-it-works" class="section">
        <UContainer>
            <ULandingSection
                :title="t('how_it_works.title')"
                :description="t('how_it_works.description')"
                :features="features"
                align="right"
                :ui="{ wrapper: 'py-10 sm:py-10' }"
            >
                <div class="mermaid">
                    graph TD; A[👤
                    {{ t('how_it_works.graphql.user_request') }}] -->|📩
                    {{ t('how_it_works.graphql.cache_check') }}| B[🌐 GraphQL
                    API]; B -->|🛑 {{ t('how_it_works.graphql.cache_check') }}|
                    D[⚡ Redis]; D -->|✅
                    {{ t('how_it_works.graphql.cache_found') }}| B; D -->|❌
                    {{ t('how_it_works.graphql.cache_miss') }}| E[🔍
                    Sora-парсер]; E -->|🛑
                    {{ t('how_it_works.graphql.cache_check') }}| D; D -->|✅
                    {{ t('how_it_works.graphql.cache_found') }}| E; E -->|💾
                    {{ t('how_it_works.graphql.database_check') }}| H[🗄️ MySQL /
                    MongoDB]; H -->|✅
                    {{ t('how_it_works.graphql.database_found') }}| E; H -->|❌
                    {{ t('how_it_works.graphql.database_miss') }}| F[🌍
                    MyAnimeList API]; F -->|📨
                    {{ t('how_it_works.graphql.api_request') }}| G[🛠️
                    {{ t('how_it_works.graphql.data_processing') }}]; G -->|💾
                    {{ t('how_it_works.graphql.save_data') }}| H & D; G -->|🚀
                    {{ t('how_it_works.graphql.send_data') }}| E; E -->|📤
                    {{ t('how_it_works.graphql.send_data') }}| B; B -->|📤
                    {{ t('how_it_works.graphql.user_request') }}| A;
                </div>
            </ULandingSection>
        </UContainer>
    </section>
</template>
