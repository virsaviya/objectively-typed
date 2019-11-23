import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";

import theme from "./assets/theme";
import AppBar from "components/AppBar";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ marginTop: "64px" }}>
        <BrowserRouter>
          <AppBar />
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
