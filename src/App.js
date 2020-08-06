import React from "react";
import GlobalStyle from "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./utilis/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navigation, Wrapper } from "./components"; // odnoszę się do index.js w components

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Navigation
          items={[
            { content: "Homepage", to: "./" },
            { content: "Budget", to: "./budget" },
          ]}
          RightElement={
            <div>
              <button>pl</button>
              <button>en</button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">Budget</Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
