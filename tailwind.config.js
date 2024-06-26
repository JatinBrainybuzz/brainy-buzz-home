/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        colors: {
            'allports': {
                '50': '#f2f9fd',
                '100': '#e3f1fb',
                '200': '#c1e4f6',
                '300': '#8aceef',
                '400': '#4cb6e4',
                '500': '#259dd2',
                '600': '#1679ab',
                '700': '#146590',
                '800': '#145578',
                '900': '#164764',
                '950': '#0f2e42',
            },
            'shamrock': {
              '50': '#edfcf4',
              '100': '#d3f8e2',
              '200': '#abefcb',
              '300': '#75e0af',
              '400': '#37c889',
              '500': '#1aaf74',
              '600': '#0d8e5d',
              '700': '#0b714d',
              '800': '#0b5a3e',
              '900': '#0a4a35',
              '950': '#042a1e',
          },
          'chestnut': {
            '50': '#fcf5f4',
            '100': '#fae8e6',
            '200': '#f6d5d2',
            '300': '#efb7b2',
            '400': '#e48d85',
            '500': '#d6675d',
            '600': '#c4544a',
            '700': '#a23c33',
            '800': '#86352e',
            '900': '#70322c',
            '950': '#3c1613',
        },
          },
      },
    },
    plugins: [],
  }