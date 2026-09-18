/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4f1ea',
        surface: '#fffcf7',
        ink: {
          DEFAULT: '#1c1917',
          muted: '#57534e',
          faint: '#8a847a',
        },
        line: '#e4ddd2',
        accent: {
          DEFAULT: '#0f5c54',
          soft: '#e4f0ed',
        },
        sage: {
          DEFAULT: '#3d6b4f',
          soft: '#e6f0e8',
        },
        violet: {
          DEFAULT: '#5b4b8a',
          soft: '#eee8f7',
        },
        amber: {
          DEFAULT: '#8a5a24',
          soft: '#f6ead8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
