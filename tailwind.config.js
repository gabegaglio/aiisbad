/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  safelist: ["bg-gray-800", "bg-gray-900", "text-white", "text-gray-300"],
};
