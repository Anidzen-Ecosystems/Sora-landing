export default defineNuxtPlugin((nuxtApp) => {
    const selectedPrimary = useCookie('selectedPrimary').value || 'blue';
    const selectedGray = useCookie('selectedGray').value || 'neutral';

    nuxtApp.provide('selectedPrimary', selectedPrimary);
    nuxtApp.provide('selectedGray', selectedGray);

    useAppConfig().ui.primary = selectedPrimary;
    useAppConfig().ui.gray = selectedGray;
});
