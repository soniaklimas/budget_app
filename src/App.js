import React from "react";
import GlobalStyle from "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./utilis/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Navigation, Wrapper } from "./components"; // odnoszę się do index.js w components

function App() {
  const { t, i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Navigation
          items={[
            { content: t("Homepage"), to: "./" },
            { content: t("Budget"), to: "./budget" },
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

function RootApp() {
  return (
    <React.Suspense fallback="Loading..">
      <App />
    </React.Suspense>
  );
}

export default RootApp;
