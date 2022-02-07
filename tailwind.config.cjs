const spacing = {}

let i = 0

while (i <= 100) {
  spacing[i] = i === 0 ? 0 : `${i}rem`
  i++
}

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
      serif: ['Roboto Slab', 'Georgia', 'serif'],
      mono: ['Roboto Mono', 'monospace']
    },
    fontSize: {
      // base size 4px
      nano: ['2.5rem', 'normal'], // 10px
      xs: ['3rem', 'normal'], // 12px
      sm: ['3.5rem', 'normal'], // 14px
      base: ['4rem', 'normal'], // 16px
      lg: ['4.5rem', 'normal'], // 18px
      xl: ['5rem', 'normal'], // 20px
      '2xl': ['6rem', 'normal'], // 24px
      '3xl': ['7rem', 'normal'], // 28px
      '4xl': ['8rem', 'normal'], // 32px
      '5xl': ['9rem', 'normal'], // 36px
      '6xl': ['10rem', 'normal'] // 40px
    },
    spacing,
    extend: {}
  },

  plugins: []
}

module.exports = config
