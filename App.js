import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { useTheme } from './constants/hooks';
import usersReducer from './store/reducers/users';
import MainNavigator from './navigation/MainNavigator';

const rootReducer = combineReducers({
  users: usersReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'homemade-apple': require('./assets/fonts/HomemadeApple-Regular.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
