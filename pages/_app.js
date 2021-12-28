import React from 'react';
import { store } from '../redux/store'
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../lib/theme';
import { Box } from '@mui/material';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box sx={{ color: 'text.primary'}}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp