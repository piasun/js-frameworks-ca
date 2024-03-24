import React from 'react';
import { GlobalStyles } from './components/styles/global.styles';
import { ThemeProvider } from 'styled-components';
import {theme} from './components/styles/theme.styles';
import MyRoutes from './components/Routes';


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <MyRoutes/>
      </ThemeProvider>

    </div>
  );
}

export default App;
