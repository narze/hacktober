module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "HKBF-white": "#E5E1E6",
      "HKBF-dark": "#170F13",
      "HKBF-yellow": "#FFE27D",
      "HKBF-surf": "#64E3FF",
      "HKBF-purple": "#9092FF",
      "HKBF-green": "#B4FF39",
    },
    fontFamily: {
      english: ["JetBrains Mono"],
      thai: ["Sarabun"],
      thaiTitle: ["Niramit"],
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#FFE27D",
          secondary: "#64E3FF",
          neutral: "#170F13",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
};
