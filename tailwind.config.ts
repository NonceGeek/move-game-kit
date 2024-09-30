import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'content': '1280px',
      },
      colors: {
        'black-1': '#1E1E2D',
        'navig1': '#CFCFCF',
        'second-gray': '#727272',
        'black-2': '#262626',
        'third-gray': '#858585',
        'gray-4': '#C4C4C4',
        'gray-5': '#CECECE',
        'blue-1': '#0075FF',
        'grdb': '#FF2DF7',
        'grdm': '#5200FF',
        'grde': '#00F0FF',
      },
    },
  },
  plugins: [],
  content: [],
}

export default <Partial<Config>>config
