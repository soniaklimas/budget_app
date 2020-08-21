import React, { useEffect } from "react";
import GlobalStyle from "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./utilis/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
// The connect() function connects a React component to a Redux store.
import { connect } from "react-redux";
import { fetchBudget } from "data/actions/budget.actions";

import { Navigation, Wrapper, LoadingIndicator, Button } from "./components"; // odnoszę się do index.js w components

function App({ budget, fetchBudget }) {
  useEffect(() => {
    fetchBudget(1);
  }, [fetchBudget]);

  console.log(budget);

  // i18n - zawiera funkcję ChangeLanguage, którą możemy wykorzystać do zmiany języka
  const { i18n } = useTranslation();
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation
          items={[
            { content: "Homepage", to: "./" },
            { content: "Budget", to: "./budget" },
          ]}
          RightElement={
            <div>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("pl-PL")}
              >
                pl
              </Button>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("en")}
              >
                en
              </Button>
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
    </>
  );
}

// I arg - funkcja, kt pobiera dane ze store i zwraca obiekt, kt zostanie przekazany do propsów komponentu
// II arg - funkcja lub obiekt, z listą akcji, kt będą zdispatchowane
const ConnectedApp = connect(
  (state) => {
    return {
      budget: state.budget.budget,
    };
  },
  {
    fetchBudget,
  }
)(App);

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <ConnectedApp />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
