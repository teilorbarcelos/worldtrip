import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '100': '#DADADA',
      '300': '#999999',
      '500': '#47585B',
    },
    yellow: {
      '500': '#FFBA08'
    },
    white: {
      '500': '#F5F8FA'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white.500',
        color: 'gray.500'
      }
    }
  }
})