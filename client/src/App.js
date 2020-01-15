import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import AppBar from 'components/AppBar';
import theme from 'assets/theme';
import Routes from 'Routes';
import GlobalWrapper from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalWrapper>
        <BrowserRouter>
          <AppBar />
          <Routes />
        </BrowserRouter>
      </GlobalWrapper>
    </ThemeProvider>
  );
}

export default App;
