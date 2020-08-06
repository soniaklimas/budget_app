import React from "react";
import GlobalStyle from "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./utilis/theme";

import { Navigation } from "./components"; // odnoszę się do index.js w components

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Navigation items={[]} />
      </div>
    </ThemeProvider>
  );
}

export default App;
