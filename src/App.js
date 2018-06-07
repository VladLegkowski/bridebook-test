import React, { Component } from 'react';
import Logo from './components/Logo';
import ThemeProvider from './fela/components/ThemeProvider';
import { bridebookTheme } from './themes/bridebook-theme';
import ButtonPageContainer from './components/ButtonPageContainer';
import Box from './fela/components/Box';
import Text from './fela/components/Text';
import { logo, header, app, title, intro } from './App.style';

const App = () => {
  const theme = bridebookTheme;
  return (
    <ThemeProvider theme={theme}>
      <Box style={app}>
        <Box style={header}>
          <Box>
            <Box style={{ alignItems: 'center' }}>
              <Text as="h2" style={title}>
                Welcome to <Logo /> Bridebook React Fronte end test
              </Text>
            </Box>
          </Box>
        </Box>
        <Box style={{ maxWidth: '1000px', alignSelf: 'center' }}>
          <Box style={intro}>
            <Text as="p">
              Your task is to create a Button element following a spec found in
              "/designs/Stylebook-buttons.pdf"
            </Text>
            <Text as="p">
              You can use any type of css library you want, but bonus points for
              using css-in-js. BUT don't get stuck in setting up one of the
              css-in-js libraries if it takes you too long.
            </Text>
          </Box>
          <hr />
          <ButtonPageContainer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
