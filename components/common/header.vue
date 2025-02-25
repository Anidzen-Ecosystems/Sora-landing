<script setup lang="ts">
const localeRoute = useLocaleRoute();
const { t, locale } = useI18n();

let menuItems = [
  { label: t('menu.main'), to: '/' },
  { label: t('menu.contact_us'), to: '#contact_us' },
];

watch(
    () => locale.value,
    () => {
      menuItems = [
        { label: t('menu.main'), to: '/' },
        { label: t('menu.contact_us'), to: '#contact_us' },
      ];
    },
);
</script>

<template>
  <div class="fixed w-full z-50 mt-5">
    <UContainer>
      <header class="transition-all duration-300 backdrop-blur py-4 px-5 border-primary border-2 rounded-2xl overflow-hidden border-opacity-10 hover:border-opacity-50">
        <div class="flex justify-between items-center">
          <div>
            <ULink :to="localeRoute('/')">
              <div class="flex gap-2 items-center">
                <UiLogo/>
                <div>
                  <h1 class="text-2xl font-bold uppercase">
                    {{ t('site_name') }}.<span
                      class="text-primary"
                  >QL</span
                  >
                  </h1>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {{ t('footer.rights_reserved')}} {{new Date().getFullYear()}}
                  </p>
                </div>
              </div>
            </ULink>
          </div>
          <nav class="flex gap-4 items-center">
            <ULink
                v-for="item in menuItems"
                :key="item.label"
                :to="localeRoute(item.to)"
                class="transition-colors"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                active-class="text-primary"
            >
              {{ item.label }}
            </ULink>
              <ULink
                  to="https://github.com/Anidzen-Ecosystems"
                  target="_blank"
                  class="flex"
              >
                <UIcon
                    class="w-6 h-6"
                    name="octicon:mark-github"
                ></UIcon>
              </ULink>
          </nav>
        </div>
      </header>
    </UContainer>
  </div>
</template>