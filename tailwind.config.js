/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "desktop-home": "url('https://ik.imagekit.io/bqofr3ncj/ProductsImage_2023-12-09_20_46/man-doing-pushups_lqab05.jpg?updatedAt=1702251635267')",
        "mobile-home": "url('https://ik.imagekit.io/bqofr3ncj/ProductsImage_2023-12-09_20_46/men-snatching-barbell_cckmls.jpg?updatedAt=1702251633895')"
      },
    },
  },
  plugins: [],
};
