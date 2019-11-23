import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import {
  BrowserRouter as Router
  // Router,
} from "react-router-dom";

import theme from "./assets/theme";
// import { GlobalWrapper } from "./styles";
// import AppBar from "components/AppBar";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Router history={history}> */}
      <div>
        <Router>
          {/* <AppBar /> */}
          <Routes />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
