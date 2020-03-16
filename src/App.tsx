import React from 'react';
import { Provider } from 'react-redux';

import LubyTaskList from './components/LubyTaskList';

import store from './store';
import LubyForm from './components/LubyForm';

const App = () => <Provider store={store}>
    <LubyForm />
    <LubyTaskList /></Provider>;

export default App;
