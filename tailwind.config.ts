import type { Config } from 'tailwindcss'
import files from './files'

export default {
  content: [...files],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
