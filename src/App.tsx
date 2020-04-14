import React from 'react';
import { Provider } from 'react-redux';

import {ThemeProvider, DefaultTheme} from 'styled-components'
import GlobalStyles from './styles/global'
import Primary from './styles/themes/primary'
import Secondary from './styles/themes/secondary'

import UsersList from './components/UsersList';
import Header from './components/Header'

import store from './store';
import usePersistedState from './utils/usePersistedState';

const App = () => {

const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', Primary);

const toggleTheme = () => {
    setTheme(theme.title === 'Primary' ? Secondary : Primary);
}
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles></GlobalStyles>
                <Header toggleTheme={toggleTheme}></Header>
                <UsersList/>
            </ThemeProvider>
        </Provider>
    );
}
export default App;
