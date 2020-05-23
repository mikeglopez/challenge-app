import React from 'react';
import { StatusBar } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { useTheme } from './constants/hooks';
import usersReducer from './store/reducers/users';
import MainNavigator from './navigation/MainNavigator';

const rootReducer = combineReducers({
  users: usersReducer
});

const store = createStore(rootReducer);

export default function App() {
  const { colors, theme } = useTheme();

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
