/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-slate-900",
    "bg-slate-800",
    "bg-pink-500",
    "bg-pink-300",
    "bg-purple-900",
    "bg-purple-800",
    "bg-purple-400",
    "bg-rose-900",
    "bg-rose-800",
    "bg-rose-400",
    "bg-emerald-900",
    "bg-emerald-800",
    "bg-emerald-400",
    "text-white",
  ],
  theme: {
    extend: {
      colors: {
        "slate-900": "#0f172a",
        "slate-800": "#1e293b",
        "pink-500": "#ec4899",
        "pink-300": "#f9a8d4",
        "purple-600": "#9333ea",
        "purple-400": "#a78bfa",
        "rose-900": "#881337",
        "rose-800": "#9f1239",
        "rose-400": "#fb7185",
        "emerald-900": "#064e3b",
        "emerald-800": "#065f46",
        "emerald-400": "#34d399",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
