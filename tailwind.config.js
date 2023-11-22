/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx,svg}"],
  theme: {
    extend: {
      colors: {
        "primary-1/2": "color-mix(in srgb, oklch(var(--p)) 50%, oklch(var(--s)) 50%)",
        "primary-3/4": "color-mix(in srgb, oklch(var(--p)) 25%, oklch(var(--s)) 75%)",
        "primary-3/4": "color-mix(in srgb, oklch(var(--p)) 75%, oklch(var(--s)) 25%)",
        "primary-1/5": "color-mix(in srgb, oklch(var(--p)) 20%, oklch(var(--s)) 80%)",
        "primary-2/5": "color-mix(in srgb, oklch(var(--p)) 40%, oklch(var(--s)) 60%)",
        "primary-3/5": "color-mix(in srgb, oklch(var(--p)) 60%, oklch(var(--s)) 40%)",
        "primary-4/5": "color-mix(in srgb, oklch(var(--p)) 80%, oklch(var(--s)) 20%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
  },
};
