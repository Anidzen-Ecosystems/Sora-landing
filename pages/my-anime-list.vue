<template>
    <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">
            Спасибо, MyAnimeList!
        </h1>

        <div class="bg-white p-6 rounded-lg shadow-lg">
            <p class="text-lg text-gray-700 mb-4">
                Мы, команда
                <span class="font-semibold text-blue-500">Sora.QL</span>, хотим
                выразить нашу благодарность
                <span class="font-semibold text-blue-500">MyAnimeList</span> за
                предоставление невероятного источника данных и поддержку
                аниме-сообщества по всему миру!
            </p>

            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                Благодарим за доступ к ценным данным
            </h2>
            <p class="text-lg text-gray-700 mb-4">
                Благодаря MyAnimeList, мы смогли интегрировать и предоставить
                вам доступ к актуальной информации о вашем любимом аниме. Ваши
                API и база данных — это то, что помогает развивать наше
                сообщество и обмениваться знаниями.
            </p>

            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                Лучшая соцсеть для аниме-сообщества
            </h2>
            <p class="text-lg text-gray-700 mb-4">
                MyAnimeList остается для нас одной из лучших платформ для
                общения, обмена мнениями и поиска информации о аниме. Вы
                объединяете тысячи людей, создаете незабываемую атмосферу и
                вдохновляете нас на создание новых проектов и идей.
            </p>

            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                Наша благодарность
            </h2>
            <p class="text-lg text-gray-700 mb-4">
                Мы гордимся тем, что можем быть частью такого большого и
                удивительного аниме-сообщества. Спасибо MyAnimeList за
                возможность использовать ваши данные и за ваш вклад в развитие
                всей индустрии.
            </p>

            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                Поддержка MyAnimeList
            </h2>
            <p class="text-lg text-gray-700 mb-6">
                Если вы еще не зарегистрированы на MyAnimeList, обязательно
                посетите их сайт и присоединяйтесь к миллионам пользователей по
                всему миру, наслаждающихся аниме!
            </p>

            <!-- Кнопка перехода на сайт MyAnimeList -->
            <div class="text-center">
                <NuxtLink to="https://myanimelist.net" target="_blank">
                    <button
                        class="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-300"
                    >
                        Перейти на MyAnimeList
                    </button>
                </NuxtLink>
            </div>
        </div>

        <!-- Подпись -->
        <p class="mt-6 text-center text-lg font-semibold text-gray-700">
            С любовью, команда <span class="text-blue-500">Sora.QL ❤️</span>
        </p>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Благодарность | MyAnimeList',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Благодарность MyAnimeList за предоставление данных и вклад в аниме-сообщество',
                },
            ],
        };
    },
};
</script>

<style scoped></style>
