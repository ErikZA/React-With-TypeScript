import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";

import GlobalStyles from "./styles/global";
import Primary from "./styles/themes/primary";
import Secondary from "./styles/themes/secondary";

import UsersList from "./components/usersList";
import NavBar from "./components/navBar";
import HomePage from "./components/home";

import store from "./store";
import usePersistedState from "./utils/usePersistedState";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", Primary);

  const toggleTheme = () => {
    setTheme(theme.title === "Primary" ? Secondary : Primary);
  };
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
       
          <GlobalStyles />
          
          <Switch>
            <Route exact path="/" element={HomePage} />
          </Switch>
          
          <NavBar toggleTheme={toggleTheme} />>
          
          <UsersList />
        
        </ThemeProvider>
      </Provider>
    </Router>
  );
};
export default App;
