import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './Home';
import Props from './Props';

const AppNavigator = createStackNavigator({
  HomeScreen: { 
    screen: Home,
  },
  PropsScreen: { 
    screen: Props,
  },
});

const App = createAppContainer(AppNavigator);

export default App;
