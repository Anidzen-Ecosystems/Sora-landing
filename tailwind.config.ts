// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    theme: {
        extend: {
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(var(--float-distance, 0px))' },
                    '50%': { transform: 'translateY(calc(var(--float-distance, 0px) * -1))' },
                },
            },
            animation: {
                float: 'float var(--float-duration, 2s) ease-in-out infinite',
            },
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
