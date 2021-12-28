import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors'

// const config = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// }
// const styles = {
//   global: props => ({
//     body: {
//       bg: mode('#f0e7db', '#202023')(props)
//     }
//   })
// }
// const components = {
//   Link: {
//     variants: {
//       'link-text': props => ({
//         color: mode('#3d7aed', '#ff63c3')(props),
//         textUnderlineOffset: 3
//       })
//     }
//   },
// }
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
//   spacejelly: '#692ba8',
// }

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
    spacejelly: '#692ba8',
  },
});

const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: grey[900],
    },
    background: {
      default: '#f0e7db',
    },
    primary: {
      main: '#6B48C1',
    },
    secondary: {
      main: '#edf2ff',
    },
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    red: "#C53030",
    green: '#2f855a',
    spacejelly: '#692ba8',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      '"Segoe UI"',
      'BlinkMacSystemFont',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
})

export default theme