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
            "secondary-color": "var(--secondary-color)",
            "primary-color": "var(--primary-color)",
          },
      },
    },
    plugins: [],
  }