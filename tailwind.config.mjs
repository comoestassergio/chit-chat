/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        ultra: "Ultra, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      borderRadius: {
        custom: "20px",
        "custom-sm": "10px",
      },
    },
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
  },
  plugins: [],
};
