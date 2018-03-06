import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

const theme = createMuiTheme({
  palette: {
      primary: {
        light: "#80e27e",
        main: "#4caf50",
        dark: "#087f23",
        contrastText: '#fff',
      },
      secondary: {
        light: "#ffff8b",
        main: "#ffee58",
        dark: "#c9bc1f",
        contrastText: '#000',
      },
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return WithRoot;
}

export default withRoot;
