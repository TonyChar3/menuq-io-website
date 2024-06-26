/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "desktop-home": "url('https://ik.imagekit.io/bqofr3ncj/ProductsImage_2023-12-09_20_46/man-doing-pushups_lqab05.jpg?updatedAt=1702251635267')",
        "mobile-home": "url('https://ik.imagekit.io/bqofr3ncj/ProductsImage_2023-12-09_20_46/men-snatching-barbell_cckmls.jpg?updatedAt=1702251633895')"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}