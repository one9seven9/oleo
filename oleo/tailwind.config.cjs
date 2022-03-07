const colors = require('tailwindcss/colors')

const spacing = {}
let space = 0

while (space <= 25) {
  spacing[space] = `${space}rem`
  space++
}

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    fontFamily: {
      sans: ['var(--theme-font-sans)', 'sans-serif'],
      serif: ['var(--theme-font-serif)', 'serif'],
      mono: ['var(--theme-font-mono)', 'monospace'],
    },
    fontSize: {
      xs: 'var(--theme-font-xs)',
      sm: 'var(--theme-font-sm)',
      base: 'var(--theme-font-base)',
      lg: 'var(--theme-font-lg)',
      xl: 'var(--theme-font-xl)',
      '2xl': 'var(--theme-font-2xl)',
      '3xl': 'var(--theme-font-3xl)',
      '4xl': 'var(--theme-font-4xl)',
      '5xl': 'var(--theme-font-5xl)',
      '6xl': 'var(--theme-font-6xl)',
      '7xl': 'var(--theme-font-7xl)',
      '8xl': 'var(--theme-font-8xl)',
    },
    opacity: {
      0: '0',
      10: '10',
      20: '0.2',
      25: '0.25',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      100: '1',
    },
    spacing,
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

module.exports = config
