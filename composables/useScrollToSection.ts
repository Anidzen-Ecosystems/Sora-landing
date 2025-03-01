export const useScrollToSection = () => {
    const activeSection = ref<string | null>(null);

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        } else if (id === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(`Intersecting section: ${entry.target.id}`);
                activeSection.value = `#${entry.target.id}`;
            }
        });
    };

    const setupObserver = () => {
        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            threshold: 0.5,
        });

        const sections = document.querySelectorAll('[id].section');
        sections.forEach((section) => observer.observe(section));
    };

    onMounted(() => {
        setupObserver();
    });

    onUnmounted(() => {
        const observer = new IntersectionObserver(observerCallback);
        observer.disconnect();
    });

    return { scrollToSection, activeSection };
};
