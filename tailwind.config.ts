// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                bigStone: {
                    50: '#fcf7f0',
                    100: '#f7eddd',
                    200: '#eed7ba',
                    300: '#e6c39b',
                    400: '#d69961',
                    500: '#ce7e41',
                    600: '#c06836',
                    700: '#9f532f',
                    800: '#80432c',
                    900: '#683826',
                    950: '#381c12',
                },
            },
        },
    },
};
