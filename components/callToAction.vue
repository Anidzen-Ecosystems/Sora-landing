<script setup lang="ts">
</script>

<template>
    <section class="bg-primary text-white py-16 mt-5">
        <UContainer>
            <div class="text-center mb-5">
                <h2 class="text-4xl font-semibold mb-2">
                    Получите доступ к мощному Sora.QL GraphQL API для аниме
                </h2>
                <p class="text-lg">
                    Получите актуальную информацию о вашем любимом аниме с помощью гибкого и мощного GraphQL API от Sora.QL. Получите доступ к данным, которые используются для построения уникальных аниме-приложений.
                </p>
                <p class="text-lg">
                    Используйте Sora.QL API для интеграции информации о аниме в ваш сайт, приложение или проект. Создавайте интерактивные сервисы, анализируйте популярность аниме и создавайте собственные решения на основе данных с MyAnimeList.net.
                </p>
                <p class="text-lg">
                    Наша API платформа идеально подходит для разработчиков, которым нужно быстро и эффективно получать данные о аниме, манге, персонажах и многом другом для любых проектов в сфере аниме-индустрии.
                </p>
            </div>
            <div class="flex justify-center gap-6">
                <UButton to="/" size="xl" variant="soft">
                    Получить API-ключ
                </UButton>
            </div>
            <p class="text-lg text-center mt-2 text-sm">
                Информация предоставляется <UButton to="https://MyAnimeList.net" :padded="false" variant="link" class="text-white" mode="_blank">MyAnimeList.net</UButton>
                — крупнейшей платформой для аниме и манги в мире.
            </p>
        </UContainer>
    </section>
</template>
