import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './Home';
import Props from './Props';
import Style from './Style'

const AppNavigator = createStackNavigator({
  HomeScreen: { 
    screen: Home,
  },
  PropsScreen: { 
    screen: Props,
  },
  StyleScreen: { 
    screen: Style,
  },
});

const App = createAppContainer(AppNavigator);

export default App;
