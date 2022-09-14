import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import createMockServer from './mockServer';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App';

createMockServer('development');
const theme = createTheme({});

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme} >
      <CssBaseline />
    <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
